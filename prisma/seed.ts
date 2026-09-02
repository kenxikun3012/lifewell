import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { calculateTargets } from "../lib/targets-calculator";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

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

  for (const nutrient of nutrients) {
    await prisma.nutrient.upsert({
      where: { code: nutrient.code },
      update: nutrient,
      create: nutrient,
    });
    console.log(`  ✓ Nutrient: ${nutrient.name}`);
  }

  // 2. Seed initial food categories
  const categories = [
    "Myanmar Foods",
    "Rice & Grains",
    "Meat",
    "Fish & Seafood",
    "Vegetables",
    "Fruits",
    "Drinks",
    "Snacks",
  ];

  const categoryIds: Record<string, string> = {};
  for (const name of categories) {
    const category = await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    categoryIds[name] = category.id;
    console.log(`  ✓ Category: ${name}`);
  }

  // 3. Seed a handful of admin-catalog Foods (per 100g), so pages that read
  // the real Food/Category catalog (e.g. the home page) have something to
  // show. Images point at bundled /public assets — real ImageKit-hosted
  // images take over once the admin adds real foods.
  const placeholderImages = ["/images/food.svg", "/images/healthy-food.svg", "/images/food.webp"];
  const foods = [
    { name: "White Rice", burmeseName: "ထမင်းဖြူ", category: "Rice & Grains", calories: 130, protein: 2.4, carbohydrates: 28, fat: 0.3 },
    { name: "Brown Rice", burmeseName: "ဆန်နီထမင်း", category: "Rice & Grains", calories: 123, protein: 2.6, carbohydrates: 26, fat: 1 },
    { name: "Fried Rice", burmeseName: "ထမင်းကြော်", category: "Rice & Grains", calories: 168, protein: 4, carbohydrates: 25, fat: 6 },
    { name: "Naan Bread", burmeseName: "နံပြား", category: "Rice & Grains", calories: 310, protein: 9, carbohydrates: 50, fat: 8 },
    { name: "Chicken Curry", burmeseName: "ကြက်သားဟင်း", category: "Meat", calories: 165, protein: 14, carbohydrates: 5, fat: 10 },
    { name: "Beef Stew", burmeseName: "အမဲသားဟင်း", category: "Meat", calories: 150, protein: 13, carbohydrates: 5, fat: 9 },
    { name: "Pork Belly", burmeseName: "ဝက်သားအုပ်", category: "Meat", calories: 518, protein: 9, carbohydrates: 0, fat: 53 },
    { name: "Grilled Chicken Breast", burmeseName: "ကင်ကြက်သားရင်သား", category: "Meat", calories: 165, protein: 31, carbohydrates: 0, fat: 3.6 },
    { name: "Mohinga", burmeseName: "မုန့်ဟင်းခါး", category: "Myanmar Foods", calories: 110, protein: 6, carbohydrates: 15, fat: 3 },
    { name: "Shan Noodles", burmeseName: "ရှမ်းခေါက်ဆွဲ", category: "Myanmar Foods", calories: 140, protein: 5, carbohydrates: 22, fat: 4 },
    { name: "Apple", burmeseName: "ပန်းသီး", category: "Fruits", calories: 52, protein: 0.3, carbohydrates: 14, fat: 0.2 },
    { name: "Banana", burmeseName: "ငှက်ပျောသီး", category: "Fruits", calories: 89, protein: 1.1, carbohydrates: 23, fat: 0.3 },
    { name: "Steamed Broccoli", burmeseName: "ဘရိုကိုလီပေါင်း", category: "Vegetables", calories: 35, protein: 2.4, carbohydrates: 7, fat: 0.4 },
    { name: "Orange Juice", burmeseName: "လိမ္မော်ရည်", category: "Drinks", calories: 45, protein: 0.7, carbohydrates: 10, fat: 0.2 },
    { name: "Roasted Peanuts", burmeseName: "မြေပဲကြော်", category: "Snacks", calories: 567, protein: 26, carbohydrates: 16, fat: 49 },
    { name: "Grilled Fish", burmeseName: "ငါးကင်", category: "Fish & Seafood", calories: 140, protein: 24, carbohydrates: 0, fat: 5 },
  ];

  for (const [i, food] of foods.entries()) {
    const { category, ...data } = food;
    await prisma.food.upsert({
      where: { name: data.name },
      update: { ...data, categoryId: categoryIds[category] },
      create: {
        ...data,
        categoryId: categoryIds[category],
        imageUrl: placeholderImages[i % placeholderImages.length],
      },
    });
    console.log(`  ✓ Food: ${food.name}`);
  }

  // 4. Seed ~10 days of mock activity history for the qa-user@lifewell.test
  // test account (id captured via its real Neon Auth session — Profile rows
  // are keyed by that id and can't be invented). Not the admin account.
  const QA_USER_ID = "6327cc3c-4933-4a68-9f29-5cbe5e1c293d";
  const qaProfileData = {
    age: 28,
    gender: "female" as const,
    weightKg: 58,
    heightCm: 162,
    activityLevel: "LIGHTLY_ACTIVE" as const,
    goal: "MUSCLE_GROWTH" as const,
    onboardingCompletedAt: new Date(),
  };

  await prisma.profile.upsert({
    where: { id: QA_USER_ID },
    update: qaProfileData,
    create: { id: QA_USER_ID, ...qaProfileData },
  });
  console.log("  ✓ Profile: qa-user@lifewell.test (onboarded)");

  const nutrientByCode = new Map(
    (await prisma.nutrient.findMany({ where: { code: { in: ["calories", "protein_g", "carbs_g", "fat_g"] } } })).map(
      (n) => [n.code, n.id]
    )
  );

  // Same formula onboarding uses — keeps seeded targets realistic for this profile/goal.
  const qaTargets = calculateTargets({
    sex: qaProfileData.gender,
    age: qaProfileData.age,
    weightKg: qaProfileData.weightKg,
    heightCm: qaProfileData.heightCm,
    activityLevel: qaProfileData.activityLevel,
    goal: qaProfileData.goal,
  });

  const qaTargetAmounts: Record<string, number> = {
    calories: qaTargets.calories,
    protein_g: qaTargets.proteinG,
    carbs_g: qaTargets.carbsG,
    fat_g: qaTargets.fatG,
  };

  for (const code of ["calories", "protein_g", "carbs_g", "fat_g"]) {
    const nutrientId = nutrientByCode.get(code)!;
    const targetAmount = qaTargetAmounts[code];
    await prisma.userTarget.upsert({
      where: { userId_nutrientId: { userId: QA_USER_ID, nutrientId } },
      update: { targetAmount },
      create: { userId: QA_USER_ID, nutrientId, targetAmount },
    });
  }
  console.log("  ✓ UserTargets: qa-user@lifewell.test");

  type MockMeal = {
    mealType: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";
    name: string;
    grams: number;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  const mealTemplates: MockMeal[] = [
    { mealType: "BREAKFAST", name: "Oatmeal with banana", grams: 250, calories: 320, protein: 9, carbs: 55, fat: 6 },
    { mealType: "LUNCH", name: "Chicken breast with rice", grams: 350, calories: 620, protein: 42, carbs: 70, fat: 14 },
    { mealType: "DINNER", name: "Grilled fish with vegetables", grams: 320, calories: 480, protein: 35, carbs: 30, fat: 18 },
    { mealType: "SNACK", name: "Greek yogurt", grams: 170, calories: 140, protein: 12, carbs: 10, fat: 5 },
  ];

  // Clear any previous mock history for this account so re-running the seed
  // doesn't pile up duplicate entries.
  await prisma.mealEntry.deleteMany({ where: { userId: QA_USER_ID, source: "seed-mock" } });
  await prisma.waterLog.deleteMany({ where: { userId: QA_USER_ID } });

  const DAYS = 10;
  for (let dayOffset = DAYS - 1; dayOffset >= 0; dayOffset--) {
    const day = new Date();
    day.setDate(day.getDate() - dayOffset);
    day.setHours(0, 0, 0, 0);

    // Skip one day (4 days ago) so the streak grid shows a realistic gap.
    if (dayOffset === 4) continue;

    // Slightly vary portions per day so the week isn't perfectly flat.
    const scale = 0.85 + ((DAYS - dayOffset) % 4) * 0.08;

    for (const [mealIndex, meal] of mealTemplates.entries()) {
      const eatenAt = new Date(day);
      eatenAt.setHours(7 + mealIndex * 4, 15, 0, 0);

      const consumed = {
        calories: Math.round(meal.calories * scale),
        protein_g: Math.round(meal.protein * scale * 10) / 10,
        carbs_g: Math.round(meal.carbs * scale * 10) / 10,
        fat_g: Math.round(meal.fat * scale * 10) / 10,
      };

      await prisma.mealEntry.create({
        data: {
          userId: QA_USER_ID,
          foodName: meal.name,
          source: "seed-mock",
          servingDescription: `${meal.grams}g`,
          servingGrams: meal.grams,
          quantity: 1,
          mealType: meal.mealType,
          eatenAt,
          nutrients: {
            create: (Object.keys(consumed) as (keyof typeof consumed)[])
              .map((code) => ({ nutrientId: nutrientByCode.get(code), amountConsumed: consumed[code] }))
              .filter((n) => Boolean(n.nutrientId)) as { nutrientId: string; amountConsumed: number }[],
          },
        },
      });
    }

    // 4-8 glasses of water (200ml each).
    const glasses = 4 + (dayOffset % 5);
    for (let g = 0; g < glasses; g++) {
      const loggedAt = new Date(day);
      loggedAt.setHours(8 + g * 2, 0, 0, 0);
      await prisma.waterLog.create({
        data: { userId: QA_USER_ID, amountMl: 200, loggedAt },
      });
    }

    console.log(`  ✓ Mock activity: ${day.toDateString()}`);
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());