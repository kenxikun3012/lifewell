import FoodCategoryPage from "@/components/FoodCategoryPage";
import { proteinFoods } from "@/lib/food-data";

export default function ProteinPage() {
  return (
    <FoodCategoryPage
      title="Protein"
      description="Explore the calorie content of all protein-rich foods to build a balanced and nutritious diet."
      foods={proteinFoods}
    />
  );
}