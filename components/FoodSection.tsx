import Button from "./Button";
import FoodCard from "./FoodCard";
import FoodSlider from "./FoodSlider";

export interface FoodSectionItem {
  id: string;
  name: string;
  calories: number;
  imageUrl: string;
}

interface FoodSectionProps {
  title: string;
  foods: FoodSectionItem[];
  showSlider?: boolean;
  showSeeMore?: boolean;
  seeMoreHref?: string;
}

export default function FoodSection({
  title,
  foods,
  showSlider = false,
  showSeeMore = false,
  seeMoreHref,
}: FoodSectionProps) {
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

      {foods.length === 0 ? (
        <p className="text-secondary-text text-sm">
          No foods in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {foods.slice(0, 4).map((food) => (
            <FoodCard
              key={food.id}
              title={food.name}
              calories={food.calories}
              imageUrl={food.imageUrl}
            />
          ))}
        </div>
      )}

      {/* Slider placeholder */}
      {showSlider && (
        <div className="mt-8">
          <FoodSlider />
        </div>
      )}
    </section>
  );
}
