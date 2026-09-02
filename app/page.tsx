import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FoodSection, { type FoodSectionItem } from "@/components/FoodSection";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

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

export default async function Home() {
  const [riceGrainsFoods, meatFoods] = await Promise.all([
    getCategoryFoods("Rice & Grains"),
    // No literal "Protein" category exists in the admin catalog — "Meat" is
    // the closest match. The section title stays "Protein" as marketing
    // copy; only its backing data comes from the real Meat category.
    getCategoryFoods("Meat"),
  ]);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Calories in Common Foods Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-[36px] font-bold text-primary-text mb-8">
            Calories in Common Foods
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { title: "Apple", calories: 95 },
              { title: "Banana", calories: 105 },
              { title: "Orange", calories: 62 },
              { title: "Milk (1 cup)", calories: 149 },
            ].map((food, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="h-40 bg-card flex items-center justify-center">
                  <span className="text-primary-green font-medium text-sm">
                    {food.title} Image
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary-text text-lg">
                    {food.title}
                  </h3>
                  <p className="text-secondary-text text-sm mt-1">
                    {food.calories} kcal per serving
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rice & Grains Section */}
        <FoodSection
          title="Rice & Grains"
          foods={riceGrainsFoods}
          showSeeMore
          showSlider
          seeMoreHref="/foods/rice-grains"
        />

        {/* Protein Section */}
        <FoodSection
          title="Protein"
          foods={meatFoods}
          showSeeMore
          showSlider
          seeMoreHref="/foods/protein"
        />
      </main>
      <Footer />
    </>
  );
}
