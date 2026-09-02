"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import type { Meal } from "@/lib/mock-data";
import { searchFoods, logFood, type FoodSearchResult } from "@/app/food/actions";

type MealType = "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";

interface MealDetailsProps {
  meal: Meal;
  mealType: MealType;
  date: string;
  onLogged: () => void;
}

export default function MealDetails({ meal, mealType, date, onLogged }: MealDetailsProps) {
  const [adding, setAdding] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FoodSearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState<FoodSearchResult | null>(null);
  const [grams, setGrams] = useState("100");
  const [logging, setLogging] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function resetAndClose() {
    setAdding(false);
    setQuery("");
    setResults([]);
    setSearching(false);
    setSearched(false);
    setSelected(null);
    setGrams("100");
    setLogging(false);
    setMessage(null);
  }

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
      setSearched(true);
    } catch {
      setResults([]);
      setMessage("Search failed. Try again.");
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
    setLogging(true);
    try {
      await logFood(selected.id, g, mealType, date);
      resetAndClose();
      onLogged();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to log food.");
      setLogging(false);
    }
  }

  const gramsNum = parseFloat(grams) || 0;
  const previewCalories = selected
    ? Math.round((selected.caloriesPer100g * gramsNum) / 100)
    : 0;

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
          {meal.foods.map((food, i) => (
            <li
              key={`${food.name}-${i}`}
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

        {!adding ? (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-lifewell-green/40 py-3 text-sm font-semibold text-lifewell-green transition-colors duration-300 hover:bg-lifewell-green hover:text-white"
          >
            <Plus className="h-4 w-4" />
            Add Food
          </button>
        ) : (
          <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">
                Add to {meal.name}
              </span>
              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Cancel"
                className="rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search foods… e.g. mohinga, ထမင်းကြော်"
                lang="my"
                autoFocus
                className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm focus:border-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20"
              />
              <button
                type="submit"
                disabled={searching}
                className="rounded-full bg-[#4CAF50] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#43A047] disabled:opacity-50"
              >
                {searching ? "Searching…" : "Search"}
              </button>
            </form>

            {searched && results.length === 0 && (
              <p className="mt-3 text-sm text-gray-500">
                No foods found. An admin can add it from the admin dashboard.
              </p>
            )}

            {results.length > 0 && (
              <ul className="mt-3 max-h-60 divide-y divide-gray-100 overflow-y-auto rounded-xl border border-gray-100 bg-white">
                {results.map((food) => (
                  <li key={food.id}>
                    <button
                      type="button"
                      onClick={() => setSelected(food)}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-green-50 ${
                        selected?.id === food.id ? "bg-green-50" : ""
                      }`}
                    >
                      <Image
                        src={food.imageUrl}
                        alt={food.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 shrink-0 rounded-lg object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-gray-900">{food.name}</span>
                        <span className="block text-xs text-gray-400" lang="my">
                          {food.burmeseName}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs text-gray-400">
                        {Math.round(food.caloriesPer100g)} kcal/100g
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {selected && (
              <div className="mt-3 rounded-xl bg-white p-3">
                <p className="mb-2 text-sm font-semibold text-gray-800">{selected.name}</p>
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
                  <span className="text-sm text-gray-500">≈ {previewCalories} kcal</span>
                  <button
                    type="button"
                    onClick={handleLog}
                    disabled={logging}
                    className="rounded-lg bg-[#4CAF50] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#43A047] disabled:opacity-50"
                  >
                    {logging ? "Logging…" : "Log Food"}
                  </button>
                </div>
              </div>
            )}

            {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
          </div>
        )}
      </div>
    </motion.div>
  );
}
