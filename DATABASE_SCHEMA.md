# LifeWell Database Schema

**Stack:** PostgreSQL on Supabase + Prisma ORM 7

## Setup

1. **Prisma 7** uses a new configuration approach:
   - `prisma/schema.prisma` — data models (no `url` field; moved to config)
   - `prisma.config.ts` — datasource URL from `DATABASE_URL` env var
   - `.env` — holds `DATABASE_URL`
   - `lib/prisma.ts` — PrismaClient singleton that uses the `@prisma/adapter-pg` driver adapter (required in Prisma 7)

2. **Install deps** (already done):

   ```
   prisma
   @prisma/client
   @prisma/adapter-pg
   pg
   tsx (dev)
   dotenv (dev)
   ```

3. **Commands:**
   | Command | Purpose |
   |---------|---------|
   | `npm run db:validate` | Validate schema |
   | `npm run db:generate` | Generate Prisma Client |
   | `npm run db:migrate` | Create/apply dev migrations |
   | `npm run db:deploy` | Apply migrations in production (Supabase) |
   | `npm run db:seed` | Seed reference data |
   | `npm run db:studio` | Open Prisma Studio |

4. **Portability:** The schema is **not tied to Supabase**. It uses standard PostgreSQL + Prisma. To switch providers (Neon, RDS, Railway), just change the `DATABASE_URL` in `.env`. To self-host, run the same migrations.

## Models

### User (`users`)

| Field                 | Type          | Notes       |
| --------------------- | ------------- | ----------- |
| id                    | String (cuid) | PK          |
| name                  | String        |             |
| age                   | Int?          |             |
| email                 | String        | UNIQUE      |
| weightKg              | Decimal(5,2)? | `weight_kg` |
| heightCm              | Decimal(5,2)? | `height_cm` |
| createdAt / updatedAt | DateTime      |             |

### Food (`foods`)

Static food catalog. No nutrient columns - nutrients live in `FoodNutrient`.

| Field                   | Type                                                                                                     |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| id                      | String (cuid) PK                                                                                         |
| name                    | String                                                                                                   |
| description             | String?                                                                                                  |
| category                | `FoodCategory` enum (RICE_AND_GRAINS, PROTEIN, FRUIT, VEGETABLE, DAIRY, NUTS_AND_SEEDS, BEVERAGE, OTHER) |
| servingSize             | Decimal(6,2)                                                                                             |
| servingUnit             | String                                                                                                   |
| isActive                | Boolean default true                                                                                     |
| createdAt / updatedAt   | DateTime                                                                                                 |
| indexes: category, name |                                                                                                          |

### Nutrient (`nutrients`)

Lookup catalog of every measurable nutrient, carrying the **global reference standard** (RDA / DRI / WHO).

| Field           | Type                                       | Notes                                      |
| --------------- | ------------------------------------------ | ------------------------------------------ |
| id              | String (cuid) PK                           |                                            |
| code            | String UNIQUE                              | e.g. `calories`, `sodium_mg`, `calcium_mg` |
| name            | String                                     | e.g. "Calories", "Calcium"                 |
| unit            | `NutrientUnit` enum (KCAL, G, MG, MCG, IU) |                                            |
| dailyReference  | Decimal(10,2)?                             | global default recommended daily amount    |
| referenceSource | String?                                    | "FDA Daily Value", "NIH DRI", "WHO"        |
| referenceUrl    | String?                                    | link to that standard                      |
| isEnergy        | Boolean default false                      | marks the calories row                     |
| sortOrder       | Int                                        |                                            |

### FoodNutrient (`food_nutrients`)

One row per (food, nutrient) with **per-serving amount** and its citation.

