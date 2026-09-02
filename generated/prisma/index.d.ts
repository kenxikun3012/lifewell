
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
 * Model Profile
 * App-specific profile data for a Neon Auth (Stack Auth) user.
 * `id` is the Stack Auth user id (not locally generated) — identity and
 * credentials themselves live in Neon Auth, mirrored read-only into
 * `neon_auth.users_sync`. This table only holds what Neon Auth can't.
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Notification
 * Admin-broadcast in-app notification (Dashboard > Notifications).
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationRead
 * Per-user read receipt for a Notification. Presence of a row = read.
 */
export type NotificationRead = $Result.DefaultSelection<Prisma.$NotificationReadPayload>
/**
 * Model Category
 * Admin-managed food category (Dashboard > Categories).
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Food
 * Admin-managed food catalog (Dashboard > Foods). All nutrition values are
 * per 100g. Distinct from the USDA-driven meal-logging flow in
 * app/food/actions.ts, which stores its own per-meal nutrient snapshots.
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model Nutrient
 * 
 */
export type Nutrient = $Result.DefaultSelection<Prisma.$NutrientPayload>
/**
 * Model UserTarget
 * 
 */
export type UserTarget = $Result.DefaultSelection<Prisma.$UserTargetPayload>
/**
 * Model MealEntry
 * 
 */
export type MealEntry = $Result.DefaultSelection<Prisma.$MealEntryPayload>
/**
 * Model MealEntryNutrient
 * 
 */
export type MealEntryNutrient = $Result.DefaultSelection<Prisma.$MealEntryNutrientPayload>
/**
 * Model WaterLog
 * 
 */
export type WaterLog = $Result.DefaultSelection<Prisma.$WaterLogPayload>

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


export const NutrientUnit: {
  KCAL: 'KCAL',
  G: 'G',
  MG: 'MG',
  MCG: 'MCG',
  IU: 'IU'
};

export type NutrientUnit = (typeof NutrientUnit)[keyof typeof NutrientUnit]


export const Goal: {
  WEIGHT_LOSS: 'WEIGHT_LOSS',
  WEIGHT_GAIN: 'WEIGHT_GAIN',
  MUSCLE_GROWTH: 'MUSCLE_GROWTH',
  FIT_BODY: 'FIT_BODY'
};

export type Goal = (typeof Goal)[keyof typeof Goal]


export const ActivityLevel: {
  SEDENTARY: 'SEDENTARY',
  LIGHTLY_ACTIVE: 'LIGHTLY_ACTIVE',
  ACTIVE: 'ACTIVE',
  VERY_ACTIVE: 'VERY_ACTIVE'
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel]

}

export type MealType = $Enums.MealType

export const MealType: typeof $Enums.MealType

export type NutrientUnit = $Enums.NutrientUnit

export const NutrientUnit: typeof $Enums.NutrientUnit

export type Goal = $Enums.Goal

export const Goal: typeof $Enums.Goal

export type ActivityLevel = $Enums.ActivityLevel

