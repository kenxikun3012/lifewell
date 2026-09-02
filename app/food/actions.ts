"use server";

import { requireOnboardedUser } from "@/lib/onboarding";
import { prisma } from "@/lib/prisma";

export interface FoodSearchResult {
  id: string;
  name: string;
  burmeseName: string;
  imageUrl: string;
  caloriesPer100g: number;
  proteinGPer100g: number;
  carbsGPer100g: number;
  fatGPer100g: number;
}

export interface LoggedFood {
  id: string;
  foodName: string;
  foodBrand: string | null;
  servingDescription: string | null;
  servingGrams: number;
  quantity: number;
  mealType: string;
  eatenAt: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

export interface DailyLogSummary {
  entries: LoggedFood[];
  totalCalories: number;
  totalProteinG: number;
  totalCarbsG: number;
  totalFatG: number;
}

export interface WeeklyDaySummary {
  date: string; // YYYY-MM-DD
  totalCalories: number;
}

export interface WeeklySummary {
  days: WeeklyDaySummary[];
  totalCalories: number;
  dailyAvgCalories: number;
}

const MEAL_TYPES = ["BREAKFAST", "LUNCH", "DINNER", "SNACK"] as const;
type MealType = (typeof MEAL_TYPES)[number];

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function todayDateString(): string {
  return toDateString(new Date());
}

function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function dayBounds(dateStr: string): { start: Date; end: Date } {
  if (!DATE_RE.test(dateStr)) {
    throw new Error("Invalid date.");
  }
  const start = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(start.getTime())) {
    throw new Error("Invalid date.");
  }
  const end = new Date(`${dateStr}T23:59:59.999`);
  return { start, end };
}

/** Combines a target date with the current wall-clock time of day. */
function eatenAtFor(dateStr: string): Date {
  const now = new Date();
  const timeStr = now.toTimeString().slice(0, 8); // HH:MM:SS
  const combined = new Date(`${dateStr}T${timeStr}`);
  return Number.isNaN(combined.getTime()) ? now : combined;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Searches the local admin-managed food catalog by English or Burmese name. */
export async function searchFoods(query: string): Promise<FoodSearchResult[]> {
  const q = query.trim();
  if (!q) return [];

  const foods = await prisma.food.findMany({
    where: {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { burmeseName: { contains: q, mode: "insensitive" } },
      ],
    },
    orderBy: { name: "asc" },
    take: 8,
    select: {
      id: true,
      name: true,
      burmeseName: true,
      imageUrl: true,
      calories: true,
      protein: true,
      carbohydrates: true,
      fat: true,
    },
  });

  return foods.map((f) => ({
    id: f.id,
    name: f.name,
    burmeseName: f.burmeseName,
    imageUrl: f.imageUrl,
    caloriesPer100g: Number(f.calories),
    proteinGPer100g: Number(f.protein),
    carbsGPer100g: Number(f.carbohydrates),
    fatGPer100g: Number(f.fat),
  }));
}

export async function logFood(
  foodId: string,
  grams: number,
  mealType: MealType,
  dateStr?: string
): Promise<LoggedFood> {
  if (!foodId) {
    throw new Error("Invalid food selected.");
  }
  if (!Number.isFinite(grams) || grams <= 0 || grams > 5000) {
    throw new Error("Serving size must be between 0 and 5000 grams.");
  }
  if (!MEAL_TYPES.includes(mealType)) {
    throw new Error("Invalid meal type.");
  }
  const date = dateStr ?? todayDateString();
  if (!DATE_RE.test(date)) {
    throw new Error("Invalid date.");
  }

  const dbUser = await requireOnboardedUser();

  const food = await prisma.food.findUnique({ where: { id: foodId } });
  if (!food) {
    throw new Error("Food not found.");
  }

  const factor = grams / 100;
  const consumed = {
    calories: round2(Number(food.calories) * factor),
    proteinG: round2(Number(food.protein) * factor),
    carbsG: round2(Number(food.carbohydrates) * factor),
    fatG: round2(Number(food.fat) * factor),
  };

  const nutrientCodes = {
    calories: "calories",
    proteinG: "protein_g",
    carbsG: "carbs_g",
    fatG: "fat_g",
  } as const;

  const entry = await prisma.$transaction(async (tx) => {
    const nutrients = await tx.nutrient.findMany({
      where: { code: { in: Object.values(nutrientCodes) } },
      select: { id: true, code: true },
    });
    const idByCode = new Map(nutrients.map((n) => [n.code, n.id]));

    return tx.mealEntry.create({
      data: {
        userId: dbUser.id,
        foodId: food.id,
        foodName: food.name,
        source: "local",
        servingDescription: `${grams}g`,
        servingGrams: grams,
        quantity: 1,
        mealType,
        eatenAt: eatenAtFor(date),
        nutrients: {
          create: (Object.keys(consumed) as (keyof typeof consumed)[])
            .filter((key) => consumed[key] > 0)
            .map((key) => ({
              nutrientId: idByCode.get(nutrientCodes[key]),
              amountConsumed: consumed[key],
            }))
            .filter((n) => Boolean(n.nutrientId)) as {
            nutrientId: string;
            amountConsumed: number;
          }[],
        },
      },
      include: { nutrients: true },
    });
  });

  return {
    id: entry.id,
    foodName: entry.foodName,
    foodBrand: entry.foodBrand,
    servingDescription: entry.servingDescription,
    servingGrams: Number(entry.servingGrams),
    quantity: Number(entry.quantity),
    mealType: entry.mealType,
    eatenAt: entry.eatenAt.toISOString(),
    calories: consumed.calories,
    proteinG: consumed.proteinG,
    carbsG: consumed.carbsG,
    fatG: consumed.fatG,
  };
}

