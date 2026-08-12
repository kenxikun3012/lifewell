/*
  Warnings:

  - Added the required column `food_name` to the `meal_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serving_grams` to the `meal_entries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "meal_entries" DROP CONSTRAINT "meal_entries_food_id_fkey";

-- AlterTable
ALTER TABLE "meal_entries" ADD COLUMN     "food_brand" TEXT,
ADD COLUMN     "food_name" TEXT NOT NULL,
ADD COLUMN     "serving_description" TEXT,
ADD COLUMN     "serving_grams" DECIMAL(10,3) NOT NULL,
ADD COLUMN     "source" TEXT DEFAULT 'usda',
ALTER COLUMN "food_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "meal_entries" ADD CONSTRAINT "meal_entries_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE SET NULL ON UPDATE CASCADE;
