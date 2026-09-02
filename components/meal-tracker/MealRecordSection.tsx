"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { Meal } from "@/lib/mock-data";
import type { DailyLogSummary } from "@/app/food/actions";
import type { UserTargets } from "@/app/targets/actions";
import MealCard from "./MealCard";
import MealDetails from "./MealDetails";

interface MealRecordSectionProps {
  summary: DailyLogSummary;
  targets: UserTargets;
  date: string;
  onLogged: () => void;
}

const MEAL_TYPE_CONFIG = [
  { id: "BREAKFAST", name: "Breakfast", bgColor: "bg-orange-50", color: "text-orange-600", image: "/images/meal-breakfast.svg", targetShare: 0.25 },
  { id: "LUNCH", name: "Lunch", bgColor: "bg-green-50", color: "text-green-600", image: "/images/meal-lunch.svg", targetShare: 0.35 },
  { id: "DINNER", name: "Dinner", bgColor: "bg-blue-50", color: "text-blue-600", image: "/images/meal-dinner.svg", targetShare: 0.30 },
  { id: "SNACK", name: "Snack", bgColor: "bg-purple-50", color: "text-purple-600", image: "/images/meal-snack.svg", targetShare: 0.10 },
] as const;

export default function MealRecordSection({ summary, targets, date, onLogged }: MealRecordSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const meals: Meal[] = MEAL_TYPE_CONFIG.map((cfg) => {
    const entries = summary.entries.filter((e) => e.mealType === cfg.id);
    return {
      id: cfg.id,
      name: cfg.name,
      currentCalories: Math.round(entries.reduce((s, e) => s + e.calories, 0)),
      targetCalories: Math.round(targets.calories * cfg.targetShare),
      bgColor: cfg.bgColor,
      color: cfg.color,
      image: cfg.image,
      foods: entries.map((e) => ({
        name: e.foodName,
        serving: e.servingDescription ?? `${e.servingGrams}g`,
        calories: Math.round(e.calories),
      })),
    };
  });

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {meals.map((meal, index) => {
        const isExpanded = expandedId === meal.id;
        const mealType = MEAL_TYPE_CONFIG[index].id;

        return (
          <div
            key={meal.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <MealCard
              meal={meal}
              isExpanded={isExpanded}
              onToggle={() => handleToggle(meal.id)}
            />

            <AnimatePresence>
              {isExpanded && (
                <MealDetails meal={meal} mealType={mealType} date={date} onLogged={onLogged} />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
