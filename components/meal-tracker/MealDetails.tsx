import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Meal } from "@/lib/mock-data";

interface MealDetailsProps {
  meal: Meal;
}

export default function MealDetails({ meal }: MealDetailsProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        {/* Food list */}
        <ul className="divide-y divide-gray-100">
          {meal.foods.map((food) => (
            <li
              key={food.name}
              className="flex items-center justify-between py-3"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{food.name}</p>
                <p className="text-xs text-gray-500">{food.serving}</p>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {food.calories} kcal
              </span>
            </li>
          ))}
        </ul>

        {/* Total */}
        <div className="mt-2 flex items-center justify-between rounded-xl bg-green-50 px-4 py-3">
          <span className="text-sm font-semibold text-gray-700">Total</span>
          <span className="text-sm font-bold text-lifewell-green">
            {meal.foods.reduce((sum, food) => sum + food.calories, 0)} kcal
          </span>
        </div>

        {/* Add Food button */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-lifewell-green/40 py-3 text-sm font-semibold text-lifewell-green transition-colors duration-300 hover:bg-lifewell-green hover:text-white">
          <Plus className="h-4 w-4" />
          Add Food
        </button>
      </div>
    </motion.div>
  );
}