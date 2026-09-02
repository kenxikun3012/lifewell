"use server";

import { requireOnboardedUser } from "@/lib/onboarding";
import { prisma } from "@/lib/prisma";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Default daily water goal. Not user-configurable yet — the target-setting
 * flow (UserTarget) only covers the 4 macro Nutrients; water isn't a
 * Nutrient row in this schema, so it stays a simple constant for now.
 */
const WATER_GOAL_ML = 2000;

function todayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function dayBounds(dateStr: string): { start: Date; end: Date } {
  if (!DATE_RE.test(dateStr)) {
    throw new Error("Invalid date.");
  }
  return {
    start: new Date(`${dateStr}T00:00:00`),
    end: new Date(`${dateStr}T23:59:59.999`),
  };
}

export interface WaterLogSummary {
  totalMl: number;
  goalMl: number;
}

export async function getWaterLogsForDate(dateStr?: string): Promise<WaterLogSummary> {
  const dbUser = await requireOnboardedUser();
  const { start, end } = dayBounds(dateStr ?? todayDateString());

  const result = await prisma.waterLog.aggregate({
    where: { userId: dbUser.id, loggedAt: { gte: start, lte: end } },
    _sum: { amountMl: true },
  });

  return { totalMl: result._sum.amountMl ?? 0, goalMl: WATER_GOAL_ML };
}

export async function logWater(amountMl: number, dateStr?: string): Promise<WaterLogSummary> {
  if (!Number.isFinite(amountMl) || amountMl <= 0 || amountMl > 5000) {
    throw new Error("Amount must be between 0 and 5000 ml.");
  }
  const date = dateStr ?? todayDateString();
  if (!DATE_RE.test(date)) {
    throw new Error("Invalid date.");
  }

  const dbUser = await requireOnboardedUser();

  const now = new Date();
  const timeStr = now.toTimeString().slice(0, 8);
  const loggedAt = new Date(`${date}T${timeStr}`);

  await prisma.waterLog.create({
    data: {
      userId: dbUser.id,
      amountMl: Math.round(amountMl),
      loggedAt: Number.isNaN(loggedAt.getTime()) ? now : loggedAt,
    },
  });

  return getWaterLogsForDate(date);
}
