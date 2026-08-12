"use client";

import { useActionState, useState } from "react";
import { searchFoods, logFood, getTodayLogs } from "@/app/food/actions";
import type { FoodSearchResult, DailyLogSummary } from "@/app/food/actions";

const MEAL_TYPES = ["BREAKFAST", "LUNCH", "DINNER", "SNACK"] as const;
type MealType = (typeof MEAL_TYPES)[number];

const initialState = {
  entries: [],
  totalCalories: 0,
  totalProteinG: 0,
  totalCarbsG: 0,
  totalFatG: 0,
} as DailyLogSummary;

export default function FoodLogger() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FoodSearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [selected, setSelected] = useState<FoodSearchResult | null>(null);
  const [grams, setGrams] = useState("100");
  const [mealType, setMealType] = useState<MealType>("BREAKFAST");
  const [message, setMessage] = useState<string | null>(null);
  const [summary, formAction] = useActionState(getTodayLogs, initialState);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setSearching(true);
    setSelected(null);
    setMessage(null);
    try {
      const foods = await searchFoods(q);
      setResults(foods);
    } catch {
      setResults([]);
      setMessage("USDA search failed. Try again.");
    } finally {
      setSearching(false);
    }
  }

  async function handleLog() {
    if (!selected) return;
    const g = parseFloat(grams);
    if (!g || g <= 0) {
      setMessage("Enter a valid gram amount.");
      return;
    }
    try {
      await logFood(selected.fdcId, g, mealType);
      setMessage(`Logged "${selected.description}" (${g}g).`);
      setSelected(null);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to log food.");
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Add Food (USDA)</h2>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search foods… e.g. banana, chicken breast"
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20"
        />
        <button
          type="submit"
          disabled={searching}
          className="rounded-full bg-[#4CAF50] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#43A047] disabled:opacity-50"
        >
          {searching ? "Searching…" : "Search"}
        </button>
      </form>

      {results.length > 0 && (
        <ul className="mt-4 max-h-60 divide-y divide-gray-100 overflow-y-auto rounded-xl border border-gray-100">
          {results.map((food) => (
            <li key={food.fdcId}>
              <button
                type="button"
                onClick={() => setSelected(food)}
                className={`block w-full px-4 py-3 text-left text-sm transition hover:bg-green-50 ${
                  selected?.fdcId === food.fdcId ? "bg-green-50" : ""
                }`}
              >
                <span className="font-medium text-gray-900">{food.description}</span>
                {food.brand && <span className="text-gray-400"> — {food.brand}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <div className="mt-4 rounded-xl bg-gray-50 p-4">
          <p className="mb-3 text-sm font-semibold text-gray-800">{selected.description}</p>
          <div className="flex flex-wrap items-end gap-3">
            <label className="text-sm">
              <span className="mb-1 block text-xs font-medium text-gray-500">Grams</span>
              <input
                type="number"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                min="1"
                className="w-24 rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-[#4CAF50] focus:outline-none"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-xs font-medium text-gray-500">Meal</span>
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value as MealType)}
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-[#4CAF50] focus:outline-none"
              >
                {MEAL_TYPES.map((m) => (
                  <option key={m} value={m}>
                    {m[0] + m.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={handleLog}
              className="rounded-lg bg-[#4CAF50] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#43A047]"
            >
              Log Food
            </button>
          </div>
        </div>
      )}

      {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}

      <form action={formAction} className="mt-6">
        <button type="submit" className="text-sm font-semibold text-[#4CAF50] hover:text-[#43A047]">
          {"Refresh Today's Logs"}
        </button>
      </form>

      {summary.entries.length > 0 && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between rounded-xl bg-[#EAF7E6] px-4 py-2 text-sm">
            <span className="font-semibold text-gray-800">Today</span>
            <span className="font-bold text-[#4CAF50]">{Math.round(summary.totalCalories)} kcal</span>
          </div>
          <div className="flex gap-4 px-4 text-xs text-gray-500">
            <span>Protein {summary.totalProteinG.toFixed(1)}g</span>
            <span>Carbs {summary.totalCarbsG.toFixed(1)}g</span>
            <span>Fat {summary.totalFatG.toFixed(1)}g</span>
          </div>
          <ul className="divide-y divide-gray-100 rounded-xl border border-gray-100">
            {summary.entries.map((entry) => (
              <li key={entry.id} className="flex items-center justify-between px-4 py-2 text-sm">
                <span className="text-gray-800">{entry.foodName}</span>
                <span className="text-gray-400">
                  {entry.servingGrams}g · {Math.round(entry.calories)} kcal
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}