"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { mondayOfWeek, addWeeks, weekDaysFrom, todayDateString } from "@/lib/dates";

interface WeeklyDateSelectorProps {
  selectedDate: string;
  onSelect: (date: string) => void;
}

export default function WeeklyDateSelector({ selectedDate, onSelect }: WeeklyDateSelectorProps) {
  const [weekStart, setWeekStart] = useState(() => mondayOfWeek(new Date()));
  const today = todayDateString();
  const days = weekDaysFrom(weekStart);

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={() => setWeekStart((w) => addWeeks(w, -1))}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:text-lifewell-green hover:scale-105"
        aria-label="Previous week"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex flex-1 items-center justify-between gap-2 sm:gap-4 overflow-x-auto py-2">
        {days.map((day) => (
          <button
            key={day.date}
            onClick={() => onSelect(day.date)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-full px-3 py-2 transition-all duration-300 sm:px-4",
              selectedDate === day.date
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-lifewell-green hover:text-lifewell-green hover:scale-105",
              day.date === today && selectedDate !== day.date && "border-lifewell-green"
            )}
          >
            <span className="text-xs font-medium uppercase tracking-wide">{day.label}</span>
            <span className="text-lg font-bold">{day.dayNumber}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => setWeekStart((w) => addWeeks(w, 1))}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:text-lifewell-green hover:scale-105"
        aria-label="Next week"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
