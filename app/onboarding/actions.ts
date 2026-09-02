"use server";

import { redirect } from "next/navigation";
import { requireUser } from "@/lib/session";
import { auth } from "@/lib/auth/server";
import { prisma } from "@/lib/prisma";
import { calculateTargets, type ActivityLevel, type Goal, type Sex } from "@/lib/targets-calculator";

export interface OnboardingState {
  error?: string;
}

const ACTIVITY_LEVELS: ActivityLevel[] = ["SEDENTARY", "LIGHTLY_ACTIVE", "ACTIVE", "VERY_ACTIVE"];
const GOALS: Goal[] = ["WEIGHT_LOSS", "WEIGHT_GAIN", "MUSCLE_GROWTH", "FIT_BODY"];
const TARGET_NUTRIENT_CODES = ["calories", "protein_g", "carbs_g", "fat_g"] as const;

export async function completeOnboarding(
  _prevState: OnboardingState,
  formData: FormData
): Promise<OnboardingState> {
  const dbUser = await requireUser();

  const name = String(formData.get("name") ?? "").trim();
  const age = Number(formData.get("age"));
  const sex = String(formData.get("sex") ?? "") as Sex;
  const weightKg = Number(formData.get("weightKg"));
  const heightCm = Number(formData.get("heightCm"));
  const activityLevel = String(formData.get("activityLevel") ?? "") as ActivityLevel;
  const goal = String(formData.get("goal") ?? "") as Goal;

  if (!name) return { error: "Please enter your full name." };
  if (!Number.isFinite(age) || age < 13 || age > 120) {
    return { error: "Please enter a valid age (13–120)." };
  }
  if (sex !== "male" && sex !== "female") {
    return { error: "Please select your sex." };
  }
  if (!Number.isFinite(weightKg) || weightKg < 20 || weightKg > 400) {
    return { error: "Please enter a valid weight (20–400 kg)." };
  }
  if (!Number.isFinite(heightCm) || heightCm < 100 || heightCm > 250) {
    return { error: "Please enter a valid height (100–250 cm)." };
  }
  if (!ACTIVITY_LEVELS.includes(activityLevel)) {
    return { error: "Please select your activity level." };
  }
  if (!GOALS.includes(goal)) {
    return { error: "Please select a goal." };
  }

  const { error: nameError } = await auth.updateUser({ name });
  if (nameError) {
    return { error: nameError.message || "Failed to update your name." };
  }

  const targets = calculateTargets({ sex, age, weightKg, heightCm, activityLevel, goal });

  const nutrients = await prisma.nutrient.findMany({
    where: { code: { in: [...TARGET_NUTRIENT_CODES] } },
    select: { id: true, code: true },
  });
  const idByCode = new Map(nutrients.map((n) => [n.code, n.id]));
  const amountByCode: Record<(typeof TARGET_NUTRIENT_CODES)[number], number> = {
    calories: targets.calories,
    protein_g: targets.proteinG,
    carbs_g: targets.carbsG,
    fat_g: targets.fatG,
  };

  await prisma.$transaction([
    prisma.profile.update({
      where: { id: dbUser.id },
      data: {
        age,
        gender: sex,
        weightKg,
        heightCm,
        activityLevel,
        goal,
        onboardingCompletedAt: new Date(),
      },
    }),
    ...TARGET_NUTRIENT_CODES.map((code) => {
      const nutrientId = idByCode.get(code);
      if (!nutrientId) return null;
      return prisma.userTarget.upsert({
        where: { userId_nutrientId: { userId: dbUser.id, nutrientId } },
        update: { targetAmount: amountByCode[code] },
        create: { userId: dbUser.id, nutrientId, targetAmount: amountByCode[code] },
      });
    }).filter((op): op is NonNullable<typeof op> => op !== null),
  ]);

  redirect("/");
}
