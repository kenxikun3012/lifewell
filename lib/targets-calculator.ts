/**
 * Personalized calorie/macro target calculation from onboarding profile data.
 *
 * BMR via the Mifflin-St Jeor equation (the current standard, per the
 * Academy of Nutrition and Dietetics — supersedes the older Harris-Benedict
 * equation). TDEE = BMR * activity multiplier. Calories are then adjusted
 * for the user's goal, and macros are split by goal-appropriate ratios.
 * These are standard fitness-industry heuristics, not medical advice.
 */

export type Sex = "male" | "female";
export type ActivityLevel = "SEDENTARY" | "LIGHTLY_ACTIVE" | "ACTIVE" | "VERY_ACTIVE";
export type Goal = "WEIGHT_LOSS" | "WEIGHT_GAIN" | "MUSCLE_GROWTH" | "FIT_BODY";

export interface CalculatedTargets {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

export interface TargetsInput {
  sex: Sex;
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: ActivityLevel;
  goal: Goal;
}

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  SEDENTARY: 1.2,
  LIGHTLY_ACTIVE: 1.375,
  ACTIVE: 1.55,
  VERY_ACTIVE: 1.725,
};

/** kcal/day adjustment from maintenance (TDEE), by goal. */
const GOAL_CALORIE_ADJUSTMENT: Record<Goal, number> = {
  WEIGHT_LOSS: -500, // ~1 lb/week deficit
  WEIGHT_GAIN: 500, // ~1 lb/week surplus
  MUSCLE_GROWTH: 300, // lean-bulk surplus
  FIT_BODY: 0, // maintenance, recomposition-focused
};

/** Macro split as a fraction of total calories, by goal. */
const GOAL_MACRO_SPLIT: Record<Goal, { protein: number; carbs: number; fat: number }> = {
  WEIGHT_LOSS: { protein: 0.35, carbs: 0.4, fat: 0.25 }, // higher protein preserves muscle in a deficit
  WEIGHT_GAIN: { protein: 0.25, carbs: 0.5, fat: 0.25 }, // carb-forward, calorie-dense surplus
  MUSCLE_GROWTH: { protein: 0.3, carbs: 0.45, fat: 0.25 }, // protein-forward for muscle synthesis
  FIT_BODY: { protein: 0.3, carbs: 0.4, fat: 0.3 }, // balanced maintenance
};

/** Never recommend below this, regardless of inputs — a safety floor. */
const MIN_CALORIES = 1200;

export function calculateTargets(input: TargetsInput): CalculatedTargets {
  const bmr =
    input.sex === "male"
      ? 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age + 5
      : 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age - 161;

  const tdee = bmr * ACTIVITY_MULTIPLIERS[input.activityLevel];
  const calories = Math.max(
    MIN_CALORIES,
    Math.round(tdee + GOAL_CALORIE_ADJUSTMENT[input.goal])
  );

  const split = GOAL_MACRO_SPLIT[input.goal];
  return {
    calories,
    proteinG: Math.round((calories * split.protein) / 4),
    carbsG: Math.round((calories * split.carbs) / 4),
    fatG: Math.round((calories * split.fat) / 9),
  };
}
