-- CreateEnum
CREATE TYPE "Goal" AS ENUM ('WEIGHT_LOSS', 'WEIGHT_GAIN', 'MUSCLE_GROWTH', 'FIT_BODY');

-- CreateEnum
CREATE TYPE "ActivityLevel" AS ENUM ('SEDENTARY', 'LIGHTLY_ACTIVE', 'ACTIVE', 'VERY_ACTIVE');

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "activity_level" "ActivityLevel",
ADD COLUMN     "goal" "Goal",
ADD COLUMN     "onboarding_completed_at" TIMESTAMP(3);

