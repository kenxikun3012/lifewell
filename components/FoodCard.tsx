import Image from "next/image";

interface FoodCardProps {
  title?: string;
  calories?: number;
  imagePlaceholder?: string;
  imageUrl?: string;
}

export default function FoodCard({
  title = "Food Card Placeholder",
  calories = 0,
  imagePlaceholder = "Food Image",
  imageUrl,
}: FoodCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="h-40 bg-card flex items-center justify-center relative">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        ) : (
          <span className="text-primary-green font-medium text-sm">
            {imagePlaceholder}
          </span>
        )}
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
