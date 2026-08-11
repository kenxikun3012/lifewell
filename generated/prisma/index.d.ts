
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * Stores user profile data
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Food
 * Food catalog — static nutrition reference data
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model Nutrient
 * Nutrient catalog — every measurable nutrient, with its reference standard (RDA/DRI/WHO)
 */
export type Nutrient = $Result.DefaultSelection<Prisma.$NutrientPayload>
/**
 * Model FoodNutrient
 * Per-food nutrient values (one row per nutrient per food), each with its citation
 */
export type FoodNutrient = $Result.DefaultSelection<Prisma.$FoodNutrientPayload>
/**
 * Model UserTarget
 * Per-user daily intake targets (optional overrides; fallback = Nutrient.dailyReference)
 */
export type UserTarget = $Result.DefaultSelection<Prisma.$UserTargetPayload>
/**
 * Model MealEntry
 * A food entry logged by the user (meal log)
 */
export type MealEntry = $Result.DefaultSelection<Prisma.$MealEntryPayload>
/**
 * Model MealEntryNutrient
 * Snapshot of nutrient amounts consumed per meal entry (quantity x FoodNutrient.amount)
 */
export type MealEntryNutrient = $Result.DefaultSelection<Prisma.$MealEntryNutrientPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MealType: {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
  SNACK: 'SNACK'
};

export type MealType = (typeof MealType)[keyof typeof MealType]


export const FoodCategory: {
  RICE_AND_GRAINS: 'RICE_AND_GRAINS',
  PROTEIN: 'PROTEIN',
  FRUIT: 'FRUIT',
  VEGETABLE: 'VEGETABLE',
  DAIRY: 'DAIRY',
  NUTS_AND_SEEDS: 'NUTS_AND_SEEDS',
  BEVERAGE: 'BEVERAGE',
  OTHER: 'OTHER'
};

export type FoodCategory = (typeof FoodCategory)[keyof typeof FoodCategory]


export const NutrientUnit: {
  KCAL: 'KCAL',
  G: 'G',
  MG: 'MG',
  MCG: 'MCG',
  IU: 'IU'
};

export type NutrientUnit = (typeof NutrientUnit)[keyof typeof NutrientUnit]

}

export type MealType = $Enums.MealType

export const MealType: typeof $Enums.MealType

export type FoodCategory = $Enums.FoodCategory

export const FoodCategory: typeof $Enums.FoodCategory

export type NutrientUnit = $Enums.NutrientUnit

