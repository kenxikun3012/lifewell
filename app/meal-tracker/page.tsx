"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeeklyDateSelector from "@/components/meal-tracker/WeeklyDateSelector";
import NutritionSummaryCard from "@/components/meal-tracker/NutritionSummaryCard";
import MealRecordSection from "@/components/meal-tracker/MealRecordSection";
import WaterIntakeCard from "@/components/meal-tracker/WaterIntakeCard";
import { getLogsForDate, type DailyLogSummary } from "@/app/food/actions";
import { getUserTargets, type UserTargets } from "@/app/targets/actions";
import { getWaterLogsForDate, type WaterLogSummary } from "@/app/water/actions";
import { todayDateString } from "@/lib/dates";

const EMPTY_SUMMARY: DailyLogSummary = {
  entries: [],
  totalCalories: 0,
  totalProteinG: 0,
  totalCarbsG: 0,
  totalFatG: 0,
};

export default function MealTrackerPage() {
  const [selectedDate, setSelectedDate] = useState(todayDateString());
  const [summary, setSummary] = useState<DailyLogSummary>(EMPTY_SUMMARY);
  const [targets, setTargets] = useState<UserTargets | null>(null);
  const [water, setWater] = useState<WaterLogSummary | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async (date: string) => {
    setLoading(true);
    try {
      const [s, t, w] = await Promise.all([
        getLogsForDate(date),
        getUserTargets(),
        getWaterLogsForDate(date),
      ]);
      setSummary(s);
      setTargets(t);
      setWater(w);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetching from the server whenever the selected date changes is exactly
    // the "subscribe to an external system" case React's effect docs call
    // out as legitimate — there's no way to fetch server data without an
    // effect (or state derived from one) here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh(selectedDate);
  }, [selectedDate, refresh]);

  const isToday = selectedDate === todayDateString();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Meal Tracker</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track your daily meals and nutrition goals
            </p>
          </div>

          {/* Weekly Date Selector */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <WeeklyDateSelector selectedDate={selectedDate} onSelect={setSelectedDate} />
          </div>

          {loading && !targets ? (
            <p className="text-sm text-gray-500">Loading…</p>
          ) : targets && water ? (
            <>
              {/* Nutrition Summary */}
              <div className="mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <NutritionSummaryCard summary={summary} targets={targets} />
              </div>

              {/* Meal Record Section */}
              <div className="mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  {isToday ? "Today's Meals" : "Meals"}
                </h2>
                <MealRecordSection
                  summary={summary}
                  targets={targets}
                  date={selectedDate}
                  onLogged={() => refresh(selectedDate)}
                />
              </div>

              {/* Water Intake */}
              <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                <WaterIntakeCard
                  date={selectedDate}
                  totalMl={water.totalMl}
                  goalMl={water.goalMl}
                  onLogged={setWater}
                />
              </div>
            </>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
