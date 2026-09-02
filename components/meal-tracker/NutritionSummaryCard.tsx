import Image from "next/image";
import { Flame, Wheat, Droplet, Beef } from "lucide-react";
import type { DailyLogSummary } from "@/app/food/actions";
import type { UserTargets } from "@/app/targets/actions";

interface NutritionSummaryCardProps {
  summary: DailyLogSummary;
  targets: UserTargets;
}

export default function NutritionSummaryCard({ summary, targets }: NutritionSummaryCardProps) {
  const caloriesLeft = Math.max(0, Math.round(targets.calories - summary.totalCalories));

  return (
    <div className="relative overflow-hidden rounded-2xl bg-lifewell-yellow p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Left content */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">Calories Left</h2>
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900 sm:text-5xl">{caloriesLeft}</span>
            <span className="text-sm font-medium text-gray-500">kcal</span>
          </div>

          <p className="mt-1 text-sm text-gray-500">Remaining: {caloriesLeft} kcal</p>

          {/* Macro nutrients */}
          <div className="mt-4 flex flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                <Wheat className="h-4 w-4 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Carbs</p>
                <p className="text-sm font-semibold text-gray-800">
                  {summary.totalCarbsG.toFixed(0)}g
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                <Droplet className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Fat</p>
                <p className="text-sm font-semibold text-gray-800">
                  {summary.totalFatG.toFixed(0)}g
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <Beef className="h-4 w-4 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Protein</p>
                <p className="text-sm font-semibold text-gray-800">
                  {summary.totalProteinG.toFixed(0)}g
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative hidden sm:block">
          <div className="relative h-40 w-40 lg:h-48 lg:w-48">
            <Image
              src="/images/healthy-food.svg"
              alt="Healthy food"
              fill
              className="object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-3"
            />
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow-200/50" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-green-100/40" />
    </div>
  );
}
