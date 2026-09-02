-- DropForeignKey
ALTER TABLE "food_nutrients" DROP CONSTRAINT "food_nutrients_food_id_fkey";

-- DropForeignKey
ALTER TABLE "food_nutrients" DROP CONSTRAINT "food_nutrients_nutrient_id_fkey";

-- DropForeignKey
ALTER TABLE "meal_entries" DROP CONSTRAINT "meal_entries_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_targets" DROP CONSTRAINT "user_targets_user_id_fkey";

-- DropIndex
DROP INDEX "foods_category_idx";

-- AlterTable
ALTER TABLE "foods" DROP COLUMN "category",
DROP COLUMN "description",
DROP COLUMN "is_active",
DROP COLUMN "serving_size",
DROP COLUMN "serving_unit",
ADD COLUMN     "burmese_name" TEXT NOT NULL,
ADD COLUMN     "calories" DECIMAL(6,2) NOT NULL,
ADD COLUMN     "carbohydrates" DECIMAL(6,2) NOT NULL,
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "fat" DECIMAL(6,2) NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "protein" DECIMAL(6,2) NOT NULL;

-- DropTable
DROP TABLE "food_nutrients";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "FoodCategory";

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "weight_kg" DECIMAL(5,2),
    "height_cm" DECIMAL(5,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_logs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "amount_ml" INTEGER NOT NULL,
    "logged_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "water_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE INDEX "water_logs_user_id_logged_at_idx" ON "water_logs"("user_id", "logged_at");

-- CreateIndex
CREATE UNIQUE INDEX "foods_name_key" ON "foods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "foods_burmese_name_key" ON "foods"("burmese_name");

-- CreateIndex
CREATE INDEX "foods_category_id_idx" ON "foods"("category_id");

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_targets" ADD CONSTRAINT "user_targets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_entries" ADD CONSTRAINT "meal_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_logs" ADD CONSTRAINT "water_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

