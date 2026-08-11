import "dotenv/config";
import { PrismaClient, FoodCategory } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const prisma = new PrismaClient({ adapter });

type SeedFood = {
  name: string;
  category: FoodCategory;
  servingSize: number;
  servingUnit: string;
  nutrients: { code: string; amount: number }[];
};

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Seed Nutrients with reference standards (RDA/DRI/WHO)
  const nutrients = [
    {
      code: "calories",
      name: "Calories",
      unit: "KCAL" as const,
      dailyReference: 2000,
      referenceSource: "FDA General Guidance",
      referenceUrl: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      isEnergy: true,
      sortOrder: 1,
    },
    {
      code: "protein_g",
      name: "Protein",
      unit: "G" as const,
      dailyReference: 50,
      referenceSource: "FDA Daily Value",
      referenceUrl: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      isEnergy: false,
      sortOrder: 2,
    },
    {
      code: "carbs_g",
      name: "Carbohydrates",
      unit: "G" as const,
      dailyReference: 275,
      referenceSource: "FDA Daily Value",
      referenceUrl: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      isEnergy: false,
      sortOrder: 3,
    },
    {
      code: "fat_g",
      name: "Total Fat",
      unit: "G" as const,
      dailyReference: 78,
      referenceSource: "FDA Daily Value",
      referenceUrl: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      isEnergy: false,
      sortOrder: 4,
    },
    {
      code: "sodium_mg",
      name: "Sodium",
      unit: "MG" as const,
      dailyReference: 2300,
      referenceSource: "FDA Daily Value",
      referenceUrl: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      isEnergy: false,
      sortOrder: 5,
    },
    {
      code: "potassium_mg",
      name: "Potassium",
      unit: "MG" as const,
      dailyReference: 4700,
      referenceSource: "FDA Daily Value",
      referenceUrl: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      isEnergy: false,
      sortOrder: 6,
    },
    {
      code: "calcium_mg",
      name: "Calcium",
      unit: "MG" as const,
      dailyReference: 1300,
      referenceSource: "NIH Dietary Reference Intake",
      referenceUrl: "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/",
      isEnergy: false,
      sortOrder: 7,
    },
    {
      code: "iron_mg",
      name: "Iron",
      unit: "MG" as const,
      dailyReference: 18,
      referenceSource: "NIH Dietary Reference Intake",
      referenceUrl: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/",
      isEnergy: false,
      sortOrder: 8,
    },
    {
      code: "magnesium_mg",
      name: "Magnesium",
      unit: "MG" as const,
      dailyReference: 420,
      referenceSource: "NIH Dietary Reference Intake",
      referenceUrl: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/",
      isEnergy: false,
      sortOrder: 9,
    },
    {
      code: "zinc_mg",
      name: "Zinc",
      unit: "MG" as const,
      dailyReference: 11,
      referenceSource: "NIH Dietary Reference Intake",
      referenceUrl: "https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/",
      isEnergy: false,
      sortOrder: 10,
    },
  ];

  const nutrientRecords: Record<string, string> = {};
  for (const nutrient of nutrients) {
    const record = await prisma.nutrient.upsert({
      where: { code: nutrient.code },
      update: nutrient,
      create: nutrient,
    });
    nutrientRecords[nutrient.code] = record.id;
    console.log(`  ✓ Nutrient: ${nutrient.name}`);
  }

  // 2. Seed Foods + FoodNutrients (per-serving values with USDA references)
  const foods: SeedFood[] = [
    // Rice & Grains
    {
      name: "White Rice (cooked)",
      category: "RICE_AND_GRAINS",
      servingSize: 158,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 206 },
        { code: "protein_g", amount: 4.3 },
        { code: "carbs_g", amount: 44.5 },
        { code: "fat_g", amount: 0.4 },
        { code: "sodium_mg", amount: 2 },
        { code: "potassium_mg", amount: 55 },
        { code: "calcium_mg", amount: 12 },
        { code: "iron_mg", amount: 1.9 },
        { code: "magnesium_mg", amount: 19 },
        { code: "zinc_mg", amount: 0.9 },
      ],
    },
    {
      name: "Brown Rice (cooked)",
      category: "RICE_AND_GRAINS",
      servingSize: 195,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 218 },
        { code: "protein_g", amount: 4.5 },
        { code: "carbs_g", amount: 45.8 },
        { code: "fat_g", amount: 1.6 },
        { code: "sodium_mg", amount: 7 },
        { code: "potassium_mg", amount: 154 },
        { code: "calcium_mg", amount: 20 },
        { code: "iron_mg", amount: 1.0 },
        { code: "magnesium_mg", amount: 84 },
        { code: "zinc_mg", amount: 1.2 },
      ],
    },
    {
      name: "Quinoa (cooked)",
      category: "RICE_AND_GRAINS",
      servingSize: 185,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 222 },
        { code: "protein_g", amount: 8.1 },
        { code: "carbs_g", amount: 39.4 },
        { code: "fat_g", amount: 3.6 },
        { code: "sodium_mg", amount: 13 },
        { code: "potassium_mg", amount: 318 },
        { code: "calcium_mg", amount: 32 },
        { code: "iron_mg", amount: 2.8 },
        { code: "magnesium_mg", amount: 118 },
        { code: "zinc_mg", amount: 2.0 },
      ],
    },
    {
      name: "Oats (cooked)",
      category: "RICE_AND_GRAINS",
      servingSize: 234,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 166 },
        { code: "protein_g", amount: 5.9 },
        { code: "carbs_g", amount: 28.1 },
        { code: "fat_g", amount: 3.6 },
        { code: "sodium_mg", amount: 115 },
        { code: "potassium_mg", amount: 164 },
        { code: "calcium_mg", amount: 21 },
        { code: "iron_mg", amount: 2.1 },
        { code: "magnesium_mg", amount: 63 },
        { code: "zinc_mg", amount: 1.4 },
      ],
    },
    {
      name: "Pasta (cooked)",
      category: "RICE_AND_GRAINS",
      servingSize: 140,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 221 },
        { code: "protein_g", amount: 8.1 },
        { code: "carbs_g", amount: 43.2 },
        { code: "fat_g", amount: 1.3 },
        { code: "sodium_mg", amount: 316 },
        { code: "potassium_mg", amount: 61 },
        { code: "calcium_mg", amount: 10 },
        { code: "iron_mg", amount: 2.5 },
        { code: "magnesium_mg", amount: 26 },
        { code: "zinc_mg", amount: 0.7 },
      ],
    },
    {
      name: "Bread (1 slice, whole wheat)",
      category: "RICE_AND_GRAINS",
      servingSize: 32,
      servingUnit: "slice",
      nutrients: [
        { code: "calories", amount: 81 },
        { code: "protein_g", amount: 4.0 },
        { code: "carbs_g", amount: 13.8 },
        { code: "fat_g", amount: 1.1 },
        { code: "sodium_mg", amount: 146 },
        { code: "potassium_mg", amount: 69 },
        { code: "calcium_mg", amount: 40 },
        { code: "iron_mg", amount: 1.0 },
        { code: "magnesium_mg", amount: 23 },
        { code: "zinc_mg", amount: 0.6 },
      ],
    },
    // Protein
    {
      name: "Chicken Breast (grilled)",
      category: "PROTEIN",
      servingSize: 100,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 165 },
        { code: "protein_g", amount: 31.0 },
        { code: "carbs_g", amount: 0 },
        { code: "fat_g", amount: 3.6 },
        { code: "sodium_mg", amount: 74 },
        { code: "potassium_mg", amount: 256 },
        { code: "calcium_mg", amount: 15 },
        { code: "iron_mg", amount: 1.0 },
        { code: "magnesium_mg", amount: 29 },
        { code: "zinc_mg", amount: 1.0 },
      ],
    },
    {
      name: "Salmon (cooked)",
      category: "PROTEIN",
      servingSize: 100,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 208 },
        { code: "protein_g", amount: 20.0 },
        { code: "carbs_g", amount: 0 },
        { code: "fat_g", amount: 13.0 },
        { code: "sodium_mg", amount: 59 },
        { code: "potassium_mg", amount: 363 },
        { code: "calcium_mg", amount: 11 },
        { code: "iron_mg", amount: 0.5 },
        { code: "magnesium_mg", amount: 27 },
        { code: "zinc_mg", amount: 0.4 },
      ],
    },
    {
      name: "Egg (1 large, boiled)",
      category: "PROTEIN",
      servingSize: 50,
      servingUnit: "egg",
      nutrients: [
        { code: "calories", amount: 78 },
        { code: "protein_g", amount: 6.3 },
        { code: "carbs_g", amount: 0.6 },
        { code: "fat_g", amount: 5.3 },
        { code: "sodium_mg", amount: 62 },
        { code: "potassium_mg", amount: 63 },
        { code: "calcium_mg", amount: 25 },
        { code: "iron_mg", amount: 0.6 },
        { code: "magnesium_mg", amount: 6 },
        { code: "zinc_mg", amount: 0.5 },
      ],
    },
    {
      name: "Tofu (firm)",
      category: "PROTEIN",
      servingSize: 100,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 76 },
        { code: "protein_g", amount: 8.1 },
        { code: "carbs_g", amount: 1.9 },
        { code: "fat_g", amount: 4.8 },
        { code: "sodium_mg", amount: 7 },
        { code: "potassium_mg", amount: 121 },
        { code: "calcium_mg", amount: 201 },
        { code: "iron_mg", amount: 1.6 },
        { code: "magnesium_mg", amount: 37 },
        { code: "zinc_mg", amount: 1.0 },
      ],
    },
    {
      name: "Greek Yogurt (plain, nonfat)",
      category: "PROTEIN",
      servingSize: 170,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 100 },
        { code: "protein_g", amount: 17.0 },
        { code: "carbs_g", amount: 6.0 },
        { code: "fat_g", amount: 0.7 },
        { code: "sodium_mg", amount: 70 },
        { code: "potassium_mg", amount: 220 },
        { code: "calcium_mg", amount: 190 },
        { code: "iron_mg", amount: 0.1 },
        { code: "magnesium_mg", amount: 19 },
        { code: "zinc_mg", amount: 0.7 },
      ],
    },
    {
      name: "Beef (ground, 90% lean, cooked)",
      category: "PROTEIN",
      servingSize: 100,
      servingUnit: "g",
      nutrients: [
        { code: "calories", amount: 250 },
        { code: "protein_g", amount: 26.0 },
        { code: "carbs_g", amount: 0 },
        { code: "fat_g", amount: 15.0 },
        { code: "sodium_mg", amount: 72 },
        { code: "potassium_mg", amount: 290 },
        { code: "calcium_mg", amount: 10 },
        { code: "iron_mg", amount: 2.7 },
        { code: "magnesium_mg", amount: 22 },
        { code: "zinc_mg", amount: 5.3 },
      ],
    },
    // Fruits
    {
      name: "Apple (medium)",
      category: "FRUIT",
      servingSize: 182,
      servingUnit: "fruit",
      nutrients: [
        { code: "calories", amount: 95 },
        { code: "protein_g", amount: 0.5 },
        { code: "carbs_g", amount: 25.1 },
        { code: "fat_g", amount: 0.3 },
        { code: "sodium_mg", amount: 2 },
        { code: "potassium_mg", amount: 195 },
        { code: "calcium_mg", amount: 11 },
        { code: "iron_mg", amount: 0.2 },
        { code: "magnesium_mg", amount: 9 },
        { code: "zinc_mg", amount: 0.1 },
      ],
    },
    {
      name: "Banana (medium)",
      category: "FRUIT",
      servingSize: 118,
      servingUnit: "fruit",
      nutrients: [
        { code: "calories", amount: 105 },
        { code: "protein_g", amount: 1.3 },
        { code: "carbs_g", amount: 27.0 },
        { code: "fat_g", amount: 0.4 },
        { code: "sodium_mg", amount: 1 },
        { code: "potassium_mg", amount: 422 },
        { code: "calcium_mg", amount: 6 },
        { code: "iron_mg", amount: 0.3 },
        { code: "magnesium_mg", amount: 32 },
        { code: "zinc_mg", amount: 0.2 },
      ],
    },
    {
      name: "Orange (medium)",
      category: "FRUIT",
      servingSize: 131,
      servingUnit: "fruit",
      nutrients: [
        { code: "calories", amount: 62 },
        { code: "protein_g", amount: 1.2 },
        { code: "carbs_g", amount: 15.4 },
        { code: "fat_g", amount: 0.2 },
        { code: "sodium_mg", amount: 0 },
        { code: "potassium_mg", amount: 237 },
        { code: "calcium_mg", amount: 52 },
        { code: "iron_mg", amount: 0.1 },
        { code: "magnesium_mg", amount: 13 },
        { code: "zinc_mg", amount: 0.1 },
      ],
    },
    // Dairy
    {
      name: "Milk (1 cup, whole)",
      category: "DAIRY",
      servingSize: 244,
      servingUnit: "cup",
      nutrients: [
        { code: "calories", amount: 149 },
        { code: "protein_g", amount: 7.7 },
        { code: "carbs_g", amount: 11.7 },
        { code: "fat_g", amount: 8.0 },
        { code: "sodium_mg", amount: 105 },
        { code: "potassium_mg", amount: 322 },
        { code: "calcium_mg", amount: 276 },
        { code: "iron_mg", amount: 0.1 },
        { code: "magnesium_mg", amount: 24 },
        { code: "zinc_mg", amount: 1.0 },
      ],
    },
    {
      name: "Cheese (1 slice, cheddar)",
      category: "DAIRY",
      servingSize: 28,
      servingUnit: "slice",
      nutrients: [
        { code: "calories", amount: 113 },
        { code: "protein_g", amount: 6.4 },
        { code: "carbs_g", amount: 0.9 },
        { code: "fat_g", amount: 9.3 },
        { code: "sodium_mg", amount: 176 },
        { code: "potassium_mg", amount: 22 },
        { code: "calcium_mg", amount: 202 },
        { code: "iron_mg", amount: 0.1 },
        { code: "magnesium_mg", amount: 8 },
        { code: "zinc_mg", amount: 0.9 },
      ],
    },
    // Nuts & Seeds
    {
      name: "Almonds (1 oz)",
      category: "NUTS_AND_SEEDS",
      servingSize: 28,
      servingUnit: "oz",
      nutrients: [
        { code: "calories", amount: 164 },
        { code: "protein_g", amount: 6.0 },
        { code: "carbs_g", amount: 6.1 },
        { code: "fat_g", amount: 14.2 },
        { code: "sodium_mg", amount: 0 },
        { code: "potassium_mg", amount: 208 },
        { code: "calcium_mg", amount: 76 },
        { code: "iron_mg", amount: 1.0 },
        { code: "magnesium_mg", amount: 76 },
        { code: "zinc_mg", amount: 0.9 },
      ],
    },
  ];

  for (const food of foods) {
    const { nutrients, ...foodData } = food;

    const existing = await prisma.food.findFirst({
      where: { name: foodData.name },
    });

    let foodId: string;
    if (existing) {
      foodId = existing.id;
      await prisma.food.update({ where: { id: foodId }, data: foodData });
    } else {
      const created = await prisma.food.create({ data: foodData });
      foodId = created.id;
    }

    // Upsert each FoodNutrient row
    for (const nutrient of nutrients) {
      const nutrientId = nutrientRecords[nutrient.code];
      await prisma.foodNutrient.upsert({
        where: {
          foodId_nutrientId: {
            foodId,
            nutrientId,
          },
        },
        update: {
          amountPerServing: nutrient.amount,
          source: "USDA FoodData Central",
          sourceUrl: "https://fdc.nal.usda.gov/",
          sourceIdentifier: `USDA-FDC-${foodData.name.replace(/\s+/g, "-")}`,
        },
        create: {
          foodId,
          nutrientId,
          amountPerServing: nutrient.amount,
          source: "USDA FoodData Central",
          sourceUrl: "https://fdc.nal.usda.gov/",
          sourceIdentifier: `USDA-FDC-${foodData.name.replace(/\s+/g, "-")}`,
        },
      });
    }

    console.log(`  ✓ Food: ${foodData.name}`);
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());