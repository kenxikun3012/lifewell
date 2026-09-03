import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FoodSection, { type FoodSectionItem } from "@/components/FoodSection";
import Footer from "@/components/Footer";
import PersonalizedHero from "@/components/home/PersonalizedHero";
import OnboardingPrompt from "@/components/home/OnboardingPrompt";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { getUserTargets } from "@/app/targets/actions";
import { getWeeklySummary } from "@/app/food/actions";
import { getOrUpdatePetState } from "@/lib/pet";
import { mondayOfWeek } from "@/lib/dates";

export const dynamic = "force-dynamic";

async function getCategoryFoods(categoryName: string): Promise<FoodSectionItem[]> {
  const foods = await prisma.food.findMany({
    where: { category: { name: categoryName } },
    orderBy: { name: "asc" },
    take: 4,
    select: { id: true, name: true, calories: true, imageUrl: true },
  });

  return foods.map((f) => ({
    id: f.id,
    name: f.name,
    calories: Number(f.calories),
    imageUrl: f.imageUrl,
  }));
}

/** The newest additions to the admin catalog, excluding foods already shown elsewhere on the page. */
async function getNewestFoods(excludeIds: string[]): Promise<FoodSectionItem[]> {
  const foods = await prisma.food.findMany({
    where: excludeIds.length > 0 ? { id: { notIn: excludeIds } } : undefined,
    orderBy: { createdAt: "desc" },
    take: 4,
    select: { id: true, name: true, calories: true, imageUrl: true },
  });

  return foods.map((f) => ({
    id: f.id,
    name: f.name,
    calories: Number(f.calories),
    imageUrl: f.imageUrl,
  }));
}

export default async function Home() {
  const [riceGrainsFoods, meatFoods, session] = await Promise.all([
    getCategoryFoods("Rice & Grains"),
    // No literal "Protein" category exists in the admin catalog — "Meat" is
    // the closest match. The section title stays "Protein" as marketing
    // copy; only its backing data comes from the real Meat category.
    getCategoryFoods("Meat"),
    getSession(),
  ]);
  const commonFoods = await getNewestFoods([
    ...riceGrainsFoods.map((f) => f.id),
    ...meatFoods.map((f) => f.id),
  ]);

  // Read-only lookup — not requireUser()'s upsert, so just visiting "/"
  // while signed in doesn't silently create a Profile before onboarding.
  const profile = session?.user
    ? await prisma.profile.findUnique({ where: { id: session.user.id } })
    : null;
  const name = session?.user
    ? session.user.name || session.user.email?.split("@")[0] || "there"
    : "";

  let heroSection: ReactNode;
  if (!session?.user) {
    heroSection = <Hero />;
  } else if (!profile?.onboardingCompletedAt) {
    heroSection = <OnboardingPrompt name={name} />;
  } else {
    const currentWeekStart = mondayOfWeek(new Date());
    const [targets, weekly, pet] = await Promise.all([
      getUserTargets(),
      getWeeklySummary(currentWeekStart),
      getOrUpdatePetState(profile),
    ]);
    heroSection = (
      <PersonalizedHero
        name={name}
        consumedCalories={Math.round(weekly.totalCalories)}
        targetCalories={Math.round(targets.calories * 7)}
        pet={pet}
      />
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        {heroSection}

        {/* Calories in Common Foods Section — newest additions to the catalog */}
        <FoodSection title="Calories in Common Foods" foods={commonFoods} />

        {/* Rice & Grains Section */}
        <FoodSection
          title="Rice & Grains"
          foods={riceGrainsFoods}
          showSeeMore
          seeMoreHref="/foods/rice-grains"
        />

        {/* Protein Section */}
        <FoodSection
          title="Protein"
          foods={meatFoods}
          showSeeMore
          seeMoreHref="/foods/protein"
        />
      </main>
      <Footer />
    </>
  );
}
