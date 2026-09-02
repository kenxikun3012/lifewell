"use client";

import { useState } from "react";
import { Leaf } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { WeeklyDaySummary } from "@/app/food/actions";

interface NutrientChartProps {
  days: WeeklyDaySummary[];
  totalCalories: number;
  dailyAvgCalories: number;
  todayDate: string;
}

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function NutrientChart({
  days,
  totalCalories,
  dailyAvgCalories,
  todayDate,
}: NutrientChartProps) {
  const [activePill, setActivePill] = useState<"weekly" | "monthly">("weekly");

  const chartData = days.map((d, i) => ({
    day: WEEKDAY_LABELS[i],
    value: d.totalCalories,
    isToday: d.date === todayDate,
  }));

  return (
    <div className="col-span-12 rounded-[20px] bg-[#DDF8FF] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:col-span-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#69B96A] text-white">
            <Leaf size={20} />
          </span>
          <h2 className="text-lg font-semibold text-[#222222]">Nutrients Gained</h2>
        </div>
        <div className="flex gap-1 rounded-full bg-white/70 p-1">
          <button
            onClick={() => setActivePill("weekly")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activePill === "weekly" ? "bg-white text-[#222222] shadow-sm" : "text-[#5F6368]"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setActivePill("monthly")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activePill === "monthly" ? "bg-white text-[#222222] shadow-sm" : "text-[#5F6368]"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {activePill === "monthly" ? (
        <p className="flex h-[220px] items-center justify-center text-sm text-[#5F6368]">
          Monthly view coming soon.
        </p>
      ) : (
        <>
          <div className="mb-4 flex gap-8">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#5F6368]">Total Calories</span>
              <span className="text-xl font-bold text-[#222222]">
                {totalCalories.toLocaleString("en-US")} kcal
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#5F6368]">Daily Avg</span>
              <span className="text-xl font-bold text-[#222222]">
                {dailyAvgCalories.toLocaleString("en-US")} kcal
              </span>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[400px]">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#5F6368", fontSize: 12 }}
                  />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#5F6368", fontSize: 12 }} />
                  <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
                  <Bar
                    dataKey="value"
                    radius={[8, 8, 0, 0]}
                    fill="#7dd3fc"
                    barSize={32}
                    shape={(props: {
                      x?: number;
                      y?: number;
                      width?: number;
                      height?: number;
                      index?: number;
                    }) => {
                      const { x, y, width, height, index } = props;
                      const isToday = chartData[index ?? 0]?.isToday;
                      return (
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height}
                          rx={8}
                          fill={isToday ? "#2855D8" : "#7dd3fc"}
                        />
                      );
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
