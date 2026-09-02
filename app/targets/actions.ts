"use server";

import { revalidatePath } from "next/cache";
import { requireOnboardedUser } from "@/lib/onboarding";
import { prisma } from "@/lib/prisma";

const TARGET_NUTRIENT_CODES = ["calories", "protein_g", "carbs_g", "fat_g"] as const;
type TargetNutrientCode = (typeof TARGET_NUTRIENT_CODES)[number];

export interface UserTargets {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

const CODE_TO_KEY: Record<TargetNutrientCode, keyof UserTargets> = {
  calories: "calories",
  protein_g: "proteinG",
  carbs_g: "carbsG",
  fat_g: "fatG",
};

/**
 * The signed-in user's calorie/macro targets, falling back to the global
 * Nutrient.dailyReference for any not yet explicitly set.
 */
export async function getUserTargets(): Promise<UserTargets> {
  const dbUser = await requireOnboardedUser();

  const nutrients = await prisma.nutrient.findMany({
    where: { code: { in: [...TARGET_NUTRIENT_CODES] } },
    select: {
      id: true,
      code: true,
      dailyReference: true,
      userTargets: { where: { userId: dbUser.id }, select: { targetAmount: true } },
    },
  });

  const targets: UserTargets = { calories: 2000, proteinG: 50, carbsG: 275, fatG: 78 };

  for (const nutrient of nutrients) {
    const key = CODE_TO_KEY[nutrient.code as TargetNutrientCode];
    if (!key) continue;
    const custom = nutrient.userTargets[0]?.targetAmount;
    const value = custom ?? nutrient.dailyReference;
    if (value != null) {
      targets[key] = Number(value);
    }
  }

  return targets;
}

export interface TargetsActionState {
  error?: string;
  success?: string;
}

export async function updateTargets(
  _prevState: TargetsActionState,
  formData: FormData
): Promise<TargetsActionState> {
  const dbUser = await requireOnboardedUser();

  const parsed: Record<TargetNutrientCode, number> = {
    calories: 0,
    protein_g: 0,
    carbs_g: 0,
    fat_g: 0,
  };

  for (const code of TARGET_NUTRIENT_CODES) {
    const raw = String(formData.get(code) ?? "").trim();
    const value = Number(raw);
    if (!raw || !Number.isFinite(value) || value <= 0 || value > 20000) {
      return { error: "All targets must be positive numbers." };
    }
    parsed[code] = value;
  }

  const nutrients = await prisma.nutrient.findMany({
    where: { code: { in: [...TARGET_NUTRIENT_CODES] } },
    select: { id: true, code: true },
  });

  await prisma.$transaction(
    nutrients.map((n) =>
      prisma.userTarget.upsert({
        where: { userId_nutrientId: { userId: dbUser.id, nutrientId: n.id } },
        update: { targetAmount: parsed[n.code as TargetNutrientCode] },
        create: {
          userId: dbUser.id,
          nutrientId: n.id,
          targetAmount: parsed[n.code as TargetNutrientCode],
        },
      })
    )
  );

  revalidatePath("/account");
  revalidatePath("/dashboard");
  revalidatePath("/meal-tracker");
  return { success: "Targets updated." };
}