/** All logged meals + totals for a single date (defaults to today). */
export async function getLogsForDate(dateStr?: string): Promise<DailyLogSummary> {
  const dbUser = await requireOnboardedUser();
  const { start, end } = dayBounds(dateStr ?? todayDateString());

  const entries = await prisma.mealEntry.findMany({
    where: { userId: dbUser.id, eatenAt: { gte: start, lte: end } },
    include: {
      nutrients: { include: { nutrient: true } },
    },
    orderBy: { eatenAt: "desc" },
  });

  const logged = entries.map((entry) => {
    const byCode = new Map(
      entry.nutrients.map((n) => [n.nutrient.code, Number(n.amountConsumed)])
    );
    return {
      id: entry.id,
      foodName: entry.foodName,
      foodBrand: entry.foodBrand,
      servingDescription: entry.servingDescription,
      servingGrams: Number(entry.servingGrams),
      quantity: Number(entry.quantity),
      mealType: entry.mealType,
      eatenAt: entry.eatenAt.toISOString(),
      calories: byCode.get("calories") ?? 0,
      proteinG: byCode.get("protein_g") ?? 0,
      carbsG: byCode.get("carbs_g") ?? 0,
      fatG: byCode.get("fat_g") ?? 0,
    } as LoggedFood;
  });

  return {
    entries: logged,
    totalCalories: round2(logged.reduce((s, e) => s + e.calories, 0)),
    totalProteinG: round2(logged.reduce((s, e) => s + e.proteinG, 0)),
    totalCarbsG: round2(logged.reduce((s, e) => s + e.carbsG, 0)),
    totalFatG: round2(logged.reduce((s, e) => s + e.fatG, 0)),
  };
}

/** Back-compat wrapper — always today's logs. */
export async function getTodayLogs(): Promise<DailyLogSummary> {
  return getLogsForDate(todayDateString());
}

/** Per-day calorie totals for the 7 days starting `weekStartStr` (Monday). */
export async function getWeeklySummary(weekStartStr: string): Promise<WeeklySummary> {
  const dbUser = await requireOnboardedUser();
  if (!DATE_RE.test(weekStartStr)) {
    throw new Error("Invalid date.");
  }

  const weekStart = new Date(`${weekStartStr}T00:00:00`);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);

  const entries = await prisma.mealEntry.findMany({
    where: { userId: dbUser.id, eatenAt: { gte: weekStart, lt: weekEnd } },
    include: { nutrients: { include: { nutrient: true } } },
  });

  const totalsByDate = new Map<string, number>();
  for (const entry of entries) {
    const dateKey = toDateString(entry.eatenAt);
    const calories = entry.nutrients.find((n) => n.nutrient.code === "calories");
    const amount = calories ? Number(calories.amountConsumed) : 0;
    totalsByDate.set(dateKey, (totalsByDate.get(dateKey) ?? 0) + amount);
  }

  const days: WeeklyDaySummary[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    const dateKey = toDateString(d);
    days.push({ date: dateKey, totalCalories: round2(totalsByDate.get(dateKey) ?? 0) });
  }

  const totalCalories = round2(days.reduce((s, d) => s + d.totalCalories, 0));

  return {
    days,
    totalCalories,
    dailyAvgCalories: round2(totalCalories / 7),
  };
}
