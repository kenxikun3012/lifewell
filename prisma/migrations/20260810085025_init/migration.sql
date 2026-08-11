-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK');

-- CreateEnum
CREATE TYPE "FoodCategory" AS ENUM ('RICE_AND_GRAINS', 'PROTEIN', 'FRUIT', 'VEGETABLE', 'DAIRY', 'NUTS_AND_SEEDS', 'BEVERAGE', 'OTHER');

-- CreateEnum
CREATE TYPE "NutrientUnit" AS ENUM ('KCAL', 'G', 'MG', 'MCG', 'IU');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "email" TEXT NOT NULL,
    "weight_kg" DECIMAL(5,2),
    "height_cm" DECIMAL(5,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "FoodCategory" NOT NULL,
    "serving_size" DECIMAL(6,2) NOT NULL,
    "serving_unit" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nutrients" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" "NutrientUnit" NOT NULL,
    "daily_reference" DECIMAL(10,2),
    "reference_source" TEXT,
    "reference_url" TEXT,
    "is_energy" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nutrients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_nutrients" (
    "id" TEXT NOT NULL,
    "food_id" TEXT NOT NULL,
    "nutrient_id" TEXT NOT NULL,
    "amount_per_serving" DECIMAL(12,4) NOT NULL,
    "source" TEXT,
    "source_url" TEXT,
    "source_identifier" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "food_nutrients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_targets" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "nutrient_id" TEXT NOT NULL,
    "target_amount" DECIMAL(10,2) NOT NULL,
    "source" TEXT,
    "source_url" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal_entries" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "food_id" TEXT NOT NULL,
    "quantity" DECIMAL(6,2) NOT NULL DEFAULT 1,
    "meal_type" "MealType" NOT NULL,
    "eaten_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meal_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal_entry_nutrients" (
    "id" TEXT NOT NULL,
    "meal_entry_id" TEXT NOT NULL,
    "nutrient_id" TEXT NOT NULL,
    "amount_consumed" DECIMAL(12,4) NOT NULL,

    CONSTRAINT "meal_entry_nutrients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "foods_category_idx" ON "foods"("category");

-- CreateIndex
CREATE INDEX "foods_name_idx" ON "foods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "nutrients_code_key" ON "nutrients"("code");

-- CreateIndex
CREATE UNIQUE INDEX "food_nutrients_food_id_nutrient_id_key" ON "food_nutrients"("food_id", "nutrient_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_targets_user_id_nutrient_id_key" ON "user_targets"("user_id", "nutrient_id");

-- CreateIndex
CREATE INDEX "meal_entries_user_id_eaten_at_idx" ON "meal_entries"("user_id", "eaten_at");

-- CreateIndex
CREATE UNIQUE INDEX "meal_entry_nutrients_meal_entry_id_nutrient_id_key" ON "meal_entry_nutrients"("meal_entry_id", "nutrient_id");

-- AddForeignKey
ALTER TABLE "food_nutrients" ADD CONSTRAINT "food_nutrients_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_nutrients" ADD CONSTRAINT "food_nutrients_nutrient_id_fkey" FOREIGN KEY ("nutrient_id") REFERENCES "nutrients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_targets" ADD CONSTRAINT "user_targets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_targets" ADD CONSTRAINT "user_targets_nutrient_id_fkey" FOREIGN KEY ("nutrient_id") REFERENCES "nutrients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_entries" ADD CONSTRAINT "meal_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_entries" ADD CONSTRAINT "meal_entries_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_entry_nutrients" ADD CONSTRAINT "meal_entry_nutrients_meal_entry_id_fkey" FOREIGN KEY ("meal_entry_id") REFERENCES "meal_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_entry_nutrients" ADD CONSTRAINT "meal_entry_nutrients_nutrient_id_fkey" FOREIGN KEY ("nutrient_id") REFERENCES "nutrients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
