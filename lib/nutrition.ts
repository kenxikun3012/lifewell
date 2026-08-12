import type { USDAFoodDetail } from "@/lib/usda";

/**
 * Macro/nutrient profile values (per 100g of food).
 */
export interface MacroProfile {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  sodiumMg: number;
  potassiumMg: number;
  calciumMg: number;
  ironMg: number;
  magnesiumMg: number;
  zincMg: number;
}

/**
 * USDA FDC nutrient ID -> MacroProfile key.
 * Reference: https://fdc.nal.usda.gov — Nutrient Lists
 */
export const FDC_TO_NUTRIENT: Record<number, keyof MacroProfile> = {
  1008: "calories", // Energy (kcal)
  1003: "proteinG", // Protein
  1005: "carbsG", // Carbohydrate, by difference
  1004: "fatG", // Total lipid (fat)
  1093: "sodiumMg", // Sodium
  3067: "potassiumMg", // Potassium, K (FNDDS uses 3067)
  1087: "calciumMg", // Calcium
  1089: "ironMg", // Iron
  1090: "magnesiumMg", // Magnesium
  1095: "zincMg", // Zinc
};

/** Maps MacroProfile keys back to DB Nutrient.code values. */
export const PROFILE_TO_DB_CODE: Record<keyof MacroProfile, string> = {
  calories: "calories",
  proteinG: "protein_g",
  carbsG: "carbs_g",
  fatG: "fat_g",
  sodiumMg: "sodium_mg",
  potassiumMg: "potassium_mg",
  calciumMg: "calcium_mg",
  ironMg: "iron_mg",
  magnesiumMg: "magnesium_mg",
  zincMg: "zinc_mg",
};

function emptyProfile(): MacroProfile {
  return {
    calories: 0,
    proteinG: 0,
    carbsG: 0,
    fatG: 0,
    sodiumMg: 0,
    potassiumMg: 0,
    calciumMg: 0,
    ironMg: 0,
    magnesiumMg: 0,
    zincMg: 0,
  };
}

function round(value: number, digits = 2): number {
  const pow = Math.pow(10, digits);
  return Math.round(value * pow) / pow;
}

/**
 * Calculate the nutrients in `grams` of food from a USDA FoodDetail.
 * USDA FDC amounts are per 100g; values are scaled by grams/100 and rounded.
 */
export function computeMacroProfile(
  food: USDAFoodDetail,
  grams: number
): { per100g: MacroProfile; consumed: MacroProfile } {
  const per100g = emptyProfile();

  for (const nutrient of food.nutrients) {
    const key = FDC_TO_NUTRIENT[nutrient.nutrientId];
    if (!key) continue;
    per100g[key] = nutrient.value || 0;
  }

  const factor = grams / 100;
  const consumed = emptyProfile();
  (Object.keys(per100g) as (keyof MacroProfile)[]).forEach((key) => {
    consumed[key] = round(per100g[key] * factor);
  });

  return { per100g, consumed };
}