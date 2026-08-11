import Button from "./Button";
import FoodCard from "./FoodCard";
import FoodSlider from "./FoodSlider";
import { proteinFoods, riceGrainsFoods } from "@/lib/food-data";

interface FoodSectionProps {
  title: string;
  showSlider?: boolean;
  showSeeMore?: boolean;
  seeMoreHref?: string;
}

export default function FoodSection({
  title,
  showSlider = false,
  showSeeMore = false,
  seeMoreHref,
}: FoodSectionProps) {
  const isProtein = title.toLowerCase().includes("protein");
  const foods = isProtein ? proteinFoods : riceGrainsFoods;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-primary-text">{title}</h2>
        {showSeeMore && (
          <Button variant="secondary" href={seeMoreHref}>
            See more
          </Button>
        )}
      </div>

      {/* Food Cards Grid - show only first 4 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {foods.slice(0, 4).map((food, index) => (
          <FoodCard
            key={index}
            title={food.title}
            calories={food.calories}
            imagePlaceholder={food.imagePlaceholder}
          />
        ))}
      </div>

      {/* Slider placeholder */}
      {showSlider && (
        <div className="mt-8">
          <FoodSlider />
        </div>
      )}
    </section>
  );
}