"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { meals } from "@/lib/mock-data";
import MealCard from "./MealCard";
import MealDetails from "./MealDetails";

export default function MealRecordSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {meals.map((meal, index) => {
        const isExpanded = expandedId === meal.id;

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
              {isExpanded && <MealDetails meal={meal} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}