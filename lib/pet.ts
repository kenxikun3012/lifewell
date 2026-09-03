import "server-only";
import { prisma } from "@/lib/prisma";
import { calculateBMI, classifyBMI } from "@/lib/bmi";
import { getUserTargets } from "@/app/targets/actions";
import { WATER_GOAL_ML } from "@/lib/constants";
import { mondayOfWeek, addWeeks } from "@/lib/dates";
import type { Profile } from "@/generated/prisma/client";

export interface PetLevels {
  /** 1 (slim) – 5 (heavy). */
  bodySize: number;
  /** 1 (soft) – 5 (muscular). */
  muscleLevel: number;
  /** 1 (lean) – 5 (puffy). */
  puffinessLevel: number;
  /** 1 (dim) – 3 (glowing). */
  glowLevel: number;
}

const BODY_SIZE_RANGE = [1, 5] as const;
const MUSCLE_RANGE = [1, 5] as const;
const PUFFINESS_RANGE = [1, 5] as const;
const GLOW_RANGE = [1, 3] as const;

/** How many of the most recent completed weeks to catch up on for a dormant account — older gaps are silently skipped rather than applied. */
const MAX_WEEKS_TO_CATCH_UP = 8;

const NUTRIENT_CODES = ["calories", "protein_g", "fat_g"] as const;

function clamp(value: number, [min, max]: readonly [number, number]): number {
  return Math.min(max, Math.max(min, value));
}

/** Steps toward the low end of the range when the standard is met (calories/fat — lower is "on track"). */
function stepDown(current: number, metStandard: boolean, range: readonly [number, number]): number {
  return clamp(current + (metStandard ? -1 : 1), range);
}

/** Steps toward the high end of the range when the standard is met (protein/water — higher is "on track"). */
function stepUp(current: number, metStandard: boolean, range: readonly [number, number]): number {
  return clamp(current + (metStandard ? 1 : -1), range);
}

function seedBodySizeFromBMI(weightKg: number | null, heightCm: number | null): number {
  if (!weightKg || !heightCm) return 3;
  switch (classifyBMI(calculateBMI(weightKg, heightCm))) {
    case "underweight":
      return 2;
    case "normal":
      return 3;
    case "overweight":
      return 4;
    case "obese":
      return 5;
  }
}

function weekBounds(weekStartStr: string): { start: Date; end: Date } {
  return {
    start: new Date(`${weekStartStr}T00:00:00`),
    end: new Date(`${addWeeks(weekStartStr, 1)}T00:00:00`),
  };
}

interface WeekTotals {
  calories: number;
  proteinG: number;
  fatG: number;
  waterMl: number;
}

async function getWeekTotals(userId: string, weekStartStr: string): Promise<WeekTotals> {
  const { start, end } = weekBounds(weekStartStr);

  const [nutrientRows, waterAgg] = await Promise.all([
    prisma.mealEntryNutrient.findMany({
      where: {
        nutrient: { code: { in: [...NUTRIENT_CODES] } },
        mealEntry: { userId, eatenAt: { gte: start, lt: end } },
      },
      select: { amountConsumed: true, nutrient: { select: { code: true } } },
    }),
    prisma.waterLog.aggregate({
      where: { userId, loggedAt: { gte: start, lt: end } },
      _sum: { amountMl: true },
    }),
  ]);

  const totals = { calories: 0, proteinG: 0, fatG: 0 };
  for (const row of nutrientRows) {
    const amount = Number(row.amountConsumed);
    if (row.nutrient.code === "calories") totals.calories += amount;
    else if (row.nutrient.code === "protein_g") totals.proteinG += amount;
    else if (row.nutrient.code === "fat_g") totals.fatG += amount;
  }

  return { ...totals, waterMl: waterAgg._sum.amountMl ?? 0 };
}

/**
 * Loads (creating on first visit) the signed-in user's pet, then applies any
 * completed-but-not-yet-applied calendar weeks: each such week nudges every
 * trait by 1 step, up or down, based on that week's real logged intake vs.
 * that week's targets. See prisma/schema.prisma's PetState model for the
 * trait ranges and lib/pet.ts's plan-doc rule: staying at/under the
 * calorie/fat target trends the pet slimmer/leaner; hitting at/above the
 * protein/water target trends it more muscular/glowing.
 */
export async function getOrUpdatePetState(
  profile: Pick<Profile, "id" | "weightKg" | "heightCm">
): Promise<PetLevels> {
  const currentWeekStart = mondayOfWeek(new Date());

  // upsert (not findUnique + create) so two concurrent first-visit requests
  // for the same user — e.g. a prefetch racing the real navigation — can't
  // both try to create the row and hit a unique-constraint error.
  const state = await prisma.petState.upsert({
    where: { id: profile.id },
    update: {},
    create: {
      id: profile.id,
      bodySize: seedBodySizeFromBMI(
        profile.weightKg != null ? Number(profile.weightKg) : null,
        profile.heightCm != null ? Number(profile.heightCm) : null
      ),
      // No history yet to judge — nothing to evaluate before a full week passes.
      lastEvaluatedWeekStart: currentWeekStart,
    },
  });

  let { bodySize, muscleLevel, puffinessLevel, glowLevel, lastEvaluatedWeekStart } = state;

  const earliestCatchUp = addWeeks(currentWeekStart, -MAX_WEEKS_TO_CATCH_UP);
  let cursor =
    lastEvaluatedWeekStart < earliestCatchUp ? earliestCatchUp : addWeeks(lastEvaluatedWeekStart, 1);

  if (cursor < currentWeekStart) {
    const targets = await getUserTargets();
    const weeklyCalorieTarget = targets.calories * 7;
    const weeklyProteinTarget = targets.proteinG * 7;
    const weeklyFatTarget = targets.fatG * 7;
    const weeklyWaterTarget = WATER_GOAL_ML * 7;

    while (cursor < currentWeekStart) {
      const week = await getWeekTotals(profile.id, cursor);

      bodySize = stepDown(bodySize, week.calories <= weeklyCalorieTarget, BODY_SIZE_RANGE);
      puffinessLevel = stepDown(puffinessLevel, week.fatG <= weeklyFatTarget, PUFFINESS_RANGE);
      muscleLevel = stepUp(muscleLevel, week.proteinG >= weeklyProteinTarget, MUSCLE_RANGE);
      glowLevel = stepUp(glowLevel, week.waterMl >= weeklyWaterTarget, GLOW_RANGE);

      lastEvaluatedWeekStart = cursor;
      cursor = addWeeks(cursor, 1);
    }
  }

  if (
    lastEvaluatedWeekStart !== state.lastEvaluatedWeekStart ||
    bodySize !== state.bodySize ||
    muscleLevel !== state.muscleLevel ||
    puffinessLevel !== state.puffinessLevel ||
    glowLevel !== state.glowLevel
  ) {
    await prisma.petState.update({
      where: { id: profile.id },
      data: { bodySize, muscleLevel, puffinessLevel, glowLevel, lastEvaluatedWeekStart },
    });
  }

  return { bodySize, muscleLevel, puffinessLevel, glowLevel };
}
