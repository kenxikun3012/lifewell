"use server";

import { createClient } from "@/lib/supabase/server";
import {
  getUSDAFoodDetail,
  searchUSDAFoods,
  type USDAFoodSearchResult,
} from "@/lib/usda";
import { computeMacroProfile, PROFILE_TO_DB_CODE } from "@/lib/nutrition";
import { prisma } from "@/lib/prisma";
import { getOrCreateUserByEmail } from "@/lib/user";

export type FoodSearchResult = USDAFoodSearchResult;

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

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    throw new Error("You must be signed in to log food.");
  }

  const name =
    (user.user_metadata?.full_name as string) ||
    user.email.split("@")[0] ||
    "User";

  return getOrCreateUserByEmail(user.email, name);
}

export async function searchFoods(query: string): Promise<FoodSearchResult[]> {
  const q = query.trim();
  if (!q) return [];
  return searchUSDAFoods(q, 8);
}

export async function logFood(
  fdcId: number,
  grams: number,
  mealType: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK"
): Promise<LoggedFood> {
  const dbUser = await requireUser();

  const food = await getUSDAFoodDetail(fdcId);
  const { consumed } = computeMacroProfile(food, grams);

  const nutrientCreate = (
    Object.keys(consumed) as (keyof typeof consumed)[]
  )
    .filter((key) => consumed[key] > 0)
    .map((key) => ({
      nutrientCode: PROFILE_TO_DB_CODE[key],
      amount: consumed[key],
    }));

  const nutrientMap = new Map(
    nutrientCreate.map((n) => [n.nutrientCode, n.amount])
  );

  const entry = await prisma.$transaction(async (tx) => {
    const nutrientIds = await tx.nutrient.findMany({
      where: { code: { in: Array.from(nutrientMap.keys()) } },
      select: { id: true, code: true },
    });
    const idByCode = new Map(nutrientIds.map((n) => [n.code, n.id]));

    return tx.mealEntry.create({
      data: {
        userId: dbUser.id,
        foodName: food.brand
          ? `${food.description} (${food.brand})`
          : food.description,
        foodBrand: food.brand,
        source: "usda",
        servingDescription: food.servingUnit
          ? `${food.servingSize ?? 100} ${food.servingUnit}`
          : `${grams}g`,
        servingGrams: grams,
        quantity: 1,
        mealType,
        eatenAt: new Date(),
        nutrients: {
          create: nutrientCreate
            .map((n) => ({
              nutrientId: idByCode.get(n.nutrientCode),
              amountConsumed: n.amount,
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

export async function getTodayLogs(): Promise<DailyLogSummary> {
  const dbUser = await requireUser();

  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

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

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}