export const ActivityLevel: typeof $Enums.ActivityLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
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
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationRead`: Exposes CRUD operations for the **NotificationRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationReads
    * const notificationReads = await prisma.notificationRead.findMany()
    * ```
    */
  get notificationRead(): Prisma.NotificationReadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.waterLog`: Exposes CRUD operations for the **WaterLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterLogs
    * const waterLogs = await prisma.waterLog.findMany()
    * ```
    */
  get waterLog(): Prisma.WaterLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
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
    Profile: 'Profile',
    Notification: 'Notification',
    NotificationRead: 'NotificationRead',
    Category: 'Category',
    Food: 'Food',
    Nutrient: 'Nutrient',
    UserTarget: 'UserTarget',
    MealEntry: 'MealEntry',
    MealEntryNutrient: 'MealEntryNutrient',
    WaterLog: 'WaterLog'
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
      modelProps: "profile" | "notification" | "notificationRead" | "category" | "food" | "nutrient" | "userTarget" | "mealEntry" | "mealEntryNutrient" | "waterLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationRead: {
        payload: Prisma.$NotificationReadPayload<ExtArgs>
        fields: Prisma.NotificationReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          findFirst: {
            args: Prisma.NotificationReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          findMany: {
            args: Prisma.NotificationReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          create: {
            args: Prisma.NotificationReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          createMany: {
            args: Prisma.NotificationReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          delete: {
            args: Prisma.NotificationReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          update: {
            args: Prisma.NotificationReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          deleteMany: {
            args: Prisma.NotificationReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          upsert: {
            args: Prisma.NotificationReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          aggregate: {
            args: Prisma.NotificationReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationRead>
          }
          groupBy: {
            args: Prisma.NotificationReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationReadCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
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
      WaterLog: {
        payload: Prisma.$WaterLogPayload<ExtArgs>
        fields: Prisma.WaterLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          findFirst: {
            args: Prisma.WaterLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          findMany: {
            args: Prisma.WaterLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          create: {
            args: Prisma.WaterLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          createMany: {
            args: Prisma.WaterLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaterLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          delete: {
            args: Prisma.WaterLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          update: {
            args: Prisma.WaterLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          deleteMany: {
            args: Prisma.WaterLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaterLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          upsert: {
            args: Prisma.WaterLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          aggregate: {
            args: Prisma.WaterLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterLog>
          }
          groupBy: {
            args: Prisma.WaterLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterLogCountArgs<ExtArgs>
            result: $Utils.Optional<WaterLogCountAggregateOutputType> | number
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
    profile?: ProfileOmit
    notification?: NotificationOmit
    notificationRead?: NotificationReadOmit
    category?: CategoryOmit
    food?: FoodOmit
    nutrient?: NutrientOmit
    userTarget?: UserTargetOmit
    mealEntry?: MealEntryOmit
    mealEntryNutrient?: MealEntryNutrientOmit
    waterLog?: WaterLogOmit
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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    mealEntries: number
    userTargets: number
    waterLogs: number
    notificationReads: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealEntries?: boolean | ProfileCountOutputTypeCountMealEntriesArgs
    userTargets?: boolean | ProfileCountOutputTypeCountUserTargetsArgs
    waterLogs?: boolean | ProfileCountOutputTypeCountWaterLogsArgs
    notificationReads?: boolean | ProfileCountOutputTypeCountNotificationReadsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountMealEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountUserTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTargetWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWaterLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterLogWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountNotificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    reads: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reads?: boolean | NotificationCountOutputTypeCountReadsArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    foods: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | CategoryCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    mealEntries: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type FoodCountOutputTypeCountMealEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
  }


  /**
   * Count Type NutrientCountOutputType
   */

  export type NutrientCountOutputType = {
    userTargets: number
    mealEntryNutrients: number
  }

  export type NutrientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    age: number | null
    weightKg: Decimal | null
    heightCm: Decimal | null
  }

  export type ProfileSumAggregateOutputType = {
    age: number | null
    weightKg: Decimal | null
    heightCm: Decimal | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    age: number | null
    gender: string | null
    weightKg: Decimal | null
    heightCm: Decimal | null
    goal: $Enums.Goal | null
    activityLevel: $Enums.ActivityLevel | null
    onboardingCompletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    age: number | null
    gender: string | null
    weightKg: Decimal | null
    heightCm: Decimal | null
    goal: $Enums.Goal | null
    activityLevel: $Enums.ActivityLevel | null
    onboardingCompletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    age: number
    gender: number
    weightKg: number
    heightCm: number
    goal: number
    activityLevel: number
    onboardingCompletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    age?: true
    weightKg?: true
    heightCm?: true
  }

  export type ProfileSumAggregateInputType = {
    age?: true
    weightKg?: true
    heightCm?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    age?: true
    gender?: true
    weightKg?: true
    heightCm?: true
    goal?: true
    activityLevel?: true
    onboardingCompletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    age?: true
    gender?: true
    weightKg?: true
    heightCm?: true
    goal?: true
    activityLevel?: true
    onboardingCompletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    age?: true
    gender?: true
    weightKg?: true
    heightCm?: true
    goal?: true
    activityLevel?: true
    onboardingCompletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    age: number | null
    gender: string | null
    weightKg: Decimal | null
    heightCm: Decimal | null
    goal: $Enums.Goal | null
    activityLevel: $Enums.ActivityLevel | null
    onboardingCompletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    age?: boolean
    gender?: boolean
    weightKg?: boolean
    heightCm?: boolean
    goal?: boolean
    activityLevel?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealEntries?: boolean | Profile$mealEntriesArgs<ExtArgs>
    userTargets?: boolean | Profile$userTargetsArgs<ExtArgs>
    waterLogs?: boolean | Profile$waterLogsArgs<ExtArgs>
    notificationReads?: boolean | Profile$notificationReadsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    age?: boolean
    gender?: boolean
    weightKg?: boolean
    heightCm?: boolean
    goal?: boolean
    activityLevel?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    age?: boolean
    gender?: boolean
    weightKg?: boolean
    heightCm?: boolean
    goal?: boolean
    activityLevel?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    age?: boolean
    gender?: boolean
    weightKg?: boolean
    heightCm?: boolean
    goal?: boolean
    activityLevel?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "age" | "gender" | "weightKg" | "heightCm" | "goal" | "activityLevel" | "onboardingCompletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealEntries?: boolean | Profile$mealEntriesArgs<ExtArgs>
    userTargets?: boolean | Profile$userTargetsArgs<ExtArgs>
    waterLogs?: boolean | Profile$waterLogsArgs<ExtArgs>
    notificationReads?: boolean | Profile$notificationReadsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      mealEntries: Prisma.$MealEntryPayload<ExtArgs>[]
      userTargets: Prisma.$UserTargetPayload<ExtArgs>[]
      waterLogs: Prisma.$WaterLogPayload<ExtArgs>[]
      notificationReads: Prisma.$NotificationReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      age: number | null
      gender: string | null
      weightKg: Prisma.Decimal | null
      heightCm: Prisma.Decimal | null
      goal: $Enums.Goal | null
      activityLevel: $Enums.ActivityLevel | null
      /**
       * Set once the mandatory onboarding form is completed; null gates the
       * user to /onboarding (see lib/session.ts requireOnboardedUser()).
       */
      onboardingCompletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealEntries<T extends Profile$mealEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$mealEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTargets<T extends Profile$userTargetsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$userTargetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waterLogs<T extends Profile$waterLogsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$waterLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationReads<T extends Profile$notificationReadsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$notificationReadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly age: FieldRef<"Profile", 'Int'>
    readonly gender: FieldRef<"Profile", 'String'>
    readonly weightKg: FieldRef<"Profile", 'Decimal'>
    readonly heightCm: FieldRef<"Profile", 'Decimal'>
    readonly goal: FieldRef<"Profile", 'Goal'>
    readonly activityLevel: FieldRef<"Profile", 'ActivityLevel'>
    readonly onboardingCompletedAt: FieldRef<"Profile", 'DateTime'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.mealEntries
   */
  export type Profile$mealEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Profile.userTargets
   */
  export type Profile$userTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Profile.waterLogs
   */
  export type Profile$waterLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    where?: WaterLogWhereInput
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    cursor?: WaterLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * Profile.notificationReads
   */
  export type Profile$notificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    cursor?: NotificationReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    goal: $Enums.Goal | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    goal: $Enums.Goal | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    goal: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    goal?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    goal?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    goal?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    message: string
    goal: $Enums.Goal | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    goal?: boolean
    createdAt?: boolean
    reads?: boolean | Notification$readsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    goal?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    goal?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    goal?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "goal" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reads?: boolean | Notification$readsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      reads: Prisma.$NotificationReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      /**
       * null = every user; set = only users onboarded with this goal.
       */
      goal: $Enums.Goal | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reads<T extends Notification$readsArgs<ExtArgs> = {}>(args?: Subset<T, Notification$readsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly goal: FieldRef<"Notification", 'Goal'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.reads
   */
  export type Notification$readsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    cursor?: NotificationReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationRead
   */

  export type AggregateNotificationRead = {
    _count: NotificationReadCountAggregateOutputType | null
    _min: NotificationReadMinAggregateOutputType | null
    _max: NotificationReadMaxAggregateOutputType | null
  }

  export type NotificationReadMinAggregateOutputType = {
    id: string | null
    notificationId: string | null
    userId: string | null
    readAt: Date | null
  }

  export type NotificationReadMaxAggregateOutputType = {
    id: string | null
    notificationId: string | null
    userId: string | null
    readAt: Date | null
  }

  export type NotificationReadCountAggregateOutputType = {
    id: number
    notificationId: number
    userId: number
    readAt: number
    _all: number
  }


  export type NotificationReadMinAggregateInputType = {
    id?: true
    notificationId?: true
    userId?: true
    readAt?: true
  }

  export type NotificationReadMaxAggregateInputType = {
    id?: true
    notificationId?: true
    userId?: true
    readAt?: true
  }

  export type NotificationReadCountAggregateInputType = {
    id?: true
    notificationId?: true
    userId?: true
    readAt?: true
    _all?: true
  }

  export type NotificationReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationRead to aggregate.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationReads
    **/
    _count?: true | NotificationReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationReadMaxAggregateInputType
  }

  export type GetNotificationReadAggregateType<T extends NotificationReadAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationRead[P]>
      : GetScalarType<T[P], AggregateNotificationRead[P]>
  }




  export type NotificationReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithAggregationInput | NotificationReadOrderByWithAggregationInput[]
    by: NotificationReadScalarFieldEnum[] | NotificationReadScalarFieldEnum
    having?: NotificationReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationReadCountAggregateInputType | true
    _min?: NotificationReadMinAggregateInputType
    _max?: NotificationReadMaxAggregateInputType
  }

  export type NotificationReadGroupByOutputType = {
    id: string
    notificationId: string
    userId: string
    readAt: Date
    _count: NotificationReadCountAggregateOutputType | null
    _min: NotificationReadMinAggregateOutputType | null
    _max: NotificationReadMaxAggregateOutputType | null
  }

  type GetNotificationReadGroupByPayload<T extends NotificationReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationReadGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationReadGroupByOutputType[P]>
        }
      >
    >


  export type NotificationReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectScalar = {
    id?: boolean
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
  }

  export type NotificationReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationId" | "userId" | "readAt", ExtArgs["result"]["notificationRead"]>
  export type NotificationReadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type NotificationReadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type NotificationReadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $NotificationReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationRead"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationId: string
      userId: string
      readAt: Date
    }, ExtArgs["result"]["notificationRead"]>
    composites: {}
  }

  type NotificationReadGetPayload<S extends boolean | null | undefined | NotificationReadDefaultArgs> = $Result.GetResult<Prisma.$NotificationReadPayload, S>

  type NotificationReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationReadCountAggregateInputType | true
    }

  export interface NotificationReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationRead'], meta: { name: 'NotificationRead' } }
    /**
     * Find zero or one NotificationRead that matches the filter.
     * @param {NotificationReadFindUniqueArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationReadFindUniqueArgs>(args: SelectSubset<T, NotificationReadFindUniqueArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationReadFindUniqueOrThrowArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationReadFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindFirstArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationReadFindFirstArgs>(args?: SelectSubset<T, NotificationReadFindFirstArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindFirstOrThrowArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationReadFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationReads
     * const notificationReads = await prisma.notificationRead.findMany()
     * 
     * // Get first 10 NotificationReads
     * const notificationReads = await prisma.notificationRead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationReadFindManyArgs>(args?: SelectSubset<T, NotificationReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationRead.
     * @param {NotificationReadCreateArgs} args - Arguments to create a NotificationRead.
     * @example
     * // Create one NotificationRead
     * const NotificationRead = await prisma.notificationRead.create({
     *   data: {
     *     // ... data to create a NotificationRead
     *   }
     * })
     * 
     */
    create<T extends NotificationReadCreateArgs>(args: SelectSubset<T, NotificationReadCreateArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationReads.
     * @param {NotificationReadCreateManyArgs} args - Arguments to create many NotificationReads.
     * @example
     * // Create many NotificationReads
     * const notificationRead = await prisma.notificationRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationReadCreateManyArgs>(args?: SelectSubset<T, NotificationReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationReads and returns the data saved in the database.
     * @param {NotificationReadCreateManyAndReturnArgs} args - Arguments to create many NotificationReads.
     * @example
     * // Create many NotificationReads
     * const notificationRead = await prisma.notificationRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationReads and only return the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationReadCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationRead.
     * @param {NotificationReadDeleteArgs} args - Arguments to delete one NotificationRead.
     * @example
     * // Delete one NotificationRead
     * const NotificationRead = await prisma.notificationRead.delete({
     *   where: {
     *     // ... filter to delete one NotificationRead
     *   }
     * })
     * 
     */
    delete<T extends NotificationReadDeleteArgs>(args: SelectSubset<T, NotificationReadDeleteArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationRead.
     * @param {NotificationReadUpdateArgs} args - Arguments to update one NotificationRead.
     * @example
     * // Update one NotificationRead
     * const notificationRead = await prisma.notificationRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationReadUpdateArgs>(args: SelectSubset<T, NotificationReadUpdateArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationReads.
     * @param {NotificationReadDeleteManyArgs} args - Arguments to filter NotificationReads to delete.
     * @example
     * // Delete a few NotificationReads
     * const { count } = await prisma.notificationRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationReadDeleteManyArgs>(args?: SelectSubset<T, NotificationReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationReads
     * const notificationRead = await prisma.notificationRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationReadUpdateManyArgs>(args: SelectSubset<T, NotificationReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReads and returns the data updated in the database.
     * @param {NotificationReadUpdateManyAndReturnArgs} args - Arguments to update many NotificationReads.
     * @example
     * // Update many NotificationReads
     * const notificationRead = await prisma.notificationRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationReads and only return the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationReadUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationRead.
     * @param {NotificationReadUpsertArgs} args - Arguments to update or create a NotificationRead.
     * @example
     * // Update or create a NotificationRead
     * const notificationRead = await prisma.notificationRead.upsert({
     *   create: {
     *     // ... data to create a NotificationRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationRead we want to update
     *   }
     * })
     */
    upsert<T extends NotificationReadUpsertArgs>(args: SelectSubset<T, NotificationReadUpsertArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadCountArgs} args - Arguments to filter NotificationReads to count.
     * @example
     * // Count the number of NotificationReads
     * const count = await prisma.notificationRead.count({
     *   where: {
     *     // ... the filter for the NotificationReads we want to count
     *   }
     * })
    **/
    count<T extends NotificationReadCountArgs>(
      args?: Subset<T, NotificationReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationReadAggregateArgs>(args: Subset<T, NotificationReadAggregateArgs>): Prisma.PrismaPromise<GetNotificationReadAggregateType<T>>

    /**
     * Group by NotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadGroupByArgs} args - Group by arguments.
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
      T extends NotificationReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationReadGroupByArgs['orderBy'] }
        : { orderBy?: NotificationReadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationRead model
   */
  readonly fields: NotificationReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationRead model
   */
  interface NotificationReadFieldRefs {
    readonly id: FieldRef<"NotificationRead", 'String'>
    readonly notificationId: FieldRef<"NotificationRead", 'String'>
    readonly userId: FieldRef<"NotificationRead", 'String'>
    readonly readAt: FieldRef<"NotificationRead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationRead findUnique
   */
  export type NotificationReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead findUniqueOrThrow
   */
  export type NotificationReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead findFirst
   */
  export type NotificationReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead findFirstOrThrow
   */
  export type NotificationReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead findMany
   */
  export type NotificationReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationReads to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead create
   */
  export type NotificationReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationRead.
     */
    data: XOR<NotificationReadCreateInput, NotificationReadUncheckedCreateInput>
  }

  /**
   * NotificationRead createMany
   */
  export type NotificationReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationReads.
     */
    data: NotificationReadCreateManyInput | NotificationReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationRead createManyAndReturn
   */
  export type NotificationReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationReads.
     */
    data: NotificationReadCreateManyInput | NotificationReadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationRead update
   */
  export type NotificationReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationRead.
     */
    data: XOR<NotificationReadUpdateInput, NotificationReadUncheckedUpdateInput>
    /**
     * Choose, which NotificationRead to update.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead updateMany
   */
  export type NotificationReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationReads.
     */
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReads to update
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to update.
     */
    limit?: number
  }

  /**
   * NotificationRead updateManyAndReturn
   */
  export type NotificationReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * The data used to update NotificationReads.
     */
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReads to update
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationRead upsert
   */
  export type NotificationReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationRead to update in case it exists.
     */
    where: NotificationReadWhereUniqueInput
    /**
     * In case the NotificationRead found by the `where` argument doesn't exist, create a new NotificationRead with this data.
     */
    create: XOR<NotificationReadCreateInput, NotificationReadUncheckedCreateInput>
    /**
     * In case the NotificationRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationReadUpdateInput, NotificationReadUncheckedUpdateInput>
  }

  /**
   * NotificationRead delete
   */
  export type NotificationReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter which NotificationRead to delete.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead deleteMany
   */
  export type NotificationReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationReads to delete
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to delete.
     */
    limit?: number
  }

  /**
   * NotificationRead without action
   */
  export type NotificationReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      foods: Prisma.$FoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends Category$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Category$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.foods
   */
  export type Category$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
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
    calories: Decimal | null
    protein: Decimal | null
    carbohydrates: Decimal | null
    fat: Decimal | null
  }

  export type FoodSumAggregateOutputType = {
    calories: Decimal | null
    protein: Decimal | null
    carbohydrates: Decimal | null
    fat: Decimal | null
  }

  export type FoodMinAggregateOutputType = {
    id: string | null
    name: string | null
    burmeseName: string | null
    categoryId: string | null
    calories: Decimal | null
    protein: Decimal | null
    carbohydrates: Decimal | null
    fat: Decimal | null
    imageUrl: string | null
    imageFileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    burmeseName: string | null
    categoryId: string | null
    calories: Decimal | null
    protein: Decimal | null
    carbohydrates: Decimal | null
    fat: Decimal | null
    imageUrl: string | null
    imageFileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    burmeseName: number
    categoryId: number
    calories: number
    protein: number
    carbohydrates: number
    fat: number
    imageUrl: number
    imageFileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbohydrates?: true
    fat?: true
  }

  export type FoodSumAggregateInputType = {
    calories?: true
    protein?: true
    carbohydrates?: true
    fat?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    burmeseName?: true
    categoryId?: true
    calories?: true
    protein?: true
    carbohydrates?: true
    fat?: true
    imageUrl?: true
    imageFileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    burmeseName?: true
    categoryId?: true
    calories?: true
    protein?: true
    carbohydrates?: true
    fat?: true
    imageUrl?: true
    imageFileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    burmeseName?: true
    categoryId?: true
    calories?: true
    protein?: true
    carbohydrates?: true
    fat?: true
    imageUrl?: true
    imageFileId?: true
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
    burmeseName: string
    categoryId: string
    calories: Decimal
    protein: Decimal
    carbohydrates: Decimal
    fat: Decimal
    imageUrl: string
    imageFileId: string | null
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
    burmeseName?: boolean
    categoryId?: boolean
    calories?: boolean
    protein?: boolean
    carbohydrates?: boolean
    fat?: boolean
    imageUrl?: boolean
    imageFileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    mealEntries?: boolean | Food$mealEntriesArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    burmeseName?: boolean
    categoryId?: boolean
    calories?: boolean
    protein?: boolean
    carbohydrates?: boolean
    fat?: boolean
    imageUrl?: boolean
    imageFileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    burmeseName?: boolean
    categoryId?: boolean
    calories?: boolean
    protein?: boolean
    carbohydrates?: boolean
    fat?: boolean
    imageUrl?: boolean
    imageFileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    burmeseName?: boolean
    categoryId?: boolean
    calories?: boolean
    protein?: boolean
    carbohydrates?: boolean
    fat?: boolean
    imageUrl?: boolean
    imageFileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "burmeseName" | "categoryId" | "calories" | "protein" | "carbohydrates" | "fat" | "imageUrl" | "imageFileId" | "createdAt" | "updatedAt", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    mealEntries?: boolean | Food$mealEntriesArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      mealEntries: Prisma.$MealEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      burmeseName: string
      categoryId: string
      calories: Prisma.Decimal
      protein: Prisma.Decimal
      carbohydrates: Prisma.Decimal
      fat: Prisma.Decimal
      imageUrl: string
      /**
       * ImageKit fileId for the image at `imageUrl`, so it can be reliably
       * deleted/replaced later. ImageKit's own docs recommend storing this.
       */
      imageFileId: string | null
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
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly burmeseName: FieldRef<"Food", 'String'>
    readonly categoryId: FieldRef<"Food", 'String'>
    readonly calories: FieldRef<"Food", 'Decimal'>
    readonly protein: FieldRef<"Food", 'Decimal'>
    readonly carbohydrates: FieldRef<"Food", 'Decimal'>
    readonly fat: FieldRef<"Food", 'Decimal'>
    readonly imageUrl: FieldRef<"Food", 'String'>
    readonly imageFileId: FieldRef<"Food", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeUpdateManyAndReturn<ExtArgs> | null
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
    userTargets?: boolean | Nutrient$userTargetsArgs<ExtArgs>
    mealEntryNutrients?: boolean | Nutrient$mealEntryNutrientsArgs<ExtArgs>
    _count?: boolean | NutrientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NutrientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NutrientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NutrientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nutrient"
    objects: {
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
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
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
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
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
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
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
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type UserTargetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }
  export type UserTargetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    nutrient?: boolean | NutrientDefaultArgs<ExtArgs>
  }

  export type $UserTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTarget"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
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
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    servingGrams: Decimal | null
    quantity: Decimal | null
  }

  export type MealEntrySumAggregateOutputType = {
    servingGrams: Decimal | null
    quantity: Decimal | null
  }

  export type MealEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    foodId: string | null
    foodName: string | null
    foodBrand: string | null
    source: string | null
    servingDescription: string | null
    servingGrams: Decimal | null
    quantity: Decimal | null
    mealType: $Enums.MealType | null
    eatenAt: Date | null
    createdAt: Date | null
  }

  export type MealEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    foodId: string | null
    foodName: string | null
    foodBrand: string | null
    source: string | null
    servingDescription: string | null
    servingGrams: Decimal | null
    quantity: Decimal | null
    mealType: $Enums.MealType | null
    eatenAt: Date | null
    createdAt: Date | null
  }

  export type MealEntryCountAggregateOutputType = {
    id: number
    userId: number
    foodId: number
    foodName: number
    foodBrand: number
    source: number
    servingDescription: number
    servingGrams: number
    quantity: number
    mealType: number
    eatenAt: number
    createdAt: number
    _all: number
  }


  export type MealEntryAvgAggregateInputType = {
    servingGrams?: true
    quantity?: true
  }

  export type MealEntrySumAggregateInputType = {
    servingGrams?: true
    quantity?: true
  }

  export type MealEntryMinAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    foodName?: true
    foodBrand?: true
    source?: true
    servingDescription?: true
    servingGrams?: true
    quantity?: true
    mealType?: true
    eatenAt?: true
    createdAt?: true
  }

  export type MealEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    foodName?: true
    foodBrand?: true
    source?: true
    servingDescription?: true
    servingGrams?: true
    quantity?: true
    mealType?: true
    eatenAt?: true
    createdAt?: true
  }

  export type MealEntryCountAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    foodName?: true
    foodBrand?: true
    source?: true
    servingDescription?: true
    servingGrams?: true
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
    foodId: string | null
    foodName: string
    foodBrand: string | null
    source: string | null
    servingDescription: string | null
    servingGrams: Decimal
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
    foodName?: boolean
    foodBrand?: boolean
    source?: boolean
    servingDescription?: boolean
    servingGrams?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    food?: boolean | MealEntry$foodArgs<ExtArgs>
    nutrients?: boolean | MealEntry$nutrientsArgs<ExtArgs>
    _count?: boolean | MealEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntry"]>

  export type MealEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    foodName?: boolean
    foodBrand?: boolean
    source?: boolean
    servingDescription?: boolean
    servingGrams?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    food?: boolean | MealEntry$foodArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntry"]>

  export type MealEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    foodName?: boolean
    foodBrand?: boolean
    source?: boolean
    servingDescription?: boolean
    servingGrams?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    food?: boolean | MealEntry$foodArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntry"]>

  export type MealEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    foodId?: boolean
    foodName?: boolean
    foodBrand?: boolean
    source?: boolean
    servingDescription?: boolean
    servingGrams?: boolean
    quantity?: boolean
    mealType?: boolean
    eatenAt?: boolean
    createdAt?: boolean
  }

  export type MealEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodId" | "foodName" | "foodBrand" | "source" | "servingDescription" | "servingGrams" | "quantity" | "mealType" | "eatenAt" | "createdAt", ExtArgs["result"]["mealEntry"]>
  export type MealEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    food?: boolean | MealEntry$foodArgs<ExtArgs>
    nutrients?: boolean | MealEntry$nutrientsArgs<ExtArgs>
    _count?: boolean | MealEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    food?: boolean | MealEntry$foodArgs<ExtArgs>
  }
  export type MealEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    food?: boolean | MealEntry$foodArgs<ExtArgs>
  }

  export type $MealEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealEntry"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      food: Prisma.$FoodPayload<ExtArgs> | null
      nutrients: Prisma.$MealEntryNutrientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      foodId: string | null
      foodName: string
      foodBrand: string | null
      source: string | null
      servingDescription: string | null
      servingGrams: Prisma.Decimal
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
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    food<T extends MealEntry$foodArgs<ExtArgs> = {}>(args?: Subset<T, MealEntry$foodArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly foodName: FieldRef<"MealEntry", 'String'>
    readonly foodBrand: FieldRef<"MealEntry", 'String'>
    readonly source: FieldRef<"MealEntry", 'String'>
    readonly servingDescription: FieldRef<"MealEntry", 'String'>
    readonly servingGrams: FieldRef<"MealEntry", 'Decimal'>
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
   * MealEntry.food
   */
  export type MealEntry$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: FoodWhereInput
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
   * Model WaterLog
   */

  export type AggregateWaterLog = {
    _count: WaterLogCountAggregateOutputType | null
    _avg: WaterLogAvgAggregateOutputType | null
    _sum: WaterLogSumAggregateOutputType | null
    _min: WaterLogMinAggregateOutputType | null
    _max: WaterLogMaxAggregateOutputType | null
  }

  export type WaterLogAvgAggregateOutputType = {
    amountMl: number | null
  }

  export type WaterLogSumAggregateOutputType = {
    amountMl: number | null
  }

  export type WaterLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amountMl: number | null
    loggedAt: Date | null
  }

  export type WaterLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amountMl: number | null
    loggedAt: Date | null
  }

  export type WaterLogCountAggregateOutputType = {
    id: number
    userId: number
    amountMl: number
    loggedAt: number
    _all: number
  }


  export type WaterLogAvgAggregateInputType = {
    amountMl?: true
  }

  export type WaterLogSumAggregateInputType = {
    amountMl?: true
  }

  export type WaterLogMinAggregateInputType = {
    id?: true
    userId?: true
    amountMl?: true
    loggedAt?: true
  }

  export type WaterLogMaxAggregateInputType = {
    id?: true
    userId?: true
    amountMl?: true
    loggedAt?: true
  }

  export type WaterLogCountAggregateInputType = {
    id?: true
    userId?: true
    amountMl?: true
    loggedAt?: true
    _all?: true
  }

  export type WaterLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterLog to aggregate.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterLogs
    **/
    _count?: true | WaterLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterLogMaxAggregateInputType
  }

  export type GetWaterLogAggregateType<T extends WaterLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterLog[P]>
      : GetScalarType<T[P], AggregateWaterLog[P]>
  }




  export type WaterLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterLogWhereInput
    orderBy?: WaterLogOrderByWithAggregationInput | WaterLogOrderByWithAggregationInput[]
    by: WaterLogScalarFieldEnum[] | WaterLogScalarFieldEnum
    having?: WaterLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterLogCountAggregateInputType | true
    _avg?: WaterLogAvgAggregateInputType
    _sum?: WaterLogSumAggregateInputType
    _min?: WaterLogMinAggregateInputType
    _max?: WaterLogMaxAggregateInputType
  }

  export type WaterLogGroupByOutputType = {
    id: string
    userId: string
    amountMl: number
    loggedAt: Date
    _count: WaterLogCountAggregateOutputType | null
    _avg: WaterLogAvgAggregateOutputType | null
    _sum: WaterLogSumAggregateOutputType | null
    _min: WaterLogMinAggregateOutputType | null
    _max: WaterLogMaxAggregateOutputType | null
  }

  type GetWaterLogGroupByPayload<T extends WaterLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterLogGroupByOutputType[P]>
            : GetScalarType<T[P], WaterLogGroupByOutputType[P]>
        }
      >
    >


  export type WaterLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amountMl?: boolean
    loggedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amountMl?: boolean
    loggedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amountMl?: boolean
    loggedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectScalar = {
    id?: boolean
    userId?: boolean
    amountMl?: boolean
    loggedAt?: boolean
  }

  export type WaterLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amountMl" | "loggedAt", ExtArgs["result"]["waterLog"]>
  export type WaterLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WaterLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WaterLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $WaterLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterLog"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amountMl: number
      loggedAt: Date
    }, ExtArgs["result"]["waterLog"]>
    composites: {}
  }

  type WaterLogGetPayload<S extends boolean | null | undefined | WaterLogDefaultArgs> = $Result.GetResult<Prisma.$WaterLogPayload, S>

  type WaterLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterLogCountAggregateInputType | true
    }

  export interface WaterLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterLog'], meta: { name: 'WaterLog' } }
    /**
     * Find zero or one WaterLog that matches the filter.
     * @param {WaterLogFindUniqueArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterLogFindUniqueArgs>(args: SelectSubset<T, WaterLogFindUniqueArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaterLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterLogFindUniqueOrThrowArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindFirstArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterLogFindFirstArgs>(args?: SelectSubset<T, WaterLogFindFirstArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindFirstOrThrowArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterLogs
     * const waterLogs = await prisma.waterLog.findMany()
     * 
     * // Get first 10 WaterLogs
     * const waterLogs = await prisma.waterLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterLogFindManyArgs>(args?: SelectSubset<T, WaterLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaterLog.
     * @param {WaterLogCreateArgs} args - Arguments to create a WaterLog.
     * @example
     * // Create one WaterLog
     * const WaterLog = await prisma.waterLog.create({
     *   data: {
     *     // ... data to create a WaterLog
     *   }
     * })
     * 
     */
    create<T extends WaterLogCreateArgs>(args: SelectSubset<T, WaterLogCreateArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaterLogs.
     * @param {WaterLogCreateManyArgs} args - Arguments to create many WaterLogs.
     * @example
     * // Create many WaterLogs
     * const waterLog = await prisma.waterLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterLogCreateManyArgs>(args?: SelectSubset<T, WaterLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaterLogs and returns the data saved in the database.
     * @param {WaterLogCreateManyAndReturnArgs} args - Arguments to create many WaterLogs.
     * @example
     * // Create many WaterLogs
     * const waterLog = await prisma.waterLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaterLogs and only return the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaterLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WaterLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaterLog.
     * @param {WaterLogDeleteArgs} args - Arguments to delete one WaterLog.
     * @example
     * // Delete one WaterLog
     * const WaterLog = await prisma.waterLog.delete({
     *   where: {
     *     // ... filter to delete one WaterLog
     *   }
     * })
     * 
     */
    delete<T extends WaterLogDeleteArgs>(args: SelectSubset<T, WaterLogDeleteArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaterLog.
     * @param {WaterLogUpdateArgs} args - Arguments to update one WaterLog.
     * @example
     * // Update one WaterLog
     * const waterLog = await prisma.waterLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterLogUpdateArgs>(args: SelectSubset<T, WaterLogUpdateArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaterLogs.
     * @param {WaterLogDeleteManyArgs} args - Arguments to filter WaterLogs to delete.
     * @example
     * // Delete a few WaterLogs
     * const { count } = await prisma.waterLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterLogDeleteManyArgs>(args?: SelectSubset<T, WaterLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterLogs
     * const waterLog = await prisma.waterLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterLogUpdateManyArgs>(args: SelectSubset<T, WaterLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterLogs and returns the data updated in the database.
     * @param {WaterLogUpdateManyAndReturnArgs} args - Arguments to update many WaterLogs.
     * @example
     * // Update many WaterLogs
     * const waterLog = await prisma.waterLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaterLogs and only return the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaterLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WaterLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaterLog.
     * @param {WaterLogUpsertArgs} args - Arguments to update or create a WaterLog.
     * @example
     * // Update or create a WaterLog
     * const waterLog = await prisma.waterLog.upsert({
     *   create: {
     *     // ... data to create a WaterLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterLog we want to update
     *   }
     * })
     */
    upsert<T extends WaterLogUpsertArgs>(args: SelectSubset<T, WaterLogUpsertArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogCountArgs} args - Arguments to filter WaterLogs to count.
     * @example
     * // Count the number of WaterLogs
     * const count = await prisma.waterLog.count({
     *   where: {
     *     // ... the filter for the WaterLogs we want to count
     *   }
     * })
    **/
    count<T extends WaterLogCountArgs>(
      args?: Subset<T, WaterLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaterLogAggregateArgs>(args: Subset<T, WaterLogAggregateArgs>): Prisma.PrismaPromise<GetWaterLogAggregateType<T>>

    /**
     * Group by WaterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogGroupByArgs} args - Group by arguments.
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
      T extends WaterLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterLogGroupByArgs['orderBy'] }
        : { orderBy?: WaterLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaterLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterLog model
   */
  readonly fields: WaterLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WaterLog model
   */
  interface WaterLogFieldRefs {
    readonly id: FieldRef<"WaterLog", 'String'>
    readonly userId: FieldRef<"WaterLog", 'String'>
    readonly amountMl: FieldRef<"WaterLog", 'Int'>
    readonly loggedAt: FieldRef<"WaterLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaterLog findUnique
   */
  export type WaterLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog findUniqueOrThrow
   */
  export type WaterLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog findFirst
   */
  export type WaterLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog findFirstOrThrow
   */
  export type WaterLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog findMany
   */
  export type WaterLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLogs to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog create
   */
  export type WaterLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WaterLog.
     */
    data: XOR<WaterLogCreateInput, WaterLogUncheckedCreateInput>
  }

  /**
   * WaterLog createMany
   */
  export type WaterLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterLogs.
     */
    data: WaterLogCreateManyInput | WaterLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterLog createManyAndReturn
   */
  export type WaterLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * The data used to create many WaterLogs.
     */
    data: WaterLogCreateManyInput | WaterLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaterLog update
   */
  export type WaterLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WaterLog.
     */
    data: XOR<WaterLogUpdateInput, WaterLogUncheckedUpdateInput>
    /**
     * Choose, which WaterLog to update.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog updateMany
   */
  export type WaterLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterLogs.
     */
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyInput>
    /**
     * Filter which WaterLogs to update
     */
    where?: WaterLogWhereInput
    /**
     * Limit how many WaterLogs to update.
     */
    limit?: number
  }

  /**
   * WaterLog updateManyAndReturn
   */
  export type WaterLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * The data used to update WaterLogs.
     */
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyInput>
    /**
     * Filter which WaterLogs to update
     */
    where?: WaterLogWhereInput
    /**
     * Limit how many WaterLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaterLog upsert
   */
  export type WaterLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WaterLog to update in case it exists.
     */
    where: WaterLogWhereUniqueInput
    /**
     * In case the WaterLog found by the `where` argument doesn't exist, create a new WaterLog with this data.
     */
    create: XOR<WaterLogCreateInput, WaterLogUncheckedCreateInput>
    /**
     * In case the WaterLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterLogUpdateInput, WaterLogUncheckedUpdateInput>
  }

  /**
   * WaterLog delete
   */
  export type WaterLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter which WaterLog to delete.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog deleteMany
   */
  export type WaterLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterLogs to delete
     */
    where?: WaterLogWhereInput
    /**
     * Limit how many WaterLogs to delete.
     */
    limit?: number
  }

  /**
   * WaterLog without action
   */
  export type WaterLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
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


  export const ProfileScalarFieldEnum: {
    id: 'id',
    age: 'age',
    gender: 'gender',
    weightKg: 'weightKg',
    heightCm: 'heightCm',
    goal: 'goal',
    activityLevel: 'activityLevel',
    onboardingCompletedAt: 'onboardingCompletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    goal: 'goal',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationReadScalarFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    userId: 'userId',
    readAt: 'readAt'
  };

  export type NotificationReadScalarFieldEnum = (typeof NotificationReadScalarFieldEnum)[keyof typeof NotificationReadScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    burmeseName: 'burmeseName',
    categoryId: 'categoryId',
    calories: 'calories',
    protein: 'protein',
    carbohydrates: 'carbohydrates',
    fat: 'fat',
    imageUrl: 'imageUrl',
    imageFileId: 'imageFileId',
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
    foodName: 'foodName',
    foodBrand: 'foodBrand',
    source: 'source',
    servingDescription: 'servingDescription',
    servingGrams: 'servingGrams',
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


  export const WaterLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amountMl: 'amountMl',
    loggedAt: 'loggedAt'
  };

  export type WaterLogScalarFieldEnum = (typeof WaterLogScalarFieldEnum)[keyof typeof WaterLogScalarFieldEnum]


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
   * Reference to a field of type 'Goal'
   */
  export type EnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal'>
    


  /**
   * Reference to a field of type 'Goal[]'
   */
  export type ListEnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal[]'>
    


  /**
   * Reference to a field of type 'ActivityLevel'
   */
  export type EnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel'>
    


  /**
   * Reference to a field of type 'ActivityLevel[]'
   */
  export type ListEnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'NutrientUnit'
   */
  export type EnumNutrientUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NutrientUnit'>
    


  /**
   * Reference to a field of type 'NutrientUnit[]'
   */
  export type ListEnumNutrientUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NutrientUnit[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    age?: IntNullableFilter<"Profile"> | number | null
    gender?: StringNullableFilter<"Profile"> | string | null
    weightKg?: DecimalNullableFilter<"Profile"> | Decimal | DecimalJsLike | number | string | null
    heightCm?: DecimalNullableFilter<"Profile"> | Decimal | DecimalJsLike | number | string | null
    goal?: EnumGoalNullableFilter<"Profile"> | $Enums.Goal | null
    activityLevel?: EnumActivityLevelNullableFilter<"Profile"> | $Enums.ActivityLevel | null
    onboardingCompletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    mealEntries?: MealEntryListRelationFilter
    userTargets?: UserTargetListRelationFilter
    waterLogs?: WaterLogListRelationFilter
    notificationReads?: NotificationReadListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    onboardingCompletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealEntries?: MealEntryOrderByRelationAggregateInput
    userTargets?: UserTargetOrderByRelationAggregateInput
    waterLogs?: WaterLogOrderByRelationAggregateInput
    notificationReads?: NotificationReadOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    age?: IntNullableFilter<"Profile"> | number | null
    gender?: StringNullableFilter<"Profile"> | string | null
    weightKg?: DecimalNullableFilter<"Profile"> | Decimal | DecimalJsLike | number | string | null
    heightCm?: DecimalNullableFilter<"Profile"> | Decimal | DecimalJsLike | number | string | null
    goal?: EnumGoalNullableFilter<"Profile"> | $Enums.Goal | null
    activityLevel?: EnumActivityLevelNullableFilter<"Profile"> | $Enums.ActivityLevel | null
    onboardingCompletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    mealEntries?: MealEntryListRelationFilter
    userTargets?: UserTargetListRelationFilter
    waterLogs?: WaterLogListRelationFilter
    notificationReads?: NotificationReadListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    onboardingCompletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    age?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    gender?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    weightKg?: DecimalNullableWithAggregatesFilter<"Profile"> | Decimal | DecimalJsLike | number | string | null
    heightCm?: DecimalNullableWithAggregatesFilter<"Profile"> | Decimal | DecimalJsLike | number | string | null
    goal?: EnumGoalNullableWithAggregatesFilter<"Profile"> | $Enums.Goal | null
    activityLevel?: EnumActivityLevelNullableWithAggregatesFilter<"Profile"> | $Enums.ActivityLevel | null
    onboardingCompletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    goal?: EnumGoalNullableFilter<"Notification"> | $Enums.Goal | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    reads?: NotificationReadListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    goal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reads?: NotificationReadOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    goal?: EnumGoalNullableFilter<"Notification"> | $Enums.Goal | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    reads?: NotificationReadListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    goal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    goal?: EnumGoalNullableWithAggregatesFilter<"Notification"> | $Enums.Goal | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type NotificationReadWhereInput = {
    AND?: NotificationReadWhereInput | NotificationReadWhereInput[]
    OR?: NotificationReadWhereInput[]
    NOT?: NotificationReadWhereInput | NotificationReadWhereInput[]
    id?: StringFilter<"NotificationRead"> | string
    notificationId?: StringFilter<"NotificationRead"> | string
    userId?: StringFilter<"NotificationRead"> | string
    readAt?: DateTimeFilter<"NotificationRead"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type NotificationReadOrderByWithRelationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
    notification?: NotificationOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type NotificationReadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    notificationId_userId?: NotificationReadNotificationIdUserIdCompoundUniqueInput
    AND?: NotificationReadWhereInput | NotificationReadWhereInput[]
    OR?: NotificationReadWhereInput[]
    NOT?: NotificationReadWhereInput | NotificationReadWhereInput[]
    notificationId?: StringFilter<"NotificationRead"> | string
    userId?: StringFilter<"NotificationRead"> | string
    readAt?: DateTimeFilter<"NotificationRead"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "notificationId_userId">

  export type NotificationReadOrderByWithAggregationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
    _count?: NotificationReadCountOrderByAggregateInput
    _max?: NotificationReadMaxOrderByAggregateInput
    _min?: NotificationReadMinOrderByAggregateInput
  }

  export type NotificationReadScalarWhereWithAggregatesInput = {
    AND?: NotificationReadScalarWhereWithAggregatesInput | NotificationReadScalarWhereWithAggregatesInput[]
    OR?: NotificationReadScalarWhereWithAggregatesInput[]
    NOT?: NotificationReadScalarWhereWithAggregatesInput | NotificationReadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationRead"> | string
    notificationId?: StringWithAggregatesFilter<"NotificationRead"> | string
    userId?: StringWithAggregatesFilter<"NotificationRead"> | string
    readAt?: DateTimeWithAggregatesFilter<"NotificationRead"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    foods?: FoodListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foods?: FoodOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    foods?: FoodListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    burmeseName?: StringFilter<"Food"> | string
    categoryId?: StringFilter<"Food"> | string
    calories?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    protein?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    fat?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFilter<"Food"> | string
    imageFileId?: StringNullableFilter<"Food"> | string | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    mealEntries?: MealEntryListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    burmeseName?: SortOrder
    categoryId?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbohydrates?: SortOrder
    fat?: SortOrder
    imageUrl?: SortOrder
    imageFileId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    mealEntries?: MealEntryOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    burmeseName?: string
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    categoryId?: StringFilter<"Food"> | string
    calories?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    protein?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    fat?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFilter<"Food"> | string
    imageFileId?: StringNullableFilter<"Food"> | string | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    mealEntries?: MealEntryListRelationFilter
  }, "id" | "name" | "burmeseName">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    burmeseName?: SortOrder
    categoryId?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbohydrates?: SortOrder
    fat?: SortOrder
    imageUrl?: SortOrder
    imageFileId?: SortOrderInput | SortOrder
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
    burmeseName?: StringWithAggregatesFilter<"Food"> | string
    categoryId?: StringWithAggregatesFilter<"Food"> | string
    calories?: DecimalWithAggregatesFilter<"Food"> | Decimal | DecimalJsLike | number | string
    protein?: DecimalWithAggregatesFilter<"Food"> | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalWithAggregatesFilter<"Food"> | Decimal | DecimalJsLike | number | string
    fat?: DecimalWithAggregatesFilter<"Food"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringWithAggregatesFilter<"Food"> | string
    imageFileId?: StringNullableWithAggregatesFilter<"Food"> | string | null
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
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
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
    profile?: ProfileOrderByWithRelationInput
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
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
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
    foodId?: StringNullableFilter<"MealEntry"> | string | null
    foodName?: StringFilter<"MealEntry"> | string
    foodBrand?: StringNullableFilter<"MealEntry"> | string | null
    source?: StringNullableFilter<"MealEntry"> | string | null
    servingDescription?: StringNullableFilter<"MealEntry"> | string | null
    servingGrams?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFilter<"MealEntry"> | $Enums.MealType
    eatenAt?: DateTimeFilter<"MealEntry"> | Date | string
    createdAt?: DateTimeFilter<"MealEntry"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
    nutrients?: MealEntryNutrientListRelationFilter
  }

  export type MealEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrderInput | SortOrder
    foodName?: SortOrder
    foodBrand?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    servingDescription?: SortOrderInput | SortOrder
    servingGrams?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
    nutrients?: MealEntryNutrientOrderByRelationAggregateInput
  }

  export type MealEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealEntryWhereInput | MealEntryWhereInput[]
    OR?: MealEntryWhereInput[]
    NOT?: MealEntryWhereInput | MealEntryWhereInput[]
    userId?: StringFilter<"MealEntry"> | string
    foodId?: StringNullableFilter<"MealEntry"> | string | null
    foodName?: StringFilter<"MealEntry"> | string
    foodBrand?: StringNullableFilter<"MealEntry"> | string | null
    source?: StringNullableFilter<"MealEntry"> | string | null
    servingDescription?: StringNullableFilter<"MealEntry"> | string | null
    servingGrams?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFilter<"MealEntry"> | $Enums.MealType
    eatenAt?: DateTimeFilter<"MealEntry"> | Date | string
    createdAt?: DateTimeFilter<"MealEntry"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
    nutrients?: MealEntryNutrientListRelationFilter
  }, "id">

  export type MealEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrderInput | SortOrder
    foodName?: SortOrder
    foodBrand?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    servingDescription?: SortOrderInput | SortOrder
    servingGrams?: SortOrder
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
    foodId?: StringNullableWithAggregatesFilter<"MealEntry"> | string | null
    foodName?: StringWithAggregatesFilter<"MealEntry"> | string
    foodBrand?: StringNullableWithAggregatesFilter<"MealEntry"> | string | null
    source?: StringNullableWithAggregatesFilter<"MealEntry"> | string | null
    servingDescription?: StringNullableWithAggregatesFilter<"MealEntry"> | string | null
    servingGrams?: DecimalWithAggregatesFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
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

  export type WaterLogWhereInput = {
    AND?: WaterLogWhereInput | WaterLogWhereInput[]
    OR?: WaterLogWhereInput[]
    NOT?: WaterLogWhereInput | WaterLogWhereInput[]
    id?: StringFilter<"WaterLog"> | string
    userId?: StringFilter<"WaterLog"> | string
    amountMl?: IntFilter<"WaterLog"> | number
    loggedAt?: DateTimeFilter<"WaterLog"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type WaterLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    loggedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type WaterLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterLogWhereInput | WaterLogWhereInput[]
    OR?: WaterLogWhereInput[]
    NOT?: WaterLogWhereInput | WaterLogWhereInput[]
    userId?: StringFilter<"WaterLog"> | string
    amountMl?: IntFilter<"WaterLog"> | number
    loggedAt?: DateTimeFilter<"WaterLog"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type WaterLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    loggedAt?: SortOrder
    _count?: WaterLogCountOrderByAggregateInput
    _avg?: WaterLogAvgOrderByAggregateInput
    _max?: WaterLogMaxOrderByAggregateInput
    _min?: WaterLogMinOrderByAggregateInput
    _sum?: WaterLogSumOrderByAggregateInput
  }

  export type WaterLogScalarWhereWithAggregatesInput = {
    AND?: WaterLogScalarWhereWithAggregatesInput | WaterLogScalarWhereWithAggregatesInput[]
    OR?: WaterLogScalarWhereWithAggregatesInput[]
    NOT?: WaterLogScalarWhereWithAggregatesInput | WaterLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterLog"> | string
    userId?: StringWithAggregatesFilter<"WaterLog"> | string
    amountMl?: IntWithAggregatesFilter<"WaterLog"> | number
    loggedAt?: DateTimeWithAggregatesFilter<"WaterLog"> | Date | string
  }

  export type ProfileCreateInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutProfileInput
    userTargets?: UserTargetCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutProfileInput
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutProfileNestedInput
    userTargets?: UserTargetUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutProfileNestedInput
    userTargets?: UserTargetUncheckedUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    reads?: NotificationReadCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    reads?: NotificationReadUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: NotificationReadUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: NotificationReadUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    message: string
    goal?: $Enums.Goal | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadCreateInput = {
    id?: string
    readAt?: Date | string
    notification: NotificationCreateNestedOneWithoutReadsInput
    profile: ProfileCreateNestedOneWithoutNotificationReadsInput
  }

  export type NotificationReadUncheckedCreateInput = {
    id?: string
    notificationId: string
    userId: string
    readAt?: Date | string
  }

  export type NotificationReadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateOneRequiredWithoutReadsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutNotificationReadsNestedInput
  }

  export type NotificationReadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadCreateManyInput = {
    id?: string
    notificationId: string
    userId: string
    readAt?: Date | string
  }

  export type NotificationReadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateInput = {
    id?: string
    name: string
    burmeseName: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutFoodsInput
    mealEntries?: MealEntryCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: string
    name: string
    burmeseName: string
    categoryId: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
    mealEntries?: MealEntryUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: string
    name: string
    burmeseName: string
    categoryId: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserTargetCreateInput = {
    id?: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserTargetsInput
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
    profile?: ProfileUpdateOneRequiredWithoutUserTargetsNestedInput
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
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMealEntriesInput
    food?: FoodCreateNestedOneWithoutMealEntriesInput
    nutrients?: MealEntryNutrientCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUncheckedCreateInput = {
    id?: string
    userId: string
    foodId?: string | null
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    nutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMealEntriesNestedInput
    food?: FoodUpdateOneWithoutMealEntriesNestedInput
    nutrients?: MealEntryNutrientUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: MealEntryNutrientUncheckedUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryCreateManyInput = {
    id?: string
    userId: string
    foodId?: string | null
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type WaterLogCreateInput = {
    id?: string
    amountMl: number
    loggedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutWaterLogsInput
  }

  export type WaterLogUncheckedCreateInput = {
    id?: string
    userId: string
    amountMl: number
    loggedAt?: Date | string
  }

  export type WaterLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutWaterLogsNestedInput
  }

  export type WaterLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogCreateManyInput = {
    id?: string
    userId: string
    amountMl: number
    loggedAt?: Date | string
  }

  export type WaterLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableFilter<$PrismaModel> | $Enums.Goal | null
  }

  export type EnumActivityLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableFilter<$PrismaModel> | $Enums.ActivityLevel | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type WaterLogListRelationFilter = {
    every?: WaterLogWhereInput
    some?: WaterLogWhereInput
    none?: WaterLogWhereInput
  }

  export type NotificationReadListRelationFilter = {
    every?: NotificationReadWhereInput
    some?: NotificationReadWhereInput
    none?: NotificationReadWhereInput
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

  export type WaterLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationReadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    onboardingCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    age?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    onboardingCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    onboardingCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
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

  export type EnumGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.Goal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumGoalNullableFilter<$PrismaModel>
  }

  export type EnumActivityLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type NotificationReadNotificationIdUserIdCompoundUniqueInput = {
    notificationId: string
    userId: string
  }

  export type NotificationReadCountOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type NotificationReadMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type NotificationReadMinOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    burmeseName?: SortOrder
    categoryId?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbohydrates?: SortOrder
    fat?: SortOrder
    imageUrl?: SortOrder
    imageFileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbohydrates?: SortOrder
    fat?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    burmeseName?: SortOrder
    categoryId?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbohydrates?: SortOrder
    fat?: SortOrder
    imageUrl?: SortOrder
    imageFileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    burmeseName?: SortOrder
    categoryId?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbohydrates?: SortOrder
    fat?: SortOrder
    imageUrl?: SortOrder
    imageFileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbohydrates?: SortOrder
    fat?: SortOrder
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

  export type EnumNutrientUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.NutrientUnit | EnumNutrientUnitFieldRefInput<$PrismaModel>
    in?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumNutrientUnitFilter<$PrismaModel> | $Enums.NutrientUnit
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NutrientScalarRelationFilter = {
    is?: NutrientWhereInput
    isNot?: NutrientWhereInput
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

  export type FoodNullableScalarRelationFilter = {
    is?: FoodWhereInput | null
    isNot?: FoodWhereInput | null
  }

  export type MealEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    foodName?: SortOrder
    foodBrand?: SortOrder
    source?: SortOrder
    servingDescription?: SortOrder
    servingGrams?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealEntryAvgOrderByAggregateInput = {
    servingGrams?: SortOrder
    quantity?: SortOrder
  }

  export type MealEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    foodName?: SortOrder
    foodBrand?: SortOrder
    source?: SortOrder
    servingDescription?: SortOrder
    servingGrams?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    foodName?: SortOrder
    foodBrand?: SortOrder
    source?: SortOrder
    servingDescription?: SortOrder
    servingGrams?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealEntrySumOrderByAggregateInput = {
    servingGrams?: SortOrder
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

  export type WaterLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    loggedAt?: SortOrder
  }

  export type WaterLogAvgOrderByAggregateInput = {
    amountMl?: SortOrder
  }

  export type WaterLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    loggedAt?: SortOrder
  }

  export type WaterLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    loggedAt?: SortOrder
  }

  export type WaterLogSumOrderByAggregateInput = {
    amountMl?: SortOrder
  }

  export type MealEntryCreateNestedManyWithoutProfileInput = {
    create?: XOR<MealEntryCreateWithoutProfileInput, MealEntryUncheckedCreateWithoutProfileInput> | MealEntryCreateWithoutProfileInput[] | MealEntryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutProfileInput | MealEntryCreateOrConnectWithoutProfileInput[]
    createMany?: MealEntryCreateManyProfileInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type UserTargetCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserTargetCreateWithoutProfileInput, UserTargetUncheckedCreateWithoutProfileInput> | UserTargetCreateWithoutProfileInput[] | UserTargetUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutProfileInput | UserTargetCreateOrConnectWithoutProfileInput[]
    createMany?: UserTargetCreateManyProfileInputEnvelope
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
  }

  export type WaterLogCreateNestedManyWithoutProfileInput = {
    create?: XOR<WaterLogCreateWithoutProfileInput, WaterLogUncheckedCreateWithoutProfileInput> | WaterLogCreateWithoutProfileInput[] | WaterLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutProfileInput | WaterLogCreateOrConnectWithoutProfileInput[]
    createMany?: WaterLogCreateManyProfileInputEnvelope
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
  }

  export type NotificationReadCreateNestedManyWithoutProfileInput = {
    create?: XOR<NotificationReadCreateWithoutProfileInput, NotificationReadUncheckedCreateWithoutProfileInput> | NotificationReadCreateWithoutProfileInput[] | NotificationReadUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutProfileInput | NotificationReadCreateOrConnectWithoutProfileInput[]
    createMany?: NotificationReadCreateManyProfileInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type MealEntryUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<MealEntryCreateWithoutProfileInput, MealEntryUncheckedCreateWithoutProfileInput> | MealEntryCreateWithoutProfileInput[] | MealEntryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutProfileInput | MealEntryCreateOrConnectWithoutProfileInput[]
    createMany?: MealEntryCreateManyProfileInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type UserTargetUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserTargetCreateWithoutProfileInput, UserTargetUncheckedCreateWithoutProfileInput> | UserTargetCreateWithoutProfileInput[] | UserTargetUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutProfileInput | UserTargetCreateOrConnectWithoutProfileInput[]
    createMany?: UserTargetCreateManyProfileInputEnvelope
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
  }

  export type WaterLogUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<WaterLogCreateWithoutProfileInput, WaterLogUncheckedCreateWithoutProfileInput> | WaterLogCreateWithoutProfileInput[] | WaterLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutProfileInput | WaterLogCreateOrConnectWithoutProfileInput[]
    createMany?: WaterLogCreateManyProfileInputEnvelope
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
  }

  export type NotificationReadUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<NotificationReadCreateWithoutProfileInput, NotificationReadUncheckedCreateWithoutProfileInput> | NotificationReadCreateWithoutProfileInput[] | NotificationReadUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutProfileInput | NotificationReadCreateOrConnectWithoutProfileInput[]
    createMany?: NotificationReadCreateManyProfileInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumGoalFieldUpdateOperationsInput = {
    set?: $Enums.Goal | null
  }

  export type NullableEnumActivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLevel | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MealEntryUpdateManyWithoutProfileNestedInput = {
    create?: XOR<MealEntryCreateWithoutProfileInput, MealEntryUncheckedCreateWithoutProfileInput> | MealEntryCreateWithoutProfileInput[] | MealEntryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutProfileInput | MealEntryCreateOrConnectWithoutProfileInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutProfileInput | MealEntryUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: MealEntryCreateManyProfileInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutProfileInput | MealEntryUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutProfileInput | MealEntryUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type UserTargetUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserTargetCreateWithoutProfileInput, UserTargetUncheckedCreateWithoutProfileInput> | UserTargetCreateWithoutProfileInput[] | UserTargetUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutProfileInput | UserTargetCreateOrConnectWithoutProfileInput[]
    upsert?: UserTargetUpsertWithWhereUniqueWithoutProfileInput | UserTargetUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserTargetCreateManyProfileInputEnvelope
    set?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    disconnect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    delete?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    update?: UserTargetUpdateWithWhereUniqueWithoutProfileInput | UserTargetUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserTargetUpdateManyWithWhereWithoutProfileInput | UserTargetUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
  }

  export type WaterLogUpdateManyWithoutProfileNestedInput = {
    create?: XOR<WaterLogCreateWithoutProfileInput, WaterLogUncheckedCreateWithoutProfileInput> | WaterLogCreateWithoutProfileInput[] | WaterLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutProfileInput | WaterLogCreateOrConnectWithoutProfileInput[]
    upsert?: WaterLogUpsertWithWhereUniqueWithoutProfileInput | WaterLogUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: WaterLogCreateManyProfileInputEnvelope
    set?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    disconnect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    delete?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    update?: WaterLogUpdateWithWhereUniqueWithoutProfileInput | WaterLogUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: WaterLogUpdateManyWithWhereWithoutProfileInput | WaterLogUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
  }

  export type NotificationReadUpdateManyWithoutProfileNestedInput = {
    create?: XOR<NotificationReadCreateWithoutProfileInput, NotificationReadUncheckedCreateWithoutProfileInput> | NotificationReadCreateWithoutProfileInput[] | NotificationReadUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutProfileInput | NotificationReadCreateOrConnectWithoutProfileInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutProfileInput | NotificationReadUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: NotificationReadCreateManyProfileInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutProfileInput | NotificationReadUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutProfileInput | NotificationReadUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type MealEntryUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<MealEntryCreateWithoutProfileInput, MealEntryUncheckedCreateWithoutProfileInput> | MealEntryCreateWithoutProfileInput[] | MealEntryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutProfileInput | MealEntryCreateOrConnectWithoutProfileInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutProfileInput | MealEntryUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: MealEntryCreateManyProfileInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutProfileInput | MealEntryUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutProfileInput | MealEntryUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type UserTargetUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserTargetCreateWithoutProfileInput, UserTargetUncheckedCreateWithoutProfileInput> | UserTargetCreateWithoutProfileInput[] | UserTargetUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserTargetCreateOrConnectWithoutProfileInput | UserTargetCreateOrConnectWithoutProfileInput[]
    upsert?: UserTargetUpsertWithWhereUniqueWithoutProfileInput | UserTargetUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserTargetCreateManyProfileInputEnvelope
    set?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    disconnect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    delete?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    connect?: UserTargetWhereUniqueInput | UserTargetWhereUniqueInput[]
    update?: UserTargetUpdateWithWhereUniqueWithoutProfileInput | UserTargetUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserTargetUpdateManyWithWhereWithoutProfileInput | UserTargetUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserTargetScalarWhereInput | UserTargetScalarWhereInput[]
  }

  export type WaterLogUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<WaterLogCreateWithoutProfileInput, WaterLogUncheckedCreateWithoutProfileInput> | WaterLogCreateWithoutProfileInput[] | WaterLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutProfileInput | WaterLogCreateOrConnectWithoutProfileInput[]
    upsert?: WaterLogUpsertWithWhereUniqueWithoutProfileInput | WaterLogUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: WaterLogCreateManyProfileInputEnvelope
    set?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    disconnect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    delete?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    update?: WaterLogUpdateWithWhereUniqueWithoutProfileInput | WaterLogUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: WaterLogUpdateManyWithWhereWithoutProfileInput | WaterLogUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
  }

  export type NotificationReadUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<NotificationReadCreateWithoutProfileInput, NotificationReadUncheckedCreateWithoutProfileInput> | NotificationReadCreateWithoutProfileInput[] | NotificationReadUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutProfileInput | NotificationReadCreateOrConnectWithoutProfileInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutProfileInput | NotificationReadUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: NotificationReadCreateManyProfileInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutProfileInput | NotificationReadUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutProfileInput | NotificationReadUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type NotificationReadCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type NotificationReadUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type NotificationReadUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutNotificationInput | NotificationReadUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutNotificationInput | NotificationReadUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutNotificationInput | NotificationReadUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type NotificationReadUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutNotificationInput | NotificationReadUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutNotificationInput | NotificationReadUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutNotificationInput | NotificationReadUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type NotificationCreateNestedOneWithoutReadsInput = {
    create?: XOR<NotificationCreateWithoutReadsInput, NotificationUncheckedCreateWithoutReadsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutReadsInput
    connect?: NotificationWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutNotificationReadsInput = {
    create?: XOR<ProfileCreateWithoutNotificationReadsInput, ProfileUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificationReadsInput
    connect?: ProfileWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutReadsNestedInput = {
    create?: XOR<NotificationCreateWithoutReadsInput, NotificationUncheckedCreateWithoutReadsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutReadsInput
    upsert?: NotificationUpsertWithoutReadsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutReadsInput, NotificationUpdateWithoutReadsInput>, NotificationUncheckedUpdateWithoutReadsInput>
  }

  export type ProfileUpdateOneRequiredWithoutNotificationReadsNestedInput = {
    create?: XOR<ProfileCreateWithoutNotificationReadsInput, ProfileUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificationReadsInput
    upsert?: ProfileUpsertWithoutNotificationReadsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutNotificationReadsInput, ProfileUpdateWithoutNotificationReadsInput>, ProfileUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type FoodCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutFoodsInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
  }

  export type MealEntryCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput> | MealEntryCreateWithoutFoodInput[] | MealEntryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutFoodInput | MealEntryCreateOrConnectWithoutFoodInput[]
    createMany?: MealEntryCreateManyFoodInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type MealEntryUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealEntryCreateWithoutFoodInput, MealEntryUncheckedCreateWithoutFoodInput> | MealEntryCreateWithoutFoodInput[] | MealEntryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutFoodInput | MealEntryCreateOrConnectWithoutFoodInput[]
    createMany?: MealEntryCreateManyFoodInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoryUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    upsert?: CategoryUpsertWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFoodsInput, CategoryUpdateWithoutFoodsInput>, CategoryUncheckedUpdateWithoutFoodsInput>
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type ProfileCreateNestedOneWithoutUserTargetsInput = {
    create?: XOR<ProfileCreateWithoutUserTargetsInput, ProfileUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserTargetsInput
    connect?: ProfileWhereUniqueInput
  }

  export type NutrientCreateNestedOneWithoutUserTargetsInput = {
    create?: XOR<NutrientCreateWithoutUserTargetsInput, NutrientUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutUserTargetsInput
    connect?: NutrientWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutUserTargetsNestedInput = {
    create?: XOR<ProfileCreateWithoutUserTargetsInput, ProfileUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserTargetsInput
    upsert?: ProfileUpsertWithoutUserTargetsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserTargetsInput, ProfileUpdateWithoutUserTargetsInput>, ProfileUncheckedUpdateWithoutUserTargetsInput>
  }

  export type NutrientUpdateOneRequiredWithoutUserTargetsNestedInput = {
    create?: XOR<NutrientCreateWithoutUserTargetsInput, NutrientUncheckedCreateWithoutUserTargetsInput>
    connectOrCreate?: NutrientCreateOrConnectWithoutUserTargetsInput
    upsert?: NutrientUpsertWithoutUserTargetsInput
    connect?: NutrientWhereUniqueInput
    update?: XOR<XOR<NutrientUpdateToOneWithWhereWithoutUserTargetsInput, NutrientUpdateWithoutUserTargetsInput>, NutrientUncheckedUpdateWithoutUserTargetsInput>
  }

  export type ProfileCreateNestedOneWithoutMealEntriesInput = {
    create?: XOR<ProfileCreateWithoutMealEntriesInput, ProfileUncheckedCreateWithoutMealEntriesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMealEntriesInput
    connect?: ProfileWhereUniqueInput
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

  export type ProfileUpdateOneRequiredWithoutMealEntriesNestedInput = {
    create?: XOR<ProfileCreateWithoutMealEntriesInput, ProfileUncheckedCreateWithoutMealEntriesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMealEntriesInput
    upsert?: ProfileUpsertWithoutMealEntriesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutMealEntriesInput, ProfileUpdateWithoutMealEntriesInput>, ProfileUncheckedUpdateWithoutMealEntriesInput>
  }

  export type FoodUpdateOneWithoutMealEntriesNestedInput = {
    create?: XOR<FoodCreateWithoutMealEntriesInput, FoodUncheckedCreateWithoutMealEntriesInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMealEntriesInput
    upsert?: FoodUpsertWithoutMealEntriesInput
    disconnect?: FoodWhereInput | boolean
    delete?: FoodWhereInput | boolean
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

  export type ProfileCreateNestedOneWithoutWaterLogsInput = {
    create?: XOR<ProfileCreateWithoutWaterLogsInput, ProfileUncheckedCreateWithoutWaterLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWaterLogsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutWaterLogsNestedInput = {
    create?: XOR<ProfileCreateWithoutWaterLogsInput, ProfileUncheckedCreateWithoutWaterLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWaterLogsInput
    upsert?: ProfileUpsertWithoutWaterLogsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWaterLogsInput, ProfileUpdateWithoutWaterLogsInput>, ProfileUncheckedUpdateWithoutWaterLogsInput>
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

  export type NestedEnumGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableFilter<$PrismaModel> | $Enums.Goal | null
  }

  export type NestedEnumActivityLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableFilter<$PrismaModel> | $Enums.ActivityLevel | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.Goal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumGoalNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumNutrientUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.NutrientUnit | EnumNutrientUnitFieldRefInput<$PrismaModel>
    in?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.NutrientUnit[] | ListEnumNutrientUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumNutrientUnitFilter<$PrismaModel> | $Enums.NutrientUnit
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MealEntryCreateWithoutProfileInput = {
    id?: string
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    food?: FoodCreateNestedOneWithoutMealEntriesInput
    nutrients?: MealEntryNutrientCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUncheckedCreateWithoutProfileInput = {
    id?: string
    foodId?: string | null
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    nutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryCreateOrConnectWithoutProfileInput = {
    where: MealEntryWhereUniqueInput
    create: XOR<MealEntryCreateWithoutProfileInput, MealEntryUncheckedCreateWithoutProfileInput>
  }

  export type MealEntryCreateManyProfileInputEnvelope = {
    data: MealEntryCreateManyProfileInput | MealEntryCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserTargetCreateWithoutProfileInput = {
    id?: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
    nutrient: NutrientCreateNestedOneWithoutUserTargetsInput
  }

  export type UserTargetUncheckedCreateWithoutProfileInput = {
    id?: string
    nutrientId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type UserTargetCreateOrConnectWithoutProfileInput = {
    where: UserTargetWhereUniqueInput
    create: XOR<UserTargetCreateWithoutProfileInput, UserTargetUncheckedCreateWithoutProfileInput>
  }

  export type UserTargetCreateManyProfileInputEnvelope = {
    data: UserTargetCreateManyProfileInput | UserTargetCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type WaterLogCreateWithoutProfileInput = {
    id?: string
    amountMl: number
    loggedAt?: Date | string
  }

  export type WaterLogUncheckedCreateWithoutProfileInput = {
    id?: string
    amountMl: number
    loggedAt?: Date | string
  }

  export type WaterLogCreateOrConnectWithoutProfileInput = {
    where: WaterLogWhereUniqueInput
    create: XOR<WaterLogCreateWithoutProfileInput, WaterLogUncheckedCreateWithoutProfileInput>
  }

  export type WaterLogCreateManyProfileInputEnvelope = {
    data: WaterLogCreateManyProfileInput | WaterLogCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type NotificationReadCreateWithoutProfileInput = {
    id?: string
    readAt?: Date | string
    notification: NotificationCreateNestedOneWithoutReadsInput
  }

  export type NotificationReadUncheckedCreateWithoutProfileInput = {
    id?: string
    notificationId: string
    readAt?: Date | string
  }

  export type NotificationReadCreateOrConnectWithoutProfileInput = {
    where: NotificationReadWhereUniqueInput
    create: XOR<NotificationReadCreateWithoutProfileInput, NotificationReadUncheckedCreateWithoutProfileInput>
  }

  export type NotificationReadCreateManyProfileInputEnvelope = {
    data: NotificationReadCreateManyProfileInput | NotificationReadCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type MealEntryUpsertWithWhereUniqueWithoutProfileInput = {
    where: MealEntryWhereUniqueInput
    update: XOR<MealEntryUpdateWithoutProfileInput, MealEntryUncheckedUpdateWithoutProfileInput>
    create: XOR<MealEntryCreateWithoutProfileInput, MealEntryUncheckedCreateWithoutProfileInput>
  }

  export type MealEntryUpdateWithWhereUniqueWithoutProfileInput = {
    where: MealEntryWhereUniqueInput
    data: XOR<MealEntryUpdateWithoutProfileInput, MealEntryUncheckedUpdateWithoutProfileInput>
  }

  export type MealEntryUpdateManyWithWhereWithoutProfileInput = {
    where: MealEntryScalarWhereInput
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyWithoutProfileInput>
  }

  export type MealEntryScalarWhereInput = {
    AND?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
    OR?: MealEntryScalarWhereInput[]
    NOT?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
    id?: StringFilter<"MealEntry"> | string
    userId?: StringFilter<"MealEntry"> | string
    foodId?: StringNullableFilter<"MealEntry"> | string | null
    foodName?: StringFilter<"MealEntry"> | string
    foodBrand?: StringNullableFilter<"MealEntry"> | string | null
    source?: StringNullableFilter<"MealEntry"> | string | null
    servingDescription?: StringNullableFilter<"MealEntry"> | string | null
    servingGrams?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFilter<"MealEntry"> | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFilter<"MealEntry"> | $Enums.MealType
    eatenAt?: DateTimeFilter<"MealEntry"> | Date | string
    createdAt?: DateTimeFilter<"MealEntry"> | Date | string
  }

  export type UserTargetUpsertWithWhereUniqueWithoutProfileInput = {
    where: UserTargetWhereUniqueInput
    update: XOR<UserTargetUpdateWithoutProfileInput, UserTargetUncheckedUpdateWithoutProfileInput>
    create: XOR<UserTargetCreateWithoutProfileInput, UserTargetUncheckedCreateWithoutProfileInput>
  }

  export type UserTargetUpdateWithWhereUniqueWithoutProfileInput = {
    where: UserTargetWhereUniqueInput
    data: XOR<UserTargetUpdateWithoutProfileInput, UserTargetUncheckedUpdateWithoutProfileInput>
  }

  export type UserTargetUpdateManyWithWhereWithoutProfileInput = {
    where: UserTargetScalarWhereInput
    data: XOR<UserTargetUpdateManyMutationInput, UserTargetUncheckedUpdateManyWithoutProfileInput>
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

  export type WaterLogUpsertWithWhereUniqueWithoutProfileInput = {
    where: WaterLogWhereUniqueInput
    update: XOR<WaterLogUpdateWithoutProfileInput, WaterLogUncheckedUpdateWithoutProfileInput>
    create: XOR<WaterLogCreateWithoutProfileInput, WaterLogUncheckedCreateWithoutProfileInput>
  }

  export type WaterLogUpdateWithWhereUniqueWithoutProfileInput = {
    where: WaterLogWhereUniqueInput
    data: XOR<WaterLogUpdateWithoutProfileInput, WaterLogUncheckedUpdateWithoutProfileInput>
  }

  export type WaterLogUpdateManyWithWhereWithoutProfileInput = {
    where: WaterLogScalarWhereInput
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyWithoutProfileInput>
  }

  export type WaterLogScalarWhereInput = {
    AND?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
    OR?: WaterLogScalarWhereInput[]
    NOT?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
    id?: StringFilter<"WaterLog"> | string
    userId?: StringFilter<"WaterLog"> | string
    amountMl?: IntFilter<"WaterLog"> | number
    loggedAt?: DateTimeFilter<"WaterLog"> | Date | string
  }

  export type NotificationReadUpsertWithWhereUniqueWithoutProfileInput = {
    where: NotificationReadWhereUniqueInput
    update: XOR<NotificationReadUpdateWithoutProfileInput, NotificationReadUncheckedUpdateWithoutProfileInput>
    create: XOR<NotificationReadCreateWithoutProfileInput, NotificationReadUncheckedCreateWithoutProfileInput>
  }

  export type NotificationReadUpdateWithWhereUniqueWithoutProfileInput = {
    where: NotificationReadWhereUniqueInput
    data: XOR<NotificationReadUpdateWithoutProfileInput, NotificationReadUncheckedUpdateWithoutProfileInput>
  }

  export type NotificationReadUpdateManyWithWhereWithoutProfileInput = {
    where: NotificationReadScalarWhereInput
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyWithoutProfileInput>
  }

  export type NotificationReadScalarWhereInput = {
    AND?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
    OR?: NotificationReadScalarWhereInput[]
    NOT?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
    id?: StringFilter<"NotificationRead"> | string
    notificationId?: StringFilter<"NotificationRead"> | string
    userId?: StringFilter<"NotificationRead"> | string
    readAt?: DateTimeFilter<"NotificationRead"> | Date | string
  }

  export type NotificationReadCreateWithoutNotificationInput = {
    id?: string
    readAt?: Date | string
    profile: ProfileCreateNestedOneWithoutNotificationReadsInput
  }

  export type NotificationReadUncheckedCreateWithoutNotificationInput = {
    id?: string
    userId: string
    readAt?: Date | string
  }

  export type NotificationReadCreateOrConnectWithoutNotificationInput = {
    where: NotificationReadWhereUniqueInput
    create: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationReadCreateManyNotificationInputEnvelope = {
    data: NotificationReadCreateManyNotificationInput | NotificationReadCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type NotificationReadUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationReadWhereUniqueInput
    update: XOR<NotificationReadUpdateWithoutNotificationInput, NotificationReadUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationReadUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationReadWhereUniqueInput
    data: XOR<NotificationReadUpdateWithoutNotificationInput, NotificationReadUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationReadUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationReadScalarWhereInput
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationCreateWithoutReadsInput = {
    id?: string
    title: string
    message: string
    goal?: $Enums.Goal | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutReadsInput = {
    id?: string
    title: string
    message: string
    goal?: $Enums.Goal | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutReadsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutReadsInput, NotificationUncheckedCreateWithoutReadsInput>
  }

  export type ProfileCreateWithoutNotificationReadsInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutProfileInput
    userTargets?: UserTargetCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutNotificationReadsInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutProfileInput
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutNotificationReadsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutNotificationReadsInput, ProfileUncheckedCreateWithoutNotificationReadsInput>
  }

  export type NotificationUpsertWithoutReadsInput = {
    update: XOR<NotificationUpdateWithoutReadsInput, NotificationUncheckedUpdateWithoutReadsInput>
    create: XOR<NotificationCreateWithoutReadsInput, NotificationUncheckedCreateWithoutReadsInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutReadsInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutReadsInput, NotificationUncheckedUpdateWithoutReadsInput>
  }

  export type NotificationUpdateWithoutReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpsertWithoutNotificationReadsInput = {
    update: XOR<ProfileUpdateWithoutNotificationReadsInput, ProfileUncheckedUpdateWithoutNotificationReadsInput>
    create: XOR<ProfileCreateWithoutNotificationReadsInput, ProfileUncheckedCreateWithoutNotificationReadsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutNotificationReadsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutNotificationReadsInput, ProfileUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type ProfileUpdateWithoutNotificationReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutProfileNestedInput
    userTargets?: UserTargetUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutNotificationReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutProfileNestedInput
    userTargets?: UserTargetUncheckedUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type FoodCreateWithoutCategoryInput = {
    id?: string
    name: string
    burmeseName: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    burmeseName: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodCreateManyCategoryInputEnvelope = {
    data: FoodCreateManyCategoryInput | FoodCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FoodUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
  }

  export type FoodUpdateManyWithWhereWithoutCategoryInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    burmeseName?: StringFilter<"Food"> | string
    categoryId?: StringFilter<"Food"> | string
    calories?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    protein?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    fat?: DecimalFilter<"Food"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFilter<"Food"> | string
    imageFileId?: StringNullableFilter<"Food"> | string | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
  }

  export type CategoryCreateWithoutFoodsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutFoodsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutFoodsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
  }

  export type MealEntryCreateWithoutFoodInput = {
    id?: string
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMealEntriesInput
    nutrients?: MealEntryNutrientCreateNestedManyWithoutMealEntryInput
  }

  export type MealEntryUncheckedCreateWithoutFoodInput = {
    id?: string
    userId: string
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
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

  export type CategoryUpsertWithoutFoodsInput = {
    update: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFoodsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type CategoryUpdateWithoutFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserTargetCreateWithoutNutrientInput = {
    id?: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserTargetsInput
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

  export type ProfileCreateWithoutUserTargetsInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserTargetsInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserTargetsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserTargetsInput, ProfileUncheckedCreateWithoutUserTargetsInput>
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
    mealEntryNutrients?: MealEntryNutrientUncheckedCreateNestedManyWithoutNutrientInput
  }

  export type NutrientCreateOrConnectWithoutUserTargetsInput = {
    where: NutrientWhereUniqueInput
    create: XOR<NutrientCreateWithoutUserTargetsInput, NutrientUncheckedCreateWithoutUserTargetsInput>
  }

  export type ProfileUpsertWithoutUserTargetsInput = {
    update: XOR<ProfileUpdateWithoutUserTargetsInput, ProfileUncheckedUpdateWithoutUserTargetsInput>
    create: XOR<ProfileCreateWithoutUserTargetsInput, ProfileUncheckedCreateWithoutUserTargetsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserTargetsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserTargetsInput, ProfileUncheckedUpdateWithoutUserTargetsInput>
  }

  export type ProfileUpdateWithoutUserTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutProfileNestedInput
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
    mealEntryNutrients?: MealEntryNutrientUncheckedUpdateManyWithoutNutrientNestedInput
  }

  export type ProfileCreateWithoutMealEntriesInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTargets?: UserTargetCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutMealEntriesInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutProfileInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutMealEntriesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutMealEntriesInput, ProfileUncheckedCreateWithoutMealEntriesInput>
  }

  export type FoodCreateWithoutMealEntriesInput = {
    id?: string
    name: string
    burmeseName: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutMealEntriesInput = {
    id?: string
    name: string
    burmeseName: string
    categoryId: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type ProfileUpsertWithoutMealEntriesInput = {
    update: XOR<ProfileUpdateWithoutMealEntriesInput, ProfileUncheckedUpdateWithoutMealEntriesInput>
    create: XOR<ProfileCreateWithoutMealEntriesInput, ProfileUncheckedCreateWithoutMealEntriesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutMealEntriesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutMealEntriesInput, ProfileUncheckedUpdateWithoutMealEntriesInput>
  }

  export type ProfileUpdateWithoutMealEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTargets?: UserTargetUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutMealEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTargets?: UserTargetUncheckedUpdateManyWithoutProfileNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutProfileNestedInput
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
    burmeseName?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutMealEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMealEntriesInput
    food?: FoodCreateNestedOneWithoutMealEntriesInput
  }

  export type MealEntryUncheckedCreateWithoutNutrientsInput = {
    id?: string
    userId: string
    foodId?: string | null
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
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
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMealEntriesNestedInput
    food?: FoodUpdateOneWithoutMealEntriesNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutNutrientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    userTargets?: UserTargetUncheckedUpdateManyWithoutNutrientNestedInput
  }

  export type ProfileCreateWithoutWaterLogsInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryCreateNestedManyWithoutProfileInput
    userTargets?: UserTargetCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutWaterLogsInput = {
    id: string
    age?: number | null
    gender?: string | null
    weightKg?: Decimal | DecimalJsLike | number | string | null
    heightCm?: Decimal | DecimalJsLike | number | string | null
    goal?: $Enums.Goal | null
    activityLevel?: $Enums.ActivityLevel | null
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealEntries?: MealEntryUncheckedCreateNestedManyWithoutProfileInput
    userTargets?: UserTargetUncheckedCreateNestedManyWithoutProfileInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutWaterLogsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWaterLogsInput, ProfileUncheckedCreateWithoutWaterLogsInput>
  }

  export type ProfileUpsertWithoutWaterLogsInput = {
    update: XOR<ProfileUpdateWithoutWaterLogsInput, ProfileUncheckedUpdateWithoutWaterLogsInput>
    create: XOR<ProfileCreateWithoutWaterLogsInput, ProfileUncheckedCreateWithoutWaterLogsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWaterLogsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWaterLogsInput, ProfileUncheckedUpdateWithoutWaterLogsInput>
  }

  export type ProfileUpdateWithoutWaterLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutProfileNestedInput
    userTargets?: UserTargetUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWaterLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heightCm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutProfileNestedInput
    userTargets?: UserTargetUncheckedUpdateManyWithoutProfileNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type MealEntryCreateManyProfileInput = {
    id?: string
    foodId?: string | null
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type UserTargetCreateManyProfileInput = {
    id?: string
    nutrientId: string
    targetAmount: Decimal | DecimalJsLike | number | string
    source?: string | null
    sourceUrl?: string | null
    updatedAt?: Date | string
  }

  export type WaterLogCreateManyProfileInput = {
    id?: string
    amountMl: number
    loggedAt?: Date | string
  }

  export type NotificationReadCreateManyProfileInput = {
    id?: string
    notificationId: string
    readAt?: Date | string
  }

  export type MealEntryUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneWithoutMealEntriesNestedInput
    nutrients?: MealEntryNutrientUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: MealEntryNutrientUncheckedUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrient?: NutrientUpdateOneRequiredWithoutUserTargetsNestedInput
  }

  export type UserTargetUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTargetUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    nutrientId?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateOneRequiredWithoutReadsNestedInput
  }

  export type NotificationReadUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadCreateManyNotificationInput = {
    id?: string
    userId: string
    readAt?: Date | string
  }

  export type NotificationReadUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutNotificationReadsNestedInput
  }

  export type NotificationReadUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateManyCategoryInput = {
    id?: string
    name: string
    burmeseName: string
    calories: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    carbohydrates: Decimal | DecimalJsLike | number | string
    fat: Decimal | DecimalJsLike | number | string
    imageUrl: string
    imageFileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealEntries?: MealEntryUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    burmeseName?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbohydrates?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageFileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEntryCreateManyFoodInput = {
    id?: string
    userId: string
    foodName: string
    foodBrand?: string | null
    source?: string | null
    servingDescription?: string | null
    servingGrams: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    mealType: $Enums.MealType
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealEntryUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMealEntriesNestedInput
    nutrients?: MealEntryNutrientUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutrients?: MealEntryNutrientUncheckedUpdateManyWithoutMealEntryNestedInput
  }

  export type MealEntryUncheckedUpdateManyWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    foodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    servingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    servingGrams?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserTargetUpdateWithoutNutrientInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserTargetsNestedInput
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