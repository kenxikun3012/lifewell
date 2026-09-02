import "server-only";
import { prisma } from "@/lib/prisma";

const GRID_DAYS = 35;

export interface StreakData {
  currentStreakDays: number;
  /** Oldest -> newest, ending today. "filled" = at least one meal logged. */
  grid: ("filled" | "empty")[];
}

function toDateString(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/**
 * Streak = consecutive days ending today with at least one MealEntry logged.
 * Simplified to 2 states (logged / not logged) — the old mock UI had a
 * third "pale" state with no defined meaning.
 */
export async function getStreakData(userId: string): Promise<StreakData> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const rangeStart = new Date(today);
  rangeStart.setDate(rangeStart.getDate() - (GRID_DAYS - 1));

  const entries = await prisma.mealEntry.findMany({
    where: { userId, eatenAt: { gte: rangeStart } },
    select: { eatenAt: true },
  });

  const loggedDates = new Set(entries.map((e) => toDateString(e.eatenAt)));

  let currentStreakDays = 0;
  const cursor = new Date(today);
  while (loggedDates.has(toDateString(cursor))) {
    currentStreakDays++;
    cursor.setDate(cursor.getDate() - 1);
  }

  const grid: StreakData["grid"] = [];
  for (let i = GRID_DAYS - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    grid.push(loggedDates.has(toDateString(d)) ? "filled" : "empty");
  }

  return { currentStreakDays, grid };
}