| Field                      | Type             | Notes                   |
| -------------------------- | ---------------- | ----------------------- |
| id                         | String (cuid) PK |                         |
| foodId                     | FK -> Food       | onDelete: Cascade       |
| nutrientId                 | FK -> Nutrient   |                         |
| amountPerServing           | Decimal(12,4)    | value per one serving   |
| source                     | String?          | "USDA FoodData Central" |
| sourceUrl                  | String?          |                         |
| sourceIdentifier           | String?          | "FDC ID 168878"         |
| UNIQUE(foodId, nutrientId) |                  |                         |

This is where your meal-nutrient **references** live - every value is traceable to its source.

### UserTarget (`user_targets`)

Per-user daily intake targets (optional). Falls back to `Nutrient.dailyReference` if absent.

| Field                      | Type             | Notes             |
| -------------------------- | ---------------- | ----------------- |
| id                         | String (cuid) PK |                   |
| userId                     | FK -> User       | onDelete: Cascade |
| nutrientId                 | FK -> Nutrient   |                   |
| targetAmount               | Decimal(10,2)    |                   |
| source / sourceUrl         | String?          |                   |
| UNIQUE(userId, nutrientId) |                  |                   |

### MealEntry (`meal_entries`)

A food item logged by a user.

| Field     | Type                                              | Notes                    |
| --------- | ------------------------------------------------- | ------------------------ |
| id        | String (cuid) PK                                  |                          |
| userId    | FK -> User                                        | onDelete: Cascade        |
| foodId    | FK -> Food                                        |                          |
| quantity  | Decimal(6,2) default 1                            | number of servings       |
| mealType  | `MealType` enum (BREAKFAST, LUNCH, DINNER, SNACK) |                          |
| eatenAt   | DateTime                                          | index: (userId, eatenAt) |
| createdAt | DateTime                                          |                          |

### MealEntryNutrient (`meal_entry_nutrients`)

Snapshot of consumed nutrient amounts per meal entry (quantity x FoodNutrient.amount). Keeps historical values even if the food catalog changes later.

| Field                           | Type                      |
| ------------------------------- | ------------------------- |
| id                              | String (cuid) PK          |
| mealEntryId                     | FK -> MealEntry (Cascade) |
| nutrientId                      | FK -> Nutrient            |
| amountConsumed                  | Decimal(12,4)             |
| UNIQUE(mealEntryId, nutrientId) |                           |

## Relationships

```
User 1---N MealEntry ---N MealEntryNutrient N---1 Nutrient
User 1---N UserTarget   N---1 Nutrient
Food 1---N FoodNutrient N---1 Nutrient
Food 1---N MealEntry
```

## Example Queries

**Daily calorie intake:**

```ts
const result = await prisma.mealEntryNutrient.aggregate({
  where: {
    nutrient: { code: "calories" },
    mealEntry: {
      userId,
      eatenAt: { gte: startOfDay, lt: endOfDay },
    },
  },
  _sum: { amountConsumed: true },
});
```

**Weekly mineral intake (e.g. calcium):**

```ts
const result = await prisma.mealEntryNutrient.aggregate({
  where: {
    nutrient: { code: "calcium_mg" },
    mealEntry: {
      userId,
      eatenAt: { gte: startOfWeek, lt: endOfWeek },
    },
  },
  _sum: { amountConsumed: true },
});
```

**Recommended daily target for a nutrient:**

```ts
const target = await prisma.userTarget.findUnique({
  where: { userId_nutrientId: { userId, nutrientId } },
});
// fallback:
const fallback = await prisma.nutrient.findUnique({
  where: { code: "calcium_mg" },
});
```

## Scalability Notes

- **Normalized EAV-style design** - adding a new mineral (e.g. iodine, selenium) requires **zero schema changes**; just insert a new `Nutrient` row.
- **Indexed hot paths** - `(userId, eatenAt)` on MealEntry, `(foodId, nutrientId)` unique on FoodNutrient.
- **Snapshot integrity** - `MealEntryNutrient` stores the computed amount at log time, so later food-catalog corrections never rewrite history.
- **Provider-agnostic** - plain PostgreSQL schema; Supabase is just the hosting. Migration SQL is standard PostgreSQL.
