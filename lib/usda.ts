// USDA FoodData Central (FDC) API helpers — server-side only.
// The API key is kept secret in the server environment and is never
// exposed to the browser.

export interface USDAFoodSearchResult {
  fdcId: number;
  description: string;
  brand?: string | null;
  dataType: string;
  foodCategory?: string | null;
}

export interface USDANutrient {
  nutrientId: number;
  nutrientName: string;
  unitName: string;
  value: number;
}

export interface USDAFoodDetail {
  fdcId: number;
  description: string;
  brand?: string | null;
  dataType: string;
  foodCategory?: string | null;
  servingSize?: number | null;
  servingUnit?: string | null;
  nutrients: USDANutrient[];
}

interface FDCListResponse {
  foods: {
    fdcId: number;
    description: string;
    brandOwner?: string | null;
    dataType: string;
    foodCategory?: string | null;
  }[];
}

interface FDCFoodResponse {
  fdcId: number;
  description: string;
  brandOwner?: string | null;
  dataType: string;
  foodCategory?: { description?: string | null } | null;
  servingSize?: number | null;
  servingUnit?: string | null;
  foodNutrients?: {
    nutrient: {
      id: number;
      name: string;
      unitName: string;
    };
    amount: number;
  }[];
}

const FDC_BASE = "https://api.nal.usda.gov/fdc/v1";
const API_KEY = process.env.USDA_API_KEY;

async function fdcFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${FDC_BASE}${path}`, {
    headers: { accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`USDA FDC request failed (${res.status})`);
  }

  return res.json() as Promise<T>;
}

/**
 * Search the USDA food database. Returns a compact list of matches.
 */
export async function searchUSDAFoods(
  query: string,
  limit = 8
): Promise<USDAFoodSearchResult[]> {
  const q = query.trim();
  if (!q) return [];

  const params = new URLSearchParams({
    api_key: API_KEY ?? "",
    query: q,
    pageSize: String(limit),
    pageNumber: "1",
    dataType: "Foundation,SR Legacy,Survey (FNDDS)",
    requireAllWords: "true",
  });

  const data = await fdcFetch<FDCListResponse>(`/foods/search?${params}`);
  return (data.foods ?? []).map((food) => ({
    fdcId: food.fdcId,
    description: food.description,
    brand: food.brandOwner ?? null,
    dataType: food.dataType,
    foodCategory: food.foodCategory ?? null,
  }));
}

/**
 * Fetch full nutrition detail for one food by FDC id.
 */
export async function getUSDAFoodDetail(fdcId: number): Promise<USDAFoodDetail> {
  const params = new URLSearchParams({
    api_key: API_KEY ?? "",
  });

  const data = await fdcFetch<FDCFoodResponse>(
    `/food/${fdcId}?${params}`
  );

  return {
    fdcId: data.fdcId,
    description: data.description,
    brand: data.brandOwner ?? null,
    dataType: data.dataType,
    foodCategory: data.foodCategory?.description ?? null,
    servingSize: data.servingSize ?? null,
    servingUnit: data.servingUnit ?? null,
    nutrients: (data.foodNutrients ?? []).map((fn) => ({
      nutrientId: fn.nutrient.id,
      nutrientName: fn.nutrient.name,
      unitName: fn.nutrient.unitName,
      value: fn.amount,
    })),
  };
}