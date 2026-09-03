import Button from "@/components/Button";
import StreakPet from "@/components/home/StreakPet";
import type { PetLevels } from "@/lib/pet";

interface PersonalizedHeroProps {
  name: string;
  consumedCalories: number;
  targetCalories: number;
  pet: PetLevels;
}

export default function PersonalizedHero({
  name,
  consumedCalories,
  targetCalories,
  pet,
}: PersonalizedHeroProps) {
  const percent = targetCalories > 0 ? Math.round((consumedCalories / targetCalories) * 100) : 0;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - Text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] font-bold leading-tight text-primary-text">
            Welcome back, {name}
          </h1>
          <p className="text-base text-secondary-text leading-relaxed">
            You&apos;ve had {consumedCalories.toLocaleString()} of{" "}
            {targetCalories.toLocaleString()} kcal this week ({percent}%). Keep your streak pet
            happy by hitting your targets.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" href="/meal-tracker">
              Log a meal
            </Button>
            <Button variant="secondary" href="/dashboard">
              View dashboard
            </Button>
          </div>
        </div>

        {/* Right column - Streak pet */}
        <div className="flex flex-col items-center justify-center gap-3">
          <StreakPet {...pet} className="w-full max-w-xs" />
          <p className="text-sm text-secondary-text text-center max-w-xs">
            Your pet&apos;s look reflects your eating habits — it updates every week.
          </p>
        </div>
      </div>
    </section>
  );
}