export const NutrientUnit: typeof $Enums.NutrientUnit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutrient`: Exposes CRUD operations for the **Nutrient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nutrients
    * const nutrients = await prisma.nutrient.findMany()
    * ```
    */
  get nutrient(): Prisma.NutrientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodNutrient`: Exposes CRUD operations for the **FoodNutrient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodNutrients
    * const foodNutrients = await prisma.foodNutrient.findMany()
    * ```
    */
  get foodNutrient(): Prisma.FoodNutrientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTarget`: Exposes CRUD operations for the **UserTarget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTargets
    * const userTargets = await prisma.userTarget.findMany()
    * ```
    */
  get userTarget(): Prisma.UserTargetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealEntry`: Exposes CRUD operations for the **MealEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealEntries
    * const mealEntries = await prisma.mealEntry.findMany()
    * ```
    */
  get mealEntry(): Prisma.MealEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealEntryNutrient`: Exposes CRUD operations for the **MealEntryNutrient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealEntryNutrients
    * const mealEntryNutrients = await prisma.mealEntryNutrient.findMany()
    * ```
    */
  get mealEntryNutrient(): Prisma.MealEntryNutrientDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Food: 'Food',
    Nutrient: 'Nutrient',
    FoodNutrient: 'FoodNutrient',
    UserTarget: 'UserTarget',
    MealEntry: 'MealEntry',
    MealEntryNutrient: 'MealEntryNutrient'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "food" | "nutrient" | "foodNutrient" | "userTarget" | "mealEntry" | "mealEntryNutrient"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      Nutrient: {
        payload: Prisma.$NutrientPayload<ExtArgs>
        fields: Prisma.NutrientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutrientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutrientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>
          }
          findFirst: {
            args: Prisma.NutrientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutrientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>
          }
          findMany: {
            args: Prisma.NutrientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>[]
          }
          create: {
            args: Prisma.NutrientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>
          }
          createMany: {
            args: Prisma.NutrientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutrientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>[]
          }
          delete: {
            args: Prisma.NutrientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>
          }
          update: {
            args: Prisma.NutrientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>
          }
          deleteMany: {
            args: Prisma.NutrientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutrientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NutrientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>[]
          }
          upsert: {
            args: Prisma.NutrientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutrientPayload>
          }
          aggregate: {
            args: Prisma.NutrientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutrient>
          }
          groupBy: {
            args: Prisma.NutrientGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutrientGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutrientCountArgs<ExtArgs>
            result: $Utils.Optional<NutrientCountAggregateOutputType> | number
          }
        }
      }
      FoodNutrient: {
        payload: Prisma.$FoodNutrientPayload<ExtArgs>
        fields: Prisma.FoodNutrientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodNutrientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodNutrientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>
          }
          findFirst: {
            args: Prisma.FoodNutrientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodNutrientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>
          }
          findMany: {
            args: Prisma.FoodNutrientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>[]
          }
          create: {
            args: Prisma.FoodNutrientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>
          }
          createMany: {
            args: Prisma.FoodNutrientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodNutrientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>[]
          }
          delete: {
            args: Prisma.FoodNutrientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>
          }
          update: {
            args: Prisma.FoodNutrientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>
          }
          deleteMany: {
            args: Prisma.FoodNutrientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodNutrientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodNutrientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>[]
          }
          upsert: {
            args: Prisma.FoodNutrientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodNutrientPayload>
          }
          aggregate: {
            args: Prisma.FoodNutrientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodNutrient>
          }
          groupBy: {
            args: Prisma.FoodNutrientGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodNutrientGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodNutrientCountArgs<ExtArgs>
            result: $Utils.Optional<FoodNutrientCountAggregateOutputType> | number
          }
        }
      }
      UserTarget: {
        payload: Prisma.$UserTargetPayload<ExtArgs>
        fields: Prisma.UserTargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTargetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTargetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>
          }
          findFirst: {
            args: Prisma.UserTargetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTargetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>
          }
          findMany: {
            args: Prisma.UserTargetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>[]
          }
          create: {
            args: Prisma.UserTargetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>
          }
          createMany: {
            args: Prisma.UserTargetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTargetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>[]
          }
          delete: {
            args: Prisma.UserTargetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>
          }
          update: {
            args: Prisma.UserTargetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>
          }
          deleteMany: {
            args: Prisma.UserTargetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTargetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTargetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>[]
          }
          upsert: {
            args: Prisma.UserTargetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTargetPayload>
          }
          aggregate: {
            args: Prisma.UserTargetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTarget>
          }
          groupBy: {
            args: Prisma.UserTargetGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTargetCountArgs<ExtArgs>
            result: $Utils.Optional<UserTargetCountAggregateOutputType> | number
          }
        }
      }
      MealEntry: {
        payload: Prisma.$MealEntryPayload<ExtArgs>
        fields: Prisma.MealEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          findFirst: {
            args: Prisma.MealEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          findMany: {
            args: Prisma.MealEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>[]
          }
          create: {
            args: Prisma.MealEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          createMany: {
            args: Prisma.MealEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>[]
          }
          delete: {
            args: Prisma.MealEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          update: {
            args: Prisma.MealEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          deleteMany: {
            args: Prisma.MealEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>[]
          }
          upsert: {
            args: Prisma.MealEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          aggregate: {
            args: Prisma.MealEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealEntry>
          }
          groupBy: {
            args: Prisma.MealEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealEntryCountArgs<ExtArgs>
            result: $Utils.Optional<MealEntryCountAggregateOutputType> | number
          }
        }
      }
      MealEntryNutrient: {
        payload: Prisma.$MealEntryNutrientPayload<ExtArgs>
        fields: Prisma.MealEntryNutrientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealEntryNutrientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealEntryNutrientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>
          }
          findFirst: {
            args: Prisma.MealEntryNutrientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealEntryNutrientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>
          }
          findMany: {
            args: Prisma.MealEntryNutrientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>[]
          }
          create: {
            args: Prisma.MealEntryNutrientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>
          }
          createMany: {
            args: Prisma.MealEntryNutrientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealEntryNutrientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>[]
          }
          delete: {
            args: Prisma.MealEntryNutrientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>
          }
          update: {
            args: Prisma.MealEntryNutrientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>
          }
          deleteMany: {
            args: Prisma.MealEntryNutrientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealEntryNutrientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealEntryNutrientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>[]
          }
          upsert: {
            args: Prisma.MealEntryNutrientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryNutrientPayload>
          }
          aggregate: {
            args: Prisma.MealEntryNutrientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealEntryNutrient>
          }
          groupBy: {
            args: Prisma.MealEntryNutrientGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealEntryNutrientGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealEntryNutrientCountArgs<ExtArgs>
            result: $Utils.Optional<MealEntryNutrientCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    food?: FoodOmit
    nutrient?: NutrientOmit
    foodNutrient?: FoodNutrientOmit
    userTarget?: UserTargetOmit
    mealEntry?: MealEntryOmit
    mealEntryNutrient?: MealEntryNutrientOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mealEntries: number
    userTargets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealEntries?: boolean | UserCountOutputTypeCountMealEntriesArgs
    userTargets?: boolean | UserCountOutputTypeCountUserTargetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTargetWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    nutrients: number
    mealEntries: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nutrients?: boolean | FoodCountOutputTypeCountNutrientsArgs
    mealEntries?: boolean | FoodCountOutputTypeCountMealEntriesArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountNutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodNutrientWhereInput
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountMealEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
  }


  /**
   * Count Type NutrientCountOutputType
   */

  export type NutrientCountOutputType = {
    foodNutrients: number
    userTargets: number
    mealEntryNutrients: number
  }

  export type NutrientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodNutrients?: boolean | NutrientCountOutputTypeCountFoodNutrientsArgs
    userTargets?: boolean | NutrientCountOutputTypeCountUserTargetsArgs
    mealEntryNutrients?: boolean | NutrientCountOutputTypeCountMealEntryNutrientsArgs
  }

  // Custom InputTypes
  /**
   * NutrientCountOutputType without action
   */
  export type NutrientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutrientCountOutputType
     */
    select?: NutrientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NutrientCountOutputType without action
   */
  export type NutrientCountOutputTypeCountFoodNutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodNutrientWhereInput
  }

  /**
   * NutrientCountOutputType without action
   */
  export type NutrientCountOutputTypeCountUserTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTargetWhereInput
  }

  /**
   * NutrientCountOutputType without action
   */
  export type NutrientCountOutputTypeCountMealEntryNutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryNutrientWhereInput
  }


  /**
   * Count Type MealEntryCountOutputType
   */

  export type MealEntryCountOutputType = {
    nutrients: number
  }

  export type MealEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nutrients?: boolean | MealEntryCountOutputTypeCountNutrientsArgs
  }

  // Custom InputTypes
  /**
   * MealEntryCountOutputType without action
   */
  export type MealEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryCountOutputType
     */
    select?: MealEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealEntryCountOutputType without action
   */
  export type MealEntryCountOutputTypeCountNutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryNutrientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    weightKg: Decimal | null
    heightCm: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    weightKg: Decimal | null
    heightCm: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    email: string | null
    weightKg: Decimal | null
    heightCm: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    email: string | null
    weightKg: Decimal | null
    heightCm: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    age: number
    email: number
    weightKg: number
    heightCm: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    weightKg?: true
    heightCm?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    weightKg?: true
    heightCm?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    weightKg?: true
    heightCm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    weightKg?: true
    heightCm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    weightKg?: true
    heightCm?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    age: number | null
    email: string
    weightKg: Decimal | null
    heightCm: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    weightKg?: boolean
    heightCm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealEntries?: boolean | User$mealEntriesArgs<ExtArgs>
    userTargets?: boolean | User$userTargetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    weightKg?: boolean
    heightCm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    weightKg?: boolean
    heightCm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    weightKg?: boolean
    heightCm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "email" | "weightKg" | "heightCm" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealEntries?: boolean | User$mealEntriesArgs<ExtArgs>
    userTargets?: boolean | User$userTargetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mealEntries: Prisma.$MealEntryPayload<ExtArgs>[]
      userTargets: Prisma.$UserTargetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      age: number | null
      email: string
      weightKg: Prisma.Decimal | null
      heightCm: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealEntries<T extends User$mealEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$mealEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTargets<T extends User$userTargetsArgs<ExtArgs> = {}>(args?: Subset<T, User$userTargetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly weightKg: FieldRef<"User", 'Decimal'>
    readonly heightCm: FieldRef<"User", 'Decimal'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mealEntries
   */
  export type User$mealEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    where?: MealEntryWhereInput
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    cursor?: MealEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * User.userTargets
   */
  export type User$userTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    where?: UserTargetWhereInput
    orderBy?: UserTargetOrderByWithRelationInput | UserTargetOrderByWithRelationInput[]
    cursor?: UserTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTargetScalarFieldEnum | UserTargetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    servingSize: Decimal | null
  }

  export type FoodSumAggregateOutputType = {
    servingSize: Decimal | null
  }

  export type FoodMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: $Enums.FoodCategory | null
    servingSize: Decimal | null
    servingUnit: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: $Enums.FoodCategory | null
    servingSize: Decimal | null
    servingUnit: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    servingSize: number
    servingUnit: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    servingSize?: true
  }

  export type FoodSumAggregateInputType = {
    servingSize?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    servingSize?: true
    servingUnit?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    servingSize?: true
    servingUnit?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    servingSize?: true
    servingUnit?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: string
    name: string
    description: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal
    servingUnit: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nutrients?: boolean | Food$nutrientsArgs<ExtArgs>
    mealEntries?: boolean | Food$mealEntriesArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "servingSize" | "servingUnit" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nutrients?: boolean | Food$nutrientsArgs<ExtArgs>
    mealEntries?: boolean | Food$mealEntriesArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      nutrients: Prisma.$FoodNutrientPayload<ExtArgs>[]
      mealEntries: Prisma.$MealEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      category: $Enums.FoodCategory
      servingSize: Prisma.Decimal
      servingUnit: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nutrients<T extends Food$nutrientsArgs<ExtArgs> = {}>(args?: Subset<T, Food$nutrientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mealEntries<T extends Food$mealEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Food$mealEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'String'>
    readonly name: FieldRef<"Food", 'String'>
    readonly description: FieldRef<"Food", 'String'>
    readonly category: FieldRef<"Food", 'FoodCategory'>
    readonly servingSize: FieldRef<"Food", 'Decimal'>
    readonly servingUnit: FieldRef<"Food", 'String'>
    readonly isActive: FieldRef<"Food", 'Boolean'>
    readonly createdAt: FieldRef<"Food", 'DateTime'>
    readonly updatedAt: FieldRef<"Food", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food.nutrients
   */
  export type Food$nutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    where?: FoodNutrientWhereInput
    orderBy?: FoodNutrientOrderByWithRelationInput | FoodNutrientOrderByWithRelationInput[]
    cursor?: FoodNutrientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodNutrientScalarFieldEnum | FoodNutrientScalarFieldEnum[]
  }

  /**
   * Food.mealEntries
   */
  export type Food$mealEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    where?: MealEntryWhereInput
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    cursor?: MealEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model Nutrient
   */

  export type AggregateNutrient = {
    _count: NutrientCountAggregateOutputType | null
    _avg: NutrientAvgAggregateOutputType | null
    _sum: NutrientSumAggregateOutputType | null
    _min: NutrientMinAggregateOutputType | null
    _max: NutrientMaxAggregateOutputType | null
  }

  export type NutrientAvgAggregateOutputType = {
    dailyReference: Decimal | null
    sortOrder: number | null
  }

  export type NutrientSumAggregateOutputType = {
    dailyReference: Decimal | null
    sortOrder: number | null
  }

  export type NutrientMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    unit: $Enums.NutrientUnit | null
    dailyReference: Decimal | null
    referenceSource: string | null
    referenceUrl: string | null
    isEnergy: boolean | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type NutrientMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    unit: $Enums.NutrientUnit | null
    dailyReference: Decimal | null
    referenceSource: string | null
    referenceUrl: string | null
    isEnergy: boolean | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type NutrientCountAggregateOutputType = {
    id: number
    code: number
    name: number
    unit: number
    dailyReference: number
    referenceSource: number
    referenceUrl: number
    isEnergy: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type NutrientAvgAggregateInputType = {
    dailyReference?: true
    sortOrder?: true
  }

  export type NutrientSumAggregateInputType = {
    dailyReference?: true
    sortOrder?: true
  }

  export type NutrientMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    unit?: true
    dailyReference?: true
    referenceSource?: true
    referenceUrl?: true
    isEnergy?: true
    sortOrder?: true
    createdAt?: true
  }

  export type NutrientMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    unit?: true
    dailyReference?: true
    referenceSource?: true
    referenceUrl?: true
    isEnergy?: true
    sortOrder?: true
    createdAt?: true
  }

  export type NutrientCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    unit?: true
    dailyReference?: true
    referenceSource?: true
    referenceUrl?: true
    isEnergy?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type NutrientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutrient to aggregate.
     */
    where?: NutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutrients to fetch.
     */
    orderBy?: NutrientOrderByWithRelationInput | NutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nutrients
    **/
    _count?: true | NutrientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutrientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutrientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutrientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutrientMaxAggregateInputType
  }

  export type GetNutrientAggregateType<T extends NutrientAggregateArgs> = {
        [P in keyof T & keyof AggregateNutrient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutrient[P]>
      : GetScalarType<T[P], AggregateNutrient[P]>
  }




  export type NutrientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutrientWhereInput
    orderBy?: NutrientOrderByWithAggregationInput | NutrientOrderByWithAggregationInput[]
    by: NutrientScalarFieldEnum[] | NutrientScalarFieldEnum
    having?: NutrientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutrientCountAggregateInputType | true
    _avg?: NutrientAvgAggregateInputType
    _sum?: NutrientSumAggregateInputType
    _min?: NutrientMinAggregateInputType
    _max?: NutrientMaxAggregateInputType
  }

  export type NutrientGroupByOutputType = {
    id: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference: Decimal | null
    referenceSource: string | null
    referenceUrl: string | null
    isEnergy: boolean
    sortOrder: number
    createdAt: Date
    _count: NutrientCountAggregateOutputType | null
    _avg: NutrientAvgAggregateOutputType | null
    _sum: NutrientSumAggregateOutputType | null
    _min: NutrientMinAggregateOutputType | null
    _max: NutrientMaxAggregateOutputType | null
  }

  type GetNutrientGroupByPayload<T extends NutrientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutrientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutrientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutrientGroupByOutputType[P]>
            : GetScalarType<T[P], NutrientGroupByOutputType[P]>
        }
      >
    >


  export type NutrientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    unit?: boolean
    dailyReference?: boolean
    referenceSource?: boolean
    referenceUrl?: boolean
    isEnergy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    foodNutrients?: boolean | Nutrient$foodNutrientsArgs<ExtArgs>
    userTargets?: boolean | Nutrient$userTargetsArgs<ExtArgs>
    mealEntryNutrients?: boolean | Nutrient$mealEntryNutrientsArgs<ExtArgs>
    _count?: boolean | NutrientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutrient"]>

  export type NutrientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    unit?: boolean
    dailyReference?: boolean
    referenceSource?: boolean
    referenceUrl?: boolean
    isEnergy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["nutrient"]>

  export type NutrientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    unit?: boolean
    dailyReference?: boolean
    referenceSource?: boolean
    referenceUrl?: boolean
    isEnergy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["nutrient"]>

  export type NutrientSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    unit?: boolean
    dailyReference?: boolean
    referenceSource?: boolean
    referenceUrl?: boolean
    isEnergy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type NutrientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "unit" | "dailyReference" | "referenceSource" | "referenceUrl" | "isEnergy" | "sortOrder" | "createdAt", ExtArgs["result"]["nutrient"]>
  export type NutrientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodNutrients?: boolean | Nutrient$foodNutrientsArgs<ExtArgs>
    userTargets?: boolean | Nutrient$userTargetsArgs<ExtArgs>
    mealEntryNutrients?: boolean | Nutrient$mealEntryNutrientsArgs<ExtArgs>
    _count?: boolean | NutrientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NutrientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NutrientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NutrientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nutrient"
    objects: {
      foodNutrients: Prisma.$FoodNutrientPayload<ExtArgs>[]
      userTargets: Prisma.$UserTargetPayload<ExtArgs>[]
      mealEntryNutrients: Prisma.$MealEntryNutrientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      unit: $Enums.NutrientUnit
      dailyReference: Prisma.Decimal | null
      referenceSource: string | null
      referenceUrl: string | null
      isEnergy: boolean
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["nutrient"]>
    composites: {}
  }

  type NutrientGetPayload<S extends boolean | null | undefined | NutrientDefaultArgs> = $Result.GetResult<Prisma.$NutrientPayload, S>

  type NutrientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutrientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutrientCountAggregateInputType | true
    }

  export interface NutrientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nutrient'], meta: { name: 'Nutrient' } }
    /**
     * Find zero or one Nutrient that matches the filter.
     * @param {NutrientFindUniqueArgs} args - Arguments to find a Nutrient
     * @example
     * // Get one Nutrient
     * const nutrient = await prisma.nutrient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutrientFindUniqueArgs>(args: SelectSubset<T, NutrientFindUniqueArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nutrient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutrientFindUniqueOrThrowArgs} args - Arguments to find a Nutrient
     * @example
     * // Get one Nutrient
     * const nutrient = await prisma.nutrient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutrientFindUniqueOrThrowArgs>(args: SelectSubset<T, NutrientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nutrient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutrientFindFirstArgs} args - Arguments to find a Nutrient
     * @example
     * // Get one Nutrient
     * const nutrient = await prisma.nutrient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutrientFindFirstArgs>(args?: SelectSubset<T, NutrientFindFirstArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nutrient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutrientFindFirstOrThrowArgs} args - Arguments to find a Nutrient
     * @example
     * // Get one Nutrient
     * const nutrient = await prisma.nutrient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutrientFindFirstOrThrowArgs>(args?: SelectSubset<T, NutrientFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nutrients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutrientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nutrients
     * const nutrients = await prisma.nutrient.findMany()
     * 
     * // Get first 10 Nutrients
     * const nutrients = await prisma.nutrient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutrientWithIdOnly = await prisma.nutrient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutrientFindManyArgs>(args?: SelectSubset<T, NutrientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nutrient.
     * @param {NutrientCreateArgs} args - Arguments to create a Nutrient.
     * @example
     * // Create one Nutrient
     * const Nutrient = await prisma.nutrient.create({
     *   data: {
     *     // ... data to create a Nutrient
     *   }
     * })
     * 
     */
    create<T extends NutrientCreateArgs>(args: SelectSubset<T, NutrientCreateArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nutrients.
     * @param {NutrientCreateManyArgs} args - Arguments to create many Nutrients.
     * @example
     * // Create many Nutrients
     * const nutrient = await prisma.nutrient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutrientCreateManyArgs>(args?: SelectSubset<T, NutrientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nutrients and returns the data saved in the database.
     * @param {NutrientCreateManyAndReturnArgs} args - Arguments to create many Nutrients.
     * @example
     * // Create many Nutrients
     * const nutrient = await prisma.nutrient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nutrients and only return the `id`
     * const nutrientWithIdOnly = await prisma.nutrient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NutrientCreateManyAndReturnArgs>(args?: SelectSubset<T, NutrientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nutrient.
     * @param {NutrientDeleteArgs} args - Arguments to delete one Nutrient.
     * @example
     * // Delete one Nutrient
     * const Nutrient = await prisma.nutrient.delete({
     *   where: {
     *     // ... filter to delete one Nutrient
     *   }
     * })
     * 
     */
    delete<T extends NutrientDeleteArgs>(args: SelectSubset<T, NutrientDeleteArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nutrient.
     * @param {NutrientUpdateArgs} args - Arguments to update one Nutrient.
     * @example
     * // Update one Nutrient
     * const nutrient = await prisma.nutrient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutrientUpdateArgs>(args: SelectSubset<T, NutrientUpdateArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nutrients.
     * @param {NutrientDeleteManyArgs} args - Arguments to filter Nutrients to delete.
     * @example
     * // Delete a few Nutrients
     * const { count } = await prisma.nutrient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutrientDeleteManyArgs>(args?: SelectSubset<T, NutrientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutrientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nutrients
     * const nutrient = await prisma.nutrient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutrientUpdateManyArgs>(args: SelectSubset<T, NutrientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutrients and returns the data updated in the database.
     * @param {NutrientUpdateManyAndReturnArgs} args - Arguments to update many Nutrients.
     * @example
     * // Update many Nutrients
     * const nutrient = await prisma.nutrient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nutrients and only return the `id`
     * const nutrientWithIdOnly = await prisma.nutrient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NutrientUpdateManyAndReturnArgs>(args: SelectSubset<T, NutrientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nutrient.
     * @param {NutrientUpsertArgs} args - Arguments to update or create a Nutrient.
     * @example
     * // Update or create a Nutrient
     * const nutrient = await prisma.nutrient.upsert({
     *   create: {
     *     // ... data to create a Nutrient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nutrient we want to update
     *   }
     * })
     */
    upsert<T extends NutrientUpsertArgs>(args: SelectSubset<T, NutrientUpsertArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutrientCountArgs} args - Arguments to filter Nutrients to count.
     * @example
     * // Count the number of Nutrients
     * const count = await prisma.nutrient.count({
     *   where: {
     *     // ... the filter for the Nutrients we want to count
     *   }
     * })
    **/
    count<T extends NutrientCountArgs>(
      args?: Subset<T, NutrientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutrientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutrientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NutrientAggregateArgs>(args: Subset<T, NutrientAggregateArgs>): Prisma.PrismaPromise<GetNutrientAggregateType<T>>

    /**
     * Group by Nutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutrientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NutrientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutrientGroupByArgs['orderBy'] }
        : { orderBy?: NutrientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutrientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutrientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nutrient model
   */
  readonly fields: NutrientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nutrient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutrientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foodNutrients<T extends Nutrient$foodNutrientsArgs<ExtArgs> = {}>(args?: Subset<T, Nutrient$foodNutrientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTargets<T extends Nutrient$userTargetsArgs<ExtArgs> = {}>(args?: Subset<T, Nutrient$userTargetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mealEntryNutrients<T extends Nutrient$mealEntryNutrientsArgs<ExtArgs> = {}>(args?: Subset<T, Nutrient$mealEntryNutrientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nutrient model
   */
  interface NutrientFieldRefs {
    readonly id: FieldRef<"Nutrient", 'String'>
    readonly code: FieldRef<"Nutrient", 'String'>
    readonly name: FieldRef<"Nutrient", 'String'>
    readonly unit: FieldRef<"Nutrient", 'NutrientUnit'>
    readonly dailyReference: FieldRef<"Nutrient", 'Decimal'>
    readonly referenceSource: FieldRef<"Nutrient", 'String'>
    readonly referenceUrl: FieldRef<"Nutrient", 'String'>
    readonly isEnergy: FieldRef<"Nutrient", 'Boolean'>
    readonly sortOrder: FieldRef<"Nutrient", 'Int'>
    readonly createdAt: FieldRef<"Nutrient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Nutrient findUnique
   */
  export type NutrientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * Filter, which Nutrient to fetch.
     */
    where: NutrientWhereUniqueInput
  }

  /**
   * Nutrient findUniqueOrThrow
   */
  export type NutrientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * Filter, which Nutrient to fetch.
     */
    where: NutrientWhereUniqueInput
  }

  /**
   * Nutrient findFirst
   */
  export type NutrientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * Filter, which Nutrient to fetch.
     */
    where?: NutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutrients to fetch.
     */
    orderBy?: NutrientOrderByWithRelationInput | NutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutrients.
     */
    cursor?: NutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutrients.
     */
    distinct?: NutrientScalarFieldEnum | NutrientScalarFieldEnum[]
  }

  /**
   * Nutrient findFirstOrThrow
   */
  export type NutrientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * Filter, which Nutrient to fetch.
     */
    where?: NutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutrients to fetch.
     */
    orderBy?: NutrientOrderByWithRelationInput | NutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutrients.
     */
    cursor?: NutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutrients.
     */
    distinct?: NutrientScalarFieldEnum | NutrientScalarFieldEnum[]
  }

  /**
   * Nutrient findMany
   */
  export type NutrientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * Filter, which Nutrients to fetch.
     */
    where?: NutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutrients to fetch.
     */
    orderBy?: NutrientOrderByWithRelationInput | NutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nutrients.
     */
    cursor?: NutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutrients.
     */
    distinct?: NutrientScalarFieldEnum | NutrientScalarFieldEnum[]
  }

  /**
   * Nutrient create
   */
  export type NutrientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * The data needed to create a Nutrient.
     */
    data: XOR<NutrientCreateInput, NutrientUncheckedCreateInput>
  }

  /**
   * Nutrient createMany
   */
  export type NutrientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nutrients.
     */
    data: NutrientCreateManyInput | NutrientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nutrient createManyAndReturn
   */
  export type NutrientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * The data used to create many Nutrients.
     */
    data: NutrientCreateManyInput | NutrientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nutrient update
   */
  export type NutrientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * The data needed to update a Nutrient.
     */
    data: XOR<NutrientUpdateInput, NutrientUncheckedUpdateInput>
    /**
     * Choose, which Nutrient to update.
     */
    where: NutrientWhereUniqueInput
  }

  /**
   * Nutrient updateMany
   */
  export type NutrientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nutrients.
     */
    data: XOR<NutrientUpdateManyMutationInput, NutrientUncheckedUpdateManyInput>
    /**
     * Filter which Nutrients to update
     */
    where?: NutrientWhereInput
    /**
     * Limit how many Nutrients to update.
     */
    limit?: number
  }

  /**
   * Nutrient updateManyAndReturn
   */
  export type NutrientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * The data used to update Nutrients.
     */
    data: XOR<NutrientUpdateManyMutationInput, NutrientUncheckedUpdateManyInput>
    /**
     * Filter which Nutrients to update
     */
    where?: NutrientWhereInput
    /**
     * Limit how many Nutrients to update.
     */
    limit?: number
  }

  /**
   * Nutrient upsert
   */
  export type NutrientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * The filter to search for the Nutrient to update in case it exists.
     */
    where: NutrientWhereUniqueInput
    /**
     * In case the Nutrient found by the `where` argument doesn't exist, create a new Nutrient with this data.
     */
    create: XOR<NutrientCreateInput, NutrientUncheckedCreateInput>
    /**
     * In case the Nutrient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutrientUpdateInput, NutrientUncheckedUpdateInput>
  }

  /**
   * Nutrient delete
   */
  export type NutrientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
    /**
     * Filter which Nutrient to delete.
     */
    where: NutrientWhereUniqueInput
  }

  /**
   * Nutrient deleteMany
   */
  export type NutrientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutrients to delete
     */
    where?: NutrientWhereInput
    /**
     * Limit how many Nutrients to delete.
     */
    limit?: number
  }

  /**
   * Nutrient.foodNutrients
   */
  export type Nutrient$foodNutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    where?: FoodNutrientWhereInput
    orderBy?: FoodNutrientOrderByWithRelationInput | FoodNutrientOrderByWithRelationInput[]
    cursor?: FoodNutrientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodNutrientScalarFieldEnum | FoodNutrientScalarFieldEnum[]
  }

  /**
   * Nutrient.userTargets
   */
  export type Nutrient$userTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    where?: UserTargetWhereInput
    orderBy?: UserTargetOrderByWithRelationInput | UserTargetOrderByWithRelationInput[]
    cursor?: UserTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTargetScalarFieldEnum | UserTargetScalarFieldEnum[]
  }

  /**
   * Nutrient.mealEntryNutrients
   */
  export type Nutrient$mealEntryNutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    where?: MealEntryNutrientWhereInput
    orderBy?: MealEntryNutrientOrderByWithRelationInput | MealEntryNutrientOrderByWithRelationInput[]
    cursor?: MealEntryNutrientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealEntryNutrientScalarFieldEnum | MealEntryNutrientScalarFieldEnum[]
  }

  /**
   * Nutrient without action
   */
  export type NutrientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrient
     */
    select?: NutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrient
     */
    omit?: NutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutrientInclude<ExtArgs> | null
  }


  /**
   * Model FoodNutrient
   */

  export type AggregateFoodNutrient = {
    _count: FoodNutrientCountAggregateOutputType | null
    _avg: FoodNutrientAvgAggregateOutputType | null
    _sum: FoodNutrientSumAggregateOutputType | null
    _min: FoodNutrientMinAggregateOutputType | null
    _max: FoodNutrientMaxAggregateOutputType | null
  }

  export type FoodNutrientAvgAggregateOutputType = {
    amountPerServing: Decimal | null
  }

  export type FoodNutrientSumAggregateOutputType = {
    amountPerServing: Decimal | null
  }

  export type FoodNutrientMinAggregateOutputType = {
    id: string | null
    foodId: string | null
    nutrientId: string | null
    amountPerServing: Decimal | null
    source: string | null
    sourceUrl: string | null
    sourceIdentifier: string | null
    createdAt: Date | null
  }

  export type FoodNutrientMaxAggregateOutputType = {
    id: string | null
    foodId: string | null
    nutrientId: string | null
    amountPerServing: Decimal | null
    source: string | null
    sourceUrl: string | null
    sourceIdentifier: string | null
    createdAt: Date | null
  }

  export type FoodNutrientCountAggregateOutputType = {
    id: number
    foodId: number
    nutrientId: number
    amountPerServing: number
    source: number
    sourceUrl: number
    sourceIdentifier: number
    createdAt: number
    _all: number
  }


  export type FoodNutrientAvgAggregateInputType = {
    amountPerServing?: true
  }

  export type FoodNutrientSumAggregateInputType = {
    amountPerServing?: true
  }

  export type FoodNutrientMinAggregateInputType = {
    id?: true
    foodId?: true
    nutrientId?: true
    amountPerServing?: true
    source?: true
    sourceUrl?: true
    sourceIdentifier?: true
    createdAt?: true
  }

  export type FoodNutrientMaxAggregateInputType = {
    id?: true
    foodId?: true
    nutrientId?: true
    amountPerServing?: true
    source?: true
    sourceUrl?: true
    sourceIdentifier?: true
    createdAt?: true
  }

  export type FoodNutrientCountAggregateInputType = {
    id?: true
    foodId?: true
    nutrientId?: true
    amountPerServing?: true
    source?: true
    sourceUrl?: true
    sourceIdentifier?: true
    createdAt?: true
    _all?: true
  }

  export type FoodNutrientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodNutrient to aggregate.
     */
    where?: FoodNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodNutrients to fetch.
     */
    orderBy?: FoodNutrientOrderByWithRelationInput | FoodNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodNutrients
    **/
    _count?: true | FoodNutrientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodNutrientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodNutrientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodNutrientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodNutrientMaxAggregateInputType
  }

  export type GetFoodNutrientAggregateType<T extends FoodNutrientAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodNutrient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodNutrient[P]>
      : GetScalarType<T[P], AggregateFoodNutrient[P]>
  }




  export type FoodNutrientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodNutrientWhereInput
    orderBy?: FoodNutrientOrderByWithAggregationInput | FoodNutrientOrderByWithAggregationInput[]
    by: FoodNutrientScalarFieldEnum[] | FoodNutrientScalarFieldEnum
    having?: FoodNutrientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodNutrientCountAggregateInputType | true
    _avg?: FoodNutrientAvgAggregateInputType
    _sum?: FoodNutrientSumAggregateInputType
    _min?: FoodNutrientMinAggregateInputType
    _max?: FoodNutrientMaxAggregateInputType
  }

  export type FoodNutrientGroupByOutputType = {
    id: string
    foodId: string
    nutrientId: string
    amountPerServing: Decimal
    source: string | null
    sourceUrl: string | null
    sourceIdentifier: string | null
    createdAt: Date
    _count: FoodNutrientCountAggregateOutputType | null
    _avg: FoodNutrientAvgAggregateOutputType | null
    _sum: FoodNutrientSumAggregateOutputType | null
    _min: FoodNutrientMinAggregateOutputType | null
    _max: FoodNutrientMaxAggregateOutputType | null
  }

  type GetFoodNutrientGroupByPayload<T extends FoodNutrientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodNutrientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodNutrientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodNutrientGroupByOutputType[P]>
            : GetScalarType<T[P], FoodNutrientGroupByOutputType[P]>
        }
      >
    >


  export type FoodNutrientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    nutrientId?: boolean
    amountPerServing?: boolean
    source?: boolean
    sourceUrl?: boolean
    sourceIdentifier?: boolean
    createdAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodNutrient"]>

  export type FoodNutrientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    nutrientId?: boolean
    amountPerServing?: boolean
    source?: boolean
    sourceUrl?: boolean
    sourceIdentifier?: boolean
    createdAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodNutrient"]>

  export type FoodNutrientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    nutrientId?: boolean
    amountPerServing?: boolean
    source?: boolean
    sourceUrl?: boolean
    sourceIdentifier?: boolean
    createdAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodNutrient"]>

  export type FoodNutrientSelectScalar = {
    id?: boolean
    foodId?: boolean
    nutrientId?: boolean
    amountPerServing?: boolean
    source?: boolean
    sourceUrl?: boolean
    sourceIdentifier?: boolean
    createdAt?: boolean
  }

  export type FoodNutrientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "foodId" | "nutrientId" | "amountPerServing" | "source" | "sourceUrl" | "sourceIdentifier" | "createdAt", ExtArgs["result"]["foodNutrient"]>
  export type FoodNutrientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type FoodNutrientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type FoodNutrientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }

  export type $FoodNutrientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodNutrient"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
      nutrient: Prisma.$NutrientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      foodId: string
      nutrientId: string
      amountPerServing: Prisma.Decimal
      source: string | null
      sourceUrl: string | null
      sourceIdentifier: string | null
      createdAt: Date
    }, ExtArgs["result"]["foodNutrient"]>
    composites: {}
  }

  type FoodNutrientGetPayload<S extends boolean | null | undefined | FoodNutrientDefaultArgs> = $Result.GetResult<Prisma.$FoodNutrientPayload, S>

  type FoodNutrientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodNutrientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodNutrientCountAggregateInputType | true
    }

  export interface FoodNutrientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodNutrient'], meta: { name: 'FoodNutrient' } }
    /**
     * Find zero or one FoodNutrient that matches the filter.
     * @param {FoodNutrientFindUniqueArgs} args - Arguments to find a FoodNutrient
     * @example
     * // Get one FoodNutrient
     * const foodNutrient = await prisma.foodNutrient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodNutrientFindUniqueArgs>(args: SelectSubset<T, FoodNutrientFindUniqueArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodNutrient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodNutrientFindUniqueOrThrowArgs} args - Arguments to find a FoodNutrient
     * @example
     * // Get one FoodNutrient
     * const foodNutrient = await prisma.foodNutrient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodNutrientFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodNutrientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodNutrient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodNutrientFindFirstArgs} args - Arguments to find a FoodNutrient
     * @example
     * // Get one FoodNutrient
     * const foodNutrient = await prisma.foodNutrient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodNutrientFindFirstArgs>(args?: SelectSubset<T, FoodNutrientFindFirstArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodNutrient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodNutrientFindFirstOrThrowArgs} args - Arguments to find a FoodNutrient
     * @example
     * // Get one FoodNutrient
     * const foodNutrient = await prisma.foodNutrient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodNutrientFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodNutrientFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodNutrients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodNutrientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodNutrients
     * const foodNutrients = await prisma.foodNutrient.findMany()
     * 
     * // Get first 10 FoodNutrients
     * const foodNutrients = await prisma.foodNutrient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodNutrientWithIdOnly = await prisma.foodNutrient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodNutrientFindManyArgs>(args?: SelectSubset<T, FoodNutrientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodNutrient.
     * @param {FoodNutrientCreateArgs} args - Arguments to create a FoodNutrient.
     * @example
     * // Create one FoodNutrient
     * const FoodNutrient = await prisma.foodNutrient.create({
     *   data: {
     *     // ... data to create a FoodNutrient
     *   }
     * })
     * 
     */
    create<T extends FoodNutrientCreateArgs>(args: SelectSubset<T, FoodNutrientCreateArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodNutrients.
     * @param {FoodNutrientCreateManyArgs} args - Arguments to create many FoodNutrients.
     * @example
     * // Create many FoodNutrients
     * const foodNutrient = await prisma.foodNutrient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodNutrientCreateManyArgs>(args?: SelectSubset<T, FoodNutrientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodNutrients and returns the data saved in the database.
     * @param {FoodNutrientCreateManyAndReturnArgs} args - Arguments to create many FoodNutrients.
     * @example
     * // Create many FoodNutrients
     * const foodNutrient = await prisma.foodNutrient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodNutrients and only return the `id`
     * const foodNutrientWithIdOnly = await prisma.foodNutrient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodNutrientCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodNutrientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodNutrient.
     * @param {FoodNutrientDeleteArgs} args - Arguments to delete one FoodNutrient.
     * @example
     * // Delete one FoodNutrient
     * const FoodNutrient = await prisma.foodNutrient.delete({
     *   where: {
     *     // ... filter to delete one FoodNutrient
     *   }
     * })
     * 
     */
    delete<T extends FoodNutrientDeleteArgs>(args: SelectSubset<T, FoodNutrientDeleteArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodNutrient.
     * @param {FoodNutrientUpdateArgs} args - Arguments to update one FoodNutrient.
     * @example
     * // Update one FoodNutrient
     * const foodNutrient = await prisma.foodNutrient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodNutrientUpdateArgs>(args: SelectSubset<T, FoodNutrientUpdateArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodNutrients.
     * @param {FoodNutrientDeleteManyArgs} args - Arguments to filter FoodNutrients to delete.
     * @example
     * // Delete a few FoodNutrients
     * const { count } = await prisma.foodNutrient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodNutrientDeleteManyArgs>(args?: SelectSubset<T, FoodNutrientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodNutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodNutrientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodNutrients
     * const foodNutrient = await prisma.foodNutrient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodNutrientUpdateManyArgs>(args: SelectSubset<T, FoodNutrientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodNutrients and returns the data updated in the database.
     * @param {FoodNutrientUpdateManyAndReturnArgs} args - Arguments to update many FoodNutrients.
     * @example
     * // Update many FoodNutrients
     * const foodNutrient = await prisma.foodNutrient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodNutrients and only return the `id`
     * const foodNutrientWithIdOnly = await prisma.foodNutrient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodNutrientUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodNutrientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodNutrient.
     * @param {FoodNutrientUpsertArgs} args - Arguments to update or create a FoodNutrient.
     * @example
     * // Update or create a FoodNutrient
     * const foodNutrient = await prisma.foodNutrient.upsert({
     *   create: {
     *     // ... data to create a FoodNutrient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodNutrient we want to update
     *   }
     * })
     */
    upsert<T extends FoodNutrientUpsertArgs>(args: SelectSubset<T, FoodNutrientUpsertArgs<ExtArgs>>): Prisma__FoodNutrientClient<$Result.GetResult<Prisma.$FoodNutrientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodNutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodNutrientCountArgs} args - Arguments to filter FoodNutrients to count.
     * @example
     * // Count the number of FoodNutrients
     * const count = await prisma.foodNutrient.count({
     *   where: {
     *     // ... the filter for the FoodNutrients we want to count
     *   }
     * })
    **/
    count<T extends FoodNutrientCountArgs>(
      args?: Subset<T, FoodNutrientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodNutrientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodNutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodNutrientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodNutrientAggregateArgs>(args: Subset<T, FoodNutrientAggregateArgs>): Prisma.PrismaPromise<GetFoodNutrientAggregateType<T>>

    /**
     * Group by FoodNutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodNutrientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodNutrientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodNutrientGroupByArgs['orderBy'] }
        : { orderBy?: FoodNutrientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodNutrientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodNutrientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodNutrient model
   */
  readonly fields: FoodNutrientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodNutrient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodNutrientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nutrient<T extends NutrientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NutrientDefaultArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodNutrient model
   */
  interface FoodNutrientFieldRefs {
    readonly id: FieldRef<"FoodNutrient", 'String'>
    readonly foodId: FieldRef<"FoodNutrient", 'String'>
    readonly nutrientId: FieldRef<"FoodNutrient", 'String'>
    readonly amountPerServing: FieldRef<"FoodNutrient", 'Decimal'>
    readonly source: FieldRef<"FoodNutrient", 'String'>
    readonly sourceUrl: FieldRef<"FoodNutrient", 'String'>
    readonly sourceIdentifier: FieldRef<"FoodNutrient", 'String'>
    readonly createdAt: FieldRef<"FoodNutrient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodNutrient findUnique
   */
  export type FoodNutrientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * Filter, which FoodNutrient to fetch.
     */
    where: FoodNutrientWhereUniqueInput
  }

  /**
   * FoodNutrient findUniqueOrThrow
   */
  export type FoodNutrientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * Filter, which FoodNutrient to fetch.
     */
    where: FoodNutrientWhereUniqueInput
  }

  /**
   * FoodNutrient findFirst
   */
  export type FoodNutrientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * Filter, which FoodNutrient to fetch.
     */
    where?: FoodNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodNutrients to fetch.
     */
    orderBy?: FoodNutrientOrderByWithRelationInput | FoodNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodNutrients.
     */
    cursor?: FoodNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodNutrients.
     */
    distinct?: FoodNutrientScalarFieldEnum | FoodNutrientScalarFieldEnum[]
  }

  /**
   * FoodNutrient findFirstOrThrow
   */
  export type FoodNutrientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * Filter, which FoodNutrient to fetch.
     */
    where?: FoodNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodNutrients to fetch.
     */
    orderBy?: FoodNutrientOrderByWithRelationInput | FoodNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodNutrients.
     */
    cursor?: FoodNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodNutrients.
     */
    distinct?: FoodNutrientScalarFieldEnum | FoodNutrientScalarFieldEnum[]
  }

  /**
   * FoodNutrient findMany
   */
  export type FoodNutrientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * Filter, which FoodNutrients to fetch.
     */
    where?: FoodNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodNutrients to fetch.
     */
    orderBy?: FoodNutrientOrderByWithRelationInput | FoodNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodNutrients.
     */
    cursor?: FoodNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodNutrients.
     */
    distinct?: FoodNutrientScalarFieldEnum | FoodNutrientScalarFieldEnum[]
  }

  /**
   * FoodNutrient create
   */
  export type FoodNutrientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodNutrient.
     */
    data: XOR<FoodNutrientCreateInput, FoodNutrientUncheckedCreateInput>
  }

  /**
   * FoodNutrient createMany
   */
  export type FoodNutrientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodNutrients.
     */
    data: FoodNutrientCreateManyInput | FoodNutrientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodNutrient createManyAndReturn
   */
  export type FoodNutrientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * The data used to create many FoodNutrients.
     */
    data: FoodNutrientCreateManyInput | FoodNutrientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodNutrient update
   */
  export type FoodNutrientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodNutrient.
     */
    data: XOR<FoodNutrientUpdateInput, FoodNutrientUncheckedUpdateInput>
    /**
     * Choose, which FoodNutrient to update.
     */
    where: FoodNutrientWhereUniqueInput
  }

  /**
   * FoodNutrient updateMany
   */
  export type FoodNutrientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodNutrients.
     */
    data: XOR<FoodNutrientUpdateManyMutationInput, FoodNutrientUncheckedUpdateManyInput>
    /**
     * Filter which FoodNutrients to update
     */
    where?: FoodNutrientWhereInput
    /**
     * Limit how many FoodNutrients to update.
     */
    limit?: number
  }

  /**
   * FoodNutrient updateManyAndReturn
   */
  export type FoodNutrientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * The data used to update FoodNutrients.
     */
    data: XOR<FoodNutrientUpdateManyMutationInput, FoodNutrientUncheckedUpdateManyInput>
    /**
     * Filter which FoodNutrients to update
     */
    where?: FoodNutrientWhereInput
    /**
     * Limit how many FoodNutrients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodNutrient upsert
   */
  export type FoodNutrientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodNutrient to update in case it exists.
     */
    where: FoodNutrientWhereUniqueInput
    /**
     * In case the FoodNutrient found by the `where` argument doesn't exist, create a new FoodNutrient with this data.
     */
    create: XOR<FoodNutrientCreateInput, FoodNutrientUncheckedCreateInput>
    /**
     * In case the FoodNutrient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodNutrientUpdateInput, FoodNutrientUncheckedUpdateInput>
  }

  /**
   * FoodNutrient delete
   */
  export type FoodNutrientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
    /**
     * Filter which FoodNutrient to delete.
     */
    where: FoodNutrientWhereUniqueInput
  }

  /**
   * FoodNutrient deleteMany
   */
  export type FoodNutrientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodNutrients to delete
     */
    where?: FoodNutrientWhereInput
    /**
     * Limit how many FoodNutrients to delete.
     */
    limit?: number
  }

  /**
   * FoodNutrient without action
   */
  export type FoodNutrientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodNutrient
     */
    select?: FoodNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodNutrient
     */
    omit?: FoodNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodNutrientInclude<ExtArgs> | null
  }


  /**
   * Model UserTarget
   */

  export type AggregateUserTarget = {
    _count: UserTargetCountAggregateOutputType | null
    _avg: UserTargetAvgAggregateOutputType | null
    _sum: UserTargetSumAggregateOutputType | null
    _min: UserTargetMinAggregateOutputType | null
    _max: UserTargetMaxAggregateOutputType | null
  }

  export type UserTargetAvgAggregateOutputType = {
    targetAmount: Decimal | null
  }

  export type UserTargetSumAggregateOutputType = {
    targetAmount: Decimal | null
  }

  export type UserTargetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nutrientId: string | null
    targetAmount: Decimal | null
    source: string | null
    sourceUrl: string | null
    updatedAt: Date | null
  }

  export type UserTargetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nutrientId: string | null
    targetAmount: Decimal | null
    source: string | null
    sourceUrl: string | null
    updatedAt: Date | null
  }

  export type UserTargetCountAggregateOutputType = {
    id: number
    userId: number
    nutrientId: number
    targetAmount: number
    source: number
    sourceUrl: number
    updatedAt: number
    _all: number
  }


  export type UserTargetAvgAggregateInputType = {
    targetAmount?: true
  }

  export type UserTargetSumAggregateInputType = {
    targetAmount?: true
  }

  export type UserTargetMinAggregateInputType = {
    id?: true
    userId?: true
    nutrientId?: true
    targetAmount?: true
    source?: true
    sourceUrl?: true
    updatedAt?: true
  }

  export type UserTargetMaxAggregateInputType = {
    id?: true
    userId?: true
    nutrientId?: true
    targetAmount?: true
    source?: true
    sourceUrl?: true
    updatedAt?: true
  }

  export type UserTargetCountAggregateInputType = {
    id?: true
    userId?: true
    nutrientId?: true
    targetAmount?: true
    source?: true
    sourceUrl?: true
    updatedAt?: true
    _all?: true
  }

  export type UserTargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTarget to aggregate.
     */
    where?: UserTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTargets to fetch.
     */
    orderBy?: UserTargetOrderByWithRelationInput | UserTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTargets
    **/
    _count?: true | UserTargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTargetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTargetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTargetMaxAggregateInputType
  }

  export type GetUserTargetAggregateType<T extends UserTargetAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTarget[P]>
      : GetScalarType<T[P], AggregateUserTarget[P]>
  }




  export type UserTargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTargetWhereInput
    orderBy?: UserTargetOrderByWithAggregationInput | UserTargetOrderByWithAggregationInput[]
    by: UserTargetScalarFieldEnum[] | UserTargetScalarFieldEnum
    having?: UserTargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTargetCountAggregateInputType | true
    _avg?: UserTargetAvgAggregateInputType
    _sum?: UserTargetSumAggregateInputType
    _min?: UserTargetMinAggregateInputType
    _max?: UserTargetMaxAggregateInputType
  }

  export type UserTargetGroupByOutputType = {
    id: string
    userId: string
    nutrientId: string
    targetAmount: Decimal
    source: string | null
    sourceUrl: string | null
    updatedAt: Date
    _count: UserTargetCountAggregateOutputType | null
    _avg: UserTargetAvgAggregateOutputType | null
    _sum: UserTargetSumAggregateOutputType | null
    _min: UserTargetMinAggregateOutputType | null
    _max: UserTargetMaxAggregateOutputType | null
  }

  type GetUserTargetGroupByPayload<T extends UserTargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTargetGroupByOutputType[P]>
            : GetScalarType<T[P], UserTargetGroupByOutputType[P]>
        }
      >
    >


  export type UserTargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nutrientId?: boolean
    targetAmount?: boolean
    source?: boolean
    sourceUrl?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTarget"]>

  export type UserTargetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nutrientId?: boolean
    targetAmount?: boolean
    source?: boolean
    sourceUrl?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTarget"]>

  export type UserTargetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nutrientId?: boolean
    targetAmount?: boolean
    source?: boolean
    sourceUrl?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTarget"]>

  export type UserTargetSelectScalar = {
    id?: boolean
    userId?: boolean
    nutrientId?: boolean
    targetAmount?: boolean
    source?: boolean
    sourceUrl?: boolean
    updatedAt?: boolean
  }

  export type UserTargetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nutrientId" | "targetAmount" | "source" | "sourceUrl" | "updatedAt", ExtArgs["result"]["userTarget"]>
  export type UserTargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type UserTargetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type UserTargetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }

  export type $UserTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTarget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nutrient: Prisma.$NutrientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nutrientId: string
      targetAmount: Prisma.Decimal
      source: string | null
      sourceUrl: string | null
      updatedAt: Date
    }, ExtArgs["result"]["userTarget"]>
    composites: {}
  }

  type UserTargetGetPayload<S extends boolean | null | undefined | UserTargetDefaultArgs> = $Result.GetResult<Prisma.$UserTargetPayload, S>

  type UserTargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTargetCountAggregateInputType | true
    }

  export interface UserTargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTarget'], meta: { name: 'UserTarget' } }
    /**
     * Find zero or one UserTarget that matches the filter.
     * @param {UserTargetFindUniqueArgs} args - Arguments to find a UserTarget
     * @example
     * // Get one UserTarget
     * const userTarget = await prisma.userTarget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTargetFindUniqueArgs>(args: SelectSubset<T, UserTargetFindUniqueArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTarget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTargetFindUniqueOrThrowArgs} args - Arguments to find a UserTarget
     * @example
     * // Get one UserTarget
     * const userTarget = await prisma.userTarget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTargetFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTarget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTargetFindFirstArgs} args - Arguments to find a UserTarget
     * @example
     * // Get one UserTarget
     * const userTarget = await prisma.userTarget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTargetFindFirstArgs>(args?: SelectSubset<T, UserTargetFindFirstArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTarget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTargetFindFirstOrThrowArgs} args - Arguments to find a UserTarget
     * @example
     * // Get one UserTarget
     * const userTarget = await prisma.userTarget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTargetFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTargetFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTargetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTargets
     * const userTargets = await prisma.userTarget.findMany()
     * 
     * // Get first 10 UserTargets
     * const userTargets = await prisma.userTarget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTargetWithIdOnly = await prisma.userTarget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTargetFindManyArgs>(args?: SelectSubset<T, UserTargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTarget.
     * @param {UserTargetCreateArgs} args - Arguments to create a UserTarget.
     * @example
     * // Create one UserTarget
     * const UserTarget = await prisma.userTarget.create({
     *   data: {
     *     // ... data to create a UserTarget
     *   }
     * })
     * 
     */
    create<T extends UserTargetCreateArgs>(args: SelectSubset<T, UserTargetCreateArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTargets.
     * @param {UserTargetCreateManyArgs} args - Arguments to create many UserTargets.
     * @example
     * // Create many UserTargets
     * const userTarget = await prisma.userTarget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTargetCreateManyArgs>(args?: SelectSubset<T, UserTargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTargets and returns the data saved in the database.
     * @param {UserTargetCreateManyAndReturnArgs} args - Arguments to create many UserTargets.
     * @example
     * // Create many UserTargets
     * const userTarget = await prisma.userTarget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTargets and only return the `id`
     * const userTargetWithIdOnly = await prisma.userTarget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTargetCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTargetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTarget.
     * @param {UserTargetDeleteArgs} args - Arguments to delete one UserTarget.
     * @example
     * // Delete one UserTarget
     * const UserTarget = await prisma.userTarget.delete({
     *   where: {
     *     // ... filter to delete one UserTarget
     *   }
     * })
     * 
     */
    delete<T extends UserTargetDeleteArgs>(args: SelectSubset<T, UserTargetDeleteArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTarget.
     * @param {UserTargetUpdateArgs} args - Arguments to update one UserTarget.
     * @example
     * // Update one UserTarget
     * const userTarget = await prisma.userTarget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTargetUpdateArgs>(args: SelectSubset<T, UserTargetUpdateArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTargets.
     * @param {UserTargetDeleteManyArgs} args - Arguments to filter UserTargets to delete.
     * @example
     * // Delete a few UserTargets
     * const { count } = await prisma.userTarget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTargetDeleteManyArgs>(args?: SelectSubset<T, UserTargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTargets
     * const userTarget = await prisma.userTarget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTargetUpdateManyArgs>(args: SelectSubset<T, UserTargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTargets and returns the data updated in the database.
     * @param {UserTargetUpdateManyAndReturnArgs} args - Arguments to update many UserTargets.
     * @example
     * // Update many UserTargets
     * const userTarget = await prisma.userTarget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTargets and only return the `id`
     * const userTargetWithIdOnly = await prisma.userTarget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTargetUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTargetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTarget.
     * @param {UserTargetUpsertArgs} args - Arguments to update or create a UserTarget.
     * @example
     * // Update or create a UserTarget
     * const userTarget = await prisma.userTarget.upsert({
     *   create: {
     *     // ... data to create a UserTarget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTarget we want to update
     *   }
     * })
     */
    upsert<T extends UserTargetUpsertArgs>(args: SelectSubset<T, UserTargetUpsertArgs<ExtArgs>>): Prisma__UserTargetClient<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTargetCountArgs} args - Arguments to filter UserTargets to count.
     * @example
     * // Count the number of UserTargets
     * const count = await prisma.userTarget.count({
     *   where: {
     *     // ... the filter for the UserTargets we want to count
     *   }
     * })
    **/
    count<T extends UserTargetCountArgs>(
      args?: Subset<T, UserTargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTargetAggregateArgs>(args: Subset<T, UserTargetAggregateArgs>): Prisma.PrismaPromise<GetUserTargetAggregateType<T>>

    /**
     * Group by UserTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTargetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTargetGroupByArgs['orderBy'] }
        : { orderBy?: UserTargetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTarget model
   */
  readonly fields: UserTargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTarget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nutrient<T extends NutrientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NutrientDefaultArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTarget model
   */
  interface UserTargetFieldRefs {
    readonly id: FieldRef<"UserTarget", 'String'>
    readonly userId: FieldRef<"UserTarget", 'String'>
    readonly nutrientId: FieldRef<"UserTarget", 'String'>
    readonly targetAmount: FieldRef<"UserTarget", 'Decimal'>
    readonly source: FieldRef<"UserTarget", 'String'>
    readonly sourceUrl: FieldRef<"UserTarget", 'String'>
    readonly updatedAt: FieldRef<"UserTarget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTarget findUnique
   */
  export type UserTargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * Filter, which UserTarget to fetch.
     */
    where: UserTargetWhereUniqueInput
  }

  /**
   * UserTarget findUniqueOrThrow
   */
  export type UserTargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * Filter, which UserTarget to fetch.
     */
    where: UserTargetWhereUniqueInput
  }

  /**
   * UserTarget findFirst
   */
  export type UserTargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * Filter, which UserTarget to fetch.
     */
    where?: UserTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTargets to fetch.
     */
    orderBy?: UserTargetOrderByWithRelationInput | UserTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTargets.
     */
    cursor?: UserTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTargets.
     */
    distinct?: UserTargetScalarFieldEnum | UserTargetScalarFieldEnum[]
  }

  /**
   * UserTarget findFirstOrThrow
   */
  export type UserTargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * Filter, which UserTarget to fetch.
     */
    where?: UserTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTargets to fetch.
     */
    orderBy?: UserTargetOrderByWithRelationInput | UserTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTargets.
     */
    cursor?: UserTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTargets.
     */
    distinct?: UserTargetScalarFieldEnum | UserTargetScalarFieldEnum[]
  }

  /**
   * UserTarget findMany
   */
  export type UserTargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * Filter, which UserTargets to fetch.
     */
    where?: UserTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTargets to fetch.
     */
    orderBy?: UserTargetOrderByWithRelationInput | UserTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTargets.
     */
    cursor?: UserTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTargets.
     */
    distinct?: UserTargetScalarFieldEnum | UserTargetScalarFieldEnum[]
  }

  /**
   * UserTarget create
   */
  export type UserTargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTarget.
     */
    data: XOR<UserTargetCreateInput, UserTargetUncheckedCreateInput>
  }

  /**
   * UserTarget createMany
   */
  export type UserTargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTargets.
     */
    data: UserTargetCreateManyInput | UserTargetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTarget createManyAndReturn
   */
  export type UserTargetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * The data used to create many UserTargets.
     */
    data: UserTargetCreateManyInput | UserTargetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTarget update
   */
  export type UserTargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTarget.
     */
    data: XOR<UserTargetUpdateInput, UserTargetUncheckedUpdateInput>
    /**
     * Choose, which UserTarget to update.
     */
    where: UserTargetWhereUniqueInput
  }

  /**
   * UserTarget updateMany
   */
  export type UserTargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTargets.
     */
    data: XOR<UserTargetUpdateManyMutationInput, UserTargetUncheckedUpdateManyInput>
    /**
     * Filter which UserTargets to update
     */
    where?: UserTargetWhereInput
    /**
     * Limit how many UserTargets to update.
     */
    limit?: number
  }

  /**
   * UserTarget updateManyAndReturn
   */
  export type UserTargetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * The data used to update UserTargets.
     */
    data: XOR<UserTargetUpdateManyMutationInput, UserTargetUncheckedUpdateManyInput>
    /**
     * Filter which UserTargets to update
     */
    where?: UserTargetWhereInput
    /**
     * Limit how many UserTargets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTarget upsert
   */
  export type UserTargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTarget to update in case it exists.
     */
    where: UserTargetWhereUniqueInput
    /**
     * In case the UserTarget found by the `where` argument doesn't exist, create a new UserTarget with this data.
     */
    create: XOR<UserTargetCreateInput, UserTargetUncheckedCreateInput>
    /**
     * In case the UserTarget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTargetUpdateInput, UserTargetUncheckedUpdateInput>
  }

  /**
   * UserTarget delete
   */
  export type UserTargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
    /**
     * Filter which UserTarget to delete.
     */
    where: UserTargetWhereUniqueInput
  }

  /**
   * UserTarget deleteMany
   */
  export type UserTargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTargets to delete
     */
    where?: UserTargetWhereInput
    /**
     * Limit how many UserTargets to delete.
     */
    limit?: number
  }

  /**
   * UserTarget without action
   */
  export type UserTargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTarget
     */
    select?: UserTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTarget
     */
    omit?: UserTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTargetInclude<ExtArgs> | null
  }


  /**
   * Model MealEntry
   */

  export type AggregateMealEntry = {
    _count: MealEntryCountAggregateOutputType | null
    _avg: MealEntryAvgAggregateOutputType | null
    _sum: MealEntrySumAggregateOutputType | null
    _min: MealEntryMinAggregateOutputType | null
    _max: MealEntryMaxAggregateOutputType | null
  }

  export type MealEntryAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type MealEntrySumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type MealEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    foodId: string | null
    quantity: Decimal | null
    mealType: $Enums.MealType | null
    eatenAt: Date | null
    createdAt: Date | null
  }

  export type MealEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    foodId: string | null
    quantity: Decimal | null
    mealType: $Enums.MealType | null
    eatenAt: Date | null
    createdAt: Date | null
  }

  export type MealEntryCountAggregateOutputType = {
    id: number
    userId: number
    foodId: number
    quantity: number
    mealType: number
    eatenAt: number
    createdAt: number
    _all: number
  }


  export type MealEntryAvgAggregateInputType = {
    quantity?: true
  }

  export type MealEntrySumAggregateInputType = {
    quantity?: true
  }

  export type MealEntryMinAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    quantity?: true
    mealType?: true
    eatenAt?: true
    createdAt?: true
  }

  export type MealEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    quantity?: true
    mealType?: true
    eatenAt?: true
    createdAt?: true
  }

  export type MealEntryCountAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    quantity?: true
    mealType?: true
    eatenAt?: true
    createdAt?: true
    _all?: true
  }

  export type MealEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEntry to aggregate.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealEntries
    **/
    _count?: true | MealEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealEntryMaxAggregateInputType
  }

  export type GetMealEntryAggregateType<T extends MealEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMealEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealEntry[P]>
      : GetScalarType<T[P], AggregateMealEntry[P]>
  }




  export type MealEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
    orderBy?: MealEntryOrderByWithAggregationInput | MealEntryOrderByWithAggregationInput[]
    by: MealEntryScalarFieldEnum[] | MealEntryScalarFieldEnum
    having?: MealEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealEntryCountAggregateInputType | true
    _avg?: MealEntryAvgAggregateInputType
    _sum?: MealEntrySumAggregateInputType
    _min?: MealEntryMinAggregateInputType
    _max?: MealEntryMaxAggregateInputType
  }

  export type MealEntryGroupByOutputType = {
    id: string
    userId: string
    foodId: string
    quantity: Decimal
    mealType: $Enums.MealType
    eatenAt: Date
    createdAt: Date
    _count: MealEntryCountAggregateOutputType | null
    _avg: MealEntryAvgAggregateOutputType | null
    _sum: MealEntrySumAggregateOutputType | null
    _min: MealEntryMinAggregateOutputType | null
    _max: MealEntryMaxAggregateOutputType | null
  }

  type GetMealEntryGroupByPayload<T extends MealEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MealEntryGroupByOutputType[P]>
        }
      >
    >


  export type MealEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrients?: boolean | MealEntry$nutrientsArgs<ExtArgs>
    _count?: boolean | MealEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntry"]>

  export type MealEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntry"]>

  export type MealEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntry"]>

  export type MealEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
  }

  export type MealEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodId" | "quantity" | "mealType" | "eatenAt" | "createdAt", ExtArgs["result"]["mealEntry"]>
  export type MealEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
    nutrients?: boolean | MealEntry$nutrientsArgs<ExtArgs>
    _count?: boolean | MealEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }
  export type MealEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }

  export type $MealEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      food: Prisma.$FoodPayload<ExtArgs>
      nutrients: Prisma.$MealEntryNutrientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      foodId: string
      quantity: Prisma.Decimal
      mealType: $Enums.MealType
      eatenAt: Date
      createdAt: Date
    }, ExtArgs["result"]["mealEntry"]>
    composites: {}
  }

  type MealEntryGetPayload<S extends boolean | null | undefined | MealEntryDefaultArgs> = $Result.GetResult<Prisma.$MealEntryPayload, S>

  type MealEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealEntryCountAggregateInputType | true
    }

  export interface MealEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealEntry'], meta: { name: 'MealEntry' } }
    /**
     * Find zero or one MealEntry that matches the filter.
     * @param {MealEntryFindUniqueArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealEntryFindUniqueArgs>(args: SelectSubset<T, MealEntryFindUniqueArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealEntryFindUniqueOrThrowArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, MealEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryFindFirstArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealEntryFindFirstArgs>(args?: SelectSubset<T, MealEntryFindFirstArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryFindFirstOrThrowArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, MealEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealEntries
     * const mealEntries = await prisma.mealEntry.findMany()
     * 
     * // Get first 10 MealEntries
     * const mealEntries = await prisma.mealEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealEntryWithIdOnly = await prisma.mealEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealEntryFindManyArgs>(args?: SelectSubset<T, MealEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealEntry.
     * @param {MealEntryCreateArgs} args - Arguments to create a MealEntry.
     * @example
     * // Create one MealEntry
     * const MealEntry = await prisma.mealEntry.create({
     *   data: {
     *     // ... data to create a MealEntry
     *   }
     * })
     * 
     */
    create<T extends MealEntryCreateArgs>(args: SelectSubset<T, MealEntryCreateArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealEntries.
     * @param {MealEntryCreateManyArgs} args - Arguments to create many MealEntries.
     * @example
     * // Create many MealEntries
     * const mealEntry = await prisma.mealEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealEntryCreateManyArgs>(args?: SelectSubset<T, MealEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealEntries and returns the data saved in the database.
     * @param {MealEntryCreateManyAndReturnArgs} args - Arguments to create many MealEntries.
     * @example
     * // Create many MealEntries
     * const mealEntry = await prisma.mealEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealEntries and only return the `id`
     * const mealEntryWithIdOnly = await prisma.mealEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, MealEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealEntry.
     * @param {MealEntryDeleteArgs} args - Arguments to delete one MealEntry.
     * @example
     * // Delete one MealEntry
     * const MealEntry = await prisma.mealEntry.delete({
     *   where: {
     *     // ... filter to delete one MealEntry
     *   }
     * })
     * 
     */
    delete<T extends MealEntryDeleteArgs>(args: SelectSubset<T, MealEntryDeleteArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealEntry.
     * @param {MealEntryUpdateArgs} args - Arguments to update one MealEntry.
     * @example
     * // Update one MealEntry
     * const mealEntry = await prisma.mealEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealEntryUpdateArgs>(args: SelectSubset<T, MealEntryUpdateArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealEntries.
     * @param {MealEntryDeleteManyArgs} args - Arguments to filter MealEntries to delete.
     * @example
     * // Delete a few MealEntries
     * const { count } = await prisma.mealEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealEntryDeleteManyArgs>(args?: SelectSubset<T, MealEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealEntries
     * const mealEntry = await prisma.mealEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealEntryUpdateManyArgs>(args: SelectSubset<T, MealEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealEntries and returns the data updated in the database.
     * @param {MealEntryUpdateManyAndReturnArgs} args - Arguments to update many MealEntries.
     * @example
     * // Update many MealEntries
     * const mealEntry = await prisma.mealEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealEntries and only return the `id`
     * const mealEntryWithIdOnly = await prisma.mealEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, MealEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealEntry.
     * @param {MealEntryUpsertArgs} args - Arguments to update or create a MealEntry.
     * @example
     * // Update or create a MealEntry
     * const mealEntry = await prisma.mealEntry.upsert({
     *   create: {
     *     // ... data to create a MealEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealEntry we want to update
     *   }
     * })
     */
    upsert<T extends MealEntryUpsertArgs>(args: SelectSubset<T, MealEntryUpsertArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryCountArgs} args - Arguments to filter MealEntries to count.
     * @example
     * // Count the number of MealEntries
     * const count = await prisma.mealEntry.count({
     *   where: {
     *     // ... the filter for the MealEntries we want to count
     *   }
     * })
    **/
    count<T extends MealEntryCountArgs>(
      args?: Subset<T, MealEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealEntryAggregateArgs>(args: Subset<T, MealEntryAggregateArgs>): Prisma.PrismaPromise<GetMealEntryAggregateType<T>>

    /**
     * Group by MealEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealEntryGroupByArgs['orderBy'] }
        : { orderBy?: MealEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealEntry model
   */
  readonly fields: MealEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nutrients<T extends MealEntry$nutrientsArgs<ExtArgs> = {}>(args?: Subset<T, MealEntry$nutrientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealEntry model
   */
  interface MealEntryFieldRefs {
    readonly id: FieldRef<"MealEntry", 'String'>
    readonly userId: FieldRef<"MealEntry", 'String'>
    readonly foodId: FieldRef<"MealEntry", 'String'>
    readonly quantity: FieldRef<"MealEntry", 'Decimal'>
    readonly mealType: FieldRef<"MealEntry", 'MealType'>
    readonly eatenAt: FieldRef<"MealEntry", 'DateTime'>
    readonly createdAt: FieldRef<"MealEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealEntry findUnique
   */
  export type MealEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry findUniqueOrThrow
   */
  export type MealEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry findFirst
   */
  export type MealEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEntries.
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntries.
     */
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * MealEntry findFirstOrThrow
   */
  export type MealEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEntries.
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntries.
     */
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * MealEntry findMany
   */
  export type MealEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntries to fetch.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealEntries.
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntries.
     */
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * MealEntry create
   */
  export type MealEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MealEntry.
     */
    data: XOR<MealEntryCreateInput, MealEntryUncheckedCreateInput>
  }

  /**
   * MealEntry createMany
   */
  export type MealEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealEntries.
     */
    data: MealEntryCreateManyInput | MealEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealEntry createManyAndReturn
   */
  export type MealEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * The data used to create many MealEntries.
     */
    data: MealEntryCreateManyInput | MealEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealEntry update
   */
  export type MealEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MealEntry.
     */
    data: XOR<MealEntryUpdateInput, MealEntryUncheckedUpdateInput>
    /**
     * Choose, which MealEntry to update.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry updateMany
   */
  export type MealEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealEntries.
     */
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyInput>
    /**
     * Filter which MealEntries to update
     */
    where?: MealEntryWhereInput
    /**
     * Limit how many MealEntries to update.
     */
    limit?: number
  }

  /**
   * MealEntry updateManyAndReturn
   */
  export type MealEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * The data used to update MealEntries.
     */
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyInput>
    /**
     * Filter which MealEntries to update
     */
    where?: MealEntryWhereInput
    /**
     * Limit how many MealEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealEntry upsert
   */
  export type MealEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MealEntry to update in case it exists.
     */
    where: MealEntryWhereUniqueInput
    /**
     * In case the MealEntry found by the `where` argument doesn't exist, create a new MealEntry with this data.
     */
    create: XOR<MealEntryCreateInput, MealEntryUncheckedCreateInput>
    /**
     * In case the MealEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealEntryUpdateInput, MealEntryUncheckedUpdateInput>
  }

  /**
   * MealEntry delete
   */
  export type MealEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter which MealEntry to delete.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry deleteMany
   */
  export type MealEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEntries to delete
     */
    where?: MealEntryWhereInput
    /**
     * Limit how many MealEntries to delete.
     */
    limit?: number
  }

  /**
   * MealEntry.nutrients
   */
  export type MealEntry$nutrientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    where?: MealEntryNutrientWhereInput
    orderBy?: MealEntryNutrientOrderByWithRelationInput | MealEntryNutrientOrderByWithRelationInput[]
    cursor?: MealEntryNutrientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealEntryNutrientScalarFieldEnum | MealEntryNutrientScalarFieldEnum[]
  }

  /**
   * MealEntry without action
   */
  export type MealEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
  }


  /**
   * Model MealEntryNutrient
   */

  export type AggregateMealEntryNutrient = {
    _count: MealEntryNutrientCountAggregateOutputType | null
    _avg: MealEntryNutrientAvgAggregateOutputType | null
    _sum: MealEntryNutrientSumAggregateOutputType | null
    _min: MealEntryNutrientMinAggregateOutputType | null
    _max: MealEntryNutrientMaxAggregateOutputType | null
  }

  export type MealEntryNutrientAvgAggregateOutputType = {
    amountConsumed: Decimal | null
  }

  export type MealEntryNutrientSumAggregateOutputType = {
    amountConsumed: Decimal | null
  }

  export type MealEntryNutrientMinAggregateOutputType = {
    id: string | null
    mealEntryId: string | null
    nutrientId: string | null
    amountConsumed: Decimal | null
  }

  export type MealEntryNutrientMaxAggregateOutputType = {
    id: string | null
    mealEntryId: string | null
    nutrientId: string | null
    amountConsumed: Decimal | null
  }

  export type MealEntryNutrientCountAggregateOutputType = {
    id: number
    mealEntryId: number
    nutrientId: number
    amountConsumed: number
    _all: number
  }


  export type MealEntryNutrientAvgAggregateInputType = {
    amountConsumed?: true
  }

  export type MealEntryNutrientSumAggregateInputType = {
    amountConsumed?: true
  }

  export type MealEntryNutrientMinAggregateInputType = {
    id?: true
    mealEntryId?: true
    nutrientId?: true
    amountConsumed?: true
  }

  export type MealEntryNutrientMaxAggregateInputType = {
    id?: true
    mealEntryId?: true
    nutrientId?: true
    amountConsumed?: true
  }

  export type MealEntryNutrientCountAggregateInputType = {
    id?: true
    mealEntryId?: true
    nutrientId?: true
    amountConsumed?: true
    _all?: true
  }

  export type MealEntryNutrientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEntryNutrient to aggregate.
     */
    where?: MealEntryNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntryNutrients to fetch.
     */
    orderBy?: MealEntryNutrientOrderByWithRelationInput | MealEntryNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealEntryNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntryNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntryNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealEntryNutrients
    **/
    _count?: true | MealEntryNutrientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealEntryNutrientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealEntryNutrientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealEntryNutrientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealEntryNutrientMaxAggregateInputType
  }

  export type GetMealEntryNutrientAggregateType<T extends MealEntryNutrientAggregateArgs> = {
        [P in keyof T & keyof AggregateMealEntryNutrient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealEntryNutrient[P]>
      : GetScalarType<T[P], AggregateMealEntryNutrient[P]>
  }




  export type MealEntryNutrientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryNutrientWhereInput
    orderBy?: MealEntryNutrientOrderByWithAggregationInput | MealEntryNutrientOrderByWithAggregationInput[]
    by: MealEntryNutrientScalarFieldEnum[] | MealEntryNutrientScalarFieldEnum
    having?: MealEntryNutrientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealEntryNutrientCountAggregateInputType | true
    _avg?: MealEntryNutrientAvgAggregateInputType
    _sum?: MealEntryNutrientSumAggregateInputType
    _min?: MealEntryNutrientMinAggregateInputType
    _max?: MealEntryNutrientMaxAggregateInputType
  }

  export type MealEntryNutrientGroupByOutputType = {
    id: string
    mealEntryId: string
    nutrientId: string
    amountConsumed: Decimal
    _count: MealEntryNutrientCountAggregateOutputType | null
    _avg: MealEntryNutrientAvgAggregateOutputType | null
    _sum: MealEntryNutrientSumAggregateOutputType | null
    _min: MealEntryNutrientMinAggregateOutputType | null
    _max: MealEntryNutrientMaxAggregateOutputType | null
  }

  type GetMealEntryNutrientGroupByPayload<T extends MealEntryNutrientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealEntryNutrientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealEntryNutrientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealEntryNutrientGroupByOutputType[P]>
            : GetScalarType<T[P], MealEntryNutrientGroupByOutputType[P]>
        }
      >
    >


  export type MealEntryNutrientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealEntryId?: boolean
    nutrientId?: boolean
    amountConsumed?: boolean
    mealEntry?: boolean | MealEntryDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntryNutrient"]>

  export type MealEntryNutrientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealEntryId?: boolean
    nutrientId?: boolean
    amountConsumed?: boolean
    mealEntry?: boolean | MealEntryDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntryNutrient"]>

  export type MealEntryNutrientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealEntryId?: boolean
    nutrientId?: boolean
    amountConsumed?: boolean
    mealEntry?: boolean | MealEntryDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntryNutrient"]>

  export type MealEntryNutrientSelectScalar = {
    id?: boolean
    mealEntryId?: boolean
    nutrientId?: boolean
    amountConsumed?: boolean
  }

  export type MealEntryNutrientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealEntryId" | "nutrientId" | "amountConsumed", ExtArgs["result"]["mealEntryNutrient"]>
  export type MealEntryNutrientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealEntry?: boolean | MealEntryDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type MealEntryNutrientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealEntry?: boolean | MealEntryDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type MealEntryNutrientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealEntry?: boolean | MealEntryDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }

  export type $MealEntryNutrientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealEntryNutrient"
    objects: {
      mealEntry: Prisma.$MealEntryPayload<ExtArgs>
      nutrient: Prisma.$NutrientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mealEntryId: string
      nutrientId: string
      amountConsumed: Prisma.Decimal
    }, ExtArgs["result"]["mealEntryNutrient"]>
    composites: {}
  }

  type MealEntryNutrientGetPayload<S extends boolean | null | undefined | MealEntryNutrientDefaultArgs> = $Result.GetResult<Prisma.$MealEntryNutrientPayload, S>

  type MealEntryNutrientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealEntryNutrientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealEntryNutrientCountAggregateInputType | true
    }

  export interface MealEntryNutrientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealEntryNutrient'], meta: { name: 'MealEntryNutrient' } }
    /**
     * Find zero or one MealEntryNutrient that matches the filter.
     * @param {MealEntryNutrientFindUniqueArgs} args - Arguments to find a MealEntryNutrient
     * @example
     * // Get one MealEntryNutrient
     * const mealEntryNutrient = await prisma.mealEntryNutrient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealEntryNutrientFindUniqueArgs>(args: SelectSubset<T, MealEntryNutrientFindUniqueArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealEntryNutrient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealEntryNutrientFindUniqueOrThrowArgs} args - Arguments to find a MealEntryNutrient
     * @example
     * // Get one MealEntryNutrient
     * const mealEntryNutrient = await prisma.mealEntryNutrient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealEntryNutrientFindUniqueOrThrowArgs>(args: SelectSubset<T, MealEntryNutrientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEntryNutrient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryNutrientFindFirstArgs} args - Arguments to find a MealEntryNutrient
     * @example
     * // Get one MealEntryNutrient
     * const mealEntryNutrient = await prisma.mealEntryNutrient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealEntryNutrientFindFirstArgs>(args?: SelectSubset<T, MealEntryNutrientFindFirstArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEntryNutrient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryNutrientFindFirstOrThrowArgs} args - Arguments to find a MealEntryNutrient
     * @example
     * // Get one MealEntryNutrient
     * const mealEntryNutrient = await prisma.mealEntryNutrient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealEntryNutrientFindFirstOrThrowArgs>(args?: SelectSubset<T, MealEntryNutrientFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealEntryNutrients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryNutrientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealEntryNutrients
     * const mealEntryNutrients = await prisma.mealEntryNutrient.findMany()
     * 
     * // Get first 10 MealEntryNutrients
     * const mealEntryNutrients = await prisma.mealEntryNutrient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealEntryNutrientWithIdOnly = await prisma.mealEntryNutrient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealEntryNutrientFindManyArgs>(args?: SelectSubset<T, MealEntryNutrientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealEntryNutrient.
     * @param {MealEntryNutrientCreateArgs} args - Arguments to create a MealEntryNutrient.
     * @example
     * // Create one MealEntryNutrient
     * const MealEntryNutrient = await prisma.mealEntryNutrient.create({
     *   data: {
     *     // ... data to create a MealEntryNutrient
     *   }
     * })
     * 
     */
    create<T extends MealEntryNutrientCreateArgs>(args: SelectSubset<T, MealEntryNutrientCreateArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealEntryNutrients.
     * @param {MealEntryNutrientCreateManyArgs} args - Arguments to create many MealEntryNutrients.
     * @example
     * // Create many MealEntryNutrients
     * const mealEntryNutrient = await prisma.mealEntryNutrient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealEntryNutrientCreateManyArgs>(args?: SelectSubset<T, MealEntryNutrientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealEntryNutrients and returns the data saved in the database.
     * @param {MealEntryNutrientCreateManyAndReturnArgs} args - Arguments to create many MealEntryNutrients.
     * @example
     * // Create many MealEntryNutrients
     * const mealEntryNutrient = await prisma.mealEntryNutrient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealEntryNutrients and only return the `id`
     * const mealEntryNutrientWithIdOnly = await prisma.mealEntryNutrient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealEntryNutrientCreateManyAndReturnArgs>(args?: SelectSubset<T, MealEntryNutrientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealEntryNutrient.
     * @param {MealEntryNutrientDeleteArgs} args - Arguments to delete one MealEntryNutrient.
     * @example
     * // Delete one MealEntryNutrient
     * const MealEntryNutrient = await prisma.mealEntryNutrient.delete({
     *   where: {
     *     // ... filter to delete one MealEntryNutrient
     *   }
     * })
     * 
     */
    delete<T extends MealEntryNutrientDeleteArgs>(args: SelectSubset<T, MealEntryNutrientDeleteArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealEntryNutrient.
     * @param {MealEntryNutrientUpdateArgs} args - Arguments to update one MealEntryNutrient.
     * @example
     * // Update one MealEntryNutrient
     * const mealEntryNutrient = await prisma.mealEntryNutrient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealEntryNutrientUpdateArgs>(args: SelectSubset<T, MealEntryNutrientUpdateArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealEntryNutrients.
     * @param {MealEntryNutrientDeleteManyArgs} args - Arguments to filter MealEntryNutrients to delete.
     * @example
     * // Delete a few MealEntryNutrients
     * const { count } = await prisma.mealEntryNutrient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealEntryNutrientDeleteManyArgs>(args?: SelectSubset<T, MealEntryNutrientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealEntryNutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryNutrientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealEntryNutrients
     * const mealEntryNutrient = await prisma.mealEntryNutrient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealEntryNutrientUpdateManyArgs>(args: SelectSubset<T, MealEntryNutrientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealEntryNutrients and returns the data updated in the database.
     * @param {MealEntryNutrientUpdateManyAndReturnArgs} args - Arguments to update many MealEntryNutrients.
     * @example
     * // Update many MealEntryNutrients
     * const mealEntryNutrient = await prisma.mealEntryNutrient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealEntryNutrients and only return the `id`
     * const mealEntryNutrientWithIdOnly = await prisma.mealEntryNutrient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealEntryNutrientUpdateManyAndReturnArgs>(args: SelectSubset<T, MealEntryNutrientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealEntryNutrient.
     * @param {MealEntryNutrientUpsertArgs} args - Arguments to update or create a MealEntryNutrient.
     * @example
     * // Update or create a MealEntryNutrient
     * const mealEntryNutrient = await prisma.mealEntryNutrient.upsert({
     *   create: {
     *     // ... data to create a MealEntryNutrient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealEntryNutrient we want to update
     *   }
     * })
     */
    upsert<T extends MealEntryNutrientUpsertArgs>(args: SelectSubset<T, MealEntryNutrientUpsertArgs<ExtArgs>>): Prisma__MealEntryNutrientClient<$Result.GetResult<Prisma.$MealEntryNutrientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealEntryNutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryNutrientCountArgs} args - Arguments to filter MealEntryNutrients to count.
     * @example
     * // Count the number of MealEntryNutrients
     * const count = await prisma.mealEntryNutrient.count({
     *   where: {
     *     // ... the filter for the MealEntryNutrients we want to count
     *   }
     * })
    **/
    count<T extends MealEntryNutrientCountArgs>(
      args?: Subset<T, MealEntryNutrientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealEntryNutrientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealEntryNutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryNutrientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealEntryNutrientAggregateArgs>(args: Subset<T, MealEntryNutrientAggregateArgs>): Prisma.PrismaPromise<GetMealEntryNutrientAggregateType<T>>

    /**
     * Group by MealEntryNutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryNutrientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealEntryNutrientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealEntryNutrientGroupByArgs['orderBy'] }
        : { orderBy?: MealEntryNutrientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealEntryNutrientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealEntryNutrientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealEntryNutrient model
   */
  readonly fields: MealEntryNutrientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealEntryNutrient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealEntryNutrientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealEntry<T extends MealEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealEntryDefaultArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nutrient<T extends NutrientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NutrientDefaultArgs<ExtArgs>>): Prisma__NutrientClient<$Result.GetResult<Prisma.$NutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealEntryNutrient model
   */
  interface MealEntryNutrientFieldRefs {
    readonly id: FieldRef<"MealEntryNutrient", 'String'>
    readonly mealEntryId: FieldRef<"MealEntryNutrient", 'String'>
    readonly nutrientId: FieldRef<"MealEntryNutrient", 'String'>
    readonly amountConsumed: FieldRef<"MealEntryNutrient", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * MealEntryNutrient findUnique
   */
  export type MealEntryNutrientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * Filter, which MealEntryNutrient to fetch.
     */
    where: MealEntryNutrientWhereUniqueInput
  }

  /**
   * MealEntryNutrient findUniqueOrThrow
   */
  export type MealEntryNutrientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * Filter, which MealEntryNutrient to fetch.
     */
    where: MealEntryNutrientWhereUniqueInput
  }

  /**
   * MealEntryNutrient findFirst
   */
  export type MealEntryNutrientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * Filter, which MealEntryNutrient to fetch.
     */
    where?: MealEntryNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntryNutrients to fetch.
     */
    orderBy?: MealEntryNutrientOrderByWithRelationInput | MealEntryNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEntryNutrients.
     */
    cursor?: MealEntryNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntryNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntryNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntryNutrients.
     */
    distinct?: MealEntryNutrientScalarFieldEnum | MealEntryNutrientScalarFieldEnum[]
  }

  /**
   * MealEntryNutrient findFirstOrThrow
   */
  export type MealEntryNutrientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * Filter, which MealEntryNutrient to fetch.
     */
    where?: MealEntryNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntryNutrients to fetch.
     */
    orderBy?: MealEntryNutrientOrderByWithRelationInput | MealEntryNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEntryNutrients.
     */
    cursor?: MealEntryNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntryNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntryNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntryNutrients.
     */
    distinct?: MealEntryNutrientScalarFieldEnum | MealEntryNutrientScalarFieldEnum[]
  }

  /**
   * MealEntryNutrient findMany
   */
  export type MealEntryNutrientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * Filter, which MealEntryNutrients to fetch.
     */
    where?: MealEntryNutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntryNutrients to fetch.
     */
    orderBy?: MealEntryNutrientOrderByWithRelationInput | MealEntryNutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealEntryNutrients.
     */
    cursor?: MealEntryNutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntryNutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntryNutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntryNutrients.
     */
    distinct?: MealEntryNutrientScalarFieldEnum | MealEntryNutrientScalarFieldEnum[]
  }

  /**
   * MealEntryNutrient create
   */
  export type MealEntryNutrientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * The data needed to create a MealEntryNutrient.
     */
    data: XOR<MealEntryNutrientCreateInput, MealEntryNutrientUncheckedCreateInput>
  }

  /**
   * MealEntryNutrient createMany
   */
  export type MealEntryNutrientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealEntryNutrients.
     */
    data: MealEntryNutrientCreateManyInput | MealEntryNutrientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealEntryNutrient createManyAndReturn
   */
  export type MealEntryNutrientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * The data used to create many MealEntryNutrients.
     */
    data: MealEntryNutrientCreateManyInput | MealEntryNutrientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealEntryNutrient update
   */
  export type MealEntryNutrientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * The data needed to update a MealEntryNutrient.
     */
    data: XOR<MealEntryNutrientUpdateInput, MealEntryNutrientUncheckedUpdateInput>
    /**
     * Choose, which MealEntryNutrient to update.
     */
    where: MealEntryNutrientWhereUniqueInput
  }

  /**
   * MealEntryNutrient updateMany
   */
  export type MealEntryNutrientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealEntryNutrients.
     */
    data: XOR<MealEntryNutrientUpdateManyMutationInput, MealEntryNutrientUncheckedUpdateManyInput>
    /**
     * Filter which MealEntryNutrients to update
     */
    where?: MealEntryNutrientWhereInput
    /**
     * Limit how many MealEntryNutrients to update.
     */
    limit?: number
  }

  /**
   * MealEntryNutrient updateManyAndReturn
   */
  export type MealEntryNutrientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * The data used to update MealEntryNutrients.
     */
    data: XOR<MealEntryNutrientUpdateManyMutationInput, MealEntryNutrientUncheckedUpdateManyInput>
    /**
     * Filter which MealEntryNutrients to update
     */
    where?: MealEntryNutrientWhereInput
    /**
     * Limit how many MealEntryNutrients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealEntryNutrient upsert
   */
  export type MealEntryNutrientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * The filter to search for the MealEntryNutrient to update in case it exists.
     */
    where: MealEntryNutrientWhereUniqueInput
    /**
     * In case the MealEntryNutrient found by the `where` argument doesn't exist, create a new MealEntryNutrient with this data.
     */
    create: XOR<MealEntryNutrientCreateInput, MealEntryNutrientUncheckedCreateInput>
    /**
     * In case the MealEntryNutrient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealEntryNutrientUpdateInput, MealEntryNutrientUncheckedUpdateInput>
  }

  /**
   * MealEntryNutrient delete
   */
  export type MealEntryNutrientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
    /**
     * Filter which MealEntryNutrient to delete.
     */
    where: MealEntryNutrientWhereUniqueInput
  }

  /**
   * MealEntryNutrient deleteMany
   */
  export type MealEntryNutrientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEntryNutrients to delete
     */
    where?: MealEntryNutrientWhereInput
    /**
     * Limit how many MealEntryNutrients to delete.
     */
    limit?: number
  }

  /**
   * MealEntryNutrient without action
   */
  export type MealEntryNutrientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntryNutrient
     */
    select?: MealEntryNutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntryNutrient
     */
    omit?: MealEntryNutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryNutrientInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    email: 'email',
    weightKg: 'weightKg',
    heightCm: 'heightCm',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    servingSize: 'servingSize',
    servingUnit: 'servingUnit',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const NutrientScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    unit: 'unit',
    dailyReference: 'dailyReference',
    referenceSource: 'referenceSource',
    referenceUrl: 'referenceUrl',
    isEnergy: 'isEnergy',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type NutrientScalarFieldEnum = (typeof NutrientScalarFieldEnum)[keyof typeof NutrientScalarFieldEnum]


  export const FoodNutrientScalarFieldEnum: {
    id: 'id',
    foodId: 'foodId',
    nutrientId: 'nutrientId',
    amountPerServing: 'amountPerServing',
    source: 'source',
    sourceUrl: 'sourceUrl',
    sourceIdentifier: 'sourceIdentifier',
    createdAt: 'createdAt'
  };

  export type FoodNutrientScalarFieldEnum = (typeof FoodNutrientScalarFieldEnum)[keyof typeof FoodNutrientScalarFieldEnum]


  export const UserTargetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nutrientId: 'nutrientId',
    targetAmount: 'targetAmount',
    source: 'source',
    sourceUrl: 'sourceUrl',
    updatedAt: 'updatedAt'
  };

  export type UserTargetScalarFieldEnum = (typeof UserTargetScalarFieldEnum)[keyof typeof UserTargetScalarFieldEnum]


  export const MealEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodId: 'foodId',
    quantity: 'quantity',
    mealType: 'mealType',
    eatenAt: 'eatenAt',
    createdAt: 'createdAt'
  };

  export type MealEntryScalarFieldEnum = (typeof MealEntryScalarFieldEnum)[keyof typeof MealEntryScalarFieldEnum]


  export const MealEntryNutrientScalarFieldEnum: {
    id: 'id',
    mealEntryId: 'mealEntryId',
    nutrientId: 'nutrientId',
    amountConsumed: 'amountConsumed'
  };

  export type MealEntryNutrientScalarFieldEnum = (typeof MealEntryNutrientScalarFieldEnum)[keyof typeof MealEntryNutrientScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FoodCategory'
   */
  export type EnumFoodCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodCategory'>
    


  /**
   * Reference to a field of type 'FoodCategory[]'
   */
  export type ListEnumFoodCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NutrientUnit'
   */
  export type EnumNutrientUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NutrientUnit'>
    


  /**
   * Reference to a field of type 'NutrientUnit[]'
   */
  export type ListEnumNutrientUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NutrientUnit[]'>
    


  /**
   * Reference to a field of type 'MealType'
   */
  export type EnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType'>
    


  /**
   * Reference to a field of type 'MealType[]'
   */
  export type ListEnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    email?: StringFilter<"User"> | string
    weightKg?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    heightCm?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    mealEntries?: MealEntryListRelationFilter
    userTargets?: UserTargetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    email?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealEntries?: MealEntryOrderByRelationAggregateInput
    userTargets?: UserTargetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    weightKg?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    heightCm?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    mealEntries?: MealEntryListRelationFilter
    userTargets?: UserTargetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    email?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    email?: StringWithAggregatesFilter<"User"> | string
    weightKg?: DecimalNullableWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    heightCm?: DecimalNullableWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    description?: StringNullableFilter<"Food"> | string | null
    category?: EnumFoodCategoryFilter<"Food"> | $Enums.FoodCategory
    servingSize?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFilter<"Food"> | string
    isActive?: BoolFilter<"Food"> | boolean
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    nutrients?: FoodNutrientListRelationFilter
    mealEntries?: MealEntryListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nutrients?: FoodNutrientOrderByRelationAggregateInput
    mealEntries?: MealEntryOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    name?: StringFilter<"Food"> | string
    description?: StringNullableFilter<"Food"> | string | null
    category?: EnumFoodCategoryFilter<"Food"> | $Enums.FoodCategory
    servingSize?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFilter<"Food"> | string
    isActive?: BoolFilter<"Food"> | boolean
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    nutrients?: FoodNutrientListRelationFilter
    mealEntries?: MealEntryListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Food"> | string
    name?: StringWithAggregatesFilter<"Food"> | string
    description?: StringNullableWithAggregatesFilter<"Food"> | string | null
    category?: EnumFoodCategoryWithAggregatesFilter<"Food"> | $Enums.FoodCategory
    servingSize?: DecimalWithAggregatesFilter<"Food"> | Decimal | DecimalJsLike | number | string
    servingUnit?: StringWithAggregatesFilter<"Food"> | string
    isActive?: BoolWithAggregatesFilter<"Food"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
  }

  export type NutrientWhereInput = {
    AND?: NutrientWhereInput | NutrientWhereInput[]
    OR?: NutrientWhereInput[]
    NOT?: NutrientWhereInput | NutrientWhereInput[]
    id?: StringFilter<"Nutrient"> | string
    code?: StringFilter<"Nutrient"> | string
    name?: StringFilter<"Nutrient"> | string
    unit?: EnumNutrientUnitFilter<"Nutrient"> | $Enums.NutrientUnit
    dailyReference?: DecimalNullableFilter<"Nutrient"> | Decimal | DecimalJsLike | number | string | null
    referenceSource?: StringNullableFilter<"Nutrient"> | string | null
    referenceUrl?: StringNullableFilter<"Nutrient"> | string | null
    isEnergy?: BoolFilter<"Nutrient"> | boolean
    sortOrder?: IntFilter<"Nutrient"> | number
    createdAt?: DateTimeFilter<"Nutrient"> | Date | string
    foodNutrients?: FoodNutrientListRelationFilter
    userTargets?: UserTargetListRelationFilter
    mealEntryNutrients?: MealEntryNutrientListRelationFilter
  }

  export type NutrientOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    dailyReference?: SortOrderInput | SortOrder
    referenceSource?: SortOrderInput | SortOrder
    referenceUrl?: SortOrderInput | SortOrder
    isEnergy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    foodNutrients?: FoodNutrientOrderByRelationAggregateInput
    userTargets?: UserTargetOrderByRelationAggregateInput
    mealEntryNutrients?: MealEntryNutrientOrderByRelationAggregateInput
  }

  export type NutrientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: NutrientWhereInput | NutrientWhereInput[]
    OR?: NutrientWhereInput[]
    NOT?: NutrientWhereInput | NutrientWhereInput[]
    name?: StringFilter<"Nutrient"> | string
    unit?: EnumNutrientUnitFilter<"Nutrient"> | $Enums.NutrientUnit
    dailyReference?: DecimalNullableFilter<"Nutrient"> | Decimal | DecimalJsLike | number | string | null
    referenceSource?: StringNullableFilter<"Nutrient"> | string | null
    referenceUrl?: StringNullableFilter<"Nutrient"> | string | null
    isEnergy?: BoolFilter<"Nutrient"> | boolean
    sortOrder?: IntFilter<"Nutrient"> | number
    createdAt?: DateTimeFilter<"Nutrient"> | Date | string
    foodNutrients?: FoodNutrientListRelationFilter
    userTargets?: UserTargetListRelationFilter
    mealEntryNutrients?: MealEntryNutrientListRelationFilter
  }, "id" | "code">

  export type NutrientOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    dailyReference?: SortOrderInput | SortOrder
    referenceSource?: SortOrderInput | SortOrder
    referenceUrl?: SortOrderInput | SortOrder
    isEnergy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: NutrientCountOrderByAggregateInput
    _avg?: NutrientAvgOrderByAggregateInput
    _max?: NutrientMaxOrderByAggregateInput
    _min?: NutrientMinOrderByAggregateInput
    _sum?: NutrientSumOrderByAggregateInput
  }

  export type NutrientScalarWhereWithAggregatesInput = {
    AND?: NutrientScalarWhereWithAggregatesInput | NutrientScalarWhereWithAggregatesInput[]
    OR?: NutrientScalarWhereWithAggregatesInput[]
    NOT?: NutrientScalarWhereWithAggregatesInput | NutrientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nutrient"> | string
    code?: StringWithAggregatesFilter<"Nutrient"> | string
    name?: StringWithAggregatesFilter<"Nutrient"> | string
    unit?: EnumNutrientUnitWithAggregatesFilter<"Nutrient"> | $Enums.NutrientUnit
    dailyReference?: DecimalNullableWithAggregatesFilter<"Nutrient"> | Decimal | DecimalJsLike | number | string | null
    referenceSource?: StringNullableWithAggregatesFilter<"Nutrient"> | string | null
    referenceUrl?: StringNullableWithAggregatesFilter<"Nutrient"> | string | null
    isEnergy?: BoolWithAggregatesFilter<"Nutrient"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Nutrient"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Nutrient"> | Date | string
  }

  export type FoodNutrientWhereInput = {
    AND?: FoodNutrientWhereInput | FoodNutrientWhereInput[]
    OR?: FoodNutrientWhereInput[]
    NOT?: FoodNutrientWhereInput | FoodNutrientWhereInput[]
    id?: StringFilter<"FoodNutrient"> | string
    foodId?: StringFilter<"FoodNutrient"> | string
    nutrientId?: StringFilter<"FoodNutrient"> | string
    amountPerServing?: DecimalFilter<"FoodNutrient"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"FoodNutrient"> | string | null
    sourceUrl?: StringNullableFilter<"FoodNutrient"> | string | null
    sourceIdentifier?: StringNullableFilter<"FoodNutrient"> | string | null
    createdAt?: DateTimeFilter<"FoodNutrient"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    nutrient?: XOR<NutrientScalarRelationFilter, NutrientWhereInput>
  }

  export type FoodNutrientOrderByWithRelationInput = {
    id?: SortOrder
    foodId?: SortOrder
    nutrientId?: SortOrder
    amountPerServing?: SortOrder
    source?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceIdentifier?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    food?: FoodOrderByWithRelationInput
    nutrient?: NutrientOrderByWithRelationInput
  }

  export type FoodNutrientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    foodId_nutrientId?: FoodNutrientFoodIdNutrientIdCompoundUniqueInput
    AND?: FoodNutrientWhereInput | FoodNutrientWhereInput[]
    OR?: FoodNutrientWhereInput[]
    NOT?: FoodNutrientWhereInput | FoodNutrientWhereInput[]
    foodId?: StringFilter<"FoodNutrient"> | string
    nutrientId?: StringFilter<"FoodNutrient"> | string
    amountPerServing?: DecimalFilter<"FoodNutrient"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"FoodNutrient"> | string | null
    sourceUrl?: StringNullableFilter<"FoodNutrient"> | string | null
    sourceIdentifier?: StringNullableFilter<"FoodNutrient"> | string | null
    createdAt?: DateTimeFilter<"FoodNutrient"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    nutrient?: XOR<NutrientScalarRelationFilter, NutrientWhereInput>
  }, "id" | "foodId_nutrientId">

  export type FoodNutrientOrderByWithAggregationInput = {
    id?: SortOrder
    foodId?: SortOrder
    nutrientId?: SortOrder
    amountPerServing?: SortOrder
    source?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceIdentifier?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FoodNutrientCountOrderByAggregateInput
    _avg?: FoodNutrientAvgOrderByAggregateInput
    _max?: FoodNutrientMaxOrderByAggregateInput
    _min?: FoodNutrientMinOrderByAggregateInput
    _sum?: FoodNutrientSumOrderByAggregateInput
  }

  export type FoodNutrientScalarWhereWithAggregatesInput = {
    AND?: FoodNutrientScalarWhereWithAggregatesInput | FoodNutrientScalarWhereWithAggregatesInput[]
    OR?: FoodNutrientScalarWhereWithAggregatesInput[]
    NOT?: FoodNutrientScalarWhereWithAggregatesInput | FoodNutrientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodNutrient"> | string
    foodId?: StringWithAggregatesFilter<"FoodNutrient"> | string
    nutrientId?: StringWithAggregatesFilter<"FoodNutrient"> | string
    amountPerServing?: DecimalWithAggregatesFilter<"FoodNutrient"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableWithAggregatesFilter<"FoodNutrient"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"FoodNutrient"> | string | null
    sourceIdentifier?: StringNullableWithAggregatesFilter<"FoodNutrient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FoodNutrient"> | Date | string
  }

  export type UserTargetWhereInput = {
    AND?: UserTargetWhereInput | UserTargetWhereInput[]
    OR?: UserTargetWhereInput[]
    NOT?: UserTargetWhereInput | UserTargetWhereInput[]
    id?: StringFilter<"UserTarget"> | string
    userId?: StringFilter<"UserTarget"> | string
    nutrientId?: StringFilter<"UserTarget"> | string
    targetAmount?: DecimalFilter<"UserTarget"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"UserTarget"> | string | null
    sourceUrl?: StringNullableFilter<"UserTarget"> | string | null
    updatedAt?: DateTimeFilter<"UserTarget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nutrient?: XOR<NutrientScalarRelationFilter, NutrientWhereInput>
  }

  export type UserTargetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nutrientId?: SortOrder
    targetAmount?: SortOrder
    source?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    nutrient?: NutrientOrderByWithRelationInput
  }

  export type UserTargetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_nutrientId?: UserTargetUserIdNutrientIdCompoundUniqueInput
    AND?: UserTargetWhereInput | UserTargetWhereInput[]
    OR?: UserTargetWhereInput[]
    NOT?: UserTargetWhereInput | UserTargetWhereInput[]
    userId?: StringFilter<"UserTarget"> | string
    nutrientId?: StringFilter<"UserTarget"> | string
    targetAmount?: DecimalFilter<"UserTarget"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"UserTarget"> | string | null
    sourceUrl?: StringNullableFilter<"UserTarget"> | string | null
    updatedAt?: DateTimeFilter<"UserTarget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nutrient?: XOR<NutrientScalarRelationFilter, NutrientWhereInput>
  }, "id" | "userId_nutrientId">

  export type UserTargetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nutrientId?: SortOrder
    targetAmount?: SortOrder
    source?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UserTargetCountOrderByAggregateInput
    _avg?: UserTargetAvgOrderByAggregateInput
    _max?: UserTargetMaxOrderByAggregateInput
    _min?: UserTargetMinOrderByAggregateInput
    _sum?: UserTargetSumOrderByAggregateInput
  }

  export type UserTargetScalarWhereWithAggregatesInput = {
    AND?: UserTargetScalarWhereWithAggregatesInput | UserTargetScalarWhereWithAggregatesInput[]
    OR?: UserTargetScalarWhereWithAggregatesInput[]
    NOT?: UserTargetScalarWhereWithAggregatesInput | UserTargetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTarget"> | string
    userId?: StringWithAggregatesFilter<"UserTarget"> | string
    nutrientId?: StringWithAggregatesFilter<"UserTarget"> | string
    targetAmount?: DecimalWithAggregatesFilter<"UserTarget"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableWithAggregatesFilter<"UserTarget"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"UserTarget"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserTarget"> | Date | string
  }

  export type MealEntryWhereInput = {
    AND?: MealEntryWhereInput | MealEntryWhereInput[]
    OR?: MealEntryWhereInput[]
    NOT?: MealEntryWhereInput | MealEntryWhereInput[]
    id?: StringFilter<"MealEntry"> | string
    userId?: StringFilter<"MealEntry"> | string
    foodId?: StringFilter<"MealEntry"> | string
    quantity?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFilter<"MealEntry"> | $Enums.MealType
    eatenAt?: DateTimeFilter<"MealEntry"> | Date | string
    createdAt?: DateTimeFilter<"MealEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    nutrients?: MealEntryNutrientListRelationFilter
  }

  export type MealEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
    nutrients?: MealEntryNutrientOrderByRelationAggregateInput
  }

  export type MealEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealEntryWhereInput | MealEntryWhereInput[]
    OR?: MealEntryWhereInput[]
    NOT?: MealEntryWhereInput | MealEntryWhereInput[]
    userId?: StringFilter<"MealEntry"> | string
    foodId?: StringFilter<"MealEntry"> | string
    quantity?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFilter<"MealEntry"> | $Enums.MealType
    eatenAt?: DateTimeFilter<"MealEntry"> | Date | string
    createdAt?: DateTimeFilter<"MealEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    nutrients?: MealEntryNutrientListRelationFilter
  }, "id">

  export type MealEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
    _count?: MealEntryCountOrderByAggregateInput
    _avg?: MealEntryAvgOrderByAggregateInput
    _max?: MealEntryMaxOrderByAggregateInput
    _min?: MealEntryMinOrderByAggregateInput
    _sum?: MealEntrySumOrderByAggregateInput
  }

  export type MealEntryScalarWhereWithAggregatesInput = {
    AND?: MealEntryScalarWhereWithAggregatesInput | MealEntryScalarWhereWithAggregatesInput[]
    OR?: MealEntryScalarWhereWithAggregatesInput[]
    NOT?: MealEntryScalarWhereWithAggregatesInput | MealEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealEntry"> | string
    userId?: StringWithAggregatesFilter<"MealEntry"> | string
    foodId?: StringWithAggregatesFilter<"MealEntry"> | string
    quantity?: DecimalWithAggregatesFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeWithAggregatesFilter<"MealEntry"> | $Enums.MealType
    eatenAt?: DateTimeWithAggregatesFilter<"MealEntry"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MealEntry"> | Date | string
  }

  export type MealEntryNutrientWhereInput = {
    AND?: MealEntryNutrientWhereInput | MealEntryNutrientWhereInput[]
    OR?: MealEntryNutrientWhereInput[]
    NOT?: MealEntryNutrientWhereInput | MealEntryNutrientWhereInput[]
    id?: StringFilter<"MealEntryNutrient"> | string
    mealEntryId?: StringFilter<"MealEntryNutrient"> | string
    nutrientId?: StringFilter<"MealEntryNutrient"> | string
    amountConsumed?: DecimalFilter<"MealEntryNutrient"> | Decimal | DecimalJsLike | number | string
    mealEntry?: XOR<MealEntryScalarRelationFilter, MealEntryWhereInput>
    nutrient?: XOR<NutrientScalarRelationFilter, NutrientWhereInput>
  }

  export type MealEntryNutrientOrderByWithRelationInput = {
    id?: SortOrder
    mealEntryId?: SortOrder
    nutrientId?: SortOrder
    amountConsumed?: SortOrder
    mealEntry?: MealEntryOrderByWithRelationInput
    nutrient?: NutrientOrderByWithRelationInput
  }

  export type MealEntryNutrientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mealEntryId_nutrientId?: MealEntryNutrientMealEntryIdNutrientIdCompoundUniqueInput
    AND?: MealEntryNutrientWhereInput | MealEntryNutrientWhereInput[]
    OR?: MealEntryNutrientWhereInput[]
    NOT?: MealEntryNutrientWhereInput | MealEntryNutrientWhereInput[]
    mealEntryId?: StringFilter<"MealEntryNutrient"> | string
    nutrientId?: StringFilter<"MealEntryNutrient"> | string
    amountConsumed?: DecimalFilter<"MealEntryNutrient"> | Decimal | DecimalJsLike | number | string
    mealEntry?: XOR<MealEntryScalarRelationFilter, MealEntryWhereInput>
    nutrient?: XOR<NutrientScalarRelationFilter, NutrientWhereInput>
  }, "id" | "mealEntryId_nutrientId">

  export type MealEntryNutrientOrderByWithAggregationInput = {
    id?: SortOrder
    mealEntryId?: SortOrder
    nutrientId?: SortOrder
    amountConsumed?: SortOrder
    _count?: MealEntryNutrientCountOrderByAggregateInput
    _avg?: MealEntryNutrientAvgOrderByAggregateInput
    _max?: MealEntryNutrientMaxOrderByAggregateInput
    _min?: MealEntryNutrientMinOrderByAggregateInput
    _sum?: MealEntryNutrientSumOrderByAggregateInput
  }

  export type MealEntryNutrientScalarWhereWithAggregatesInput = {
    AND?: MealEntryNutrientScalarWhereWithAggregatesInput | MealEntryNutrientScalarWhereWithAggregatesInput[]
    OR?: MealEntryNutrientScalarWhereWithAggregatesInput[]
    NOT?: MealEntryNutrientScalarWhereWithAggregatesInput | MealEntryNutrientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealEntryNutrient"> | string
    mealEntryId?: StringWithAggregatesFilter<"MealEntryNutrient"> | string
    nutrientId?: StringWithAggregatesFilter<"MealEntryNutrient"> | string
    amountConsumed?: DecimalWithAggregatesFilter<"MealEntryNutrient"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    age?: number | null
    email: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutUserInput
    userTargets?: UserTargetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    age?: number | null
    email: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutUserInput
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutUserNestedInput
    userTargets?: UserTargetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutUserNestedInput
    userTargets?: UserTargetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    age?: number | null
    email: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal | DecimalJsLike | number | string
    servingUnit: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nutrients?: FoodNutrientCreateNestedManyWithoutFoodInput
    mealEntries?: MealEntryCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal | DecimalJsLike | number | string
    servingUnit: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nutrients?: FoodNutrientUncheckedCreateNestedManyWithoutFoodInput
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: FoodNutrientUpdateManyWithoutFoodNestedInput
    mealEntries?: MealEntryUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: FoodNutrientUncheckedUpdateManyWithoutFoodNestedInput
    mealEntries?: MealEntryUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal | DecimalJsLike | number | string
    servingUnit: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutrientCreateInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    foodNutrients?: FoodNutrientCreateNestedManyWithoutNutrientInput
    userTargets?: UserTargetCreateNestedManyWithoutNutrientInput
    mealEntryNutrients?: MealEntryNutrientCreateNestedManyWithoutNutrientInput
  }

  export type NutrientUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    foodNutrients?: FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutNutrientInput
    mealEntryNutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutNutrientInput
  }

  export type NutrientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodNutrients?: FoodNutrientUpdateManyWithoutNutrientNestedInput
    userTargets?: UserTargetUpdateManyWithoutNutrientNestedInput
    mealEntryNutrients?: MealEntryNutrientUpdateManyWithoutNutrientNestedInput
  }

  export type NutrientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodNutrients?: FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput
    userTargets?: UserTargetUncheckedUpdateManyWithoutNutrientNestedInput
    mealEntryNutrients?: MealEntryNutrientUncheckedUpdateManyWithoutNutrientNestedInput
  }

  export type NutrientCreateManyInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
  }

  export type NutrientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutrientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodNutrientCreateInput = {
    id?: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
    food: FoodCreateNestedOneWithoutNutrientsInput
    nutrient: NutrientCreateNestedOneWithoutFoodNutrientsInput
  }

  export type FoodNutrientUncheckedCreateInput = {
    id?: string
    foodId: string
    nutrientId: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
  }

  export type FoodNutrientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutNutrientsNestedInput
    nutrient?: NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput
  }

  export type FoodNutrientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodNutrientCreateManyInput = {
    id?: string
    foodId: string
    nutrientId: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
  }

  export type FoodNutrientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodNutrientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetCreateInput = {
    id?: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTargetsInput
    nutrient: NutrientCreateNestedOneWithoutUserTargetsInput
  }

  export type UserTargetUncheckedCreateInput = {
    id?: string
    userId: string
    nutrientId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type UserTargetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTargetsNestedInput
    nutrient?: NutrientUpdateOneRequiredWithoutUserTargetsNestedInput
  }

  export type UserTargetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetCreateManyInput = {
    id?: string
    userId: string
    nutrientId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type UserTargetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEntryCreateInput = {
    id?: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMealEntriesInput
    food: FoodCreateNestedOneWithoutMealEntriesInput
    nutrients?: MealEntryNutrientCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUncheckedCreateInput = {
    id?: string
    userId: string
    foodId: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    nutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealEntriesNestedInput
    food?: FoodUpdateOneRequiredWithoutMealEntriesNestedInput
    nutrients?: MealEntryNutrientUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: MealEntryNutrientUncheckedUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryCreateManyInput = {
    id?: string
    userId: string
    foodId: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEntryNutrientCreateInput = {
    id?: string
    amountConsumed: Decimal | DecimalJsLike | number | string
    mealEntry: MealEntryCreateNestedOneWithoutNutrientsInput
    nutrient: NutrientCreateNestedOneWithoutMealEntryNutrientsInput
  }

  export type MealEntryNutrientUncheckedCreateInput = {
    id?: string
    mealEntryId: string
    nutrientId: string
    amountConsumed: Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealEntry?: MealEntryUpdateOneRequiredWithoutNutrientsNestedInput
    nutrient?: NutrientUpdateOneRequiredWithoutMealEntryNutrientsNestedInput
  }

  export type MealEntryNutrientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealEntryId?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientCreateManyInput = {
    id?: string
    mealEntryId: string
    nutrientId: string
    amountConsumed: Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealEntryId?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MealEntryListRelationFilter = {
    every?: MealEntryWhereInput
    some?: MealEntryWhereInput
    none?: MealEntryWhereInput
  }

  export type UserTargetListRelationFilter = {
    every?: UserTargetWhereInput
    some?: UserTargetWhereInput
    none?: UserTargetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MealEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTargetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumFoodCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryFilter<$PrismaModel> | $Enums.FoodCategory
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FoodNutrientListRelationFilter = {
    every?: FoodNutrientWhereInput
    some?: FoodNutrientWhereInput
    none?: FoodNutrientWhereInput
  }

  export type FoodNutrientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    servingSize?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    servingSize?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumFoodCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FoodCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodCategoryFilter<$PrismaModel>
    _max?: NestedEnumFoodCategoryFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumNutrientUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.NutrientUnit | EnumNutrientUnitFieldRefInput<$PrismaModel>
    in?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumNutrientUnitFilter<$PrismaModel> | $Enums.NutrientUnit
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MealEntryNutrientListRelationFilter = {
    every?: MealEntryNutrientWhereInput
    some?: MealEntryNutrientWhereInput
    none?: MealEntryNutrientWhereInput
  }

  export type MealEntryNutrientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NutrientCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    dailyReference?: SortOrder
    referenceSource?: SortOrder
    referenceUrl?: SortOrder
    isEnergy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type NutrientAvgOrderByAggregateInput = {
    dailyReference?: SortOrder
    sortOrder?: SortOrder
  }

  export type NutrientMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    dailyReference?: SortOrder
    referenceSource?: SortOrder
    referenceUrl?: SortOrder
    isEnergy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type NutrientMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    dailyReference?: SortOrder
    referenceSource?: SortOrder
    referenceUrl?: SortOrder
    isEnergy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type NutrientSumOrderByAggregateInput = {
    dailyReference?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumNutrientUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NutrientUnit | EnumNutrientUnitFieldRefInput<$PrismaModel>
    in?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumNutrientUnitWithAggregatesFilter<$PrismaModel> | $Enums.NutrientUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNutrientUnitFilter<$PrismaModel>
    _max?: NestedEnumNutrientUnitFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FoodScalarRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type NutrientScalarRelationFilter = {
    is?: NutrientWhereInput
    isNot?: NutrientWhereInput
  }

  export type FoodNutrientFoodIdNutrientIdCompoundUniqueInput = {
    foodId: string
    nutrientId: string
  }

  export type FoodNutrientCountOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    nutrientId?: SortOrder
    amountPerServing?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    sourceIdentifier?: SortOrder
    createdAt?: SortOrder
  }

  export type FoodNutrientAvgOrderByAggregateInput = {
    amountPerServing?: SortOrder
  }

  export type FoodNutrientMaxOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    nutrientId?: SortOrder
    amountPerServing?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    sourceIdentifier?: SortOrder
    createdAt?: SortOrder
  }

  export type FoodNutrientMinOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    nutrientId?: SortOrder
    amountPerServing?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    sourceIdentifier?: SortOrder
    createdAt?: SortOrder
  }

  export type FoodNutrientSumOrderByAggregateInput = {
    amountPerServing?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserTargetUserIdNutrientIdCompoundUniqueInput = {
    userId: string
    nutrientId: string
  }

  export type UserTargetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nutrientId?: SortOrder
    targetAmount?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTargetAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
  }

  export type UserTargetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nutrientId?: SortOrder
    targetAmount?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTargetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nutrientId?: SortOrder
    targetAmount?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTargetSumOrderByAggregateInput = {
    targetAmount?: SortOrder
  }

  export type EnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type MealEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealEntryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type MealEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealEntrySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type MealEntryScalarRelationFilter = {
    is?: MealEntryWhereInput
    isNot?: MealEntryWhereInput
  }

  export type MealEntryNutrientMealEntryIdNutrientIdCompoundUniqueInput = {
    mealEntryId: string
    nutrientId: string
  }

  export type MealEntryNutrientCountOrderByAggregateInput = {
    id?: SortOrder
    mealEntryId?: SortOrder
    nutrientId?: SortOrder
    amountConsumed?: SortOrder
  }

  export type MealEntryNutrientAvgOrderByAggregateInput = {
    amountConsumed?: SortOrder
  }

  export type MealEntryNutrientMaxOrderByAggregateInput = {
    id?: SortOrder
    mealEntryId?: SortOrder
    nutrientId?: SortOrder
    amountConsumed?: SortOrder
  }

  export type MealEntryNutrientMinOrderByAggregateInput = {
    id?: SortOrder
    mealEntryId?: SortOrder
    nutrientId?: SortOrder
    amountConsumed?: SortOrder
  }

  export type MealEntryNutrientSumOrderByAggregateInput = {
    amountConsumed?: SortOrder
  }

  export type MealEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<MealEntryCreateWithoutUserInput, MealEntryUncheckedCreateWithoutUserInput> | MealEntryCreateWithoutUserInput[] | MealEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutUserInput | MealEntryCreateOrConnectWithoutUserInput[]
    createMany?: MealEntryCreateManyUserInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type UserTargetCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTargetCreateWithoutUserInput, UserTargetUncheckedCreateWithoutUserInput> | UserTargetCreateWithoutUserInput[] | UserTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutUserInput | UserTargetCreateOrConnectWithoutUserInput[]
    createMany?: UserTargetCreateManyUserInputEnvelope
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
  }

  export type MealEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealEntryCreateWithoutUserInput, MealEntryUncheckedCreateWithoutUserInput> | MealEntryCreateWithoutUserInput[] | MealEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutUserInput | MealEntryCreateOrConnectWithoutUserInput[]
    createMany?: MealEntryCreateManyUserInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type UserTargetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTargetCreateWithoutUserInput, UserTargetUncheckedCreateWithoutUserInput> | UserTargetCreateWithoutUserInput[] | UserTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutUserInput | UserTargetCreateOrConnectWithoutUserInput[]
    createMany?: UserTargetCreateManyUserInputEnvelope
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MealEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealEntryCreateWithoutUserInput, MealEntryUncheckedCreateWithoutUserInput> | MealEntryCreateWithoutUserInput[] | MealEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutUserInput | MealEntryCreateOrConnectWithoutUserInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutUserInput | MealEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealEntryCreateManyUserInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutUserInput | MealEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutUserInput | MealEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type UserTargetUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTargetCreateWithoutUserInput, UserTargetUncheckedCreateWithoutUserInput> | UserTargetCreateWithoutUserInput[] | UserTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutUserInput | UserTargetCreateOrConnectWithoutUserInput[]
    upsert?: UserTargetUpsertWithWhereUniqueWithoutUserInput | UserTargetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTargetCreateManyUserInputEnvelope
    set?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    disconnect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    delete?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    update?: UserTargetUpdateWithWhereUniqueWithoutUserInput | UserTargetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTargetUpdateManyWithWhereWithoutUserInput | UserTargetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
  }

  export type MealEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealEntryCreateWithoutUserInput, MealEntryUncheckedCreateWithoutUserInput> | MealEntryCreateWithoutUserInput[] | MealEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutUserInput | MealEntryCreateOrConnectWithoutUserInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutUserInput | MealEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealEntryCreateManyUserInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutUserInput | MealEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutUserInput | MealEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type UserTargetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTargetCreateWithoutUserInput, UserTargetUncheckedCreateWithoutUserInput> | UserTargetCreateWithoutUserInput[] | UserTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutUserInput | UserTargetCreateOrConnectWithoutUserInput[]
    upsert?: UserTargetUpsertWithWhereUniqueWithoutUserInput | UserTargetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTargetCreateManyUserInputEnvelope
    set?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    disconnect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    delete?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    update?: UserTargetUpdateWithWhereUniqueWithoutUserInput | UserTargetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTargetUpdateManyWithWhereWithoutUserInput | UserTargetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
  }

  export type FoodNutrientCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodNutrientCreateWithoutFoodInput, FoodNutrientUncheckedCreateWithoutFoodInput> | FoodNutrientCreateWithoutFoodInput[] | FoodNutrientUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutFoodInput | FoodNutrientCreateOrConnectWithoutFoodInput[]
    createMany?: FoodNutrientCreateManyFoodInputEnvelope
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
  }

  export type MealEntryCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput> | MealEntryCreateWithoutFoodInput[] | MealEntryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutFoodInput | MealEntryCreateOrConnectWithoutFoodInput[]
    createMany?: MealEntryCreateManyFoodInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type FoodNutrientUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodNutrientCreateWithoutFoodInput, FoodNutrientUncheckedCreateWithoutFoodInput> | FoodNutrientCreateWithoutFoodInput[] | FoodNutrientUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutFoodInput | FoodNutrientCreateOrConnectWithoutFoodInput[]
    createMany?: FoodNutrientCreateManyFoodInputEnvelope
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
  }

  export type MealEntryUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput> | MealEntryCreateWithoutFoodInput[] | MealEntryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutFoodInput | MealEntryCreateOrConnectWithoutFoodInput[]
    createMany?: MealEntryCreateManyFoodInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumFoodCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FoodCategory
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FoodNutrientUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodNutrientCreateWithoutFoodInput, FoodNutrientUncheckedCreateWithoutFoodInput> | FoodNutrientCreateWithoutFoodInput[] | FoodNutrientUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutFoodInput | FoodNutrientCreateOrConnectWithoutFoodInput[]
    upsert?: FoodNutrientUpsertWithWhereUniqueWithoutFoodInput | FoodNutrientUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodNutrientCreateManyFoodInputEnvelope
    set?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    disconnect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    delete?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    update?: FoodNutrientUpdateWithWhereUniqueWithoutFoodInput | FoodNutrientUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodNutrientUpdateManyWithWhereWithoutFoodInput | FoodNutrientUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodNutrientScalarWhereInput | FoodNutrientScalarWhereInput[]
  }

  export type MealEntryUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput> | MealEntryCreateWithoutFoodInput[] | MealEntryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutFoodInput | MealEntryCreateOrConnectWithoutFoodInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutFoodInput | MealEntryUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealEntryCreateManyFoodInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutFoodInput | MealEntryUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutFoodInput | MealEntryUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type FoodNutrientUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodNutrientCreateWithoutFoodInput, FoodNutrientUncheckedCreateWithoutFoodInput> | FoodNutrientCreateWithoutFoodInput[] | FoodNutrientUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutFoodInput | FoodNutrientCreateOrConnectWithoutFoodInput[]
    upsert?: FoodNutrientUpsertWithWhereUniqueWithoutFoodInput | FoodNutrientUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodNutrientCreateManyFoodInputEnvelope
    set?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    disconnect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    delete?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    update?: FoodNutrientUpdateWithWhereUniqueWithoutFoodInput | FoodNutrientUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodNutrientUpdateManyWithWhereWithoutFoodInput | FoodNutrientUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodNutrientScalarWhereInput | FoodNutrientScalarWhereInput[]
  }

  export type MealEntryUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput> | MealEntryCreateWithoutFoodInput[] | MealEntryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutFoodInput | MealEntryCreateOrConnectWithoutFoodInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutFoodInput | MealEntryUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealEntryCreateManyFoodInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutFoodInput | MealEntryUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutFoodInput | MealEntryUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type FoodNutrientCreateNestedManyWithoutNutrientInput = {
    create?: XOR<FoodNutrientCreateWithoutNutrientInput, FoodNutrientUncheckedCreateWithoutNutrientInput> | FoodNutrientCreateWithoutNutrientInput[] | FoodNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutNutrientInput | FoodNutrientCreateOrConnectWithoutNutrientInput[]
    createMany?: FoodNutrientCreateManyNutrientInputEnvelope
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
  }

  export type UserTargetCreateNestedManyWithoutNutrientInput = {
    create?: XOR<UserTargetCreateWithoutNutrientInput, UserTargetUncheckedCreateWithoutNutrientInput> | UserTargetCreateWithoutNutrientInput[] | UserTargetUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutNutrientInput | UserTargetCreateOrConnectWithoutNutrientInput[]
    createMany?: UserTargetCreateManyNutrientInputEnvelope
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
  }

  export type MealEntryNutrientCreateNestedManyWithoutNutrientInput = {
    create?: XOR<MealEntryNutrientCreateWithoutNutrientInput, MealEntryNutrientUncheckedCreateWithoutNutrientInput> | MealEntryNutrientCreateWithoutNutrientInput[] | MealEntryNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutNutrientInput | MealEntryNutrientCreateOrConnectWithoutNutrientInput[]
    createMany?: MealEntryNutrientCreateManyNutrientInputEnvelope
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
  }

  export type FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput = {
    create?: XOR<FoodNutrientCreateWithoutNutrientInput, FoodNutrientUncheckedCreateWithoutNutrientInput> | FoodNutrientCreateWithoutNutrientInput[] | FoodNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutNutrientInput | FoodNutrientCreateOrConnectWithoutNutrientInput[]
    createMany?: FoodNutrientCreateManyNutrientInputEnvelope
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
  }

  export type UserTargetUncheckedCreateNestedManyWithoutNutrientInput = {
    create?: XOR<UserTargetCreateWithoutNutrientInput, UserTargetUncheckedCreateWithoutNutrientInput> | UserTargetCreateWithoutNutrientInput[] | UserTargetUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutNutrientInput | UserTargetCreateOrConnectWithoutNutrientInput[]
    createMany?: UserTargetCreateManyNutrientInputEnvelope
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
  }

  export type MealEntryNutrientUncheckedCreateNestedManyWithoutNutrientInput = {
    create?: XOR<MealEntryNutrientCreateWithoutNutrientInput, MealEntryNutrientUncheckedCreateWithoutNutrientInput> | MealEntryNutrientCreateWithoutNutrientInput[] | MealEntryNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutNutrientInput | MealEntryNutrientCreateOrConnectWithoutNutrientInput[]
    createMany?: MealEntryNutrientCreateManyNutrientInputEnvelope
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
  }

  export type EnumNutrientUnitFieldUpdateOperationsInput = {
    set?: $Enums.NutrientUnit
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodNutrientUpdateManyWithoutNutrientNestedInput = {
    create?: XOR<FoodNutrientCreateWithoutNutrientInput, FoodNutrientUncheckedCreateWithoutNutrientInput> | FoodNutrientCreateWithoutNutrientInput[] | FoodNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutNutrientInput | FoodNutrientCreateOrConnectWithoutNutrientInput[]
    upsert?: FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput | FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput[]
    createMany?: FoodNutrientCreateManyNutrientInputEnvelope
    set?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    disconnect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    delete?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    update?: FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput | FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput[]
    updateMany?: FoodNutrientUpdateManyWithWhereWithoutNutrientInput | FoodNutrientUpdateManyWithWhereWithoutNutrientInput[]
    deleteMany?: FoodNutrientScalarWhereInput | FoodNutrientScalarWhereInput[]
  }

  export type UserTargetUpdateManyWithoutNutrientNestedInput = {
    create?: XOR<UserTargetCreateWithoutNutrientInput, UserTargetUncheckedCreateWithoutNutrientInput> | UserTargetCreateWithoutNutrientInput[] | UserTargetUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutNutrientInput | UserTargetCreateOrConnectWithoutNutrientInput[]
    upsert?: UserTargetUpsertWithWhereUniqueWithoutNutrientInput | UserTargetUpsertWithWhereUniqueWithoutNutrientInput[]
    createMany?: UserTargetCreateManyNutrientInputEnvelope
    set?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    disconnect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    delete?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    update?: UserTargetUpdateWithWhereUniqueWithoutNutrientInput | UserTargetUpdateWithWhereUniqueWithoutNutrientInput[]
    updateMany?: UserTargetUpdateManyWithWhereWithoutNutrientInput | UserTargetUpdateManyWithWhereWithoutNutrientInput[]
    deleteMany?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
  }

  export type MealEntryNutrientUpdateManyWithoutNutrientNestedInput = {
    create?: XOR<MealEntryNutrientCreateWithoutNutrientInput, MealEntryNutrientUncheckedCreateWithoutNutrientInput> | MealEntryNutrientCreateWithoutNutrientInput[] | MealEntryNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutNutrientInput | MealEntryNutrientCreateOrConnectWithoutNutrientInput[]
    upsert?: MealEntryNutrientUpsertWithWhereUniqueWithoutNutrientInput | MealEntryNutrientUpsertWithWhereUniqueWithoutNutrientInput[]
    createMany?: MealEntryNutrientCreateManyNutrientInputEnvelope
    set?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    disconnect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    delete?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    update?: MealEntryNutrientUpdateWithWhereUniqueWithoutNutrientInput | MealEntryNutrientUpdateWithWhereUniqueWithoutNutrientInput[]
    updateMany?: MealEntryNutrientUpdateManyWithWhereWithoutNutrientInput | MealEntryNutrientUpdateManyWithWhereWithoutNutrientInput[]
    deleteMany?: MealEntryNutrientScalarWhereInput | MealEntryNutrientScalarWhereInput[]
  }

  export type FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput = {
    create?: XOR<FoodNutrientCreateWithoutNutrientInput, FoodNutrientUncheckedCreateWithoutNutrientInput> | FoodNutrientCreateWithoutNutrientInput[] | FoodNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: FoodNutrientCreateOrConnectWithoutNutrientInput | FoodNutrientCreateOrConnectWithoutNutrientInput[]
    upsert?: FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput | FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput[]
    createMany?: FoodNutrientCreateManyNutrientInputEnvelope
    set?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    disconnect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    delete?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    connect?: FoodNutrientWhereUniqueInput | FoodNutrientWhereUniqueInput[]
    update?: FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput | FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput[]
    updateMany?: FoodNutrientUpdateManyWithWhereWithoutNutrientInput | FoodNutrientUpdateManyWithWhereWithoutNutrientInput[]
    deleteMany?: FoodNutrientScalarWhereInput | FoodNutrientScalarWhereInput[]
  }

  export type UserTargetUncheckedUpdateManyWithoutNutrientNestedInput = {
    create?: XOR<UserTargetCreateWithoutNutrientInput, UserTargetUncheckedCreateWithoutNutrientInput> | UserTargetCreateWithoutNutrientInput[] | UserTargetUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutNutrientInput | UserTargetCreateOrConnectWithoutNutrientInput[]
    upsert?: UserTargetUpsertWithWhereUniqueWithoutNutrientInput | UserTargetUpsertWithWhereUniqueWithoutNutrientInput[]
    createMany?: UserTargetCreateManyNutrientInputEnvelope
    set?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    disconnect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    delete?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    update?: UserTargetUpdateWithWhereUniqueWithoutNutrientInput | UserTargetUpdateWithWhereUniqueWithoutNutrientInput[]
    updateMany?: UserTargetUpdateManyWithWhereWithoutNutrientInput | UserTargetUpdateManyWithWhereWithoutNutrientInput[]
    deleteMany?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
  }

  export type MealEntryNutrientUncheckedUpdateManyWithoutNutrientNestedInput = {
    create?: XOR<MealEntryNutrientCreateWithoutNutrientInput, MealEntryNutrientUncheckedCreateWithoutNutrientInput> | MealEntryNutrientCreateWithoutNutrientInput[] | MealEntryNutrientUncheckedCreateWithoutNutrientInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutNutrientInput | MealEntryNutrientCreateOrConnectWithoutNutrientInput[]
    upsert?: MealEntryNutrientUpsertWithWhereUniqueWithoutNutrientInput | MealEntryNutrientUpsertWithWhereUniqueWithoutNutrientInput[]
    createMany?: MealEntryNutrientCreateManyNutrientInputEnvelope
    set?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    disconnect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    delete?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    update?: MealEntryNutrientUpdateWithWhereUniqueWithoutNutrientInput | MealEntryNutrientUpdateWithWhereUniqueWithoutNutrientInput[]
    updateMany?: MealEntryNutrientUpdateManyWithWhereWithoutNutrientInput | MealEntryNutrientUpdateManyWithWhereWithoutNutrientInput[]
    deleteMany?: MealEntryNutrientScalarWhereInput | MealEntryNutrientScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutNutrientsInput = {
    create?: XOR<FoodCreateWithoutNutrientsInput, FoodUncheckedCreateWithoutNutrientsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutNutrientsInput
    connect?: FoodWhereUniqueInput
  }

  export type NutrientCreateNestedOneWithoutFoodNutrientsInput = {
    create?: XOR<NutrientCreateWithoutFoodNutrientsInput, NutrientUncheckedCreateWithoutFoodNutrientsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutFoodNutrientsInput
    connect?: NutrientWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutNutrientsNestedInput = {
    create?: XOR<FoodCreateWithoutNutrientsInput, FoodUncheckedCreateWithoutNutrientsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutNutrientsInput
    upsert?: FoodUpsertWithoutNutrientsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutNutrientsInput, FoodUpdateWithoutNutrientsInput>, FoodUncheckedUpdateWithoutNutrientsInput>
  }

  export type NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput = {
    create?: XOR<NutrientCreateWithoutFoodNutrientsInput, NutrientUncheckedCreateWithoutFoodNutrientsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutFoodNutrientsInput
    upsert?: NutrientUpsertWithoutFoodNutrientsInput
    connect?: NutrientWhereUniqueInput
    update?: XOR<XOR<NutrientUpdateToOneWithWhereWithoutFoodNutrientsInput, NutrientUpdateWithoutFoodNutrientsInput>, NutrientUncheckedUpdateWithoutFoodNutrientsInput>
  }

  export type UserCreateNestedOneWithoutUserTargetsInput = {
    create?: XOR<UserCreateWithoutUserTargetsInput, UserUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTargetsInput
    connect?: UserWhereUniqueInput
  }

  export type NutrientCreateNestedOneWithoutUserTargetsInput = {
    create?: XOR<NutrientCreateWithoutUserTargetsInput, NutrientUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutUserTargetsInput
    connect?: NutrientWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserTargetsNestedInput = {
    create?: XOR<UserCreateWithoutUserTargetsInput, UserUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTargetsInput
    upsert?: UserUpsertWithoutUserTargetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTargetsInput, UserUpdateWithoutUserTargetsInput>, UserUncheckedUpdateWithoutUserTargetsInput>
  }

  export type NutrientUpdateOneRequiredWithoutUserTargetsNestedInput = {
    create?: XOR<NutrientCreateWithoutUserTargetsInput, NutrientUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutUserTargetsInput
    upsert?: NutrientUpsertWithoutUserTargetsInput
    connect?: NutrientWhereUniqueInput
    update?: XOR<XOR<NutrientUpdateToOneWithWhereWithoutUserTargetsInput, NutrientUpdateWithoutUserTargetsInput>, NutrientUncheckedUpdateWithoutUserTargetsInput>
  }

  export type UserCreateNestedOneWithoutMealEntriesInput = {
    create?: XOR<UserCreateWithoutMealEntriesInput, UserUncheckedCreateWithoutMealEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutMealEntriesInput = {
    create?: XOR<FoodCreateWithoutMealEntriesInput, FoodUncheckedCreateWithoutMealEntriesInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMealEntriesInput
    connect?: FoodWhereUniqueInput
  }

  export type MealEntryNutrientCreateNestedManyWithoutMealEntryInput = {
    create?: XOR<MealEntryNutrientCreateWithoutMealEntryInput, MealEntryNutrientUncheckedCreateWithoutMealEntryInput> | MealEntryNutrientCreateWithoutMealEntryInput[] | MealEntryNutrientUncheckedCreateWithoutMealEntryInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutMealEntryInput | MealEntryNutrientCreateOrConnectWithoutMealEntryInput[]
    createMany?: MealEntryNutrientCreateManyMealEntryInputEnvelope
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
  }

  export type MealEntryNutrientUncheckedCreateNestedManyWithoutMealEntryInput = {
    create?: XOR<MealEntryNutrientCreateWithoutMealEntryInput, MealEntryNutrientUncheckedCreateWithoutMealEntryInput> | MealEntryNutrientCreateWithoutMealEntryInput[] | MealEntryNutrientUncheckedCreateWithoutMealEntryInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutMealEntryInput | MealEntryNutrientCreateOrConnectWithoutMealEntryInput[]
    createMany?: MealEntryNutrientCreateManyMealEntryInputEnvelope
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
  }

  export type EnumMealTypeFieldUpdateOperationsInput = {
    set?: $Enums.MealType
  }

  export type UserUpdateOneRequiredWithoutMealEntriesNestedInput = {
    create?: XOR<UserCreateWithoutMealEntriesInput, UserUncheckedCreateWithoutMealEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealEntriesInput
    upsert?: UserUpsertWithoutMealEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealEntriesInput, UserUpdateWithoutMealEntriesInput>, UserUncheckedUpdateWithoutMealEntriesInput>
  }

  export type FoodUpdateOneRequiredWithoutMealEntriesNestedInput = {
    create?: XOR<FoodCreateWithoutMealEntriesInput, FoodUncheckedCreateWithoutMealEntriesInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMealEntriesInput
    upsert?: FoodUpsertWithoutMealEntriesInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutMealEntriesInput, FoodUpdateWithoutMealEntriesInput>, FoodUncheckedUpdateWithoutMealEntriesInput>
  }

  export type MealEntryNutrientUpdateManyWithoutMealEntryNestedInput = {
    create?: XOR<MealEntryNutrientCreateWithoutMealEntryInput, MealEntryNutrientUncheckedCreateWithoutMealEntryInput> | MealEntryNutrientCreateWithoutMealEntryInput[] | MealEntryNutrientUncheckedCreateWithoutMealEntryInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutMealEntryInput | MealEntryNutrientCreateOrConnectWithoutMealEntryInput[]
    upsert?: MealEntryNutrientUpsertWithWhereUniqueWithoutMealEntryInput | MealEntryNutrientUpsertWithWhereUniqueWithoutMealEntryInput[]
    createMany?: MealEntryNutrientCreateManyMealEntryInputEnvelope
    set?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    disconnect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    delete?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    update?: MealEntryNutrientUpdateWithWhereUniqueWithoutMealEntryInput | MealEntryNutrientUpdateWithWhereUniqueWithoutMealEntryInput[]
    updateMany?: MealEntryNutrientUpdateManyWithWhereWithoutMealEntryInput | MealEntryNutrientUpdateManyWithWhereWithoutMealEntryInput[]
    deleteMany?: MealEntryNutrientScalarWhereInput | MealEntryNutrientScalarWhereInput[]
  }

  export type MealEntryNutrientUncheckedUpdateManyWithoutMealEntryNestedInput = {
    create?: XOR<MealEntryNutrientCreateWithoutMealEntryInput, MealEntryNutrientUncheckedCreateWithoutMealEntryInput> | MealEntryNutrientCreateWithoutMealEntryInput[] | MealEntryNutrientUncheckedCreateWithoutMealEntryInput[]
    connectOrCreate?: MealEntryNutrientCreateOrConnectWithoutMealEntryInput | MealEntryNutrientCreateOrConnectWithoutMealEntryInput[]
    upsert?: MealEntryNutrientUpsertWithWhereUniqueWithoutMealEntryInput | MealEntryNutrientUpsertWithWhereUniqueWithoutMealEntryInput[]
    createMany?: MealEntryNutrientCreateManyMealEntryInputEnvelope
    set?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    disconnect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    delete?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    connect?: MealEntryNutrientWhereUniqueInput | MealEntryNutrientWhereUniqueInput[]
    update?: MealEntryNutrientUpdateWithWhereUniqueWithoutMealEntryInput | MealEntryNutrientUpdateWithWhereUniqueWithoutMealEntryInput[]
    updateMany?: MealEntryNutrientUpdateManyWithWhereWithoutMealEntryInput | MealEntryNutrientUpdateManyWithWhereWithoutMealEntryInput[]
    deleteMany?: MealEntryNutrientScalarWhereInput | MealEntryNutrientScalarWhereInput[]
  }

  export type MealEntryCreateNestedOneWithoutNutrientsInput = {
    create?: XOR<MealEntryCreateWithoutNutrientsInput, MealEntryUncheckedCreateWithoutNutrientsInput>
    connectOrCreate?: MealEntryCreateOrConnectWithoutNutrientsInput
    connect?: MealEntryWhereUniqueInput
  }

  export type NutrientCreateNestedOneWithoutMealEntryNutrientsInput = {
    create?: XOR<NutrientCreateWithoutMealEntryNutrientsInput, NutrientUncheckedCreateWithoutMealEntryNutrientsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutMealEntryNutrientsInput
    connect?: NutrientWhereUniqueInput
  }

  export type MealEntryUpdateOneRequiredWithoutNutrientsNestedInput = {
    create?: XOR<MealEntryCreateWithoutNutrientsInput, MealEntryUncheckedCreateWithoutNutrientsInput>
    connectOrCreate?: MealEntryCreateOrConnectWithoutNutrientsInput
    upsert?: MealEntryUpsertWithoutNutrientsInput
    connect?: MealEntryWhereUniqueInput
    update?: XOR<XOR<MealEntryUpdateToOneWithWhereWithoutNutrientsInput, MealEntryUpdateWithoutNutrientsInput>, MealEntryUncheckedUpdateWithoutNutrientsInput>
  }

  export type NutrientUpdateOneRequiredWithoutMealEntryNutrientsNestedInput = {
    create?: XOR<NutrientCreateWithoutMealEntryNutrientsInput, NutrientUncheckedCreateWithoutMealEntryNutrientsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutMealEntryNutrientsInput
    upsert?: NutrientUpsertWithoutMealEntryNutrientsInput
    connect?: NutrientWhereUniqueInput
    update?: XOR<XOR<NutrientUpdateToOneWithWhereWithoutMealEntryNutrientsInput, NutrientUpdateWithoutMealEntryNutrientsInput>, NutrientUncheckedUpdateWithoutMealEntryNutrientsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumFoodCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryFilter<$PrismaModel> | $Enums.FoodCategory
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumFoodCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FoodCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodCategoryFilter<$PrismaModel>
    _max?: NestedEnumFoodCategoryFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumNutrientUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.NutrientUnit | EnumNutrientUnitFieldRefInput<$PrismaModel>
    in?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumNutrientUnitFilter<$PrismaModel> | $Enums.NutrientUnit
  }

  export type NestedEnumNutrientUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NutrientUnit | EnumNutrientUnitFieldRefInput<$PrismaModel>
    in?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumNutrientUnitWithAggregatesFilter<$PrismaModel> | $Enums.NutrientUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNutrientUnitFilter<$PrismaModel>
    _max?: NestedEnumNutrientUnitFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type NestedEnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type MealEntryCreateWithoutUserInput = {
    id?: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    food: FoodCreateNestedOneWithoutMealEntriesInput
    nutrients?: MealEntryNutrientCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUncheckedCreateWithoutUserInput = {
    id?: string
    foodId: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    nutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryCreateOrConnectWithoutUserInput = {
    where: MealEntryWhereUniqueInput
    create: XOR<MealEntryCreateWithoutUserInput, MealEntryUncheckedCreateWithoutUserInput>
  }

  export type MealEntryCreateManyUserInputEnvelope = {
    data: MealEntryCreateManyUserInput | MealEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTargetCreateWithoutUserInput = {
    id?: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
    nutrient: NutrientCreateNestedOneWithoutUserTargetsInput
  }

  export type UserTargetUncheckedCreateWithoutUserInput = {
    id?: string
    nutrientId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type UserTargetCreateOrConnectWithoutUserInput = {
    where: UserTargetWhereUniqueInput
    create: XOR<UserTargetCreateWithoutUserInput, UserTargetUncheckedCreateWithoutUserInput>
  }

  export type UserTargetCreateManyUserInputEnvelope = {
    data: UserTargetCreateManyUserInput | UserTargetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: MealEntryWhereUniqueInput
    update: XOR<MealEntryUpdateWithoutUserInput, MealEntryUncheckedUpdateWithoutUserInput>
    create: XOR<MealEntryCreateWithoutUserInput, MealEntryUncheckedCreateWithoutUserInput>
  }

  export type MealEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: MealEntryWhereUniqueInput
    data: XOR<MealEntryUpdateWithoutUserInput, MealEntryUncheckedUpdateWithoutUserInput>
  }

  export type MealEntryUpdateManyWithWhereWithoutUserInput = {
    where: MealEntryScalarWhereInput
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type MealEntryScalarWhereInput = {
    AND?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
    OR?: MealEntryScalarWhereInput[]
    NOT?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
    id?: StringFilter<"MealEntry"> | string
    userId?: StringFilter<"MealEntry"> | string
    foodId?: StringFilter<"MealEntry"> | string
    quantity?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFilter<"MealEntry"> | $Enums.MealType
    eatenAt?: DateTimeFilter<"MealEntry"> | Date | string
    createdAt?: DateTimeFilter<"MealEntry"> | Date | string
  }

  export type UserTargetUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTargetWhereUniqueInput
    update: XOR<UserTargetUpdateWithoutUserInput, UserTargetUncheckedUpdateWithoutUserInput>
    create: XOR<UserTargetCreateWithoutUserInput, UserTargetUncheckedCreateWithoutUserInput>
  }

  export type UserTargetUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTargetWhereUniqueInput
    data: XOR<UserTargetUpdateWithoutUserInput, UserTargetUncheckedUpdateWithoutUserInput>
  }

  export type UserTargetUpdateManyWithWhereWithoutUserInput = {
    where: UserTargetScalarWhereInput
    data: XOR<UserTargetUpdateManyMutationInput, UserTargetUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTargetScalarWhereInput = {
    AND?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
    OR?: UserTargetScalarWhereInput[]
    NOT?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
    id?: StringFilter<"UserTarget"> | string
    userId?: StringFilter<"UserTarget"> | string
    nutrientId?: StringFilter<"UserTarget"> | string
    targetAmount?: DecimalFilter<"UserTarget"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"UserTarget"> | string | null
    sourceUrl?: StringNullableFilter<"UserTarget"> | string | null
    updatedAt?: DateTimeFilter<"UserTarget"> | Date | string
  }

  export type FoodNutrientCreateWithoutFoodInput = {
    id?: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
    nutrient: NutrientCreateNestedOneWithoutFoodNutrientsInput
  }

  export type FoodNutrientUncheckedCreateWithoutFoodInput = {
    id?: string
    nutrientId: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
  }

  export type FoodNutrientCreateOrConnectWithoutFoodInput = {
    where: FoodNutrientWhereUniqueInput
    create: XOR<FoodNutrientCreateWithoutFoodInput, FoodNutrientUncheckedCreateWithoutFoodInput>
  }

  export type FoodNutrientCreateManyFoodInputEnvelope = {
    data: FoodNutrientCreateManyFoodInput | FoodNutrientCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type MealEntryCreateWithoutFoodInput = {
    id?: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMealEntriesInput
    nutrients?: MealEntryNutrientCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUncheckedCreateWithoutFoodInput = {
    id?: string
    userId: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    nutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryCreateOrConnectWithoutFoodInput = {
    where: MealEntryWhereUniqueInput
    create: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput>
  }

  export type MealEntryCreateManyFoodInputEnvelope = {
    data: MealEntryCreateManyFoodInput | MealEntryCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type FoodNutrientUpsertWithWhereUniqueWithoutFoodInput = {
    where: FoodNutrientWhereUniqueInput
    update: XOR<FoodNutrientUpdateWithoutFoodInput, FoodNutrientUncheckedUpdateWithoutFoodInput>
    create: XOR<FoodNutrientCreateWithoutFoodInput, FoodNutrientUncheckedCreateWithoutFoodInput>
  }

  export type FoodNutrientUpdateWithWhereUniqueWithoutFoodInput = {
    where: FoodNutrientWhereUniqueInput
    data: XOR<FoodNutrientUpdateWithoutFoodInput, FoodNutrientUncheckedUpdateWithoutFoodInput>
  }

  export type FoodNutrientUpdateManyWithWhereWithoutFoodInput = {
    where: FoodNutrientScalarWhereInput
    data: XOR<FoodNutrientUpdateManyMutationInput, FoodNutrientUncheckedUpdateManyWithoutFoodInput>
  }

  export type FoodNutrientScalarWhereInput = {
    AND?: FoodNutrientScalarWhereInput | FoodNutrientScalarWhereInput[]
    OR?: FoodNutrientScalarWhereInput[]
    NOT?: FoodNutrientScalarWhereInput | FoodNutrientScalarWhereInput[]
    id?: StringFilter<"FoodNutrient"> | string
    foodId?: StringFilter<"FoodNutrient"> | string
    nutrientId?: StringFilter<"FoodNutrient"> | string
    amountPerServing?: DecimalFilter<"FoodNutrient"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"FoodNutrient"> | string | null
    sourceUrl?: StringNullableFilter<"FoodNutrient"> | string | null
    sourceIdentifier?: StringNullableFilter<"FoodNutrient"> | string | null
    createdAt?: DateTimeFilter<"FoodNutrient"> | Date | string
  }

  export type MealEntryUpsertWithWhereUniqueWithoutFoodInput = {
    where: MealEntryWhereUniqueInput
    update: XOR<MealEntryUpdateWithoutFoodInput, MealEntryUncheckedUpdateWithoutFoodInput>
    create: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput>
  }

  export type MealEntryUpdateWithWhereUniqueWithoutFoodInput = {
    where: MealEntryWhereUniqueInput
    data: XOR<MealEntryUpdateWithoutFoodInput, MealEntryUncheckedUpdateWithoutFoodInput>
  }

  export type MealEntryUpdateManyWithWhereWithoutFoodInput = {
    where: MealEntryScalarWhereInput
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyWithoutFoodInput>
  }

  export type FoodNutrientCreateWithoutNutrientInput = {
    id?: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
    food: FoodCreateNestedOneWithoutNutrientsInput
  }

  export type FoodNutrientUncheckedCreateWithoutNutrientInput = {
    id?: string
    foodId: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
  }

  export type FoodNutrientCreateOrConnectWithoutNutrientInput = {
    where: FoodNutrientWhereUniqueInput
    create: XOR<FoodNutrientCreateWithoutNutrientInput, FoodNutrientUncheckedCreateWithoutNutrientInput>
  }

  export type FoodNutrientCreateManyNutrientInputEnvelope = {
    data: FoodNutrientCreateManyNutrientInput | FoodNutrientCreateManyNutrientInput[]
    skipDuplicates?: boolean
  }

  export type UserTargetCreateWithoutNutrientInput = {
    id?: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTargetsInput
  }

  export type UserTargetUncheckedCreateWithoutNutrientInput = {
    id?: string
    userId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type UserTargetCreateOrConnectWithoutNutrientInput = {
    where: UserTargetWhereUniqueInput
    create: XOR<UserTargetCreateWithoutNutrientInput, UserTargetUncheckedCreateWithoutNutrientInput>
  }

  export type UserTargetCreateManyNutrientInputEnvelope = {
    data: UserTargetCreateManyNutrientInput | UserTargetCreateManyNutrientInput[]
    skipDuplicates?: boolean
  }

  export type MealEntryNutrientCreateWithoutNutrientInput = {
    id?: string
    amountConsumed: Decimal | DecimalJsLike | number | string
    mealEntry: MealEntryCreateNestedOneWithoutNutrientsInput
  }

  export type MealEntryNutrientUncheckedCreateWithoutNutrientInput = {
    id?: string
    mealEntryId: string
    amountConsumed: Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientCreateOrConnectWithoutNutrientInput = {
    where: MealEntryNutrientWhereUniqueInput
    create: XOR<MealEntryNutrientCreateWithoutNutrientInput, MealEntryNutrientUncheckedCreateWithoutNutrientInput>
  }

  export type MealEntryNutrientCreateManyNutrientInputEnvelope = {
    data: MealEntryNutrientCreateManyNutrientInput | MealEntryNutrientCreateManyNutrientInput[]
    skipDuplicates?: boolean
  }

  export type FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput = {
    where: FoodNutrientWhereUniqueInput
    update: XOR<FoodNutrientUpdateWithoutNutrientInput, FoodNutrientUncheckedUpdateWithoutNutrientInput>
    create: XOR<FoodNutrientCreateWithoutNutrientInput, FoodNutrientUncheckedCreateWithoutNutrientInput>
  }

  export type FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput = {
    where: FoodNutrientWhereUniqueInput
    data: XOR<FoodNutrientUpdateWithoutNutrientInput, FoodNutrientUncheckedUpdateWithoutNutrientInput>
  }

  export type FoodNutrientUpdateManyWithWhereWithoutNutrientInput = {
    where: FoodNutrientScalarWhereInput
    data: XOR<FoodNutrientUpdateManyMutationInput, FoodNutrientUncheckedUpdateManyWithoutNutrientInput>
  }

  export type UserTargetUpsertWithWhereUniqueWithoutNutrientInput = {
    where: UserTargetWhereUniqueInput
    update: XOR<UserTargetUpdateWithoutNutrientInput, UserTargetUncheckedUpdateWithoutNutrientInput>
    create: XOR<UserTargetCreateWithoutNutrientInput, UserTargetUncheckedCreateWithoutNutrientInput>
  }

  export type UserTargetUpdateWithWhereUniqueWithoutNutrientInput = {
    where: UserTargetWhereUniqueInput
    data: XOR<UserTargetUpdateWithoutNutrientInput, UserTargetUncheckedUpdateWithoutNutrientInput>
  }

  export type UserTargetUpdateManyWithWhereWithoutNutrientInput = {
    where: UserTargetScalarWhereInput
    data: XOR<UserTargetUpdateManyMutationInput, UserTargetUncheckedUpdateManyWithoutNutrientInput>
  }

  export type MealEntryNutrientUpsertWithWhereUniqueWithoutNutrientInput = {
    where: MealEntryNutrientWhereUniqueInput
    update: XOR<MealEntryNutrientUpdateWithoutNutrientInput, MealEntryNutrientUncheckedUpdateWithoutNutrientInput>
    create: XOR<MealEntryNutrientCreateWithoutNutrientInput, MealEntryNutrientUncheckedCreateWithoutNutrientInput>
  }

  export type MealEntryNutrientUpdateWithWhereUniqueWithoutNutrientInput = {
    where: MealEntryNutrientWhereUniqueInput
    data: XOR<MealEntryNutrientUpdateWithoutNutrientInput, MealEntryNutrientUncheckedUpdateWithoutNutrientInput>
  }

  export type MealEntryNutrientUpdateManyWithWhereWithoutNutrientInput = {
    where: MealEntryNutrientScalarWhereInput
    data: XOR<MealEntryNutrientUpdateManyMutationInput, MealEntryNutrientUncheckedUpdateManyWithoutNutrientInput>
  }

  export type MealEntryNutrientScalarWhereInput = {
    AND?: MealEntryNutrientScalarWhereInput | MealEntryNutrientScalarWhereInput[]
    OR?: MealEntryNutrientScalarWhereInput[]
    NOT?: MealEntryNutrientScalarWhereInput | MealEntryNutrientScalarWhereInput[]
    id?: StringFilter<"MealEntryNutrient"> | string
    mealEntryId?: StringFilter<"MealEntryNutrient"> | string
    nutrientId?: StringFilter<"MealEntryNutrient"> | string
    amountConsumed?: DecimalFilter<"MealEntryNutrient"> | Decimal | DecimalJsLike | number | string
  }

  export type FoodCreateWithoutNutrientsInput = {
    id?: string
    name: string
    description?: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal | DecimalJsLike | number | string
    servingUnit: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutNutrientsInput = {
    id?: string
    name: string
    description?: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal | DecimalJsLike | number | string
    servingUnit: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutNutrientsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutNutrientsInput, FoodUncheckedCreateWithoutNutrientsInput>
  }

  export type NutrientCreateWithoutFoodNutrientsInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    userTargets?: UserTargetCreateNestedManyWithoutNutrientInput
    mealEntryNutrients?: MealEntryNutrientCreateNestedManyWithoutNutrientInput
  }

  export type NutrientUncheckedCreateWithoutFoodNutrientsInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutNutrientInput
    mealEntryNutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutNutrientInput
  }

  export type NutrientCreateOrConnectWithoutFoodNutrientsInput = {
    where: NutrientWhereUniqueInput
    create: XOR<NutrientCreateWithoutFoodNutrientsInput, NutrientUncheckedCreateWithoutFoodNutrientsInput>
  }

  export type FoodUpsertWithoutNutrientsInput = {
    update: XOR<FoodUpdateWithoutNutrientsInput, FoodUncheckedUpdateWithoutNutrientsInput>
    create: XOR<FoodCreateWithoutNutrientsInput, FoodUncheckedCreateWithoutNutrientsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutNutrientsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutNutrientsInput, FoodUncheckedUpdateWithoutNutrientsInput>
  }

  export type FoodUpdateWithoutNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type NutrientUpsertWithoutFoodNutrientsInput = {
    update: XOR<NutrientUpdateWithoutFoodNutrientsInput, NutrientUncheckedUpdateWithoutFoodNutrientsInput>
    create: XOR<NutrientCreateWithoutFoodNutrientsInput, NutrientUncheckedCreateWithoutFoodNutrientsInput>
    where?: NutrientWhereInput
  }

  export type NutrientUpdateToOneWithWhereWithoutFoodNutrientsInput = {
    where?: NutrientWhereInput
    data: XOR<NutrientUpdateWithoutFoodNutrientsInput, NutrientUncheckedUpdateWithoutFoodNutrientsInput>
  }

  export type NutrientUpdateWithoutFoodNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTargets?: UserTargetUpdateManyWithoutNutrientNestedInput
    mealEntryNutrients?: MealEntryNutrientUpdateManyWithoutNutrientNestedInput
  }

  export type NutrientUncheckedUpdateWithoutFoodNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTargets?: UserTargetUncheckedUpdateManyWithoutNutrientNestedInput
    mealEntryNutrients?: MealEntryNutrientUncheckedUpdateManyWithoutNutrientNestedInput
  }

  export type UserCreateWithoutUserTargetsInput = {
    id?: string
    name: string
    age?: number | null
    email: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTargetsInput = {
    id?: string
    name: string
    age?: number | null
    email: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTargetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTargetsInput, UserUncheckedCreateWithoutUserTargetsInput>
  }

  export type NutrientCreateWithoutUserTargetsInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    foodNutrients?: FoodNutrientCreateNestedManyWithoutNutrientInput
    mealEntryNutrients?: MealEntryNutrientCreateNestedManyWithoutNutrientInput
  }

  export type NutrientUncheckedCreateWithoutUserTargetsInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    foodNutrients?: FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput
    mealEntryNutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutNutrientInput
  }

  export type NutrientCreateOrConnectWithoutUserTargetsInput = {
    where: NutrientWhereUniqueInput
    create: XOR<NutrientCreateWithoutUserTargetsInput, NutrientUncheckedCreateWithoutUserTargetsInput>
  }

  export type UserUpsertWithoutUserTargetsInput = {
    update: XOR<UserUpdateWithoutUserTargetsInput, UserUncheckedUpdateWithoutUserTargetsInput>
    create: XOR<UserCreateWithoutUserTargetsInput, UserUncheckedCreateWithoutUserTargetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTargetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTargetsInput, UserUncheckedUpdateWithoutUserTargetsInput>
  }

  export type UserUpdateWithoutUserTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NutrientUpsertWithoutUserTargetsInput = {
    update: XOR<NutrientUpdateWithoutUserTargetsInput, NutrientUncheckedUpdateWithoutUserTargetsInput>
    create: XOR<NutrientCreateWithoutUserTargetsInput, NutrientUncheckedCreateWithoutUserTargetsInput>
    where?: NutrientWhereInput
  }

  export type NutrientUpdateToOneWithWhereWithoutUserTargetsInput = {
    where?: NutrientWhereInput
    data: XOR<NutrientUpdateWithoutUserTargetsInput, NutrientUncheckedUpdateWithoutUserTargetsInput>
  }

  export type NutrientUpdateWithoutUserTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodNutrients?: FoodNutrientUpdateManyWithoutNutrientNestedInput
    mealEntryNutrients?: MealEntryNutrientUpdateManyWithoutNutrientNestedInput
  }

  export type NutrientUncheckedUpdateWithoutUserTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodNutrients?: FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput
    mealEntryNutrients?: MealEntryNutrientUncheckedUpdateManyWithoutNutrientNestedInput
  }

  export type UserCreateWithoutMealEntriesInput = {
    id?: string
    name: string
    age?: number | null
    email: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTargets?: UserTargetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealEntriesInput = {
    id?: string
    name: string
    age?: number | null
    email: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealEntriesInput, UserUncheckedCreateWithoutMealEntriesInput>
  }

  export type FoodCreateWithoutMealEntriesInput = {
    id?: string
    name: string
    description?: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal | DecimalJsLike | number | string
    servingUnit: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nutrients?: FoodNutrientCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutMealEntriesInput = {
    id?: string
    name: string
    description?: string | null
    category: $Enums.FoodCategory
    servingSize: Decimal | DecimalJsLike | number | string
    servingUnit: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nutrients?: FoodNutrientUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutMealEntriesInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutMealEntriesInput, FoodUncheckedCreateWithoutMealEntriesInput>
  }

  export type MealEntryNutrientCreateWithoutMealEntryInput = {
    id?: string
    amountConsumed: Decimal | DecimalJsLike | number | string
    nutrient: NutrientCreateNestedOneWithoutMealEntryNutrientsInput
  }

  export type MealEntryNutrientUncheckedCreateWithoutMealEntryInput = {
    id?: string
    nutrientId: string
    amountConsumed: Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientCreateOrConnectWithoutMealEntryInput = {
    where: MealEntryNutrientWhereUniqueInput
    create: XOR<MealEntryNutrientCreateWithoutMealEntryInput, MealEntryNutrientUncheckedCreateWithoutMealEntryInput>
  }

  export type MealEntryNutrientCreateManyMealEntryInputEnvelope = {
    data: MealEntryNutrientCreateManyMealEntryInput | MealEntryNutrientCreateManyMealEntryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMealEntriesInput = {
    update: XOR<UserUpdateWithoutMealEntriesInput, UserUncheckedUpdateWithoutMealEntriesInput>
    create: XOR<UserCreateWithoutMealEntriesInput, UserUncheckedCreateWithoutMealEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealEntriesInput, UserUncheckedUpdateWithoutMealEntriesInput>
  }

  export type UserUpdateWithoutMealEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTargets?: UserTargetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTargets?: UserTargetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodUpsertWithoutMealEntriesInput = {
    update: XOR<FoodUpdateWithoutMealEntriesInput, FoodUncheckedUpdateWithoutMealEntriesInput>
    create: XOR<FoodCreateWithoutMealEntriesInput, FoodUncheckedCreateWithoutMealEntriesInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutMealEntriesInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutMealEntriesInput, FoodUncheckedUpdateWithoutMealEntriesInput>
  }

  export type FoodUpdateWithoutMealEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: FoodNutrientUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutMealEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    servingSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servingUnit?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: FoodNutrientUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type MealEntryNutrientUpsertWithWhereUniqueWithoutMealEntryInput = {
    where: MealEntryNutrientWhereUniqueInput
    update: XOR<MealEntryNutrientUpdateWithoutMealEntryInput, MealEntryNutrientUncheckedUpdateWithoutMealEntryInput>
    create: XOR<MealEntryNutrientCreateWithoutMealEntryInput, MealEntryNutrientUncheckedCreateWithoutMealEntryInput>
  }

  export type MealEntryNutrientUpdateWithWhereUniqueWithoutMealEntryInput = {
    where: MealEntryNutrientWhereUniqueInput
    data: XOR<MealEntryNutrientUpdateWithoutMealEntryInput, MealEntryNutrientUncheckedUpdateWithoutMealEntryInput>
  }

  export type MealEntryNutrientUpdateManyWithWhereWithoutMealEntryInput = {
    where: MealEntryNutrientScalarWhereInput
    data: XOR<MealEntryNutrientUpdateManyMutationInput, MealEntryNutrientUncheckedUpdateManyWithoutMealEntryInput>
  }

  export type MealEntryCreateWithoutNutrientsInput = {
    id?: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMealEntriesInput
    food: FoodCreateNestedOneWithoutMealEntriesInput
  }

  export type MealEntryUncheckedCreateWithoutNutrientsInput = {
    id?: string
    userId: string
    foodId: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealEntryCreateOrConnectWithoutNutrientsInput = {
    where: MealEntryWhereUniqueInput
    create: XOR<MealEntryCreateWithoutNutrientsInput, MealEntryUncheckedCreateWithoutNutrientsInput>
  }

  export type NutrientCreateWithoutMealEntryNutrientsInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    foodNutrients?: FoodNutrientCreateNestedManyWithoutNutrientInput
    userTargets?: UserTargetCreateNestedManyWithoutNutrientInput
  }

  export type NutrientUncheckedCreateWithoutMealEntryNutrientsInput = {
    id?: string
    code: string
    name: string
    unit: $Enums.NutrientUnit
    dailyReference?: Decimal | DecimalJsLike | number | string | null
    referenceSource?: string | null
    referenceUrl?: string | null
    isEnergy?: boolean
    sortOrder?: number
    createdAt?: Date | string
    foodNutrients?: FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutNutrientInput
  }

  export type NutrientCreateOrConnectWithoutMealEntryNutrientsInput = {
    where: NutrientWhereUniqueInput
    create: XOR<NutrientCreateWithoutMealEntryNutrientsInput, NutrientUncheckedCreateWithoutMealEntryNutrientsInput>
  }

  export type MealEntryUpsertWithoutNutrientsInput = {
    update: XOR<MealEntryUpdateWithoutNutrientsInput, MealEntryUncheckedUpdateWithoutNutrientsInput>
    create: XOR<MealEntryCreateWithoutNutrientsInput, MealEntryUncheckedCreateWithoutNutrientsInput>
    where?: MealEntryWhereInput
  }

  export type MealEntryUpdateToOneWithWhereWithoutNutrientsInput = {
    where?: MealEntryWhereInput
    data: XOR<MealEntryUpdateWithoutNutrientsInput, MealEntryUncheckedUpdateWithoutNutrientsInput>
  }

  export type MealEntryUpdateWithoutNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealEntriesNestedInput
    food?: FoodUpdateOneRequiredWithoutMealEntriesNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutrientUpsertWithoutMealEntryNutrientsInput = {
    update: XOR<NutrientUpdateWithoutMealEntryNutrientsInput, NutrientUncheckedUpdateWithoutMealEntryNutrientsInput>
    create: XOR<NutrientCreateWithoutMealEntryNutrientsInput, NutrientUncheckedCreateWithoutMealEntryNutrientsInput>
    where?: NutrientWhereInput
  }

  export type NutrientUpdateToOneWithWhereWithoutMealEntryNutrientsInput = {
    where?: NutrientWhereInput
    data: XOR<NutrientUpdateWithoutMealEntryNutrientsInput, NutrientUncheckedUpdateWithoutMealEntryNutrientsInput>
  }

  export type NutrientUpdateWithoutMealEntryNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodNutrients?: FoodNutrientUpdateManyWithoutNutrientNestedInput
    userTargets?: UserTargetUpdateManyWithoutNutrientNestedInput
  }

  export type NutrientUncheckedUpdateWithoutMealEntryNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumNutrientUnitFieldUpdateOperationsInput | $Enums.NutrientUnit
    dailyReference?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referenceSource?: NullableStringFieldUpdateOperationsInput | string | null
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnergy?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodNutrients?: FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput
    userTargets?: UserTargetUncheckedUpdateManyWithoutNutrientNestedInput
  }

  export type MealEntryCreateManyUserInput = {
    id?: string
    foodId: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type UserTargetCreateManyUserInput = {
    id?: string
    nutrientId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type MealEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutMealEntriesNestedInput
    nutrients?: MealEntryNutrientUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: MealEntryNutrientUncheckedUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrient?: NutrientUpdateOneRequiredWithoutUserTargetsNestedInput
  }

  export type UserTargetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodNutrientCreateManyFoodInput = {
    id?: string
    nutrientId: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
  }

  export type MealEntryCreateManyFoodInput = {
    id?: string
    userId: string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type FoodNutrientUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrient?: NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput
  }

  export type FoodNutrientUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodNutrientUncheckedUpdateManyWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEntryUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealEntriesNestedInput
    nutrients?: MealEntryNutrientUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: MealEntryNutrientUncheckedUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateManyWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodNutrientCreateManyNutrientInput = {
    id?: string
    foodId: string
    amountPerServing: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    sourceIdentifier?: string | null
    createdAt?: Date | string
  }

  export type UserTargetCreateManyNutrientInput = {
    id?: string
    userId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type MealEntryNutrientCreateManyNutrientInput = {
    id?: string
    mealEntryId: string
    amountConsumed: Decimal | DecimalJsLike | number | string
  }

  export type FoodNutrientUpdateWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutNutrientsNestedInput
  }

  export type FoodNutrientUncheckedUpdateWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodNutrientUncheckedUpdateManyWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    amountPerServing?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceIdentifier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetUpdateWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTargetsNestedInput
  }

  export type UserTargetUncheckedUpdateWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetUncheckedUpdateManyWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEntryNutrientUpdateWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealEntry?: MealEntryUpdateOneRequiredWithoutNutrientsNestedInput
  }

  export type MealEntryNutrientUncheckedUpdateWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealEntryId?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientUncheckedUpdateManyWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealEntryId?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientCreateManyMealEntryInput = {
    id?: string
    nutrientId: string
    amountConsumed: Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientUpdateWithoutMealEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nutrient?: NutrientUpdateOneRequiredWithoutMealEntryNutrientsNestedInput
  }

  export type MealEntryNutrientUncheckedUpdateWithoutMealEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MealEntryNutrientUncheckedUpdateManyWithoutMealEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    amountConsumed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}