interface FoodCardProps {
  title?: string;
  calories?: number;
  imagePlaceholder?: string;
}

export default function FoodCard({
  title = "Food Card Placeholder",
  calories = 0,
  imagePlaceholder = "Food Image",
}: FoodCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Image placeholder */}
      <div className="h-40 bg-card flex items-center justify-center">
        <span className="text-primary-green font-medium text-sm">
          {imagePlaceholder}
        </span>
      </div>
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-primary-text text-lg">{title}</h3>
        {calories > 0 && (
          <p className="text-secondary-text text-sm mt-1">
            {calories} kcal per serving
          </p>
        )}
      </div>
    </div>
  );
}