import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Meal } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface MealCardProps {
  meal: Meal;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function MealCard({ meal, isExpanded, onToggle }: MealCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        meal.bgColor
      )}
    >
      {/* Meal name */}
      <h3 className={cn("text-lg font-semibold", meal.color)}>{meal.name}</h3>

      {/* Calories */}
      <div className="mt-2">
        <span className="text-2xl font-bold text-gray-900">
          {meal.currentCalories}
        </span>
        <span className="text-sm text-gray-500">
          {" "}
          / {meal.targetCalories} kcal
        </span>
      </div>

      {/* Circular food image */}
      <div className="mt-4 flex items-center justify-between">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Circular + / X button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onToggle}
          aria-label={isExpanded ? `Collapse ${meal.name}` : `Expand ${meal.name}`}
          aria-expanded={isExpanded}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-colors duration-300",
            isExpanded
              ? "bg-lifewell-green text-white"
              : "bg-white text-gray-700 hover:bg-lifewell-green hover:text-white"
          )}
        >
          <motion.span
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Plus className="h-5 w-5" />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}