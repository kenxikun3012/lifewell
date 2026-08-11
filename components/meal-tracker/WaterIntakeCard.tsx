"use client";

import Image from "next/image";
import { useState } from "react";
import { Droplets, Plus } from "lucide-react";
import { waterIntake } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function WaterIntakeCard() {
  const [current, setCurrent] = useState<number>(waterIntake.current);
  const goal = waterIntake.goal;
  const percentage = Math.min(Math.round((current / goal) * 100), 100);

  const addWater = () => {
    setCurrent((prev: number) => Math.min(Math.round((prev + 0.2) * 10) / 10, goal));
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-lifewell-green-light p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lifewell-green text-white shadow-md">
              <Droplets className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Water Intake
            </h2>
          </div>

          <p className="mt-2 text-sm text-gray-600">
            Stay hydrated! Track your daily water consumption.
          </p>

          <div className="mt-3">
            <p className="text-xs font-medium text-gray-500">Daily Goal</p>
            <p className="text-sm font-semibold text-gray-800">{goal}L</p>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-lifewell-green-dark">
                {current.toFixed(1)}L / {goal}L
              </span>
              <span className="text-xs font-medium text-gray-500">
                {percentage}%
              </span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-gradient-to-r from-lifewell-green to-cyan-400 transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Glass of water image */}
        <div className="relative hidden sm:block">
          <div className="relative h-32 w-32 lg:h-36 lg:w-36">
            <Image
              src="/images/water-glass.svg"
              alt="Glass of water"
              fill
              className="object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-3"
            />
          </div>
        </div>
      </div>

      {/* Add water button */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          Tap + to log a glass of water (0.2L)
        </p>
        <Button
          variant="green"
          size="icon"
          onClick={addWater}
          aria-label="Add water"
          className="h-10 w-10 rounded-full"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* Decorative bubbles */}
      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/40" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-cyan-100/40" />
    </div>
  );
}