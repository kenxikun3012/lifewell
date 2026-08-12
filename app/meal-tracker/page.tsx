import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeeklyDateSelector from "@/components/meal-tracker/WeeklyDateSelector";
import NutritionSummaryCard from "@/components/meal-tracker/NutritionSummaryCard";
import MealRecordSection from "@/components/meal-tracker/MealRecordSection";
import WaterIntakeCard from "@/components/meal-tracker/WaterIntakeCard";
import FoodLogger from "@/components/meal-tracker/FoodLogger";

export default function MealTrackerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Meal Tracker
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Track your daily meals and nutrition goals
            </p>
          </div>

          {/* Weekly Date Selector */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <WeeklyDateSelector />
          </div>

          {/* Nutrition Summary */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <NutritionSummaryCard />
          </div>

          {/* USDA Food Logger */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <FoodLogger />
          </div>

          {/* Meal Record Section */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "350ms" }}>
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              {"Today's Meals"}
            </h2>
            <MealRecordSection />
          </div>

          {/* Water Intake */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <WaterIntakeCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}