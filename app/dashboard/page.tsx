import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NutrientChart from "@/components/dashboard/NutrientChart";
import { Flame, Droplets, Beef, Wheat, Fish } from "lucide-react";
import { requireOnboardedUser } from "@/lib/onboarding";
import { getLogsForDate, getWeeklySummary } from "@/app/food/actions";
import { getUserTargets } from "@/app/targets/actions";
import { getWaterLogsForDate } from "@/app/water/actions";
import { getStreakData } from "@/lib/streak";
import { todayDateString, mondayOfWeek, addDays } from "@/lib/dates";
import type { Goal } from "@/generated/prisma/client";

export const dynamic = "force-dynamic";

const GOAL_LABELS: Record<Goal, string> = {
  WEIGHT_LOSS: "Weight Loss",
  WEIGHT_GAIN: "Weight Gain",
  MUSCLE_GROWTH: "Muscle Growth",
  FIT_BODY: "Fit Body",
};

function pct(consumed: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(100, Math.round((consumed / target) * 100));
}

export default async function DashboardPage() {
  const dbUser = await requireOnboardedUser();
  const today = todayDateString();
  const yesterday = addDays(today, -1);
  const weekStart = mondayOfWeek(new Date());

  const [todayLogs, yesterdayLogs, targets, weekly, water, streak] = await Promise.all([
    getLogsForDate(today),
    getLogsForDate(yesterday),
    getUserTargets(),
    getWeeklySummary(weekStart),
    getWaterLogsForDate(today),
    getStreakData(dbUser.id),
  ]);

  const consumedCalories = Math.round(todayLogs.totalCalories);
  const consumedPercent = pct(todayLogs.totalCalories, targets.calories);
  const remainingKcal = Math.max(0, Math.round(targets.calories - todayLogs.totalCalories));
  const remainingPercent = 100 - consumedPercent;

  const changeVsYesterday =
    yesterdayLogs.totalCalories > 0
      ? Math.round(
          ((todayLogs.totalCalories - yesterdayLogs.totalCalories) / yesterdayLogs.totalCalories) *
            100
        )
      : null;

  const macroRows = [
    {
      label: "Remaining",
      value: `${remainingKcal}kcal (${remainingPercent}%)`,
      width: `${remainingPercent}%`,
    },
    {
      label: "Carbs",
      value: `${Math.round(todayLogs.totalCarbsG * 4)}kcal / ${todayLogs.totalCarbsG.toFixed(0)}g`,
      width: `${pct(todayLogs.totalCarbsG, targets.carbsG)}%`,
    },
    {
      label: "Protein",
      value: `${Math.round(todayLogs.totalProteinG * 4)}kcal / ${todayLogs.totalProteinG.toFixed(0)}g`,
      width: `${pct(todayLogs.totalProteinG, targets.proteinG)}%`,
    },
    {
      label: "Fat",
      value: `${Math.round(todayLogs.totalFatG * 9)}kcal / ${todayLogs.totalFatG.toFixed(0)}g`,
      width: `${pct(todayLogs.totalFatG, targets.fatG)}%`,
    },
  ];

  const nutrientCards = [
    {
      title: "Protein",
      bg: "#F6F7DE",
      amount: `${todayLogs.totalProteinG.toFixed(0)} /${targets.proteinG.toFixed(0)}g`,
      percent: pct(todayLogs.totalProteinG, targets.proteinG),
      remaining: `Remaining ${Math.max(0, Math.round(targets.proteinG - todayLogs.totalProteinG))}g`,
      ringColor: "#2855D8",
      icon: Beef,
    },
    {
      title: "Carbs",
      bg: "#F8F1D9",
      amount: `${todayLogs.totalCarbsG.toFixed(0)} /${targets.carbsG.toFixed(0)}g`,
      percent: pct(todayLogs.totalCarbsG, targets.carbsG),
      remaining: `Remaining ${Math.max(0, Math.round(targets.carbsG - todayLogs.totalCarbsG))}g`,
      ringColor: "#06b6d4",
      icon: Wheat,
    },
    {
      title: "Fats",
      bg: "#FAF2E6",
      amount: `${todayLogs.totalFatG.toFixed(0)} /${targets.fatG.toFixed(0)}g`,
      percent: pct(todayLogs.totalFatG, targets.fatG),
      remaining: `Remaining ${Math.max(0, Math.round(targets.fatG - todayLogs.totalFatG))}g`,
      ringColor: "#8E5CE6",
      icon: Fish,
    },
  ];

  const waterDots = Math.min(3, Math.round((water.totalMl / water.goalMl) * 3));

  const monthLabel = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });
  const goalLabel = dbUser.goal ? GOAL_LABELS[dbUser.goal] : null;

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <Navbar />

      <div className="mx-auto max-w-[1280px] px-6 py-6">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold text-[#222222]">Nutrition Insight</h1>
          {goalLabel && (
            <span className="rounded-full bg-[#69B96A]/15 px-3 py-1 text-sm font-semibold text-[#3F8A41]">
              Goal: {goalLabel}
            </span>
          )}
        </div>

        {/* Top Section */}
        <section className="mb-6 grid grid-cols-12 gap-6">
          {/* Calories Breakdown Card */}
          <div className="col-span-12 rounded-[20px] border border-[#ECECEC] bg-gradient-to-br from-[#EAF9E8] to-[#D1FAE5] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:col-span-9">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#69B96A]">
                  <Flame size={24} />
                </span>
                <h2 className="text-lg font-semibold text-[#222222]">Calories Breakdown</h2>
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-[#5F6368]">Consumed</span>
                <div className="my-1 flex items-center justify-end gap-2">
                  <span className="text-3xl font-bold text-[#222222]">{consumedCalories} kcal</span>
                  <span className="rounded-full bg-[#69B96A] px-2.5 py-0.5 text-xs font-semibold text-white">
                    {consumedPercent}%
                  </span>
                </div>
                {changeVsYesterday !== null && (
                  <span
                    className={`text-sm font-medium ${
                      changeVsYesterday >= 0 ? "text-[#69B96A]" : "text-red-500"
                    }`}
                  >
                    {changeVsYesterday >= 0 ? "↑" : "↓"} {Math.abs(changeVsYesterday)}% Than
                    yesterday
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="flex flex-1 flex-col gap-4">
                {macroRows.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#222222]">{item.label}</span>
                      <span className="text-sm text-[#5F6368]">{item.value}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-[#e5e7eb]">
                      <div
                        className="h-full rounded-full bg-[#69B96A] transition-all duration-700"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex min-w-[140px] flex-col items-center justify-center rounded-[20px] bg-white/60 p-4 text-center">
                <span className="text-xs font-medium text-[#5F6368]">Target</span>
                <span className="mt-1 text-2xl font-bold text-[#222222]">
                  {Math.round(targets.calories)}Kcal
                </span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="col-span-12 flex flex-col gap-5 lg:col-span-3">
            {/* Hydration Card */}
            <div className="rounded-[20px] bg-[#DDF8FF] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h2 className="mb-2 flex items-center gap-1.5 text-lg font-semibold text-[#2855D8]">
                    <Droplets size={16} /> Hydrate
                  </h2>
                  <span className="text-[28px] font-bold text-[#222222]">{water.totalMl} ml</span>
                  <span className="text-sm text-[#5F6368]">of {water.goalMl} ml</span>
                </div>
                <Image
                  src="/images/water-glass.svg"
                  alt="Glass of water"
                  width={96}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ${
                      i < waterDots ? "bg-[#8E5CE6]" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Streak Card */}
            <div className="rounded-[20px] bg-[#CFEFFF] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#222222]">{monthLabel}</h2>
              </div>
              <div className="my-2 text-xl font-bold text-[#222222]">
                {streak.currentStreakDays} day{streak.currentStreakDays === 1 ? "" : "s"} Streak!
              </div>
              <div className="grid grid-cols-7 grid-rows-5 gap-2">
                {streak.grid.map((state, i) => (
                  <span
                    key={i}
                    className={`aspect-square w-full rounded-full ${
                      state === "filled" ? "bg-[#2855D8]" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Middle Section: Nutrient Cards */}
        <section className="mb-6 grid grid-cols-12 gap-6">
          {nutrientCards.map((card) => (
            <div
              key={card.title}
              className="col-span-12 rounded-[20px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:col-span-6 lg:col-span-4"
              style={{ backgroundColor: card.bg }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
                  <card.icon size={24} />
                </span>
                <span className="flex-1 text-lg font-semibold text-[#222222]">{card.title}</span>
                <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-semibold text-[#5F6368]">
                  {card.percent}%
                </span>
              </div>
              <div className="my-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-[#222222]">{card.amount}</div>
                <div
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(${card.ringColor} ${card.percent}%, #e5e7eb ${card.percent}%)`,
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <span className="text-sm font-bold text-[#222222]">{card.percent}%</span>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-[#5F6368]">{card.remaining}</div>
            </div>
          ))}
        </section>

        {/* Bottom Section */}
        <section className="grid grid-cols-12 gap-6">
          <NutrientChart
            days={weekly.days}
            totalCalories={weekly.totalCalories}
            dailyAvgCalories={weekly.dailyAvgCalories}
            todayDate={today}
          />

          {/* Right: Food Image */}
          <div className="col-span-12 overflow-hidden rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:col-span-4">
            <Image
              src="/images/food.webp"
              alt="Breakfast"
              width={400}
              height={400}
              className="block h-full min-h-[300px] w-full object-cover"
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
