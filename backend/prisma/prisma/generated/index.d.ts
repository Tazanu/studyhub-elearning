
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
 * Model answers
 * 
 */
export type answers = $Result.DefaultSelection<Prisma.$answersPayload>
/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model group_messages
 * 
 */
export type group_messages = $Result.DefaultSelection<Prisma.$group_messagesPayload>
/**
 * Model groups
 * 
 */
export type groups = $Result.DefaultSelection<Prisma.$groupsPayload>
/**
 * Model notes
 * 
 */
export type notes = $Result.DefaultSelection<Prisma.$notesPayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model tutor_availability
 * 
 */
export type tutor_availability = $Result.DefaultSelection<Prisma.$tutor_availabilityPayload>
/**
 * Model tutors
 * 
 */
export type tutors = $Result.DefaultSelection<Prisma.$tutorsPayload>
/**
 * Model user_groups
 * 
 */
export type user_groups = $Result.DefaultSelection<Prisma.$user_groupsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Answers
 * const answers = await prisma.answers.findMany()
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
   * // Fetch zero or more Answers
   * const answers = await prisma.answers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * `prisma.answers`: Exposes CRUD operations for the **answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.answersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group_messages`: Exposes CRUD operations for the **group_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group_messages
    * const group_messages = await prisma.group_messages.findMany()
    * ```
    */
  get group_messages(): Prisma.group_messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.notesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutor_availability`: Exposes CRUD operations for the **tutor_availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutor_availabilities
    * const tutor_availabilities = await prisma.tutor_availability.findMany()
    * ```
    */
  get tutor_availability(): Prisma.tutor_availabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutors`: Exposes CRUD operations for the **tutors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutors
    * const tutors = await prisma.tutors.findMany()
    * ```
    */
  get tutors(): Prisma.tutorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_groups`: Exposes CRUD operations for the **user_groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_groups
    * const user_groups = await prisma.user_groups.findMany()
    * ```
    */
  get user_groups(): Prisma.user_groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    answers: 'answers',
    bookings: 'bookings',
    group_messages: 'group_messages',
    groups: 'groups',
    notes: 'notes',
    questions: 'questions',
    transactions: 'transactions',
    tutor_availability: 'tutor_availability',
    tutors: 'tutors',
    user_groups: 'user_groups',
    users: 'users'
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
      modelProps: "answers" | "bookings" | "group_messages" | "groups" | "notes" | "questions" | "transactions" | "tutor_availability" | "tutors" | "user_groups" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      answers: {
        payload: Prisma.$answersPayload<ExtArgs>
        fields: Prisma.answersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findFirst: {
            args: Prisma.answersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findMany: {
            args: Prisma.answersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          create: {
            args: Prisma.answersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          createMany: {
            args: Prisma.answersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.answersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          delete: {
            args: Prisma.answersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          update: {
            args: Prisma.answersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          deleteMany: {
            args: Prisma.answersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.answersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          upsert: {
            args: Prisma.answersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          aggregate: {
            args: Prisma.AnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswers>
          }
          groupBy: {
            args: Prisma.answersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.answersCountArgs<ExtArgs>
            result: $Utils.Optional<AnswersCountAggregateOutputType> | number
          }
        }
      }
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      group_messages: {
        payload: Prisma.$group_messagesPayload<ExtArgs>
        fields: Prisma.group_messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.group_messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.group_messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>
          }
          findFirst: {
            args: Prisma.group_messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.group_messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>
          }
          findMany: {
            args: Prisma.group_messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>[]
          }
          create: {
            args: Prisma.group_messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>
          }
          createMany: {
            args: Prisma.group_messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.group_messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>[]
          }
          delete: {
            args: Prisma.group_messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>
          }
          update: {
            args: Prisma.group_messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>
          }
          deleteMany: {
            args: Prisma.group_messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.group_messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.group_messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>[]
          }
          upsert: {
            args: Prisma.group_messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_messagesPayload>
          }
          aggregate: {
            args: Prisma.Group_messagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup_messages>
          }
          groupBy: {
            args: Prisma.group_messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Group_messagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.group_messagesCountArgs<ExtArgs>
            result: $Utils.Optional<Group_messagesCountAggregateOutputType> | number
          }
        }
      }
      groups: {
        payload: Prisma.$groupsPayload<ExtArgs>
        fields: Prisma.groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findFirst: {
            args: Prisma.groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findMany: {
            args: Prisma.groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          create: {
            args: Prisma.groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          createMany: {
            args: Prisma.groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          delete: {
            args: Prisma.groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          update: {
            args: Prisma.groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          deleteMany: {
            args: Prisma.groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.groupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          upsert: {
            args: Prisma.groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      notes: {
        payload: Prisma.$notesPayload<ExtArgs>
        fields: Prisma.notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findFirst: {
            args: Prisma.notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findMany: {
            args: Prisma.notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          create: {
            args: Prisma.notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          createMany: {
            args: Prisma.notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          delete: {
            args: Prisma.notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          update: {
            args: Prisma.notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          deleteMany: {
            args: Prisma.notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          upsert: {
            args: Prisma.notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.notesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.questionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.questionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      tutor_availability: {
        payload: Prisma.$tutor_availabilityPayload<ExtArgs>
        fields: Prisma.tutor_availabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tutor_availabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tutor_availabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>
          }
          findFirst: {
            args: Prisma.tutor_availabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tutor_availabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>
          }
          findMany: {
            args: Prisma.tutor_availabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>[]
          }
          create: {
            args: Prisma.tutor_availabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>
          }
          createMany: {
            args: Prisma.tutor_availabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tutor_availabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>[]
          }
          delete: {
            args: Prisma.tutor_availabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>
          }
          update: {
            args: Prisma.tutor_availabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>
          }
          deleteMany: {
            args: Prisma.tutor_availabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tutor_availabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tutor_availabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>[]
          }
          upsert: {
            args: Prisma.tutor_availabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_availabilityPayload>
          }
          aggregate: {
            args: Prisma.Tutor_availabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor_availability>
          }
          groupBy: {
            args: Prisma.tutor_availabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tutor_availabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.tutor_availabilityCountArgs<ExtArgs>
            result: $Utils.Optional<Tutor_availabilityCountAggregateOutputType> | number
          }
        }
      }
      tutors: {
        payload: Prisma.$tutorsPayload<ExtArgs>
        fields: Prisma.tutorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tutorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tutorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>
          }
          findFirst: {
            args: Prisma.tutorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tutorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>
          }
          findMany: {
            args: Prisma.tutorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>[]
          }
          create: {
            args: Prisma.tutorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>
          }
          createMany: {
            args: Prisma.tutorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tutorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>[]
          }
          delete: {
            args: Prisma.tutorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>
          }
          update: {
            args: Prisma.tutorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>
          }
          deleteMany: {
            args: Prisma.tutorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tutorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tutorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>[]
          }
          upsert: {
            args: Prisma.tutorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorsPayload>
          }
          aggregate: {
            args: Prisma.TutorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutors>
          }
          groupBy: {
            args: Prisma.tutorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tutorsCountArgs<ExtArgs>
            result: $Utils.Optional<TutorsCountAggregateOutputType> | number
          }
        }
      }
      user_groups: {
        payload: Prisma.$user_groupsPayload<ExtArgs>
        fields: Prisma.user_groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>
          }
          findFirst: {
            args: Prisma.user_groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>
          }
          findMany: {
            args: Prisma.user_groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>[]
          }
          create: {
            args: Prisma.user_groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>
          }
          createMany: {
            args: Prisma.user_groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>[]
          }
          delete: {
            args: Prisma.user_groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>
          }
          update: {
            args: Prisma.user_groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>
          }
          deleteMany: {
            args: Prisma.user_groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_groupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>[]
          }
          upsert: {
            args: Prisma.user_groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_groupsPayload>
          }
          aggregate: {
            args: Prisma.User_groupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_groups>
          }
          groupBy: {
            args: Prisma.user_groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_groupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_groupsCountArgs<ExtArgs>
            result: $Utils.Optional<User_groupsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    answers?: answersOmit
    bookings?: bookingsOmit
    group_messages?: group_messagesOmit
    groups?: groupsOmit
    notes?: notesOmit
    questions?: questionsOmit
    transactions?: transactionsOmit
    tutor_availability?: tutor_availabilityOmit
    tutors?: tutorsOmit
    user_groups?: user_groupsOmit
    users?: usersOmit
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
   * Count Type Group_messagesCountOutputType
   */

  export type Group_messagesCountOutputType = {
    other_group_messages: number
  }

  export type Group_messagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_group_messages?: boolean | Group_messagesCountOutputTypeCountOther_group_messagesArgs
  }

  // Custom InputTypes
  /**
   * Group_messagesCountOutputType without action
   */
  export type Group_messagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group_messagesCountOutputType
     */
    select?: Group_messagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Group_messagesCountOutputType without action
   */
  export type Group_messagesCountOutputTypeCountOther_group_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_messagesWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    group_messages: number
    notes: number
    user_groups: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_messages?: boolean | GroupsCountOutputTypeCountGroup_messagesArgs
    notes?: boolean | GroupsCountOutputTypeCountNotesArgs
    user_groups?: boolean | GroupsCountOutputTypeCountUser_groupsArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountGroup_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_messagesWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountUser_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_groupsWhereInput
  }


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    answers: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionsCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }


  /**
   * Count Type TutorsCountOutputType
   */

  export type TutorsCountOutputType = {
    bookings: number
    tutor_availability: number
  }

  export type TutorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TutorsCountOutputTypeCountBookingsArgs
    tutor_availability?: boolean | TutorsCountOutputTypeCountTutor_availabilityArgs
  }

  // Custom InputTypes
  /**
   * TutorsCountOutputType without action
   */
  export type TutorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorsCountOutputType
     */
    select?: TutorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorsCountOutputType without action
   */
  export type TutorsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * TutorsCountOutputType without action
   */
  export type TutorsCountOutputTypeCountTutor_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutor_availabilityWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    answers: number
    bookings: number
    group_messages: number
    groups: number
    notes: number
    questions: number
    transactions: number
    user_groups: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UsersCountOutputTypeCountAnswersArgs
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
    group_messages?: boolean | UsersCountOutputTypeCountGroup_messagesArgs
    groups?: boolean | UsersCountOutputTypeCountGroupsArgs
    notes?: boolean | UsersCountOutputTypeCountNotesArgs
    questions?: boolean | UsersCountOutputTypeCountQuestionsArgs
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs
    user_groups?: boolean | UsersCountOutputTypeCountUser_groupsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroup_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_groupsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model answers
   */

  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersAvgAggregateOutputType = {
    id: number | null
    votes: number | null
    question_id: number | null
    author_id: number | null
  }

  export type AnswersSumAggregateOutputType = {
    id: number | null
    votes: number | null
    question_id: number | null
    author_id: number | null
  }

  export type AnswersMinAggregateOutputType = {
    id: number | null
    content: string | null
    votes: number | null
    is_accepted: boolean | null
    question_id: number | null
    author_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: number | null
    content: string | null
    votes: number | null
    is_accepted: boolean | null
    question_id: number | null
    author_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    content: number
    votes: number
    is_accepted: number
    question_id: number
    author_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnswersAvgAggregateInputType = {
    id?: true
    votes?: true
    question_id?: true
    author_id?: true
  }

  export type AnswersSumAggregateInputType = {
    id?: true
    votes?: true
    question_id?: true
    author_id?: true
  }

  export type AnswersMinAggregateInputType = {
    id?: true
    content?: true
    votes?: true
    is_accepted?: true
    question_id?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    content?: true
    votes?: true
    is_accepted?: true
    question_id?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    content?: true
    votes?: true
    is_accepted?: true
    question_id?: true
    author_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to aggregate.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type answersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
    orderBy?: answersOrderByWithAggregationInput | answersOrderByWithAggregationInput[]
    by: AnswersScalarFieldEnum[] | AnswersScalarFieldEnum
    having?: answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _avg?: AnswersAvgAggregateInputType
    _sum?: AnswersSumAggregateInputType
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }

  export type AnswersGroupByOutputType = {
    id: number
    content: string
    votes: number | null
    is_accepted: boolean | null
    question_id: number
    author_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends answersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type answersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    votes?: boolean
    is_accepted?: boolean
    question_id?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    votes?: boolean
    is_accepted?: boolean
    question_id?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    votes?: boolean
    is_accepted?: boolean
    question_id?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectScalar = {
    id?: boolean
    content?: boolean
    votes?: boolean
    is_accepted?: boolean
    question_id?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type answersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "votes" | "is_accepted" | "question_id" | "author_id" | "created_at" | "updated_at", ExtArgs["result"]["answers"]>
  export type answersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type answersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type answersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }

  export type $answersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answers"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      questions: Prisma.$questionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      votes: number | null
      is_accepted: boolean | null
      question_id: number
      author_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["answers"]>
    composites: {}
  }

  type answersGetPayload<S extends boolean | null | undefined | answersDefaultArgs> = $Result.GetResult<Prisma.$answersPayload, S>

  type answersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface answersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answers'], meta: { name: 'answers' } }
    /**
     * Find zero or one Answers that matches the filter.
     * @param {answersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answersFindUniqueArgs>(args: SelectSubset<T, answersFindUniqueArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answersFindUniqueOrThrowArgs>(args: SelectSubset<T, answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answersFindFirstArgs>(args?: SelectSubset<T, answersFindFirstArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answersFindFirstOrThrowArgs>(args?: SelectSubset<T, answersFindFirstOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends answersFindManyArgs>(args?: SelectSubset<T, answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answers.
     * @param {answersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
     */
    create<T extends answersCreateArgs>(args: SelectSubset<T, answersCreateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {answersCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answersCreateManyArgs>(args?: SelectSubset<T, answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {answersCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends answersCreateManyAndReturnArgs>(args?: SelectSubset<T, answersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answers.
     * @param {answersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
     */
    delete<T extends answersDeleteArgs>(args: SelectSubset<T, answersDeleteArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answers.
     * @param {answersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answersUpdateArgs>(args: SelectSubset<T, answersUpdateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {answersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answersDeleteManyArgs>(args?: SelectSubset<T, answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answersUpdateManyArgs>(args: SelectSubset<T, answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {answersUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.updateManyAndReturn({
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
    updateManyAndReturn<T extends answersUpdateManyAndReturnArgs>(args: SelectSubset<T, answersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answers.
     * @param {answersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
     */
    upsert<T extends answersUpsertArgs>(args: SelectSubset<T, answersUpsertArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answersCountArgs>(
      args?: Subset<T, answersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): Prisma.PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersGroupByArgs} args - Group by arguments.
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
      T extends answersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answersGroupByArgs['orderBy'] }
        : { orderBy?: answersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answers model
   */
  readonly fields: answersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the answers model
   */
  interface answersFieldRefs {
    readonly id: FieldRef<"answers", 'Int'>
    readonly content: FieldRef<"answers", 'String'>
    readonly votes: FieldRef<"answers", 'Int'>
    readonly is_accepted: FieldRef<"answers", 'Boolean'>
    readonly question_id: FieldRef<"answers", 'Int'>
    readonly author_id: FieldRef<"answers", 'Int'>
    readonly created_at: FieldRef<"answers", 'DateTime'>
    readonly updated_at: FieldRef<"answers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * answers findUnique
   */
  export type answersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findUniqueOrThrow
   */
  export type answersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findFirst
   */
  export type answersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findFirstOrThrow
   */
  export type answersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findMany
   */
  export type answersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers create
   */
  export type answersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to create a answers.
     */
    data: XOR<answersCreateInput, answersUncheckedCreateInput>
  }

  /**
   * answers createMany
   */
  export type answersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answers createManyAndReturn
   */
  export type answersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers update
   */
  export type answersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to update a answers.
     */
    data: XOR<answersUpdateInput, answersUncheckedUpdateInput>
    /**
     * Choose, which answers to update.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers updateMany
   */
  export type answersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
  }

  /**
   * answers updateManyAndReturn
   */
  export type answersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers upsert
   */
  export type answersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The filter to search for the answers to update in case it exists.
     */
    where: answersWhereUniqueInput
    /**
     * In case the answers found by the `where` argument doesn't exist, create a new answers with this data.
     */
    create: XOR<answersCreateInput, answersUncheckedCreateInput>
    /**
     * In case the answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answersUpdateInput, answersUncheckedUpdateInput>
  }

  /**
   * answers delete
   */
  export type answersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter which answers to delete.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers deleteMany
   */
  export type answersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to delete
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to delete.
     */
    limit?: number
  }

  /**
   * answers without action
   */
  export type answersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
  }


  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    tutor_id: number | null
    duration_hours: Decimal | null
    total_amount: Decimal | null
  }

  export type BookingsSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    tutor_id: number | null
    duration_hours: Decimal | null
    total_amount: Decimal | null
  }

  export type BookingsMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    tutor_id: number | null
    subject: string | null
    session_date: Date | null
    start_time: Date | null
    end_time: Date | null
    duration_hours: Decimal | null
    total_amount: Decimal | null
    status: string | null
    meeting_link: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    tutor_id: number | null
    subject: string | null
    session_date: Date | null
    start_time: Date | null
    end_time: Date | null
    duration_hours: Decimal | null
    total_amount: Decimal | null
    status: string | null
    meeting_link: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    student_id: number
    tutor_id: number
    subject: number
    session_date: number
    start_time: number
    end_time: number
    duration_hours: number
    total_amount: number
    status: number
    meeting_link: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    id?: true
    student_id?: true
    tutor_id?: true
    duration_hours?: true
    total_amount?: true
  }

  export type BookingsSumAggregateInputType = {
    id?: true
    student_id?: true
    tutor_id?: true
    duration_hours?: true
    total_amount?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    student_id?: true
    tutor_id?: true
    subject?: true
    session_date?: true
    start_time?: true
    end_time?: true
    duration_hours?: true
    total_amount?: true
    status?: true
    meeting_link?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    student_id?: true
    tutor_id?: true
    subject?: true
    session_date?: true
    start_time?: true
    end_time?: true
    duration_hours?: true
    total_amount?: true
    status?: true
    meeting_link?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    student_id?: true
    tutor_id?: true
    subject?: true
    session_date?: true
    start_time?: true
    end_time?: true
    duration_hours?: true
    total_amount?: true
    status?: true
    meeting_link?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: number
    student_id: number
    tutor_id: number
    subject: string
    session_date: Date
    start_time: Date
    end_time: Date
    duration_hours: Decimal
    total_amount: Decimal
    status: string | null
    meeting_link: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    tutor_id?: boolean
    subject?: boolean
    session_date?: boolean
    start_time?: boolean
    end_time?: boolean
    duration_hours?: boolean
    total_amount?: boolean
    status?: boolean
    meeting_link?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    tutor_id?: boolean
    subject?: boolean
    session_date?: boolean
    start_time?: boolean
    end_time?: boolean
    duration_hours?: boolean
    total_amount?: boolean
    status?: boolean
    meeting_link?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    tutor_id?: boolean
    subject?: boolean
    session_date?: boolean
    start_time?: boolean
    end_time?: boolean
    duration_hours?: boolean
    total_amount?: boolean
    status?: boolean
    meeting_link?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    student_id?: boolean
    tutor_id?: boolean
    subject?: boolean
    session_date?: boolean
    start_time?: boolean
    end_time?: boolean
    duration_hours?: boolean
    total_amount?: boolean
    status?: boolean
    meeting_link?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "tutor_id" | "subject" | "session_date" | "start_time" | "end_time" | "duration_hours" | "total_amount" | "status" | "meeting_link" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      tutors: Prisma.$tutorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      tutor_id: number
      subject: string
      session_date: Date
      start_time: Date
      end_time: Date
      duration_hours: Prisma.Decimal
      total_amount: Prisma.Decimal
      status: string | null
      meeting_link: string | null
      notes: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
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
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
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
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutors<T extends tutorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tutorsDefaultArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'Int'>
    readonly student_id: FieldRef<"bookings", 'Int'>
    readonly tutor_id: FieldRef<"bookings", 'Int'>
    readonly subject: FieldRef<"bookings", 'String'>
    readonly session_date: FieldRef<"bookings", 'DateTime'>
    readonly start_time: FieldRef<"bookings", 'DateTime'>
    readonly end_time: FieldRef<"bookings", 'DateTime'>
    readonly duration_hours: FieldRef<"bookings", 'Decimal'>
    readonly total_amount: FieldRef<"bookings", 'Decimal'>
    readonly status: FieldRef<"bookings", 'String'>
    readonly meeting_link: FieldRef<"bookings", 'String'>
    readonly notes: FieldRef<"bookings", 'String'>
    readonly created_at: FieldRef<"bookings", 'DateTime'>
    readonly updated_at: FieldRef<"bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model group_messages
   */

  export type AggregateGroup_messages = {
    _count: Group_messagesCountAggregateOutputType | null
    _avg: Group_messagesAvgAggregateOutputType | null
    _sum: Group_messagesSumAggregateOutputType | null
    _min: Group_messagesMinAggregateOutputType | null
    _max: Group_messagesMaxAggregateOutputType | null
  }

  export type Group_messagesAvgAggregateOutputType = {
    id: number | null
    group_id: number | null
    user_id: number | null
    reply_to: number | null
  }

  export type Group_messagesSumAggregateOutputType = {
    id: number | null
    group_id: number | null
    user_id: number | null
    reply_to: number | null
  }

  export type Group_messagesMinAggregateOutputType = {
    id: number | null
    group_id: number | null
    user_id: number | null
    message: string | null
    file_url: string | null
    file_type: string | null
    reply_to: number | null
    is_edited: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Group_messagesMaxAggregateOutputType = {
    id: number | null
    group_id: number | null
    user_id: number | null
    message: string | null
    file_url: string | null
    file_type: string | null
    reply_to: number | null
    is_edited: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Group_messagesCountAggregateOutputType = {
    id: number
    group_id: number
    user_id: number
    message: number
    file_url: number
    file_type: number
    reply_to: number
    is_edited: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Group_messagesAvgAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    reply_to?: true
  }

  export type Group_messagesSumAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    reply_to?: true
  }

  export type Group_messagesMinAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    message?: true
    file_url?: true
    file_type?: true
    reply_to?: true
    is_edited?: true
    created_at?: true
    updated_at?: true
  }

  export type Group_messagesMaxAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    message?: true
    file_url?: true
    file_type?: true
    reply_to?: true
    is_edited?: true
    created_at?: true
    updated_at?: true
  }

  export type Group_messagesCountAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    message?: true
    file_url?: true
    file_type?: true
    reply_to?: true
    is_edited?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Group_messagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_messages to aggregate.
     */
    where?: group_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_messages to fetch.
     */
    orderBy?: group_messagesOrderByWithRelationInput | group_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: group_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned group_messages
    **/
    _count?: true | Group_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Group_messagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Group_messagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group_messagesMaxAggregateInputType
  }

  export type GetGroup_messagesAggregateType<T extends Group_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_messages[P]>
      : GetScalarType<T[P], AggregateGroup_messages[P]>
  }




  export type group_messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_messagesWhereInput
    orderBy?: group_messagesOrderByWithAggregationInput | group_messagesOrderByWithAggregationInput[]
    by: Group_messagesScalarFieldEnum[] | Group_messagesScalarFieldEnum
    having?: group_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group_messagesCountAggregateInputType | true
    _avg?: Group_messagesAvgAggregateInputType
    _sum?: Group_messagesSumAggregateInputType
    _min?: Group_messagesMinAggregateInputType
    _max?: Group_messagesMaxAggregateInputType
  }

  export type Group_messagesGroupByOutputType = {
    id: number
    group_id: number
    user_id: number
    message: string
    file_url: string | null
    file_type: string | null
    reply_to: number | null
    is_edited: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Group_messagesCountAggregateOutputType | null
    _avg: Group_messagesAvgAggregateOutputType | null
    _sum: Group_messagesSumAggregateOutputType | null
    _min: Group_messagesMinAggregateOutputType | null
    _max: Group_messagesMaxAggregateOutputType | null
  }

  type GetGroup_messagesGroupByPayload<T extends group_messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], Group_messagesGroupByOutputType[P]>
        }
      >
    >


  export type group_messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    message?: boolean
    file_url?: boolean
    file_type?: boolean
    reply_to?: boolean
    is_edited?: boolean
    created_at?: boolean
    updated_at?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    group_messages?: boolean | group_messages$group_messagesArgs<ExtArgs>
    other_group_messages?: boolean | group_messages$other_group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Group_messagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_messages"]>

  export type group_messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    message?: boolean
    file_url?: boolean
    file_type?: boolean
    reply_to?: boolean
    is_edited?: boolean
    created_at?: boolean
    updated_at?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    group_messages?: boolean | group_messages$group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_messages"]>

  export type group_messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    message?: boolean
    file_url?: boolean
    file_type?: boolean
    reply_to?: boolean
    is_edited?: boolean
    created_at?: boolean
    updated_at?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    group_messages?: boolean | group_messages$group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_messages"]>

  export type group_messagesSelectScalar = {
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    message?: boolean
    file_url?: boolean
    file_type?: boolean
    reply_to?: boolean
    is_edited?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type group_messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_id" | "user_id" | "message" | "file_url" | "file_type" | "reply_to" | "is_edited" | "created_at" | "updated_at", ExtArgs["result"]["group_messages"]>
  export type group_messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    group_messages?: boolean | group_messages$group_messagesArgs<ExtArgs>
    other_group_messages?: boolean | group_messages$other_group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Group_messagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type group_messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    group_messages?: boolean | group_messages$group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type group_messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    group_messages?: boolean | group_messages$group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $group_messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group_messages"
    objects: {
      groups: Prisma.$groupsPayload<ExtArgs>
      group_messages: Prisma.$group_messagesPayload<ExtArgs> | null
      other_group_messages: Prisma.$group_messagesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      group_id: number
      user_id: number
      message: string
      file_url: string | null
      file_type: string | null
      reply_to: number | null
      is_edited: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["group_messages"]>
    composites: {}
  }

  type group_messagesGetPayload<S extends boolean | null | undefined | group_messagesDefaultArgs> = $Result.GetResult<Prisma.$group_messagesPayload, S>

  type group_messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<group_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group_messagesCountAggregateInputType | true
    }

  export interface group_messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_messages'], meta: { name: 'group_messages' } }
    /**
     * Find zero or one Group_messages that matches the filter.
     * @param {group_messagesFindUniqueArgs} args - Arguments to find a Group_messages
     * @example
     * // Get one Group_messages
     * const group_messages = await prisma.group_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends group_messagesFindUniqueArgs>(args: SelectSubset<T, group_messagesFindUniqueArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group_messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {group_messagesFindUniqueOrThrowArgs} args - Arguments to find a Group_messages
     * @example
     * // Get one Group_messages
     * const group_messages = await prisma.group_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends group_messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, group_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_messagesFindFirstArgs} args - Arguments to find a Group_messages
     * @example
     * // Get one Group_messages
     * const group_messages = await prisma.group_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends group_messagesFindFirstArgs>(args?: SelectSubset<T, group_messagesFindFirstArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_messagesFindFirstOrThrowArgs} args - Arguments to find a Group_messages
     * @example
     * // Get one Group_messages
     * const group_messages = await prisma.group_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends group_messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, group_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_messages
     * const group_messages = await prisma.group_messages.findMany()
     * 
     * // Get first 10 Group_messages
     * const group_messages = await prisma.group_messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group_messagesWithIdOnly = await prisma.group_messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends group_messagesFindManyArgs>(args?: SelectSubset<T, group_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group_messages.
     * @param {group_messagesCreateArgs} args - Arguments to create a Group_messages.
     * @example
     * // Create one Group_messages
     * const Group_messages = await prisma.group_messages.create({
     *   data: {
     *     // ... data to create a Group_messages
     *   }
     * })
     * 
     */
    create<T extends group_messagesCreateArgs>(args: SelectSubset<T, group_messagesCreateArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group_messages.
     * @param {group_messagesCreateManyArgs} args - Arguments to create many Group_messages.
     * @example
     * // Create many Group_messages
     * const group_messages = await prisma.group_messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends group_messagesCreateManyArgs>(args?: SelectSubset<T, group_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Group_messages and returns the data saved in the database.
     * @param {group_messagesCreateManyAndReturnArgs} args - Arguments to create many Group_messages.
     * @example
     * // Create many Group_messages
     * const group_messages = await prisma.group_messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Group_messages and only return the `id`
     * const group_messagesWithIdOnly = await prisma.group_messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends group_messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, group_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group_messages.
     * @param {group_messagesDeleteArgs} args - Arguments to delete one Group_messages.
     * @example
     * // Delete one Group_messages
     * const Group_messages = await prisma.group_messages.delete({
     *   where: {
     *     // ... filter to delete one Group_messages
     *   }
     * })
     * 
     */
    delete<T extends group_messagesDeleteArgs>(args: SelectSubset<T, group_messagesDeleteArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group_messages.
     * @param {group_messagesUpdateArgs} args - Arguments to update one Group_messages.
     * @example
     * // Update one Group_messages
     * const group_messages = await prisma.group_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends group_messagesUpdateArgs>(args: SelectSubset<T, group_messagesUpdateArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group_messages.
     * @param {group_messagesDeleteManyArgs} args - Arguments to filter Group_messages to delete.
     * @example
     * // Delete a few Group_messages
     * const { count } = await prisma.group_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends group_messagesDeleteManyArgs>(args?: SelectSubset<T, group_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_messages
     * const group_messages = await prisma.group_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends group_messagesUpdateManyArgs>(args: SelectSubset<T, group_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_messages and returns the data updated in the database.
     * @param {group_messagesUpdateManyAndReturnArgs} args - Arguments to update many Group_messages.
     * @example
     * // Update many Group_messages
     * const group_messages = await prisma.group_messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Group_messages and only return the `id`
     * const group_messagesWithIdOnly = await prisma.group_messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends group_messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, group_messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group_messages.
     * @param {group_messagesUpsertArgs} args - Arguments to update or create a Group_messages.
     * @example
     * // Update or create a Group_messages
     * const group_messages = await prisma.group_messages.upsert({
     *   create: {
     *     // ... data to create a Group_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_messages we want to update
     *   }
     * })
     */
    upsert<T extends group_messagesUpsertArgs>(args: SelectSubset<T, group_messagesUpsertArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_messagesCountArgs} args - Arguments to filter Group_messages to count.
     * @example
     * // Count the number of Group_messages
     * const count = await prisma.group_messages.count({
     *   where: {
     *     // ... the filter for the Group_messages we want to count
     *   }
     * })
    **/
    count<T extends group_messagesCountArgs>(
      args?: Subset<T, group_messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Group_messagesAggregateArgs>(args: Subset<T, Group_messagesAggregateArgs>): Prisma.PrismaPromise<GetGroup_messagesAggregateType<T>>

    /**
     * Group by Group_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_messagesGroupByArgs} args - Group by arguments.
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
      T extends group_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_messagesGroupByArgs['orderBy'] }
        : { orderBy?: group_messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, group_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group_messages model
   */
  readonly fields: group_messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group_messages<T extends group_messages$group_messagesArgs<ExtArgs> = {}>(args?: Subset<T, group_messages$group_messagesArgs<ExtArgs>>): Prisma__group_messagesClient<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_group_messages<T extends group_messages$other_group_messagesArgs<ExtArgs> = {}>(args?: Subset<T, group_messages$other_group_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the group_messages model
   */
  interface group_messagesFieldRefs {
    readonly id: FieldRef<"group_messages", 'Int'>
    readonly group_id: FieldRef<"group_messages", 'Int'>
    readonly user_id: FieldRef<"group_messages", 'Int'>
    readonly message: FieldRef<"group_messages", 'String'>
    readonly file_url: FieldRef<"group_messages", 'String'>
    readonly file_type: FieldRef<"group_messages", 'String'>
    readonly reply_to: FieldRef<"group_messages", 'Int'>
    readonly is_edited: FieldRef<"group_messages", 'Boolean'>
    readonly created_at: FieldRef<"group_messages", 'DateTime'>
    readonly updated_at: FieldRef<"group_messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * group_messages findUnique
   */
  export type group_messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * Filter, which group_messages to fetch.
     */
    where: group_messagesWhereUniqueInput
  }

  /**
   * group_messages findUniqueOrThrow
   */
  export type group_messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * Filter, which group_messages to fetch.
     */
    where: group_messagesWhereUniqueInput
  }

  /**
   * group_messages findFirst
   */
  export type group_messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * Filter, which group_messages to fetch.
     */
    where?: group_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_messages to fetch.
     */
    orderBy?: group_messagesOrderByWithRelationInput | group_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_messages.
     */
    cursor?: group_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_messages.
     */
    distinct?: Group_messagesScalarFieldEnum | Group_messagesScalarFieldEnum[]
  }

  /**
   * group_messages findFirstOrThrow
   */
  export type group_messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * Filter, which group_messages to fetch.
     */
    where?: group_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_messages to fetch.
     */
    orderBy?: group_messagesOrderByWithRelationInput | group_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_messages.
     */
    cursor?: group_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_messages.
     */
    distinct?: Group_messagesScalarFieldEnum | Group_messagesScalarFieldEnum[]
  }

  /**
   * group_messages findMany
   */
  export type group_messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * Filter, which group_messages to fetch.
     */
    where?: group_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_messages to fetch.
     */
    orderBy?: group_messagesOrderByWithRelationInput | group_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing group_messages.
     */
    cursor?: group_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_messages.
     */
    distinct?: Group_messagesScalarFieldEnum | Group_messagesScalarFieldEnum[]
  }

  /**
   * group_messages create
   */
  export type group_messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a group_messages.
     */
    data: XOR<group_messagesCreateInput, group_messagesUncheckedCreateInput>
  }

  /**
   * group_messages createMany
   */
  export type group_messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_messages.
     */
    data: group_messagesCreateManyInput | group_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group_messages createManyAndReturn
   */
  export type group_messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * The data used to create many group_messages.
     */
    data: group_messagesCreateManyInput | group_messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_messages update
   */
  export type group_messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a group_messages.
     */
    data: XOR<group_messagesUpdateInput, group_messagesUncheckedUpdateInput>
    /**
     * Choose, which group_messages to update.
     */
    where: group_messagesWhereUniqueInput
  }

  /**
   * group_messages updateMany
   */
  export type group_messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_messages.
     */
    data: XOR<group_messagesUpdateManyMutationInput, group_messagesUncheckedUpdateManyInput>
    /**
     * Filter which group_messages to update
     */
    where?: group_messagesWhereInput
    /**
     * Limit how many group_messages to update.
     */
    limit?: number
  }

  /**
   * group_messages updateManyAndReturn
   */
  export type group_messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * The data used to update group_messages.
     */
    data: XOR<group_messagesUpdateManyMutationInput, group_messagesUncheckedUpdateManyInput>
    /**
     * Filter which group_messages to update
     */
    where?: group_messagesWhereInput
    /**
     * Limit how many group_messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_messages upsert
   */
  export type group_messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the group_messages to update in case it exists.
     */
    where: group_messagesWhereUniqueInput
    /**
     * In case the group_messages found by the `where` argument doesn't exist, create a new group_messages with this data.
     */
    create: XOR<group_messagesCreateInput, group_messagesUncheckedCreateInput>
    /**
     * In case the group_messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_messagesUpdateInput, group_messagesUncheckedUpdateInput>
  }

  /**
   * group_messages delete
   */
  export type group_messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    /**
     * Filter which group_messages to delete.
     */
    where: group_messagesWhereUniqueInput
  }

  /**
   * group_messages deleteMany
   */
  export type group_messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_messages to delete
     */
    where?: group_messagesWhereInput
    /**
     * Limit how many group_messages to delete.
     */
    limit?: number
  }

  /**
   * group_messages.group_messages
   */
  export type group_messages$group_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    where?: group_messagesWhereInput
  }

  /**
   * group_messages.other_group_messages
   */
  export type group_messages$other_group_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    where?: group_messagesWhereInput
    orderBy?: group_messagesOrderByWithRelationInput | group_messagesOrderByWithRelationInput[]
    cursor?: group_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_messagesScalarFieldEnum | Group_messagesScalarFieldEnum[]
  }

  /**
   * group_messages without action
   */
  export type group_messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
  }


  /**
   * Model groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsAvgAggregateOutputType = {
    id: number | null
    max_members: number | null
    current_members: number | null
    created_by: number | null
  }

  export type GroupsSumAggregateOutputType = {
    id: number | null
    max_members: number | null
    current_members: number | null
    created_by: number | null
  }

  export type GroupsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    subject: string | null
    max_members: number | null
    current_members: number | null
    created_by: number | null
    requires_approval: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    subject: string | null
    max_members: number | null
    current_members: number | null
    created_by: number | null
    requires_approval: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    subject: number
    max_members: number
    current_members: number
    created_by: number
    requires_approval: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GroupsAvgAggregateInputType = {
    id?: true
    max_members?: true
    current_members?: true
    created_by?: true
  }

  export type GroupsSumAggregateInputType = {
    id?: true
    max_members?: true
    current_members?: true
    created_by?: true
  }

  export type GroupsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subject?: true
    max_members?: true
    current_members?: true
    created_by?: true
    requires_approval?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subject?: true
    max_members?: true
    current_members?: true
    created_by?: true
    requires_approval?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subject?: true
    max_members?: true
    current_members?: true
    created_by?: true
    requires_approval?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to aggregate.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithAggregationInput | groupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _avg?: GroupsAvgAggregateInputType
    _sum?: GroupsSumAggregateInputType
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: number
    name: string
    description: string
    subject: string
    max_members: number | null
    current_members: number | null
    created_by: number
    requires_approval: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subject?: boolean
    max_members?: boolean
    current_members?: boolean
    created_by?: boolean
    requires_approval?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    group_messages?: boolean | groups$group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    notes?: boolean | groups$notesArgs<ExtArgs>
    user_groups?: boolean | groups$user_groupsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subject?: boolean
    max_members?: boolean
    current_members?: boolean
    created_by?: boolean
    requires_approval?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subject?: boolean
    max_members?: boolean
    current_members?: boolean
    created_by?: boolean
    requires_approval?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    subject?: boolean
    max_members?: boolean
    current_members?: boolean
    created_by?: boolean
    requires_approval?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "subject" | "max_members" | "current_members" | "created_by" | "requires_approval" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["groups"]>
  export type groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_messages?: boolean | groups$group_messagesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    notes?: boolean | groups$notesArgs<ExtArgs>
    user_groups?: boolean | groups$user_groupsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type groupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groups"
    objects: {
      group_messages: Prisma.$group_messagesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      notes: Prisma.$notesPayload<ExtArgs>[]
      user_groups: Prisma.$user_groupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      subject: string
      max_members: number | null
      current_members: number | null
      created_by: number
      requires_approval: boolean | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type groupsGetPayload<S extends boolean | null | undefined | groupsDefaultArgs> = $Result.GetResult<Prisma.$groupsPayload, S>

  type groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groups'], meta: { name: 'groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {groupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupsFindUniqueArgs>(args: SelectSubset<T, groupsFindUniqueArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupsFindFirstArgs>(args?: SelectSubset<T, groupsFindFirstArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupsFindManyArgs>(args?: SelectSubset<T, groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {groupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends groupsCreateArgs>(args: SelectSubset<T, groupsCreateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupsCreateManyArgs>(args?: SelectSubset<T, groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {groupsCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groups.
     * @param {groupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends groupsDeleteArgs>(args: SelectSubset<T, groupsDeleteArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {groupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupsUpdateArgs>(args: SelectSubset<T, groupsUpdateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupsDeleteManyArgs>(args?: SelectSubset<T, groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupsUpdateManyArgs>(args: SelectSubset<T, groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {groupsUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.updateManyAndReturn({
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
    updateManyAndReturn<T extends groupsUpdateManyAndReturnArgs>(args: SelectSubset<T, groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groups.
     * @param {groupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends groupsUpsertArgs>(args: SelectSubset<T, groupsUpsertArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupsCountArgs>(
      args?: Subset<T, groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsGroupByArgs} args - Group by arguments.
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
      T extends groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupsGroupByArgs['orderBy'] }
        : { orderBy?: groupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groups model
   */
  readonly fields: groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group_messages<T extends groups$group_messagesArgs<ExtArgs> = {}>(args?: Subset<T, groups$group_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends groups$notesArgs<ExtArgs> = {}>(args?: Subset<T, groups$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_groups<T extends groups$user_groupsArgs<ExtArgs> = {}>(args?: Subset<T, groups$user_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the groups model
   */
  interface groupsFieldRefs {
    readonly id: FieldRef<"groups", 'Int'>
    readonly name: FieldRef<"groups", 'String'>
    readonly description: FieldRef<"groups", 'String'>
    readonly subject: FieldRef<"groups", 'String'>
    readonly max_members: FieldRef<"groups", 'Int'>
    readonly current_members: FieldRef<"groups", 'Int'>
    readonly created_by: FieldRef<"groups", 'Int'>
    readonly requires_approval: FieldRef<"groups", 'Boolean'>
    readonly is_active: FieldRef<"groups", 'Boolean'>
    readonly created_at: FieldRef<"groups", 'DateTime'>
    readonly updated_at: FieldRef<"groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * groups findUnique
   */
  export type groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findUniqueOrThrow
   */
  export type groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findFirst
   */
  export type groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findFirstOrThrow
   */
  export type groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findMany
   */
  export type groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups create
   */
  export type groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a groups.
     */
    data: XOR<groupsCreateInput, groupsUncheckedCreateInput>
  }

  /**
   * groups createMany
   */
  export type groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groups createManyAndReturn
   */
  export type groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups update
   */
  export type groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a groups.
     */
    data: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
    /**
     * Choose, which groups to update.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups updateMany
   */
  export type groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * groups updateManyAndReturn
   */
  export type groupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups upsert
   */
  export type groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the groups to update in case it exists.
     */
    where: groupsWhereUniqueInput
    /**
     * In case the groups found by the `where` argument doesn't exist, create a new groups with this data.
     */
    create: XOR<groupsCreateInput, groupsUncheckedCreateInput>
    /**
     * In case the groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
  }

  /**
   * groups delete
   */
  export type groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter which groups to delete.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups deleteMany
   */
  export type groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * groups.group_messages
   */
  export type groups$group_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    where?: group_messagesWhereInput
    orderBy?: group_messagesOrderByWithRelationInput | group_messagesOrderByWithRelationInput[]
    cursor?: group_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_messagesScalarFieldEnum | Group_messagesScalarFieldEnum[]
  }

  /**
   * groups.notes
   */
  export type groups$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    where?: notesWhereInput
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    cursor?: notesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * groups.user_groups
   */
  export type groups$user_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    where?: user_groupsWhereInput
    orderBy?: user_groupsOrderByWithRelationInput | user_groupsOrderByWithRelationInput[]
    cursor?: user_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_groupsScalarFieldEnum | User_groupsScalarFieldEnum[]
  }

  /**
   * groups without action
   */
  export type groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
  }


  /**
   * Model notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesAvgAggregateOutputType = {
    id: number | null
    downloads: number | null
    uploaded_by: number | null
    group_id: number | null
    price: Decimal | null
  }

  export type NotesSumAggregateOutputType = {
    id: number | null
    downloads: number | null
    uploaded_by: number | null
    group_id: number | null
    price: Decimal | null
  }

  export type NotesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    subject: string | null
    file_path: string | null
    file_type: string | null
    downloads: number | null
    uploaded_by: number | null
    group_id: number | null
    is_premium: boolean | null
    price: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    subject: string | null
    file_path: string | null
    file_type: string | null
    downloads: number | null
    uploaded_by: number | null
    group_id: number | null
    is_premium: boolean | null
    price: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    subject: number
    file_path: number
    file_type: number
    downloads: number
    uploaded_by: number
    group_id: number
    is_premium: number
    price: number
    is_active: number
    tags: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NotesAvgAggregateInputType = {
    id?: true
    downloads?: true
    uploaded_by?: true
    group_id?: true
    price?: true
  }

  export type NotesSumAggregateInputType = {
    id?: true
    downloads?: true
    uploaded_by?: true
    group_id?: true
    price?: true
  }

  export type NotesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subject?: true
    file_path?: true
    file_type?: true
    downloads?: true
    uploaded_by?: true
    group_id?: true
    is_premium?: true
    price?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subject?: true
    file_path?: true
    file_type?: true
    downloads?: true
    uploaded_by?: true
    group_id?: true
    is_premium?: true
    price?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subject?: true
    file_path?: true
    file_type?: true
    downloads?: true
    uploaded_by?: true
    group_id?: true
    is_premium?: true
    price?: true
    is_active?: true
    tags?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to aggregate.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
    orderBy?: notesOrderByWithAggregationInput | notesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _avg?: NotesAvgAggregateInputType
    _sum?: NotesSumAggregateInputType
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: number
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads: number | null
    uploaded_by: number
    group_id: number | null
    is_premium: boolean | null
    price: Decimal | null
    is_active: boolean | null
    tags: string[]
    created_at: Date | null
    updated_at: Date | null
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    file_path?: boolean
    file_type?: boolean
    downloads?: boolean
    uploaded_by?: boolean
    group_id?: boolean
    is_premium?: boolean
    price?: boolean
    is_active?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    groups?: boolean | notes$groupsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    file_path?: boolean
    file_type?: boolean
    downloads?: boolean
    uploaded_by?: boolean
    group_id?: boolean
    is_premium?: boolean
    price?: boolean
    is_active?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    groups?: boolean | notes$groupsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    file_path?: boolean
    file_type?: boolean
    downloads?: boolean
    uploaded_by?: boolean
    group_id?: boolean
    is_premium?: boolean
    price?: boolean
    is_active?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    groups?: boolean | notes$groupsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    file_path?: boolean
    file_type?: boolean
    downloads?: boolean
    uploaded_by?: boolean
    group_id?: boolean
    is_premium?: boolean
    price?: boolean
    is_active?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "subject" | "file_path" | "file_type" | "downloads" | "uploaded_by" | "group_id" | "is_premium" | "price" | "is_active" | "tags" | "created_at" | "updated_at", ExtArgs["result"]["notes"]>
  export type notesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | notes$groupsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | notes$groupsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | notes$groupsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notes"
    objects: {
      groups: Prisma.$groupsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      subject: string
      file_path: string
      file_type: string
      downloads: number | null
      uploaded_by: number
      group_id: number | null
      is_premium: boolean | null
      price: Prisma.Decimal | null
      is_active: boolean | null
      tags: string[]
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type notesGetPayload<S extends boolean | null | undefined | notesDefaultArgs> = $Result.GetResult<Prisma.$notesPayload, S>

  type notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notes'], meta: { name: 'notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {notesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notesFindUniqueArgs>(args: SelectSubset<T, notesFindUniqueArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notesFindUniqueOrThrowArgs>(args: SelectSubset<T, notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notesFindFirstArgs>(args?: SelectSubset<T, notesFindFirstArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notesFindFirstOrThrowArgs>(args?: SelectSubset<T, notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notesFindManyArgs>(args?: SelectSubset<T, notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {notesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends notesCreateArgs>(args: SelectSubset<T, notesCreateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {notesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notesCreateManyArgs>(args?: SelectSubset<T, notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {notesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notesCreateManyAndReturnArgs>(args?: SelectSubset<T, notesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {notesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends notesDeleteArgs>(args: SelectSubset<T, notesDeleteArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {notesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notesUpdateArgs>(args: SelectSubset<T, notesUpdateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {notesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notesDeleteManyArgs>(args?: SelectSubset<T, notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notesUpdateManyArgs>(args: SelectSubset<T, notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {notesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
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
    updateManyAndReturn<T extends notesUpdateManyAndReturnArgs>(args: SelectSubset<T, notesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {notesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends notesUpsertArgs>(args: SelectSubset<T, notesUpsertArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends notesCountArgs>(
      args?: Subset<T, notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesGroupByArgs} args - Group by arguments.
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
      T extends notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notesGroupByArgs['orderBy'] }
        : { orderBy?: notesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notes model
   */
  readonly fields: notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends notes$groupsArgs<ExtArgs> = {}>(args?: Subset<T, notes$groupsArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notes model
   */
  interface notesFieldRefs {
    readonly id: FieldRef<"notes", 'Int'>
    readonly title: FieldRef<"notes", 'String'>
    readonly description: FieldRef<"notes", 'String'>
    readonly subject: FieldRef<"notes", 'String'>
    readonly file_path: FieldRef<"notes", 'String'>
    readonly file_type: FieldRef<"notes", 'String'>
    readonly downloads: FieldRef<"notes", 'Int'>
    readonly uploaded_by: FieldRef<"notes", 'Int'>
    readonly group_id: FieldRef<"notes", 'Int'>
    readonly is_premium: FieldRef<"notes", 'Boolean'>
    readonly price: FieldRef<"notes", 'Decimal'>
    readonly is_active: FieldRef<"notes", 'Boolean'>
    readonly tags: FieldRef<"notes", 'String[]'>
    readonly created_at: FieldRef<"notes", 'DateTime'>
    readonly updated_at: FieldRef<"notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notes findUnique
   */
  export type notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findUniqueOrThrow
   */
  export type notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findFirst
   */
  export type notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findFirstOrThrow
   */
  export type notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findMany
   */
  export type notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes create
   */
  export type notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to create a notes.
     */
    data: XOR<notesCreateInput, notesUncheckedCreateInput>
  }

  /**
   * notes createMany
   */
  export type notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes createManyAndReturn
   */
  export type notesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes update
   */
  export type notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to update a notes.
     */
    data: XOR<notesUpdateInput, notesUncheckedUpdateInput>
    /**
     * Choose, which notes to update.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes updateMany
   */
  export type notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes updateManyAndReturn
   */
  export type notesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes upsert
   */
  export type notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The filter to search for the notes to update in case it exists.
     */
    where: notesWhereUniqueInput
    /**
     * In case the notes found by the `where` argument doesn't exist, create a new notes with this data.
     */
    create: XOR<notesCreateInput, notesUncheckedCreateInput>
    /**
     * In case the notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notesUpdateInput, notesUncheckedUpdateInput>
  }

  /**
   * notes delete
   */
  export type notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter which notes to delete.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes deleteMany
   */
  export type notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * notes.groups
   */
  export type notes$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
  }

  /**
   * notes without action
   */
  export type notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
    votes: number | null
    answers_count: number | null
    views: number | null
    author_id: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
    votes: number | null
    answers_count: number | null
    views: number | null
    author_id: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    subject: string | null
    votes: number | null
    answers_count: number | null
    views: number | null
    is_solved: boolean | null
    author_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    subject: string | null
    votes: number | null
    answers_count: number | null
    views: number | null
    is_solved: boolean | null
    author_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    subject: number
    tags: number
    votes: number
    answers_count: number
    views: number
    is_solved: number
    author_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
    votes?: true
    answers_count?: true
    views?: true
    author_id?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
    votes?: true
    answers_count?: true
    views?: true
    author_id?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    subject?: true
    votes?: true
    answers_count?: true
    views?: true
    is_solved?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    subject?: true
    votes?: true
    answers_count?: true
    views?: true
    is_solved?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    subject?: true
    tags?: true
    votes?: true
    answers_count?: true
    views?: true
    is_solved?: true
    author_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: number
    title: string
    content: string
    subject: string
    tags: string[]
    votes: number | null
    answers_count: number | null
    views: number | null
    is_solved: boolean | null
    author_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    subject?: boolean
    tags?: boolean
    votes?: boolean
    answers_count?: boolean
    views?: boolean
    is_solved?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    answers?: boolean | questions$answersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    subject?: boolean
    tags?: boolean
    votes?: boolean
    answers_count?: boolean
    views?: boolean
    is_solved?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    subject?: boolean
    tags?: boolean
    votes?: boolean
    answers_count?: boolean
    views?: boolean
    is_solved?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    subject?: boolean
    tags?: boolean
    votes?: boolean
    answers_count?: boolean
    views?: boolean
    is_solved?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "subject" | "tags" | "votes" | "answers_count" | "views" | "is_solved" | "author_id" | "created_at" | "updated_at", ExtArgs["result"]["questions"]>
  export type questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | questions$answersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type questionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type questionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      subject: string
      tags: string[]
      votes: number | null
      answers_count: number | null
      views: number | null
      is_solved: boolean | null
      author_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {questionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends questionsCreateManyAndReturnArgs>(args?: SelectSubset<T, questionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {questionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
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
    updateManyAndReturn<T extends questionsUpdateManyAndReturnArgs>(args: SelectSubset<T, questionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
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
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends questions$answersArgs<ExtArgs> = {}>(args?: Subset<T, questions$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the questions model
   */
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'Int'>
    readonly title: FieldRef<"questions", 'String'>
    readonly content: FieldRef<"questions", 'String'>
    readonly subject: FieldRef<"questions", 'String'>
    readonly tags: FieldRef<"questions", 'String[]'>
    readonly votes: FieldRef<"questions", 'Int'>
    readonly answers_count: FieldRef<"questions", 'Int'>
    readonly views: FieldRef<"questions", 'Int'>
    readonly is_solved: FieldRef<"questions", 'Boolean'>
    readonly author_id: FieldRef<"questions", 'Int'>
    readonly created_at: FieldRef<"questions", 'DateTime'>
    readonly updated_at: FieldRef<"questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questions createManyAndReturn
   */
  export type questionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions updateManyAndReturn
   */
  export type questionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * questions.answers
   */
  export type questions$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    type: string | null
    status: string | null
    reference: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    type: string | null
    status: string | null
    reference: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    user_id: number
    amount: number
    type: number
    status: number
    reference: number
    description: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    description?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    user_id: number
    amount: Decimal
    type: string
    status: string | null
    reference: string | null
    description: string | null
    metadata: JsonValue | null
    created_at: Date | null
    updated_at: Date | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    description?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    description?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    description?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    description?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount" | "type" | "status" | "reference" | "description" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      amount: Prisma.Decimal
      type: string
      status: string | null
      reference: string | null
      description: string | null
      metadata: Prisma.JsonValue | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'Int'>
    readonly user_id: FieldRef<"transactions", 'Int'>
    readonly amount: FieldRef<"transactions", 'Decimal'>
    readonly type: FieldRef<"transactions", 'String'>
    readonly status: FieldRef<"transactions", 'String'>
    readonly reference: FieldRef<"transactions", 'String'>
    readonly description: FieldRef<"transactions", 'String'>
    readonly metadata: FieldRef<"transactions", 'Json'>
    readonly created_at: FieldRef<"transactions", 'DateTime'>
    readonly updated_at: FieldRef<"transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions updateManyAndReturn
   */
  export type transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Model tutor_availability
   */

  export type AggregateTutor_availability = {
    _count: Tutor_availabilityCountAggregateOutputType | null
    _avg: Tutor_availabilityAvgAggregateOutputType | null
    _sum: Tutor_availabilitySumAggregateOutputType | null
    _min: Tutor_availabilityMinAggregateOutputType | null
    _max: Tutor_availabilityMaxAggregateOutputType | null
  }

  export type Tutor_availabilityAvgAggregateOutputType = {
    id: number | null
    tutor_id: number | null
  }

  export type Tutor_availabilitySumAggregateOutputType = {
    id: number | null
    tutor_id: number | null
  }

  export type Tutor_availabilityMinAggregateOutputType = {
    id: number | null
    tutor_id: number | null
    day_of_week: string | null
    start_time: Date | null
    end_time: Date | null
    is_available: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tutor_availabilityMaxAggregateOutputType = {
    id: number | null
    tutor_id: number | null
    day_of_week: string | null
    start_time: Date | null
    end_time: Date | null
    is_available: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tutor_availabilityCountAggregateOutputType = {
    id: number
    tutor_id: number
    day_of_week: number
    start_time: number
    end_time: number
    is_available: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Tutor_availabilityAvgAggregateInputType = {
    id?: true
    tutor_id?: true
  }

  export type Tutor_availabilitySumAggregateInputType = {
    id?: true
    tutor_id?: true
  }

  export type Tutor_availabilityMinAggregateInputType = {
    id?: true
    tutor_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    is_available?: true
    created_at?: true
    updated_at?: true
  }

  export type Tutor_availabilityMaxAggregateInputType = {
    id?: true
    tutor_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    is_available?: true
    created_at?: true
    updated_at?: true
  }

  export type Tutor_availabilityCountAggregateInputType = {
    id?: true
    tutor_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    is_available?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Tutor_availabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_availability to aggregate.
     */
    where?: tutor_availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_availabilities to fetch.
     */
    orderBy?: tutor_availabilityOrderByWithRelationInput | tutor_availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tutor_availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tutor_availabilities
    **/
    _count?: true | Tutor_availabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tutor_availabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tutor_availabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tutor_availabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tutor_availabilityMaxAggregateInputType
  }

  export type GetTutor_availabilityAggregateType<T extends Tutor_availabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor_availability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor_availability[P]>
      : GetScalarType<T[P], AggregateTutor_availability[P]>
  }




  export type tutor_availabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutor_availabilityWhereInput
    orderBy?: tutor_availabilityOrderByWithAggregationInput | tutor_availabilityOrderByWithAggregationInput[]
    by: Tutor_availabilityScalarFieldEnum[] | Tutor_availabilityScalarFieldEnum
    having?: tutor_availabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tutor_availabilityCountAggregateInputType | true
    _avg?: Tutor_availabilityAvgAggregateInputType
    _sum?: Tutor_availabilitySumAggregateInputType
    _min?: Tutor_availabilityMinAggregateInputType
    _max?: Tutor_availabilityMaxAggregateInputType
  }

  export type Tutor_availabilityGroupByOutputType = {
    id: number
    tutor_id: number
    day_of_week: string
    start_time: Date
    end_time: Date
    is_available: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Tutor_availabilityCountAggregateOutputType | null
    _avg: Tutor_availabilityAvgAggregateOutputType | null
    _sum: Tutor_availabilitySumAggregateOutputType | null
    _min: Tutor_availabilityMinAggregateOutputType | null
    _max: Tutor_availabilityMaxAggregateOutputType | null
  }

  type GetTutor_availabilityGroupByPayload<T extends tutor_availabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tutor_availabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tutor_availabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tutor_availabilityGroupByOutputType[P]>
            : GetScalarType<T[P], Tutor_availabilityGroupByOutputType[P]>
        }
      >
    >


  export type tutor_availabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutor_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    created_at?: boolean
    updated_at?: boolean
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_availability"]>

  export type tutor_availabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutor_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    created_at?: boolean
    updated_at?: boolean
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_availability"]>

  export type tutor_availabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutor_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    created_at?: boolean
    updated_at?: boolean
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_availability"]>

  export type tutor_availabilitySelectScalar = {
    id?: boolean
    tutor_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tutor_availabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutor_id" | "day_of_week" | "start_time" | "end_time" | "is_available" | "created_at" | "updated_at", ExtArgs["result"]["tutor_availability"]>
  export type tutor_availabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }
  export type tutor_availabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }
  export type tutor_availabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | tutorsDefaultArgs<ExtArgs>
  }

  export type $tutor_availabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tutor_availability"
    objects: {
      tutors: Prisma.$tutorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tutor_id: number
      day_of_week: string
      start_time: Date
      end_time: Date
      is_available: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tutor_availability"]>
    composites: {}
  }

  type tutor_availabilityGetPayload<S extends boolean | null | undefined | tutor_availabilityDefaultArgs> = $Result.GetResult<Prisma.$tutor_availabilityPayload, S>

  type tutor_availabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tutor_availabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tutor_availabilityCountAggregateInputType | true
    }

  export interface tutor_availabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tutor_availability'], meta: { name: 'tutor_availability' } }
    /**
     * Find zero or one Tutor_availability that matches the filter.
     * @param {tutor_availabilityFindUniqueArgs} args - Arguments to find a Tutor_availability
     * @example
     * // Get one Tutor_availability
     * const tutor_availability = await prisma.tutor_availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutor_availabilityFindUniqueArgs>(args: SelectSubset<T, tutor_availabilityFindUniqueArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor_availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutor_availabilityFindUniqueOrThrowArgs} args - Arguments to find a Tutor_availability
     * @example
     * // Get one Tutor_availability
     * const tutor_availability = await prisma.tutor_availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutor_availabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, tutor_availabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor_availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_availabilityFindFirstArgs} args - Arguments to find a Tutor_availability
     * @example
     * // Get one Tutor_availability
     * const tutor_availability = await prisma.tutor_availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutor_availabilityFindFirstArgs>(args?: SelectSubset<T, tutor_availabilityFindFirstArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor_availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_availabilityFindFirstOrThrowArgs} args - Arguments to find a Tutor_availability
     * @example
     * // Get one Tutor_availability
     * const tutor_availability = await prisma.tutor_availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutor_availabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, tutor_availabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutor_availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_availabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutor_availabilities
     * const tutor_availabilities = await prisma.tutor_availability.findMany()
     * 
     * // Get first 10 Tutor_availabilities
     * const tutor_availabilities = await prisma.tutor_availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutor_availabilityWithIdOnly = await prisma.tutor_availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tutor_availabilityFindManyArgs>(args?: SelectSubset<T, tutor_availabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor_availability.
     * @param {tutor_availabilityCreateArgs} args - Arguments to create a Tutor_availability.
     * @example
     * // Create one Tutor_availability
     * const Tutor_availability = await prisma.tutor_availability.create({
     *   data: {
     *     // ... data to create a Tutor_availability
     *   }
     * })
     * 
     */
    create<T extends tutor_availabilityCreateArgs>(args: SelectSubset<T, tutor_availabilityCreateArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutor_availabilities.
     * @param {tutor_availabilityCreateManyArgs} args - Arguments to create many Tutor_availabilities.
     * @example
     * // Create many Tutor_availabilities
     * const tutor_availability = await prisma.tutor_availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tutor_availabilityCreateManyArgs>(args?: SelectSubset<T, tutor_availabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutor_availabilities and returns the data saved in the database.
     * @param {tutor_availabilityCreateManyAndReturnArgs} args - Arguments to create many Tutor_availabilities.
     * @example
     * // Create many Tutor_availabilities
     * const tutor_availability = await prisma.tutor_availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutor_availabilities and only return the `id`
     * const tutor_availabilityWithIdOnly = await prisma.tutor_availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tutor_availabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, tutor_availabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutor_availability.
     * @param {tutor_availabilityDeleteArgs} args - Arguments to delete one Tutor_availability.
     * @example
     * // Delete one Tutor_availability
     * const Tutor_availability = await prisma.tutor_availability.delete({
     *   where: {
     *     // ... filter to delete one Tutor_availability
     *   }
     * })
     * 
     */
    delete<T extends tutor_availabilityDeleteArgs>(args: SelectSubset<T, tutor_availabilityDeleteArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor_availability.
     * @param {tutor_availabilityUpdateArgs} args - Arguments to update one Tutor_availability.
     * @example
     * // Update one Tutor_availability
     * const tutor_availability = await prisma.tutor_availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tutor_availabilityUpdateArgs>(args: SelectSubset<T, tutor_availabilityUpdateArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutor_availabilities.
     * @param {tutor_availabilityDeleteManyArgs} args - Arguments to filter Tutor_availabilities to delete.
     * @example
     * // Delete a few Tutor_availabilities
     * const { count } = await prisma.tutor_availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tutor_availabilityDeleteManyArgs>(args?: SelectSubset<T, tutor_availabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutor_availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_availabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutor_availabilities
     * const tutor_availability = await prisma.tutor_availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tutor_availabilityUpdateManyArgs>(args: SelectSubset<T, tutor_availabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutor_availabilities and returns the data updated in the database.
     * @param {tutor_availabilityUpdateManyAndReturnArgs} args - Arguments to update many Tutor_availabilities.
     * @example
     * // Update many Tutor_availabilities
     * const tutor_availability = await prisma.tutor_availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutor_availabilities and only return the `id`
     * const tutor_availabilityWithIdOnly = await prisma.tutor_availability.updateManyAndReturn({
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
    updateManyAndReturn<T extends tutor_availabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, tutor_availabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutor_availability.
     * @param {tutor_availabilityUpsertArgs} args - Arguments to update or create a Tutor_availability.
     * @example
     * // Update or create a Tutor_availability
     * const tutor_availability = await prisma.tutor_availability.upsert({
     *   create: {
     *     // ... data to create a Tutor_availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor_availability we want to update
     *   }
     * })
     */
    upsert<T extends tutor_availabilityUpsertArgs>(args: SelectSubset<T, tutor_availabilityUpsertArgs<ExtArgs>>): Prisma__tutor_availabilityClient<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutor_availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_availabilityCountArgs} args - Arguments to filter Tutor_availabilities to count.
     * @example
     * // Count the number of Tutor_availabilities
     * const count = await prisma.tutor_availability.count({
     *   where: {
     *     // ... the filter for the Tutor_availabilities we want to count
     *   }
     * })
    **/
    count<T extends tutor_availabilityCountArgs>(
      args?: Subset<T, tutor_availabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tutor_availabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor_availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tutor_availabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tutor_availabilityAggregateArgs>(args: Subset<T, Tutor_availabilityAggregateArgs>): Prisma.PrismaPromise<GetTutor_availabilityAggregateType<T>>

    /**
     * Group by Tutor_availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_availabilityGroupByArgs} args - Group by arguments.
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
      T extends tutor_availabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tutor_availabilityGroupByArgs['orderBy'] }
        : { orderBy?: tutor_availabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tutor_availabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutor_availabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tutor_availability model
   */
  readonly fields: tutor_availabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tutor_availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tutor_availabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutors<T extends tutorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tutorsDefaultArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tutor_availability model
   */
  interface tutor_availabilityFieldRefs {
    readonly id: FieldRef<"tutor_availability", 'Int'>
    readonly tutor_id: FieldRef<"tutor_availability", 'Int'>
    readonly day_of_week: FieldRef<"tutor_availability", 'String'>
    readonly start_time: FieldRef<"tutor_availability", 'DateTime'>
    readonly end_time: FieldRef<"tutor_availability", 'DateTime'>
    readonly is_available: FieldRef<"tutor_availability", 'Boolean'>
    readonly created_at: FieldRef<"tutor_availability", 'DateTime'>
    readonly updated_at: FieldRef<"tutor_availability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tutor_availability findUnique
   */
  export type tutor_availabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * Filter, which tutor_availability to fetch.
     */
    where: tutor_availabilityWhereUniqueInput
  }

  /**
   * tutor_availability findUniqueOrThrow
   */
  export type tutor_availabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * Filter, which tutor_availability to fetch.
     */
    where: tutor_availabilityWhereUniqueInput
  }

  /**
   * tutor_availability findFirst
   */
  export type tutor_availabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * Filter, which tutor_availability to fetch.
     */
    where?: tutor_availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_availabilities to fetch.
     */
    orderBy?: tutor_availabilityOrderByWithRelationInput | tutor_availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutor_availabilities.
     */
    cursor?: tutor_availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_availabilities.
     */
    distinct?: Tutor_availabilityScalarFieldEnum | Tutor_availabilityScalarFieldEnum[]
  }

  /**
   * tutor_availability findFirstOrThrow
   */
  export type tutor_availabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * Filter, which tutor_availability to fetch.
     */
    where?: tutor_availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_availabilities to fetch.
     */
    orderBy?: tutor_availabilityOrderByWithRelationInput | tutor_availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutor_availabilities.
     */
    cursor?: tutor_availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_availabilities.
     */
    distinct?: Tutor_availabilityScalarFieldEnum | Tutor_availabilityScalarFieldEnum[]
  }

  /**
   * tutor_availability findMany
   */
  export type tutor_availabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * Filter, which tutor_availabilities to fetch.
     */
    where?: tutor_availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_availabilities to fetch.
     */
    orderBy?: tutor_availabilityOrderByWithRelationInput | tutor_availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tutor_availabilities.
     */
    cursor?: tutor_availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_availabilities.
     */
    distinct?: Tutor_availabilityScalarFieldEnum | Tutor_availabilityScalarFieldEnum[]
  }

  /**
   * tutor_availability create
   */
  export type tutor_availabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a tutor_availability.
     */
    data: XOR<tutor_availabilityCreateInput, tutor_availabilityUncheckedCreateInput>
  }

  /**
   * tutor_availability createMany
   */
  export type tutor_availabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutor_availabilities.
     */
    data: tutor_availabilityCreateManyInput | tutor_availabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tutor_availability createManyAndReturn
   */
  export type tutor_availabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * The data used to create many tutor_availabilities.
     */
    data: tutor_availabilityCreateManyInput | tutor_availabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutor_availability update
   */
  export type tutor_availabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a tutor_availability.
     */
    data: XOR<tutor_availabilityUpdateInput, tutor_availabilityUncheckedUpdateInput>
    /**
     * Choose, which tutor_availability to update.
     */
    where: tutor_availabilityWhereUniqueInput
  }

  /**
   * tutor_availability updateMany
   */
  export type tutor_availabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tutor_availabilities.
     */
    data: XOR<tutor_availabilityUpdateManyMutationInput, tutor_availabilityUncheckedUpdateManyInput>
    /**
     * Filter which tutor_availabilities to update
     */
    where?: tutor_availabilityWhereInput
    /**
     * Limit how many tutor_availabilities to update.
     */
    limit?: number
  }

  /**
   * tutor_availability updateManyAndReturn
   */
  export type tutor_availabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * The data used to update tutor_availabilities.
     */
    data: XOR<tutor_availabilityUpdateManyMutationInput, tutor_availabilityUncheckedUpdateManyInput>
    /**
     * Filter which tutor_availabilities to update
     */
    where?: tutor_availabilityWhereInput
    /**
     * Limit how many tutor_availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutor_availability upsert
   */
  export type tutor_availabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the tutor_availability to update in case it exists.
     */
    where: tutor_availabilityWhereUniqueInput
    /**
     * In case the tutor_availability found by the `where` argument doesn't exist, create a new tutor_availability with this data.
     */
    create: XOR<tutor_availabilityCreateInput, tutor_availabilityUncheckedCreateInput>
    /**
     * In case the tutor_availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tutor_availabilityUpdateInput, tutor_availabilityUncheckedUpdateInput>
  }

  /**
   * tutor_availability delete
   */
  export type tutor_availabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    /**
     * Filter which tutor_availability to delete.
     */
    where: tutor_availabilityWhereUniqueInput
  }

  /**
   * tutor_availability deleteMany
   */
  export type tutor_availabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_availabilities to delete
     */
    where?: tutor_availabilityWhereInput
    /**
     * Limit how many tutor_availabilities to delete.
     */
    limit?: number
  }

  /**
   * tutor_availability without action
   */
  export type tutor_availabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
  }


  /**
   * Model tutors
   */

  export type AggregateTutors = {
    _count: TutorsCountAggregateOutputType | null
    _avg: TutorsAvgAggregateOutputType | null
    _sum: TutorsSumAggregateOutputType | null
    _min: TutorsMinAggregateOutputType | null
    _max: TutorsMaxAggregateOutputType | null
  }

  export type TutorsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    hourly_rate: Decimal | null
    experience_years: number | null
    rating: Decimal | null
    total_sessions: number | null
  }

  export type TutorsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    hourly_rate: Decimal | null
    experience_years: number | null
    rating: Decimal | null
    total_sessions: number | null
  }

  export type TutorsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    bio: string | null
    hourly_rate: Decimal | null
    experience_years: number | null
    rating: Decimal | null
    total_sessions: number | null
    is_approved: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TutorsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    bio: string | null
    hourly_rate: Decimal | null
    experience_years: number | null
    rating: Decimal | null
    total_sessions: number | null
    is_approved: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TutorsCountAggregateOutputType = {
    id: number
    user_id: number
    bio: number
    subjects: number
    hourly_rate: number
    experience_years: number
    rating: number
    total_sessions: number
    is_approved: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TutorsAvgAggregateInputType = {
    id?: true
    user_id?: true
    hourly_rate?: true
    experience_years?: true
    rating?: true
    total_sessions?: true
  }

  export type TutorsSumAggregateInputType = {
    id?: true
    user_id?: true
    hourly_rate?: true
    experience_years?: true
    rating?: true
    total_sessions?: true
  }

  export type TutorsMinAggregateInputType = {
    id?: true
    user_id?: true
    bio?: true
    hourly_rate?: true
    experience_years?: true
    rating?: true
    total_sessions?: true
    is_approved?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type TutorsMaxAggregateInputType = {
    id?: true
    user_id?: true
    bio?: true
    hourly_rate?: true
    experience_years?: true
    rating?: true
    total_sessions?: true
    is_approved?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type TutorsCountAggregateInputType = {
    id?: true
    user_id?: true
    bio?: true
    subjects?: true
    hourly_rate?: true
    experience_years?: true
    rating?: true
    total_sessions?: true
    is_approved?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TutorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutors to aggregate.
     */
    where?: tutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutors to fetch.
     */
    orderBy?: tutorsOrderByWithRelationInput | tutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tutors
    **/
    _count?: true | TutorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorsMaxAggregateInputType
  }

  export type GetTutorsAggregateType<T extends TutorsAggregateArgs> = {
        [P in keyof T & keyof AggregateTutors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutors[P]>
      : GetScalarType<T[P], AggregateTutors[P]>
  }




  export type tutorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutorsWhereInput
    orderBy?: tutorsOrderByWithAggregationInput | tutorsOrderByWithAggregationInput[]
    by: TutorsScalarFieldEnum[] | TutorsScalarFieldEnum
    having?: tutorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorsCountAggregateInputType | true
    _avg?: TutorsAvgAggregateInputType
    _sum?: TutorsSumAggregateInputType
    _min?: TutorsMinAggregateInputType
    _max?: TutorsMaxAggregateInputType
  }

  export type TutorsGroupByOutputType = {
    id: number
    user_id: number
    bio: string
    subjects: string[]
    hourly_rate: Decimal
    experience_years: number | null
    rating: Decimal | null
    total_sessions: number | null
    is_approved: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: TutorsCountAggregateOutputType | null
    _avg: TutorsAvgAggregateOutputType | null
    _sum: TutorsSumAggregateOutputType | null
    _min: TutorsMinAggregateOutputType | null
    _max: TutorsMaxAggregateOutputType | null
  }

  type GetTutorsGroupByPayload<T extends tutorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorsGroupByOutputType[P]>
            : GetScalarType<T[P], TutorsGroupByOutputType[P]>
        }
      >
    >


  export type tutorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bio?: boolean
    subjects?: boolean
    hourly_rate?: boolean
    experience_years?: boolean
    rating?: boolean
    total_sessions?: boolean
    is_approved?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    bookings?: boolean | tutors$bookingsArgs<ExtArgs>
    tutor_availability?: boolean | tutors$tutor_availabilityArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | TutorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutors"]>

  export type tutorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bio?: boolean
    subjects?: boolean
    hourly_rate?: boolean
    experience_years?: boolean
    rating?: boolean
    total_sessions?: boolean
    is_approved?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutors"]>

  export type tutorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bio?: boolean
    subjects?: boolean
    hourly_rate?: boolean
    experience_years?: boolean
    rating?: boolean
    total_sessions?: boolean
    is_approved?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutors"]>

  export type tutorsSelectScalar = {
    id?: boolean
    user_id?: boolean
    bio?: boolean
    subjects?: boolean
    hourly_rate?: boolean
    experience_years?: boolean
    rating?: boolean
    total_sessions?: boolean
    is_approved?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tutorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bio" | "subjects" | "hourly_rate" | "experience_years" | "rating" | "total_sessions" | "is_approved" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["tutors"]>
  export type tutorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | tutors$bookingsArgs<ExtArgs>
    tutor_availability?: boolean | tutors$tutor_availabilityArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | TutorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tutorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type tutorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $tutorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tutors"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      tutor_availability: Prisma.$tutor_availabilityPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      bio: string
      subjects: string[]
      hourly_rate: Prisma.Decimal
      experience_years: number | null
      rating: Prisma.Decimal | null
      total_sessions: number | null
      is_approved: boolean | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tutors"]>
    composites: {}
  }

  type tutorsGetPayload<S extends boolean | null | undefined | tutorsDefaultArgs> = $Result.GetResult<Prisma.$tutorsPayload, S>

  type tutorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tutorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorsCountAggregateInputType | true
    }

  export interface tutorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tutors'], meta: { name: 'tutors' } }
    /**
     * Find zero or one Tutors that matches the filter.
     * @param {tutorsFindUniqueArgs} args - Arguments to find a Tutors
     * @example
     * // Get one Tutors
     * const tutors = await prisma.tutors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutorsFindUniqueArgs>(args: SelectSubset<T, tutorsFindUniqueArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutorsFindUniqueOrThrowArgs} args - Arguments to find a Tutors
     * @example
     * // Get one Tutors
     * const tutors = await prisma.tutors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutorsFindUniqueOrThrowArgs>(args: SelectSubset<T, tutorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorsFindFirstArgs} args - Arguments to find a Tutors
     * @example
     * // Get one Tutors
     * const tutors = await prisma.tutors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutorsFindFirstArgs>(args?: SelectSubset<T, tutorsFindFirstArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorsFindFirstOrThrowArgs} args - Arguments to find a Tutors
     * @example
     * // Get one Tutors
     * const tutors = await prisma.tutors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutorsFindFirstOrThrowArgs>(args?: SelectSubset<T, tutorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutors
     * const tutors = await prisma.tutors.findMany()
     * 
     * // Get first 10 Tutors
     * const tutors = await prisma.tutors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorsWithIdOnly = await prisma.tutors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tutorsFindManyArgs>(args?: SelectSubset<T, tutorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutors.
     * @param {tutorsCreateArgs} args - Arguments to create a Tutors.
     * @example
     * // Create one Tutors
     * const Tutors = await prisma.tutors.create({
     *   data: {
     *     // ... data to create a Tutors
     *   }
     * })
     * 
     */
    create<T extends tutorsCreateArgs>(args: SelectSubset<T, tutorsCreateArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutors.
     * @param {tutorsCreateManyArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutors = await prisma.tutors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tutorsCreateManyArgs>(args?: SelectSubset<T, tutorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutors and returns the data saved in the database.
     * @param {tutorsCreateManyAndReturnArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutors = await prisma.tutors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutors and only return the `id`
     * const tutorsWithIdOnly = await prisma.tutors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tutorsCreateManyAndReturnArgs>(args?: SelectSubset<T, tutorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutors.
     * @param {tutorsDeleteArgs} args - Arguments to delete one Tutors.
     * @example
     * // Delete one Tutors
     * const Tutors = await prisma.tutors.delete({
     *   where: {
     *     // ... filter to delete one Tutors
     *   }
     * })
     * 
     */
    delete<T extends tutorsDeleteArgs>(args: SelectSubset<T, tutorsDeleteArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutors.
     * @param {tutorsUpdateArgs} args - Arguments to update one Tutors.
     * @example
     * // Update one Tutors
     * const tutors = await prisma.tutors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tutorsUpdateArgs>(args: SelectSubset<T, tutorsUpdateArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutors.
     * @param {tutorsDeleteManyArgs} args - Arguments to filter Tutors to delete.
     * @example
     * // Delete a few Tutors
     * const { count } = await prisma.tutors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tutorsDeleteManyArgs>(args?: SelectSubset<T, tutorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutors
     * const tutors = await prisma.tutors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tutorsUpdateManyArgs>(args: SelectSubset<T, tutorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors and returns the data updated in the database.
     * @param {tutorsUpdateManyAndReturnArgs} args - Arguments to update many Tutors.
     * @example
     * // Update many Tutors
     * const tutors = await prisma.tutors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutors and only return the `id`
     * const tutorsWithIdOnly = await prisma.tutors.updateManyAndReturn({
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
    updateManyAndReturn<T extends tutorsUpdateManyAndReturnArgs>(args: SelectSubset<T, tutorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutors.
     * @param {tutorsUpsertArgs} args - Arguments to update or create a Tutors.
     * @example
     * // Update or create a Tutors
     * const tutors = await prisma.tutors.upsert({
     *   create: {
     *     // ... data to create a Tutors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutors we want to update
     *   }
     * })
     */
    upsert<T extends tutorsUpsertArgs>(args: SelectSubset<T, tutorsUpsertArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorsCountArgs} args - Arguments to filter Tutors to count.
     * @example
     * // Count the number of Tutors
     * const count = await prisma.tutors.count({
     *   where: {
     *     // ... the filter for the Tutors we want to count
     *   }
     * })
    **/
    count<T extends tutorsCountArgs>(
      args?: Subset<T, tutorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorsAggregateArgs>(args: Subset<T, TutorsAggregateArgs>): Prisma.PrismaPromise<GetTutorsAggregateType<T>>

    /**
     * Group by Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorsGroupByArgs} args - Group by arguments.
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
      T extends tutorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tutorsGroupByArgs['orderBy'] }
        : { orderBy?: tutorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tutorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tutors model
   */
  readonly fields: tutorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tutors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tutorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends tutors$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, tutors$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutor_availability<T extends tutors$tutor_availabilityArgs<ExtArgs> = {}>(args?: Subset<T, tutors$tutor_availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_availabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tutors model
   */
  interface tutorsFieldRefs {
    readonly id: FieldRef<"tutors", 'Int'>
    readonly user_id: FieldRef<"tutors", 'Int'>
    readonly bio: FieldRef<"tutors", 'String'>
    readonly subjects: FieldRef<"tutors", 'String[]'>
    readonly hourly_rate: FieldRef<"tutors", 'Decimal'>
    readonly experience_years: FieldRef<"tutors", 'Int'>
    readonly rating: FieldRef<"tutors", 'Decimal'>
    readonly total_sessions: FieldRef<"tutors", 'Int'>
    readonly is_approved: FieldRef<"tutors", 'Boolean'>
    readonly is_active: FieldRef<"tutors", 'Boolean'>
    readonly created_at: FieldRef<"tutors", 'DateTime'>
    readonly updated_at: FieldRef<"tutors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tutors findUnique
   */
  export type tutorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * Filter, which tutors to fetch.
     */
    where: tutorsWhereUniqueInput
  }

  /**
   * tutors findUniqueOrThrow
   */
  export type tutorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * Filter, which tutors to fetch.
     */
    where: tutorsWhereUniqueInput
  }

  /**
   * tutors findFirst
   */
  export type tutorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * Filter, which tutors to fetch.
     */
    where?: tutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutors to fetch.
     */
    orderBy?: tutorsOrderByWithRelationInput | tutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutors.
     */
    cursor?: tutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutors.
     */
    distinct?: TutorsScalarFieldEnum | TutorsScalarFieldEnum[]
  }

  /**
   * tutors findFirstOrThrow
   */
  export type tutorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * Filter, which tutors to fetch.
     */
    where?: tutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutors to fetch.
     */
    orderBy?: tutorsOrderByWithRelationInput | tutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutors.
     */
    cursor?: tutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutors.
     */
    distinct?: TutorsScalarFieldEnum | TutorsScalarFieldEnum[]
  }

  /**
   * tutors findMany
   */
  export type tutorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * Filter, which tutors to fetch.
     */
    where?: tutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutors to fetch.
     */
    orderBy?: tutorsOrderByWithRelationInput | tutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tutors.
     */
    cursor?: tutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutors.
     */
    distinct?: TutorsScalarFieldEnum | TutorsScalarFieldEnum[]
  }

  /**
   * tutors create
   */
  export type tutorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * The data needed to create a tutors.
     */
    data: XOR<tutorsCreateInput, tutorsUncheckedCreateInput>
  }

  /**
   * tutors createMany
   */
  export type tutorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutors.
     */
    data: tutorsCreateManyInput | tutorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tutors createManyAndReturn
   */
  export type tutorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * The data used to create many tutors.
     */
    data: tutorsCreateManyInput | tutorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutors update
   */
  export type tutorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * The data needed to update a tutors.
     */
    data: XOR<tutorsUpdateInput, tutorsUncheckedUpdateInput>
    /**
     * Choose, which tutors to update.
     */
    where: tutorsWhereUniqueInput
  }

  /**
   * tutors updateMany
   */
  export type tutorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tutors.
     */
    data: XOR<tutorsUpdateManyMutationInput, tutorsUncheckedUpdateManyInput>
    /**
     * Filter which tutors to update
     */
    where?: tutorsWhereInput
    /**
     * Limit how many tutors to update.
     */
    limit?: number
  }

  /**
   * tutors updateManyAndReturn
   */
  export type tutorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * The data used to update tutors.
     */
    data: XOR<tutorsUpdateManyMutationInput, tutorsUncheckedUpdateManyInput>
    /**
     * Filter which tutors to update
     */
    where?: tutorsWhereInput
    /**
     * Limit how many tutors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutors upsert
   */
  export type tutorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * The filter to search for the tutors to update in case it exists.
     */
    where: tutorsWhereUniqueInput
    /**
     * In case the tutors found by the `where` argument doesn't exist, create a new tutors with this data.
     */
    create: XOR<tutorsCreateInput, tutorsUncheckedCreateInput>
    /**
     * In case the tutors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tutorsUpdateInput, tutorsUncheckedUpdateInput>
  }

  /**
   * tutors delete
   */
  export type tutorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    /**
     * Filter which tutors to delete.
     */
    where: tutorsWhereUniqueInput
  }

  /**
   * tutors deleteMany
   */
  export type tutorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutors to delete
     */
    where?: tutorsWhereInput
    /**
     * Limit how many tutors to delete.
     */
    limit?: number
  }

  /**
   * tutors.bookings
   */
  export type tutors$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * tutors.tutor_availability
   */
  export type tutors$tutor_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_availability
     */
    select?: tutor_availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_availability
     */
    omit?: tutor_availabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_availabilityInclude<ExtArgs> | null
    where?: tutor_availabilityWhereInput
    orderBy?: tutor_availabilityOrderByWithRelationInput | tutor_availabilityOrderByWithRelationInput[]
    cursor?: tutor_availabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tutor_availabilityScalarFieldEnum | Tutor_availabilityScalarFieldEnum[]
  }

  /**
   * tutors without action
   */
  export type tutorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
  }


  /**
   * Model user_groups
   */

  export type AggregateUser_groups = {
    _count: User_groupsCountAggregateOutputType | null
    _avg: User_groupsAvgAggregateOutputType | null
    _sum: User_groupsSumAggregateOutputType | null
    _min: User_groupsMinAggregateOutputType | null
    _max: User_groupsMaxAggregateOutputType | null
  }

  export type User_groupsAvgAggregateOutputType = {
    user_id: number | null
    group_id: number | null
  }

  export type User_groupsSumAggregateOutputType = {
    user_id: number | null
    group_id: number | null
  }

  export type User_groupsMinAggregateOutputType = {
    user_id: number | null
    group_id: number | null
    role: string | null
    joined_at: Date | null
  }

  export type User_groupsMaxAggregateOutputType = {
    user_id: number | null
    group_id: number | null
    role: string | null
    joined_at: Date | null
  }

  export type User_groupsCountAggregateOutputType = {
    user_id: number
    group_id: number
    role: number
    joined_at: number
    _all: number
  }


  export type User_groupsAvgAggregateInputType = {
    user_id?: true
    group_id?: true
  }

  export type User_groupsSumAggregateInputType = {
    user_id?: true
    group_id?: true
  }

  export type User_groupsMinAggregateInputType = {
    user_id?: true
    group_id?: true
    role?: true
    joined_at?: true
  }

  export type User_groupsMaxAggregateInputType = {
    user_id?: true
    group_id?: true
    role?: true
    joined_at?: true
  }

  export type User_groupsCountAggregateInputType = {
    user_id?: true
    group_id?: true
    role?: true
    joined_at?: true
    _all?: true
  }

  export type User_groupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_groups to aggregate.
     */
    where?: user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: user_groupsOrderByWithRelationInput | user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_groups
    **/
    _count?: true | User_groupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_groupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_groupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_groupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_groupsMaxAggregateInputType
  }

  export type GetUser_groupsAggregateType<T extends User_groupsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_groups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_groups[P]>
      : GetScalarType<T[P], AggregateUser_groups[P]>
  }




  export type user_groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_groupsWhereInput
    orderBy?: user_groupsOrderByWithAggregationInput | user_groupsOrderByWithAggregationInput[]
    by: User_groupsScalarFieldEnum[] | User_groupsScalarFieldEnum
    having?: user_groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_groupsCountAggregateInputType | true
    _avg?: User_groupsAvgAggregateInputType
    _sum?: User_groupsSumAggregateInputType
    _min?: User_groupsMinAggregateInputType
    _max?: User_groupsMaxAggregateInputType
  }

  export type User_groupsGroupByOutputType = {
    user_id: number
    group_id: number
    role: string | null
    joined_at: Date | null
    _count: User_groupsCountAggregateOutputType | null
    _avg: User_groupsAvgAggregateOutputType | null
    _sum: User_groupsSumAggregateOutputType | null
    _min: User_groupsMinAggregateOutputType | null
    _max: User_groupsMaxAggregateOutputType | null
  }

  type GetUser_groupsGroupByPayload<T extends user_groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_groupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_groupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_groupsGroupByOutputType[P]>
            : GetScalarType<T[P], User_groupsGroupByOutputType[P]>
        }
      >
    >


  export type user_groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    group_id?: boolean
    role?: boolean
    joined_at?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_groups"]>

  export type user_groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    group_id?: boolean
    role?: boolean
    joined_at?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_groups"]>

  export type user_groupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    group_id?: boolean
    role?: boolean
    joined_at?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_groups"]>

  export type user_groupsSelectScalar = {
    user_id?: boolean
    group_id?: boolean
    role?: boolean
    joined_at?: boolean
  }

  export type user_groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "group_id" | "role" | "joined_at", ExtArgs["result"]["user_groups"]>
  export type user_groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_groupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_groups"
    objects: {
      groups: Prisma.$groupsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      group_id: number
      role: string | null
      joined_at: Date | null
    }, ExtArgs["result"]["user_groups"]>
    composites: {}
  }

  type user_groupsGetPayload<S extends boolean | null | undefined | user_groupsDefaultArgs> = $Result.GetResult<Prisma.$user_groupsPayload, S>

  type user_groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_groupsCountAggregateInputType | true
    }

  export interface user_groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_groups'], meta: { name: 'user_groups' } }
    /**
     * Find zero or one User_groups that matches the filter.
     * @param {user_groupsFindUniqueArgs} args - Arguments to find a User_groups
     * @example
     * // Get one User_groups
     * const user_groups = await prisma.user_groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_groupsFindUniqueArgs>(args: SelectSubset<T, user_groupsFindUniqueArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_groupsFindUniqueOrThrowArgs} args - Arguments to find a User_groups
     * @example
     * // Get one User_groups
     * const user_groups = await prisma.user_groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupsFindFirstArgs} args - Arguments to find a User_groups
     * @example
     * // Get one User_groups
     * const user_groups = await prisma.user_groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_groupsFindFirstArgs>(args?: SelectSubset<T, user_groupsFindFirstArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupsFindFirstOrThrowArgs} args - Arguments to find a User_groups
     * @example
     * // Get one User_groups
     * const user_groups = await prisma.user_groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_groups
     * const user_groups = await prisma.user_groups.findMany()
     * 
     * // Get first 10 User_groups
     * const user_groups = await prisma.user_groups.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_groupsWithUser_idOnly = await prisma.user_groups.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_groupsFindManyArgs>(args?: SelectSubset<T, user_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_groups.
     * @param {user_groupsCreateArgs} args - Arguments to create a User_groups.
     * @example
     * // Create one User_groups
     * const User_groups = await prisma.user_groups.create({
     *   data: {
     *     // ... data to create a User_groups
     *   }
     * })
     * 
     */
    create<T extends user_groupsCreateArgs>(args: SelectSubset<T, user_groupsCreateArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_groups.
     * @param {user_groupsCreateManyArgs} args - Arguments to create many User_groups.
     * @example
     * // Create many User_groups
     * const user_groups = await prisma.user_groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_groupsCreateManyArgs>(args?: SelectSubset<T, user_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_groups and returns the data saved in the database.
     * @param {user_groupsCreateManyAndReturnArgs} args - Arguments to create many User_groups.
     * @example
     * // Create many User_groups
     * const user_groups = await prisma.user_groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_groups and only return the `user_id`
     * const user_groupsWithUser_idOnly = await prisma.user_groups.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_groups.
     * @param {user_groupsDeleteArgs} args - Arguments to delete one User_groups.
     * @example
     * // Delete one User_groups
     * const User_groups = await prisma.user_groups.delete({
     *   where: {
     *     // ... filter to delete one User_groups
     *   }
     * })
     * 
     */
    delete<T extends user_groupsDeleteArgs>(args: SelectSubset<T, user_groupsDeleteArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_groups.
     * @param {user_groupsUpdateArgs} args - Arguments to update one User_groups.
     * @example
     * // Update one User_groups
     * const user_groups = await prisma.user_groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_groupsUpdateArgs>(args: SelectSubset<T, user_groupsUpdateArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_groups.
     * @param {user_groupsDeleteManyArgs} args - Arguments to filter User_groups to delete.
     * @example
     * // Delete a few User_groups
     * const { count } = await prisma.user_groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_groupsDeleteManyArgs>(args?: SelectSubset<T, user_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_groups
     * const user_groups = await prisma.user_groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_groupsUpdateManyArgs>(args: SelectSubset<T, user_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_groups and returns the data updated in the database.
     * @param {user_groupsUpdateManyAndReturnArgs} args - Arguments to update many User_groups.
     * @example
     * // Update many User_groups
     * const user_groups = await prisma.user_groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_groups and only return the `user_id`
     * const user_groupsWithUser_idOnly = await prisma.user_groups.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends user_groupsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_groups.
     * @param {user_groupsUpsertArgs} args - Arguments to update or create a User_groups.
     * @example
     * // Update or create a User_groups
     * const user_groups = await prisma.user_groups.upsert({
     *   create: {
     *     // ... data to create a User_groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_groups we want to update
     *   }
     * })
     */
    upsert<T extends user_groupsUpsertArgs>(args: SelectSubset<T, user_groupsUpsertArgs<ExtArgs>>): Prisma__user_groupsClient<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupsCountArgs} args - Arguments to filter User_groups to count.
     * @example
     * // Count the number of User_groups
     * const count = await prisma.user_groups.count({
     *   where: {
     *     // ... the filter for the User_groups we want to count
     *   }
     * })
    **/
    count<T extends user_groupsCountArgs>(
      args?: Subset<T, user_groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_groupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_groupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_groupsAggregateArgs>(args: Subset<T, User_groupsAggregateArgs>): Prisma.PrismaPromise<GetUser_groupsAggregateType<T>>

    /**
     * Group by User_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupsGroupByArgs} args - Group by arguments.
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
      T extends user_groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_groupsGroupByArgs['orderBy'] }
        : { orderBy?: user_groupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_groups model
   */
  readonly fields: user_groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_groups model
   */
  interface user_groupsFieldRefs {
    readonly user_id: FieldRef<"user_groups", 'Int'>
    readonly group_id: FieldRef<"user_groups", 'Int'>
    readonly role: FieldRef<"user_groups", 'String'>
    readonly joined_at: FieldRef<"user_groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_groups findUnique
   */
  export type user_groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which user_groups to fetch.
     */
    where: user_groupsWhereUniqueInput
  }

  /**
   * user_groups findUniqueOrThrow
   */
  export type user_groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which user_groups to fetch.
     */
    where: user_groupsWhereUniqueInput
  }

  /**
   * user_groups findFirst
   */
  export type user_groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which user_groups to fetch.
     */
    where?: user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: user_groupsOrderByWithRelationInput | user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_groups.
     */
    cursor?: user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_groups.
     */
    distinct?: User_groupsScalarFieldEnum | User_groupsScalarFieldEnum[]
  }

  /**
   * user_groups findFirstOrThrow
   */
  export type user_groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which user_groups to fetch.
     */
    where?: user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: user_groupsOrderByWithRelationInput | user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_groups.
     */
    cursor?: user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_groups.
     */
    distinct?: User_groupsScalarFieldEnum | User_groupsScalarFieldEnum[]
  }

  /**
   * user_groups findMany
   */
  export type user_groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which user_groups to fetch.
     */
    where?: user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: user_groupsOrderByWithRelationInput | user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_groups.
     */
    cursor?: user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_groups.
     */
    distinct?: User_groupsScalarFieldEnum | User_groupsScalarFieldEnum[]
  }

  /**
   * user_groups create
   */
  export type user_groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_groups.
     */
    data: XOR<user_groupsCreateInput, user_groupsUncheckedCreateInput>
  }

  /**
   * user_groups createMany
   */
  export type user_groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_groups.
     */
    data: user_groupsCreateManyInput | user_groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_groups createManyAndReturn
   */
  export type user_groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * The data used to create many user_groups.
     */
    data: user_groupsCreateManyInput | user_groupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_groups update
   */
  export type user_groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_groups.
     */
    data: XOR<user_groupsUpdateInput, user_groupsUncheckedUpdateInput>
    /**
     * Choose, which user_groups to update.
     */
    where: user_groupsWhereUniqueInput
  }

  /**
   * user_groups updateMany
   */
  export type user_groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_groups.
     */
    data: XOR<user_groupsUpdateManyMutationInput, user_groupsUncheckedUpdateManyInput>
    /**
     * Filter which user_groups to update
     */
    where?: user_groupsWhereInput
    /**
     * Limit how many user_groups to update.
     */
    limit?: number
  }

  /**
   * user_groups updateManyAndReturn
   */
  export type user_groupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * The data used to update user_groups.
     */
    data: XOR<user_groupsUpdateManyMutationInput, user_groupsUncheckedUpdateManyInput>
    /**
     * Filter which user_groups to update
     */
    where?: user_groupsWhereInput
    /**
     * Limit how many user_groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_groups upsert
   */
  export type user_groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_groups to update in case it exists.
     */
    where: user_groupsWhereUniqueInput
    /**
     * In case the user_groups found by the `where` argument doesn't exist, create a new user_groups with this data.
     */
    create: XOR<user_groupsCreateInput, user_groupsUncheckedCreateInput>
    /**
     * In case the user_groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_groupsUpdateInput, user_groupsUncheckedUpdateInput>
  }

  /**
   * user_groups delete
   */
  export type user_groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    /**
     * Filter which user_groups to delete.
     */
    where: user_groupsWhereUniqueInput
  }

  /**
   * user_groups deleteMany
   */
  export type user_groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_groups to delete
     */
    where?: user_groupsWhereInput
    /**
     * Limit how many user_groups to delete.
     */
    limit?: number
  }

  /**
   * user_groups without action
   */
  export type user_groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    reputation: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    reputation: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    university: string | null
    field_of_study: string | null
    reputation: number | null
    profile_picture: string | null
    bio: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    university: string | null
    field_of_study: string | null
    reputation: number | null
    profile_picture: string | null
    bio: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    first_name: number
    last_name: number
    university: number
    field_of_study: number
    reputation: number
    profile_picture: number
    bio: number
    role: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    reputation?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    reputation?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    university?: true
    field_of_study?: true
    reputation?: true
    profile_picture?: true
    bio?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    university?: true
    field_of_study?: true
    reputation?: true
    profile_picture?: true
    bio?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    university?: true
    field_of_study?: true
    reputation?: true
    profile_picture?: true
    bio?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    first_name: string
    last_name: string
    university: string | null
    field_of_study: string | null
    reputation: number | null
    profile_picture: string | null
    bio: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    university?: boolean
    field_of_study?: boolean
    reputation?: boolean
    profile_picture?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    answers?: boolean | users$answersArgs<ExtArgs>
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    group_messages?: boolean | users$group_messagesArgs<ExtArgs>
    groups?: boolean | users$groupsArgs<ExtArgs>
    notes?: boolean | users$notesArgs<ExtArgs>
    questions?: boolean | users$questionsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    tutors?: boolean | users$tutorsArgs<ExtArgs>
    user_groups?: boolean | users$user_groupsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    university?: boolean
    field_of_study?: boolean
    reputation?: boolean
    profile_picture?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    university?: boolean
    field_of_study?: boolean
    reputation?: boolean
    profile_picture?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    university?: boolean
    field_of_study?: boolean
    reputation?: boolean
    profile_picture?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "first_name" | "last_name" | "university" | "field_of_study" | "reputation" | "profile_picture" | "bio" | "role" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | users$answersArgs<ExtArgs>
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    group_messages?: boolean | users$group_messagesArgs<ExtArgs>
    groups?: boolean | users$groupsArgs<ExtArgs>
    notes?: boolean | users$notesArgs<ExtArgs>
    questions?: boolean | users$questionsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    tutors?: boolean | users$tutorsArgs<ExtArgs>
    user_groups?: boolean | users$user_groupsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>[]
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      group_messages: Prisma.$group_messagesPayload<ExtArgs>[]
      groups: Prisma.$groupsPayload<ExtArgs>[]
      notes: Prisma.$notesPayload<ExtArgs>[]
      questions: Prisma.$questionsPayload<ExtArgs>[]
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
      tutors: Prisma.$tutorsPayload<ExtArgs> | null
      user_groups: Prisma.$user_groupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      first_name: string
      last_name: string
      university: string | null
      field_of_study: string | null
      reputation: number | null
      profile_picture: string | null
      bio: string | null
      role: string | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends users$answersArgs<ExtArgs> = {}>(args?: Subset<T, users$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group_messages<T extends users$group_messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$group_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends users$groupsArgs<ExtArgs> = {}>(args?: Subset<T, users$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends users$notesArgs<ExtArgs> = {}>(args?: Subset<T, users$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends users$questionsArgs<ExtArgs> = {}>(args?: Subset<T, users$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutors<T extends users$tutorsArgs<ExtArgs> = {}>(args?: Subset<T, users$tutorsArgs<ExtArgs>>): Prisma__tutorsClient<$Result.GetResult<Prisma.$tutorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_groups<T extends users$user_groupsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly university: FieldRef<"users", 'String'>
    readonly field_of_study: FieldRef<"users", 'String'>
    readonly reputation: FieldRef<"users", 'Int'>
    readonly profile_picture: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.answers
   */
  export type users$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * users.bookings
   */
  export type users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users.group_messages
   */
  export type users$group_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_messages
     */
    select?: group_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_messages
     */
    omit?: group_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_messagesInclude<ExtArgs> | null
    where?: group_messagesWhereInput
    orderBy?: group_messagesOrderByWithRelationInput | group_messagesOrderByWithRelationInput[]
    cursor?: group_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_messagesScalarFieldEnum | Group_messagesScalarFieldEnum[]
  }

  /**
   * users.groups
   */
  export type users$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    cursor?: groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * users.notes
   */
  export type users$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    where?: notesWhereInput
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    cursor?: notesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * users.questions
   */
  export type users$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * users.transactions
   */
  export type users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * users.tutors
   */
  export type users$tutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutors
     */
    select?: tutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutors
     */
    omit?: tutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorsInclude<ExtArgs> | null
    where?: tutorsWhereInput
  }

  /**
   * users.user_groups
   */
  export type users$user_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_groups
     */
    select?: user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_groups
     */
    omit?: user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_groupsInclude<ExtArgs> | null
    where?: user_groupsWhereInput
    orderBy?: user_groupsOrderByWithRelationInput | user_groupsOrderByWithRelationInput[]
    cursor?: user_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_groupsScalarFieldEnum | User_groupsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AnswersScalarFieldEnum: {
    id: 'id',
    content: 'content',
    votes: 'votes',
    is_accepted: 'is_accepted',
    question_id: 'question_id',
    author_id: 'author_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    tutor_id: 'tutor_id',
    subject: 'subject',
    session_date: 'session_date',
    start_time: 'start_time',
    end_time: 'end_time',
    duration_hours: 'duration_hours',
    total_amount: 'total_amount',
    status: 'status',
    meeting_link: 'meeting_link',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const Group_messagesScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    user_id: 'user_id',
    message: 'message',
    file_url: 'file_url',
    file_type: 'file_type',
    reply_to: 'reply_to',
    is_edited: 'is_edited',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Group_messagesScalarFieldEnum = (typeof Group_messagesScalarFieldEnum)[keyof typeof Group_messagesScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    subject: 'subject',
    max_members: 'max_members',
    current_members: 'current_members',
    created_by: 'created_by',
    requires_approval: 'requires_approval',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    subject: 'subject',
    file_path: 'file_path',
    file_type: 'file_type',
    downloads: 'downloads',
    uploaded_by: 'uploaded_by',
    group_id: 'group_id',
    is_premium: 'is_premium',
    price: 'price',
    is_active: 'is_active',
    tags: 'tags',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    subject: 'subject',
    tags: 'tags',
    votes: 'votes',
    answers_count: 'answers_count',
    views: 'views',
    is_solved: 'is_solved',
    author_id: 'author_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount: 'amount',
    type: 'type',
    status: 'status',
    reference: 'reference',
    description: 'description',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const Tutor_availabilityScalarFieldEnum: {
    id: 'id',
    tutor_id: 'tutor_id',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time',
    is_available: 'is_available',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Tutor_availabilityScalarFieldEnum = (typeof Tutor_availabilityScalarFieldEnum)[keyof typeof Tutor_availabilityScalarFieldEnum]


  export const TutorsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bio: 'bio',
    subjects: 'subjects',
    hourly_rate: 'hourly_rate',
    experience_years: 'experience_years',
    rating: 'rating',
    total_sessions: 'total_sessions',
    is_approved: 'is_approved',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TutorsScalarFieldEnum = (typeof TutorsScalarFieldEnum)[keyof typeof TutorsScalarFieldEnum]


  export const User_groupsScalarFieldEnum: {
    user_id: 'user_id',
    group_id: 'group_id',
    role: 'role',
    joined_at: 'joined_at'
  };

  export type User_groupsScalarFieldEnum = (typeof User_groupsScalarFieldEnum)[keyof typeof User_groupsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    university: 'university',
    field_of_study: 'field_of_study',
    reputation: 'reputation',
    profile_picture: 'profile_picture',
    bio: 'bio',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type answersWhereInput = {
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    id?: IntFilter<"answers"> | number
    content?: StringFilter<"answers"> | string
    votes?: IntNullableFilter<"answers"> | number | null
    is_accepted?: BoolNullableFilter<"answers"> | boolean | null
    question_id?: IntFilter<"answers"> | number
    author_id?: IntFilter<"answers"> | number
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }

  export type answersOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    votes?: SortOrderInput | SortOrder
    is_accepted?: SortOrderInput | SortOrder
    question_id?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    questions?: questionsOrderByWithRelationInput
  }

  export type answersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    content?: StringFilter<"answers"> | string
    votes?: IntNullableFilter<"answers"> | number | null
    is_accepted?: BoolNullableFilter<"answers"> | boolean | null
    question_id?: IntFilter<"answers"> | number
    author_id?: IntFilter<"answers"> | number
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }, "id">

  export type answersOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    votes?: SortOrderInput | SortOrder
    is_accepted?: SortOrderInput | SortOrder
    question_id?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: answersCountOrderByAggregateInput
    _avg?: answersAvgOrderByAggregateInput
    _max?: answersMaxOrderByAggregateInput
    _min?: answersMinOrderByAggregateInput
    _sum?: answersSumOrderByAggregateInput
  }

  export type answersScalarWhereWithAggregatesInput = {
    AND?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    OR?: answersScalarWhereWithAggregatesInput[]
    NOT?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"answers"> | number
    content?: StringWithAggregatesFilter<"answers"> | string
    votes?: IntNullableWithAggregatesFilter<"answers"> | number | null
    is_accepted?: BoolNullableWithAggregatesFilter<"answers"> | boolean | null
    question_id?: IntWithAggregatesFilter<"answers"> | number
    author_id?: IntWithAggregatesFilter<"answers"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"answers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"answers"> | Date | string | null
  }

  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: IntFilter<"bookings"> | number
    student_id?: IntFilter<"bookings"> | number
    tutor_id?: IntFilter<"bookings"> | number
    subject?: StringFilter<"bookings"> | string
    session_date?: DateTimeFilter<"bookings"> | Date | string
    start_time?: DateTimeFilter<"bookings"> | Date | string
    end_time?: DateTimeFilter<"bookings"> | Date | string
    duration_hours?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"bookings"> | string | null
    meeting_link?: StringNullableFilter<"bookings"> | string | null
    notes?: StringNullableFilter<"bookings"> | string | null
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tutors?: XOR<TutorsScalarRelationFilter, tutorsWhereInput>
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    tutor_id?: SortOrder
    subject?: SortOrder
    session_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration_hours?: SortOrder
    total_amount?: SortOrder
    status?: SortOrderInput | SortOrder
    meeting_link?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    tutors?: tutorsOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    student_id?: IntFilter<"bookings"> | number
    tutor_id?: IntFilter<"bookings"> | number
    subject?: StringFilter<"bookings"> | string
    session_date?: DateTimeFilter<"bookings"> | Date | string
    start_time?: DateTimeFilter<"bookings"> | Date | string
    end_time?: DateTimeFilter<"bookings"> | Date | string
    duration_hours?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"bookings"> | string | null
    meeting_link?: StringNullableFilter<"bookings"> | string | null
    notes?: StringNullableFilter<"bookings"> | string | null
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tutors?: XOR<TutorsScalarRelationFilter, tutorsWhereInput>
  }, "id">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    tutor_id?: SortOrder
    subject?: SortOrder
    session_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration_hours?: SortOrder
    total_amount?: SortOrder
    status?: SortOrderInput | SortOrder
    meeting_link?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bookings"> | number
    student_id?: IntWithAggregatesFilter<"bookings"> | number
    tutor_id?: IntWithAggregatesFilter<"bookings"> | number
    subject?: StringWithAggregatesFilter<"bookings"> | string
    session_date?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    start_time?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    duration_hours?: DecimalWithAggregatesFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalWithAggregatesFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    meeting_link?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    notes?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
  }

  export type group_messagesWhereInput = {
    AND?: group_messagesWhereInput | group_messagesWhereInput[]
    OR?: group_messagesWhereInput[]
    NOT?: group_messagesWhereInput | group_messagesWhereInput[]
    id?: IntFilter<"group_messages"> | number
    group_id?: IntFilter<"group_messages"> | number
    user_id?: IntFilter<"group_messages"> | number
    message?: StringFilter<"group_messages"> | string
    file_url?: StringNullableFilter<"group_messages"> | string | null
    file_type?: StringNullableFilter<"group_messages"> | string | null
    reply_to?: IntNullableFilter<"group_messages"> | number | null
    is_edited?: BoolNullableFilter<"group_messages"> | boolean | null
    created_at?: DateTimeNullableFilter<"group_messages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"group_messages"> | Date | string | null
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    group_messages?: XOR<Group_messagesNullableScalarRelationFilter, group_messagesWhereInput> | null
    other_group_messages?: Group_messagesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type group_messagesOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    reply_to?: SortOrderInput | SortOrder
    is_edited?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    groups?: groupsOrderByWithRelationInput
    group_messages?: group_messagesOrderByWithRelationInput
    other_group_messages?: group_messagesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type group_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: group_messagesWhereInput | group_messagesWhereInput[]
    OR?: group_messagesWhereInput[]
    NOT?: group_messagesWhereInput | group_messagesWhereInput[]
    group_id?: IntFilter<"group_messages"> | number
    user_id?: IntFilter<"group_messages"> | number
    message?: StringFilter<"group_messages"> | string
    file_url?: StringNullableFilter<"group_messages"> | string | null
    file_type?: StringNullableFilter<"group_messages"> | string | null
    reply_to?: IntNullableFilter<"group_messages"> | number | null
    is_edited?: BoolNullableFilter<"group_messages"> | boolean | null
    created_at?: DateTimeNullableFilter<"group_messages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"group_messages"> | Date | string | null
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    group_messages?: XOR<Group_messagesNullableScalarRelationFilter, group_messagesWhereInput> | null
    other_group_messages?: Group_messagesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type group_messagesOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    reply_to?: SortOrderInput | SortOrder
    is_edited?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: group_messagesCountOrderByAggregateInput
    _avg?: group_messagesAvgOrderByAggregateInput
    _max?: group_messagesMaxOrderByAggregateInput
    _min?: group_messagesMinOrderByAggregateInput
    _sum?: group_messagesSumOrderByAggregateInput
  }

  export type group_messagesScalarWhereWithAggregatesInput = {
    AND?: group_messagesScalarWhereWithAggregatesInput | group_messagesScalarWhereWithAggregatesInput[]
    OR?: group_messagesScalarWhereWithAggregatesInput[]
    NOT?: group_messagesScalarWhereWithAggregatesInput | group_messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"group_messages"> | number
    group_id?: IntWithAggregatesFilter<"group_messages"> | number
    user_id?: IntWithAggregatesFilter<"group_messages"> | number
    message?: StringWithAggregatesFilter<"group_messages"> | string
    file_url?: StringNullableWithAggregatesFilter<"group_messages"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"group_messages"> | string | null
    reply_to?: IntNullableWithAggregatesFilter<"group_messages"> | number | null
    is_edited?: BoolNullableWithAggregatesFilter<"group_messages"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"group_messages"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"group_messages"> | Date | string | null
  }

  export type groupsWhereInput = {
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    id?: IntFilter<"groups"> | number
    name?: StringFilter<"groups"> | string
    description?: StringFilter<"groups"> | string
    subject?: StringFilter<"groups"> | string
    max_members?: IntNullableFilter<"groups"> | number | null
    current_members?: IntNullableFilter<"groups"> | number | null
    created_by?: IntFilter<"groups"> | number
    requires_approval?: BoolNullableFilter<"groups"> | boolean | null
    is_active?: BoolNullableFilter<"groups"> | boolean | null
    created_at?: DateTimeNullableFilter<"groups"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"groups"> | Date | string | null
    group_messages?: Group_messagesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    notes?: NotesListRelationFilter
    user_groups?: User_groupsListRelationFilter
  }

  export type groupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    max_members?: SortOrderInput | SortOrder
    current_members?: SortOrderInput | SortOrder
    created_by?: SortOrder
    requires_approval?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    group_messages?: group_messagesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    notes?: notesOrderByRelationAggregateInput
    user_groups?: user_groupsOrderByRelationAggregateInput
  }

  export type groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    name?: StringFilter<"groups"> | string
    description?: StringFilter<"groups"> | string
    subject?: StringFilter<"groups"> | string
    max_members?: IntNullableFilter<"groups"> | number | null
    current_members?: IntNullableFilter<"groups"> | number | null
    created_by?: IntFilter<"groups"> | number
    requires_approval?: BoolNullableFilter<"groups"> | boolean | null
    is_active?: BoolNullableFilter<"groups"> | boolean | null
    created_at?: DateTimeNullableFilter<"groups"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"groups"> | Date | string | null
    group_messages?: Group_messagesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    notes?: NotesListRelationFilter
    user_groups?: User_groupsListRelationFilter
  }, "id">

  export type groupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    max_members?: SortOrderInput | SortOrder
    current_members?: SortOrderInput | SortOrder
    created_by?: SortOrder
    requires_approval?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: groupsCountOrderByAggregateInput
    _avg?: groupsAvgOrderByAggregateInput
    _max?: groupsMaxOrderByAggregateInput
    _min?: groupsMinOrderByAggregateInput
    _sum?: groupsSumOrderByAggregateInput
  }

  export type groupsScalarWhereWithAggregatesInput = {
    AND?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    OR?: groupsScalarWhereWithAggregatesInput[]
    NOT?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"groups"> | number
    name?: StringWithAggregatesFilter<"groups"> | string
    description?: StringWithAggregatesFilter<"groups"> | string
    subject?: StringWithAggregatesFilter<"groups"> | string
    max_members?: IntNullableWithAggregatesFilter<"groups"> | number | null
    current_members?: IntNullableWithAggregatesFilter<"groups"> | number | null
    created_by?: IntWithAggregatesFilter<"groups"> | number
    requires_approval?: BoolNullableWithAggregatesFilter<"groups"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"groups"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"groups"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"groups"> | Date | string | null
  }

  export type notesWhereInput = {
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    id?: IntFilter<"notes"> | number
    title?: StringFilter<"notes"> | string
    description?: StringFilter<"notes"> | string
    subject?: StringFilter<"notes"> | string
    file_path?: StringFilter<"notes"> | string
    file_type?: StringFilter<"notes"> | string
    downloads?: IntNullableFilter<"notes"> | number | null
    uploaded_by?: IntFilter<"notes"> | number
    group_id?: IntNullableFilter<"notes"> | number | null
    is_premium?: BoolNullableFilter<"notes"> | boolean | null
    price?: DecimalNullableFilter<"notes"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolNullableFilter<"notes"> | boolean | null
    tags?: StringNullableListFilter<"notes">
    created_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    groups?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type notesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    file_path?: SortOrder
    file_type?: SortOrder
    downloads?: SortOrderInput | SortOrder
    uploaded_by?: SortOrder
    group_id?: SortOrderInput | SortOrder
    is_premium?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    tags?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    groups?: groupsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type notesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    title?: StringFilter<"notes"> | string
    description?: StringFilter<"notes"> | string
    subject?: StringFilter<"notes"> | string
    file_path?: StringFilter<"notes"> | string
    file_type?: StringFilter<"notes"> | string
    downloads?: IntNullableFilter<"notes"> | number | null
    uploaded_by?: IntFilter<"notes"> | number
    group_id?: IntNullableFilter<"notes"> | number | null
    is_premium?: BoolNullableFilter<"notes"> | boolean | null
    price?: DecimalNullableFilter<"notes"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolNullableFilter<"notes"> | boolean | null
    tags?: StringNullableListFilter<"notes">
    created_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    groups?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type notesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    file_path?: SortOrder
    file_type?: SortOrder
    downloads?: SortOrderInput | SortOrder
    uploaded_by?: SortOrder
    group_id?: SortOrderInput | SortOrder
    is_premium?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    tags?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: notesCountOrderByAggregateInput
    _avg?: notesAvgOrderByAggregateInput
    _max?: notesMaxOrderByAggregateInput
    _min?: notesMinOrderByAggregateInput
    _sum?: notesSumOrderByAggregateInput
  }

  export type notesScalarWhereWithAggregatesInput = {
    AND?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    OR?: notesScalarWhereWithAggregatesInput[]
    NOT?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notes"> | number
    title?: StringWithAggregatesFilter<"notes"> | string
    description?: StringWithAggregatesFilter<"notes"> | string
    subject?: StringWithAggregatesFilter<"notes"> | string
    file_path?: StringWithAggregatesFilter<"notes"> | string
    file_type?: StringWithAggregatesFilter<"notes"> | string
    downloads?: IntNullableWithAggregatesFilter<"notes"> | number | null
    uploaded_by?: IntWithAggregatesFilter<"notes"> | number
    group_id?: IntNullableWithAggregatesFilter<"notes"> | number | null
    is_premium?: BoolNullableWithAggregatesFilter<"notes"> | boolean | null
    price?: DecimalNullableWithAggregatesFilter<"notes"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolNullableWithAggregatesFilter<"notes"> | boolean | null
    tags?: StringNullableListFilter<"notes">
    created_at?: DateTimeNullableWithAggregatesFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"notes"> | Date | string | null
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: IntFilter<"questions"> | number
    title?: StringFilter<"questions"> | string
    content?: StringFilter<"questions"> | string
    subject?: StringFilter<"questions"> | string
    tags?: StringNullableListFilter<"questions">
    votes?: IntNullableFilter<"questions"> | number | null
    answers_count?: IntNullableFilter<"questions"> | number | null
    views?: IntNullableFilter<"questions"> | number | null
    is_solved?: BoolNullableFilter<"questions"> | boolean | null
    author_id?: IntFilter<"questions"> | number
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    answers?: AnswersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    tags?: SortOrder
    votes?: SortOrderInput | SortOrder
    answers_count?: SortOrderInput | SortOrder
    views?: SortOrderInput | SortOrder
    is_solved?: SortOrderInput | SortOrder
    author_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    answers?: answersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    title?: StringFilter<"questions"> | string
    content?: StringFilter<"questions"> | string
    subject?: StringFilter<"questions"> | string
    tags?: StringNullableListFilter<"questions">
    votes?: IntNullableFilter<"questions"> | number | null
    answers_count?: IntNullableFilter<"questions"> | number | null
    views?: IntNullableFilter<"questions"> | number | null
    is_solved?: BoolNullableFilter<"questions"> | boolean | null
    author_id?: IntFilter<"questions"> | number
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    answers?: AnswersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    tags?: SortOrder
    votes?: SortOrderInput | SortOrder
    answers_count?: SortOrderInput | SortOrder
    views?: SortOrderInput | SortOrder
    is_solved?: SortOrderInput | SortOrder
    author_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: questionsCountOrderByAggregateInput
    _avg?: questionsAvgOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
    _sum?: questionsSumOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"questions"> | number
    title?: StringWithAggregatesFilter<"questions"> | string
    content?: StringWithAggregatesFilter<"questions"> | string
    subject?: StringWithAggregatesFilter<"questions"> | string
    tags?: StringNullableListFilter<"questions">
    votes?: IntNullableWithAggregatesFilter<"questions"> | number | null
    answers_count?: IntNullableWithAggregatesFilter<"questions"> | number | null
    views?: IntNullableWithAggregatesFilter<"questions"> | number | null
    is_solved?: BoolNullableWithAggregatesFilter<"questions"> | boolean | null
    author_id?: IntWithAggregatesFilter<"questions"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"questions"> | Date | string | null
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: IntFilter<"transactions"> | number
    user_id?: IntFilter<"transactions"> | number
    amount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"transactions"> | string
    status?: StringNullableFilter<"transactions"> | string | null
    reference?: StringNullableFilter<"transactions"> | string | null
    description?: StringNullableFilter<"transactions"> | string | null
    metadata?: JsonNullableFilter<"transactions">
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    user_id?: IntFilter<"transactions"> | number
    amount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"transactions"> | string
    status?: StringNullableFilter<"transactions"> | string | null
    reference?: StringNullableFilter<"transactions"> | string | null
    description?: StringNullableFilter<"transactions"> | string | null
    metadata?: JsonNullableFilter<"transactions">
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transactions"> | number
    user_id?: IntWithAggregatesFilter<"transactions"> | number
    amount?: DecimalWithAggregatesFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    type?: StringWithAggregatesFilter<"transactions"> | string
    status?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    reference?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    description?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"transactions">
    created_at?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
  }

  export type tutor_availabilityWhereInput = {
    AND?: tutor_availabilityWhereInput | tutor_availabilityWhereInput[]
    OR?: tutor_availabilityWhereInput[]
    NOT?: tutor_availabilityWhereInput | tutor_availabilityWhereInput[]
    id?: IntFilter<"tutor_availability"> | number
    tutor_id?: IntFilter<"tutor_availability"> | number
    day_of_week?: StringFilter<"tutor_availability"> | string
    start_time?: DateTimeFilter<"tutor_availability"> | Date | string
    end_time?: DateTimeFilter<"tutor_availability"> | Date | string
    is_available?: BoolNullableFilter<"tutor_availability"> | boolean | null
    created_at?: DateTimeNullableFilter<"tutor_availability"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tutor_availability"> | Date | string | null
    tutors?: XOR<TutorsScalarRelationFilter, tutorsWhereInput>
  }

  export type tutor_availabilityOrderByWithRelationInput = {
    id?: SortOrder
    tutor_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    tutors?: tutorsOrderByWithRelationInput
  }

  export type tutor_availabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tutor_availabilityWhereInput | tutor_availabilityWhereInput[]
    OR?: tutor_availabilityWhereInput[]
    NOT?: tutor_availabilityWhereInput | tutor_availabilityWhereInput[]
    tutor_id?: IntFilter<"tutor_availability"> | number
    day_of_week?: StringFilter<"tutor_availability"> | string
    start_time?: DateTimeFilter<"tutor_availability"> | Date | string
    end_time?: DateTimeFilter<"tutor_availability"> | Date | string
    is_available?: BoolNullableFilter<"tutor_availability"> | boolean | null
    created_at?: DateTimeNullableFilter<"tutor_availability"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tutor_availability"> | Date | string | null
    tutors?: XOR<TutorsScalarRelationFilter, tutorsWhereInput>
  }, "id">

  export type tutor_availabilityOrderByWithAggregationInput = {
    id?: SortOrder
    tutor_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tutor_availabilityCountOrderByAggregateInput
    _avg?: tutor_availabilityAvgOrderByAggregateInput
    _max?: tutor_availabilityMaxOrderByAggregateInput
    _min?: tutor_availabilityMinOrderByAggregateInput
    _sum?: tutor_availabilitySumOrderByAggregateInput
  }

  export type tutor_availabilityScalarWhereWithAggregatesInput = {
    AND?: tutor_availabilityScalarWhereWithAggregatesInput | tutor_availabilityScalarWhereWithAggregatesInput[]
    OR?: tutor_availabilityScalarWhereWithAggregatesInput[]
    NOT?: tutor_availabilityScalarWhereWithAggregatesInput | tutor_availabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tutor_availability"> | number
    tutor_id?: IntWithAggregatesFilter<"tutor_availability"> | number
    day_of_week?: StringWithAggregatesFilter<"tutor_availability"> | string
    start_time?: DateTimeWithAggregatesFilter<"tutor_availability"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"tutor_availability"> | Date | string
    is_available?: BoolNullableWithAggregatesFilter<"tutor_availability"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tutor_availability"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tutor_availability"> | Date | string | null
  }

  export type tutorsWhereInput = {
    AND?: tutorsWhereInput | tutorsWhereInput[]
    OR?: tutorsWhereInput[]
    NOT?: tutorsWhereInput | tutorsWhereInput[]
    id?: IntFilter<"tutors"> | number
    user_id?: IntFilter<"tutors"> | number
    bio?: StringFilter<"tutors"> | string
    subjects?: StringNullableListFilter<"tutors">
    hourly_rate?: DecimalFilter<"tutors"> | Decimal | DecimalJsLike | number | string
    experience_years?: IntNullableFilter<"tutors"> | number | null
    rating?: DecimalNullableFilter<"tutors"> | Decimal | DecimalJsLike | number | string | null
    total_sessions?: IntNullableFilter<"tutors"> | number | null
    is_approved?: BoolNullableFilter<"tutors"> | boolean | null
    is_active?: BoolNullableFilter<"tutors"> | boolean | null
    created_at?: DateTimeNullableFilter<"tutors"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tutors"> | Date | string | null
    bookings?: BookingsListRelationFilter
    tutor_availability?: Tutor_availabilityListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type tutorsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    subjects?: SortOrder
    hourly_rate?: SortOrder
    experience_years?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    total_sessions?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    tutor_availability?: tutor_availabilityOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type tutorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: tutorsWhereInput | tutorsWhereInput[]
    OR?: tutorsWhereInput[]
    NOT?: tutorsWhereInput | tutorsWhereInput[]
    bio?: StringFilter<"tutors"> | string
    subjects?: StringNullableListFilter<"tutors">
    hourly_rate?: DecimalFilter<"tutors"> | Decimal | DecimalJsLike | number | string
    experience_years?: IntNullableFilter<"tutors"> | number | null
    rating?: DecimalNullableFilter<"tutors"> | Decimal | DecimalJsLike | number | string | null
    total_sessions?: IntNullableFilter<"tutors"> | number | null
    is_approved?: BoolNullableFilter<"tutors"> | boolean | null
    is_active?: BoolNullableFilter<"tutors"> | boolean | null
    created_at?: DateTimeNullableFilter<"tutors"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tutors"> | Date | string | null
    bookings?: BookingsListRelationFilter
    tutor_availability?: Tutor_availabilityListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type tutorsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    subjects?: SortOrder
    hourly_rate?: SortOrder
    experience_years?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    total_sessions?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tutorsCountOrderByAggregateInput
    _avg?: tutorsAvgOrderByAggregateInput
    _max?: tutorsMaxOrderByAggregateInput
    _min?: tutorsMinOrderByAggregateInput
    _sum?: tutorsSumOrderByAggregateInput
  }

  export type tutorsScalarWhereWithAggregatesInput = {
    AND?: tutorsScalarWhereWithAggregatesInput | tutorsScalarWhereWithAggregatesInput[]
    OR?: tutorsScalarWhereWithAggregatesInput[]
    NOT?: tutorsScalarWhereWithAggregatesInput | tutorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tutors"> | number
    user_id?: IntWithAggregatesFilter<"tutors"> | number
    bio?: StringWithAggregatesFilter<"tutors"> | string
    subjects?: StringNullableListFilter<"tutors">
    hourly_rate?: DecimalWithAggregatesFilter<"tutors"> | Decimal | DecimalJsLike | number | string
    experience_years?: IntNullableWithAggregatesFilter<"tutors"> | number | null
    rating?: DecimalNullableWithAggregatesFilter<"tutors"> | Decimal | DecimalJsLike | number | string | null
    total_sessions?: IntNullableWithAggregatesFilter<"tutors"> | number | null
    is_approved?: BoolNullableWithAggregatesFilter<"tutors"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"tutors"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tutors"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tutors"> | Date | string | null
  }

  export type user_groupsWhereInput = {
    AND?: user_groupsWhereInput | user_groupsWhereInput[]
    OR?: user_groupsWhereInput[]
    NOT?: user_groupsWhereInput | user_groupsWhereInput[]
    user_id?: IntFilter<"user_groups"> | number
    group_id?: IntFilter<"user_groups"> | number
    role?: StringNullableFilter<"user_groups"> | string | null
    joined_at?: DateTimeNullableFilter<"user_groups"> | Date | string | null
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_groupsOrderByWithRelationInput = {
    user_id?: SortOrder
    group_id?: SortOrder
    role?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    groups?: groupsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_groupsWhereUniqueInput = Prisma.AtLeast<{
    user_id_group_id?: user_groupsUser_idGroup_idCompoundUniqueInput
    AND?: user_groupsWhereInput | user_groupsWhereInput[]
    OR?: user_groupsWhereInput[]
    NOT?: user_groupsWhereInput | user_groupsWhereInput[]
    user_id?: IntFilter<"user_groups"> | number
    group_id?: IntFilter<"user_groups"> | number
    role?: StringNullableFilter<"user_groups"> | string | null
    joined_at?: DateTimeNullableFilter<"user_groups"> | Date | string | null
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_group_id">

  export type user_groupsOrderByWithAggregationInput = {
    user_id?: SortOrder
    group_id?: SortOrder
    role?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    _count?: user_groupsCountOrderByAggregateInput
    _avg?: user_groupsAvgOrderByAggregateInput
    _max?: user_groupsMaxOrderByAggregateInput
    _min?: user_groupsMinOrderByAggregateInput
    _sum?: user_groupsSumOrderByAggregateInput
  }

  export type user_groupsScalarWhereWithAggregatesInput = {
    AND?: user_groupsScalarWhereWithAggregatesInput | user_groupsScalarWhereWithAggregatesInput[]
    OR?: user_groupsScalarWhereWithAggregatesInput[]
    NOT?: user_groupsScalarWhereWithAggregatesInput | user_groupsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user_groups"> | number
    group_id?: IntWithAggregatesFilter<"user_groups"> | number
    role?: StringNullableWithAggregatesFilter<"user_groups"> | string | null
    joined_at?: DateTimeNullableWithAggregatesFilter<"user_groups"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    university?: StringNullableFilter<"users"> | string | null
    field_of_study?: StringNullableFilter<"users"> | string | null
    reputation?: IntNullableFilter<"users"> | number | null
    profile_picture?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    answers?: AnswersListRelationFilter
    bookings?: BookingsListRelationFilter
    group_messages?: Group_messagesListRelationFilter
    groups?: GroupsListRelationFilter
    notes?: NotesListRelationFilter
    questions?: QuestionsListRelationFilter
    transactions?: TransactionsListRelationFilter
    tutors?: XOR<TutorsNullableScalarRelationFilter, tutorsWhereInput> | null
    user_groups?: User_groupsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    university?: SortOrderInput | SortOrder
    field_of_study?: SortOrderInput | SortOrder
    reputation?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    answers?: answersOrderByRelationAggregateInput
    bookings?: bookingsOrderByRelationAggregateInput
    group_messages?: group_messagesOrderByRelationAggregateInput
    groups?: groupsOrderByRelationAggregateInput
    notes?: notesOrderByRelationAggregateInput
    questions?: questionsOrderByRelationAggregateInput
    transactions?: transactionsOrderByRelationAggregateInput
    tutors?: tutorsOrderByWithRelationInput
    user_groups?: user_groupsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    university?: StringNullableFilter<"users"> | string | null
    field_of_study?: StringNullableFilter<"users"> | string | null
    reputation?: IntNullableFilter<"users"> | number | null
    profile_picture?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    answers?: AnswersListRelationFilter
    bookings?: BookingsListRelationFilter
    group_messages?: Group_messagesListRelationFilter
    groups?: GroupsListRelationFilter
    notes?: NotesListRelationFilter
    questions?: QuestionsListRelationFilter
    transactions?: TransactionsListRelationFilter
    tutors?: XOR<TutorsNullableScalarRelationFilter, tutorsWhereInput> | null
    user_groups?: User_groupsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    university?: SortOrderInput | SortOrder
    field_of_study?: SortOrderInput | SortOrder
    reputation?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    university?: StringNullableWithAggregatesFilter<"users"> | string | null
    field_of_study?: StringNullableWithAggregatesFilter<"users"> | string | null
    reputation?: IntNullableWithAggregatesFilter<"users"> | number | null
    profile_picture?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type answersCreateInput = {
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutAnswersInput
    questions: questionsCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateInput = {
    id?: number
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    question_id: number
    author_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type answersUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutAnswersNestedInput
    questions?: questionsUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyInput = {
    id?: number
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    question_id: number
    author_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type answersUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsCreateInput = {
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutBookingsInput
    tutors: tutorsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: number
    student_id: number
    tutor_id: number
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
    tutors?: tutorsUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    tutor_id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsCreateManyInput = {
    id?: number
    student_id: number
    tutor_id: number
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    tutor_id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_messagesCreateInput = {
    message: string
    file_url?: string | null
    file_type?: string | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    groups: groupsCreateNestedOneWithoutGroup_messagesInput
    group_messages?: group_messagesCreateNestedOneWithoutOther_group_messagesInput
    other_group_messages?: group_messagesCreateNestedManyWithoutGroup_messagesInput
    users: usersCreateNestedOneWithoutGroup_messagesInput
  }

  export type group_messagesUncheckedCreateInput = {
    id?: number
    group_id: number
    user_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    reply_to?: number | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    other_group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroup_messagesInput
  }

  export type group_messagesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutGroup_messagesNestedInput
    group_messages?: group_messagesUpdateOneWithoutOther_group_messagesNestedInput
    other_group_messages?: group_messagesUpdateManyWithoutGroup_messagesNestedInput
    users?: usersUpdateOneRequiredWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableIntFieldUpdateOperationsInput | number | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_group_messages?: group_messagesUncheckedUpdateManyWithoutGroup_messagesNestedInput
  }

  export type group_messagesCreateManyInput = {
    id?: number
    group_id: number
    user_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    reply_to?: number | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type group_messagesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableIntFieldUpdateOperationsInput | number | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupsCreateInput = {
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesCreateNestedManyWithoutGroupsInput
    users: usersCreateNestedOneWithoutGroupsInput
    notes?: notesCreateNestedManyWithoutGroupsInput
    user_groups?: user_groupsCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    created_by: number
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroupsInput
    notes?: notesUncheckedCreateNestedManyWithoutGroupsInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUpdateManyWithoutGroupsNestedInput
    users?: usersUpdateOneRequiredWithoutGroupsNestedInput
    notes?: notesUpdateManyWithoutGroupsNestedInput
    user_groups?: user_groupsUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: IntFieldUpdateOperationsInput | number
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUncheckedUpdateManyWithoutGroupsNestedInput
    notes?: notesUncheckedUpdateManyWithoutGroupsNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type groupsCreateManyInput = {
    id?: number
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    created_by: number
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type groupsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: IntFieldUpdateOperationsInput | number
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesCreateInput = {
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    groups?: groupsCreateNestedOneWithoutNotesInput
    users: usersCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    uploaded_by: number
    group_id?: number | null
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneWithoutNotesNestedInput
    users?: usersUpdateOneRequiredWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    uploaded_by?: IntFieldUpdateOperationsInput | number
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesCreateManyInput = {
    id?: number
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    uploaded_by: number
    group_id?: number | null
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    uploaded_by?: IntFieldUpdateOperationsInput | number
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsCreateInput = {
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQuestionsInput
    users: usersCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    author_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQuestionsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateManyInput = {
    id?: number
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    author_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type questionsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: string
    status?: string | null
    reference?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    type: string
    status?: string | null
    reference?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type transactionsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsCreateManyInput = {
    id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    type: string
    status?: string | null
    reference?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type transactionsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutor_availabilityCreateInput = {
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tutors: tutorsCreateNestedOneWithoutTutor_availabilityInput
  }

  export type tutor_availabilityUncheckedCreateInput = {
    id?: number
    tutor_id: number
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tutor_availabilityUpdateInput = {
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutors?: tutorsUpdateOneRequiredWithoutTutor_availabilityNestedInput
  }

  export type tutor_availabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutor_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutor_availabilityCreateManyInput = {
    id?: number
    tutor_id: number
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tutor_availabilityUpdateManyMutationInput = {
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutor_availabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutor_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutorsCreateInput = {
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutTutorsInput
    tutor_availability?: tutor_availabilityCreateNestedManyWithoutTutorsInput
    users: usersCreateNestedOneWithoutTutorsInput
  }

  export type tutorsUncheckedCreateInput = {
    id?: number
    user_id: number
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTutorsInput
    tutor_availability?: tutor_availabilityUncheckedCreateNestedManyWithoutTutorsInput
  }

  export type tutorsUpdateInput = {
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutTutorsNestedInput
    tutor_availability?: tutor_availabilityUpdateManyWithoutTutorsNestedInput
    users?: usersUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type tutorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutTutorsNestedInput
    tutor_availability?: tutor_availabilityUncheckedUpdateManyWithoutTutorsNestedInput
  }

  export type tutorsCreateManyInput = {
    id?: number
    user_id: number
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tutorsUpdateManyMutationInput = {
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_groupsCreateInput = {
    role?: string | null
    joined_at?: Date | string | null
    groups: groupsCreateNestedOneWithoutUser_groupsInput
    users: usersCreateNestedOneWithoutUser_groupsInput
  }

  export type user_groupsUncheckedCreateInput = {
    user_id: number
    group_id: number
    role?: string | null
    joined_at?: Date | string | null
  }

  export type user_groupsUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutUser_groupsNestedInput
    users?: usersUpdateOneRequiredWithoutUser_groupsNestedInput
  }

  export type user_groupsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_groupsCreateManyInput = {
    user_id: number
    group_id: number
    role?: string | null
    joined_at?: Date | string | null
  }

  export type user_groupsUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_groupsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type QuestionsScalarRelationFilter = {
    is?: questionsWhereInput
    isNot?: questionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type answersCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    votes?: SortOrder
    is_accepted?: SortOrder
    question_id?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type answersAvgOrderByAggregateInput = {
    id?: SortOrder
    votes?: SortOrder
    question_id?: SortOrder
    author_id?: SortOrder
  }

  export type answersMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    votes?: SortOrder
    is_accepted?: SortOrder
    question_id?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type answersMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    votes?: SortOrder
    is_accepted?: SortOrder
    question_id?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type answersSumOrderByAggregateInput = {
    id?: SortOrder
    votes?: SortOrder
    question_id?: SortOrder
    author_id?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type TutorsScalarRelationFilter = {
    is?: tutorsWhereInput
    isNot?: tutorsWhereInput
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    tutor_id?: SortOrder
    subject?: SortOrder
    session_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration_hours?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    meeting_link?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    tutor_id?: SortOrder
    duration_hours?: SortOrder
    total_amount?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    tutor_id?: SortOrder
    subject?: SortOrder
    session_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration_hours?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    meeting_link?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    tutor_id?: SortOrder
    subject?: SortOrder
    session_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration_hours?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    meeting_link?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    tutor_id?: SortOrder
    duration_hours?: SortOrder
    total_amount?: SortOrder
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

  export type GroupsScalarRelationFilter = {
    is?: groupsWhereInput
    isNot?: groupsWhereInput
  }

  export type Group_messagesNullableScalarRelationFilter = {
    is?: group_messagesWhereInput | null
    isNot?: group_messagesWhereInput | null
  }

  export type Group_messagesListRelationFilter = {
    every?: group_messagesWhereInput
    some?: group_messagesWhereInput
    none?: group_messagesWhereInput
  }

  export type group_messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type group_messagesCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    reply_to?: SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type group_messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    reply_to?: SortOrder
  }

  export type group_messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    reply_to?: SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type group_messagesMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    reply_to?: SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type group_messagesSumOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    reply_to?: SortOrder
  }

  export type NotesListRelationFilter = {
    every?: notesWhereInput
    some?: notesWhereInput
    none?: notesWhereInput
  }

  export type User_groupsListRelationFilter = {
    every?: user_groupsWhereInput
    some?: user_groupsWhereInput
    none?: user_groupsWhereInput
  }

  export type notesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    max_members?: SortOrder
    current_members?: SortOrder
    created_by?: SortOrder
    requires_approval?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type groupsAvgOrderByAggregateInput = {
    id?: SortOrder
    max_members?: SortOrder
    current_members?: SortOrder
    created_by?: SortOrder
  }

  export type groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    max_members?: SortOrder
    current_members?: SortOrder
    created_by?: SortOrder
    requires_approval?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type groupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    max_members?: SortOrder
    current_members?: SortOrder
    created_by?: SortOrder
    requires_approval?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type groupsSumOrderByAggregateInput = {
    id?: SortOrder
    max_members?: SortOrder
    current_members?: SortOrder
    created_by?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type GroupsNullableScalarRelationFilter = {
    is?: groupsWhereInput | null
    isNot?: groupsWhereInput | null
  }

  export type notesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    file_path?: SortOrder
    file_type?: SortOrder
    downloads?: SortOrder
    uploaded_by?: SortOrder
    group_id?: SortOrder
    is_premium?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notesAvgOrderByAggregateInput = {
    id?: SortOrder
    downloads?: SortOrder
    uploaded_by?: SortOrder
    group_id?: SortOrder
    price?: SortOrder
  }

  export type notesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    file_path?: SortOrder
    file_type?: SortOrder
    downloads?: SortOrder
    uploaded_by?: SortOrder
    group_id?: SortOrder
    is_premium?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    file_path?: SortOrder
    file_type?: SortOrder
    downloads?: SortOrder
    uploaded_by?: SortOrder
    group_id?: SortOrder
    is_premium?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notesSumOrderByAggregateInput = {
    id?: SortOrder
    downloads?: SortOrder
    uploaded_by?: SortOrder
    group_id?: SortOrder
    price?: SortOrder
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

  export type AnswersListRelationFilter = {
    every?: answersWhereInput
    some?: answersWhereInput
    none?: answersWhereInput
  }

  export type answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    tags?: SortOrder
    votes?: SortOrder
    answers_count?: SortOrder
    views?: SortOrder
    is_solved?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type questionsAvgOrderByAggregateInput = {
    id?: SortOrder
    votes?: SortOrder
    answers_count?: SortOrder
    views?: SortOrder
    author_id?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    votes?: SortOrder
    answers_count?: SortOrder
    views?: SortOrder
    is_solved?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    votes?: SortOrder
    answers_count?: SortOrder
    views?: SortOrder
    is_solved?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type questionsSumOrderByAggregateInput = {
    id?: SortOrder
    votes?: SortOrder
    answers_count?: SortOrder
    views?: SortOrder
    author_id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type tutor_availabilityCountOrderByAggregateInput = {
    id?: SortOrder
    tutor_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutor_availabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    tutor_id?: SortOrder
  }

  export type tutor_availabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    tutor_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutor_availabilityMinOrderByAggregateInput = {
    id?: SortOrder
    tutor_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutor_availabilitySumOrderByAggregateInput = {
    id?: SortOrder
    tutor_id?: SortOrder
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type Tutor_availabilityListRelationFilter = {
    every?: tutor_availabilityWhereInput
    some?: tutor_availabilityWhereInput
    none?: tutor_availabilityWhereInput
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tutor_availabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tutorsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    subjects?: SortOrder
    hourly_rate?: SortOrder
    experience_years?: SortOrder
    rating?: SortOrder
    total_sessions?: SortOrder
    is_approved?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutorsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    hourly_rate?: SortOrder
    experience_years?: SortOrder
    rating?: SortOrder
    total_sessions?: SortOrder
  }

  export type tutorsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    hourly_rate?: SortOrder
    experience_years?: SortOrder
    rating?: SortOrder
    total_sessions?: SortOrder
    is_approved?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutorsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    hourly_rate?: SortOrder
    experience_years?: SortOrder
    rating?: SortOrder
    total_sessions?: SortOrder
    is_approved?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutorsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    hourly_rate?: SortOrder
    experience_years?: SortOrder
    rating?: SortOrder
    total_sessions?: SortOrder
  }

  export type user_groupsUser_idGroup_idCompoundUniqueInput = {
    user_id: number
    group_id: number
  }

  export type user_groupsCountOrderByAggregateInput = {
    user_id?: SortOrder
    group_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type user_groupsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type user_groupsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    group_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type user_groupsMinOrderByAggregateInput = {
    user_id?: SortOrder
    group_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type user_groupsSumOrderByAggregateInput = {
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type GroupsListRelationFilter = {
    every?: groupsWhereInput
    some?: groupsWhereInput
    none?: groupsWhereInput
  }

  export type QuestionsListRelationFilter = {
    every?: questionsWhereInput
    some?: questionsWhereInput
    none?: questionsWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type TutorsNullableScalarRelationFilter = {
    is?: tutorsWhereInput | null
    isNot?: tutorsWhereInput | null
  }

  export type groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    university?: SortOrder
    field_of_study?: SortOrder
    reputation?: SortOrder
    profile_picture?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    reputation?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    university?: SortOrder
    field_of_study?: SortOrder
    reputation?: SortOrder
    profile_picture?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    university?: SortOrder
    field_of_study?: SortOrder
    reputation?: SortOrder
    profile_picture?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    reputation?: SortOrder
  }

  export type usersCreateNestedOneWithoutAnswersInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    connect?: usersWhereUniqueInput
  }

  export type questionsCreateNestedOneWithoutAnswersInput = {
    create?: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionsCreateOrConnectWithoutAnswersInput
    connect?: questionsWhereUniqueInput
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    upsert?: usersUpsertWithoutAnswersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAnswersInput, usersUpdateWithoutAnswersInput>, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type questionsUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionsCreateOrConnectWithoutAnswersInput
    upsert?: questionsUpsertWithoutAnswersInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutAnswersInput, questionsUpdateWithoutAnswersInput>, questionsUncheckedUpdateWithoutAnswersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    connect?: usersWhereUniqueInput
  }

  export type tutorsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<tutorsCreateWithoutBookingsInput, tutorsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutBookingsInput
    connect?: tutorsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    upsert?: usersUpsertWithoutBookingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookingsInput, usersUpdateWithoutBookingsInput>, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type tutorsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<tutorsCreateWithoutBookingsInput, tutorsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutBookingsInput
    upsert?: tutorsUpsertWithoutBookingsInput
    connect?: tutorsWhereUniqueInput
    update?: XOR<XOR<tutorsUpdateToOneWithWhereWithoutBookingsInput, tutorsUpdateWithoutBookingsInput>, tutorsUncheckedUpdateWithoutBookingsInput>
  }

  export type groupsCreateNestedOneWithoutGroup_messagesInput = {
    create?: XOR<groupsCreateWithoutGroup_messagesInput, groupsUncheckedCreateWithoutGroup_messagesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutGroup_messagesInput
    connect?: groupsWhereUniqueInput
  }

  export type group_messagesCreateNestedOneWithoutOther_group_messagesInput = {
    create?: XOR<group_messagesCreateWithoutOther_group_messagesInput, group_messagesUncheckedCreateWithoutOther_group_messagesInput>
    connectOrCreate?: group_messagesCreateOrConnectWithoutOther_group_messagesInput
    connect?: group_messagesWhereUniqueInput
  }

  export type group_messagesCreateNestedManyWithoutGroup_messagesInput = {
    create?: XOR<group_messagesCreateWithoutGroup_messagesInput, group_messagesUncheckedCreateWithoutGroup_messagesInput> | group_messagesCreateWithoutGroup_messagesInput[] | group_messagesUncheckedCreateWithoutGroup_messagesInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroup_messagesInput | group_messagesCreateOrConnectWithoutGroup_messagesInput[]
    createMany?: group_messagesCreateManyGroup_messagesInputEnvelope
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutGroup_messagesInput = {
    create?: XOR<usersCreateWithoutGroup_messagesInput, usersUncheckedCreateWithoutGroup_messagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroup_messagesInput
    connect?: usersWhereUniqueInput
  }

  export type group_messagesUncheckedCreateNestedManyWithoutGroup_messagesInput = {
    create?: XOR<group_messagesCreateWithoutGroup_messagesInput, group_messagesUncheckedCreateWithoutGroup_messagesInput> | group_messagesCreateWithoutGroup_messagesInput[] | group_messagesUncheckedCreateWithoutGroup_messagesInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroup_messagesInput | group_messagesCreateOrConnectWithoutGroup_messagesInput[]
    createMany?: group_messagesCreateManyGroup_messagesInputEnvelope
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
  }

  export type groupsUpdateOneRequiredWithoutGroup_messagesNestedInput = {
    create?: XOR<groupsCreateWithoutGroup_messagesInput, groupsUncheckedCreateWithoutGroup_messagesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutGroup_messagesInput
    upsert?: groupsUpsertWithoutGroup_messagesInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutGroup_messagesInput, groupsUpdateWithoutGroup_messagesInput>, groupsUncheckedUpdateWithoutGroup_messagesInput>
  }

  export type group_messagesUpdateOneWithoutOther_group_messagesNestedInput = {
    create?: XOR<group_messagesCreateWithoutOther_group_messagesInput, group_messagesUncheckedCreateWithoutOther_group_messagesInput>
    connectOrCreate?: group_messagesCreateOrConnectWithoutOther_group_messagesInput
    upsert?: group_messagesUpsertWithoutOther_group_messagesInput
    disconnect?: group_messagesWhereInput | boolean
    delete?: group_messagesWhereInput | boolean
    connect?: group_messagesWhereUniqueInput
    update?: XOR<XOR<group_messagesUpdateToOneWithWhereWithoutOther_group_messagesInput, group_messagesUpdateWithoutOther_group_messagesInput>, group_messagesUncheckedUpdateWithoutOther_group_messagesInput>
  }

  export type group_messagesUpdateManyWithoutGroup_messagesNestedInput = {
    create?: XOR<group_messagesCreateWithoutGroup_messagesInput, group_messagesUncheckedCreateWithoutGroup_messagesInput> | group_messagesCreateWithoutGroup_messagesInput[] | group_messagesUncheckedCreateWithoutGroup_messagesInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroup_messagesInput | group_messagesCreateOrConnectWithoutGroup_messagesInput[]
    upsert?: group_messagesUpsertWithWhereUniqueWithoutGroup_messagesInput | group_messagesUpsertWithWhereUniqueWithoutGroup_messagesInput[]
    createMany?: group_messagesCreateManyGroup_messagesInputEnvelope
    set?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    disconnect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    delete?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    update?: group_messagesUpdateWithWhereUniqueWithoutGroup_messagesInput | group_messagesUpdateWithWhereUniqueWithoutGroup_messagesInput[]
    updateMany?: group_messagesUpdateManyWithWhereWithoutGroup_messagesInput | group_messagesUpdateManyWithWhereWithoutGroup_messagesInput[]
    deleteMany?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutGroup_messagesNestedInput = {
    create?: XOR<usersCreateWithoutGroup_messagesInput, usersUncheckedCreateWithoutGroup_messagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroup_messagesInput
    upsert?: usersUpsertWithoutGroup_messagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGroup_messagesInput, usersUpdateWithoutGroup_messagesInput>, usersUncheckedUpdateWithoutGroup_messagesInput>
  }

  export type group_messagesUncheckedUpdateManyWithoutGroup_messagesNestedInput = {
    create?: XOR<group_messagesCreateWithoutGroup_messagesInput, group_messagesUncheckedCreateWithoutGroup_messagesInput> | group_messagesCreateWithoutGroup_messagesInput[] | group_messagesUncheckedCreateWithoutGroup_messagesInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroup_messagesInput | group_messagesCreateOrConnectWithoutGroup_messagesInput[]
    upsert?: group_messagesUpsertWithWhereUniqueWithoutGroup_messagesInput | group_messagesUpsertWithWhereUniqueWithoutGroup_messagesInput[]
    createMany?: group_messagesCreateManyGroup_messagesInputEnvelope
    set?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    disconnect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    delete?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    update?: group_messagesUpdateWithWhereUniqueWithoutGroup_messagesInput | group_messagesUpdateWithWhereUniqueWithoutGroup_messagesInput[]
    updateMany?: group_messagesUpdateManyWithWhereWithoutGroup_messagesInput | group_messagesUpdateManyWithWhereWithoutGroup_messagesInput[]
    deleteMany?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
  }

  export type group_messagesCreateNestedManyWithoutGroupsInput = {
    create?: XOR<group_messagesCreateWithoutGroupsInput, group_messagesUncheckedCreateWithoutGroupsInput> | group_messagesCreateWithoutGroupsInput[] | group_messagesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroupsInput | group_messagesCreateOrConnectWithoutGroupsInput[]
    createMany?: group_messagesCreateManyGroupsInputEnvelope
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutGroupsInput = {
    create?: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupsInput
    connect?: usersWhereUniqueInput
  }

  export type notesCreateNestedManyWithoutGroupsInput = {
    create?: XOR<notesCreateWithoutGroupsInput, notesUncheckedCreateWithoutGroupsInput> | notesCreateWithoutGroupsInput[] | notesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutGroupsInput | notesCreateOrConnectWithoutGroupsInput[]
    createMany?: notesCreateManyGroupsInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type user_groupsCreateNestedManyWithoutGroupsInput = {
    create?: XOR<user_groupsCreateWithoutGroupsInput, user_groupsUncheckedCreateWithoutGroupsInput> | user_groupsCreateWithoutGroupsInput[] | user_groupsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutGroupsInput | user_groupsCreateOrConnectWithoutGroupsInput[]
    createMany?: user_groupsCreateManyGroupsInputEnvelope
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
  }

  export type group_messagesUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<group_messagesCreateWithoutGroupsInput, group_messagesUncheckedCreateWithoutGroupsInput> | group_messagesCreateWithoutGroupsInput[] | group_messagesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroupsInput | group_messagesCreateOrConnectWithoutGroupsInput[]
    createMany?: group_messagesCreateManyGroupsInputEnvelope
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
  }

  export type notesUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<notesCreateWithoutGroupsInput, notesUncheckedCreateWithoutGroupsInput> | notesCreateWithoutGroupsInput[] | notesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutGroupsInput | notesCreateOrConnectWithoutGroupsInput[]
    createMany?: notesCreateManyGroupsInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type user_groupsUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<user_groupsCreateWithoutGroupsInput, user_groupsUncheckedCreateWithoutGroupsInput> | user_groupsCreateWithoutGroupsInput[] | user_groupsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutGroupsInput | user_groupsCreateOrConnectWithoutGroupsInput[]
    createMany?: user_groupsCreateManyGroupsInputEnvelope
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
  }

  export type group_messagesUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<group_messagesCreateWithoutGroupsInput, group_messagesUncheckedCreateWithoutGroupsInput> | group_messagesCreateWithoutGroupsInput[] | group_messagesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroupsInput | group_messagesCreateOrConnectWithoutGroupsInput[]
    upsert?: group_messagesUpsertWithWhereUniqueWithoutGroupsInput | group_messagesUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: group_messagesCreateManyGroupsInputEnvelope
    set?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    disconnect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    delete?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    update?: group_messagesUpdateWithWhereUniqueWithoutGroupsInput | group_messagesUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: group_messagesUpdateManyWithWhereWithoutGroupsInput | group_messagesUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupsInput
    upsert?: usersUpsertWithoutGroupsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGroupsInput, usersUpdateWithoutGroupsInput>, usersUncheckedUpdateWithoutGroupsInput>
  }

  export type notesUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<notesCreateWithoutGroupsInput, notesUncheckedCreateWithoutGroupsInput> | notesCreateWithoutGroupsInput[] | notesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutGroupsInput | notesCreateOrConnectWithoutGroupsInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutGroupsInput | notesUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: notesCreateManyGroupsInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutGroupsInput | notesUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: notesUpdateManyWithWhereWithoutGroupsInput | notesUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type user_groupsUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<user_groupsCreateWithoutGroupsInput, user_groupsUncheckedCreateWithoutGroupsInput> | user_groupsCreateWithoutGroupsInput[] | user_groupsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutGroupsInput | user_groupsCreateOrConnectWithoutGroupsInput[]
    upsert?: user_groupsUpsertWithWhereUniqueWithoutGroupsInput | user_groupsUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: user_groupsCreateManyGroupsInputEnvelope
    set?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    disconnect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    delete?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    update?: user_groupsUpdateWithWhereUniqueWithoutGroupsInput | user_groupsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: user_groupsUpdateManyWithWhereWithoutGroupsInput | user_groupsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: user_groupsScalarWhereInput | user_groupsScalarWhereInput[]
  }

  export type group_messagesUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<group_messagesCreateWithoutGroupsInput, group_messagesUncheckedCreateWithoutGroupsInput> | group_messagesCreateWithoutGroupsInput[] | group_messagesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutGroupsInput | group_messagesCreateOrConnectWithoutGroupsInput[]
    upsert?: group_messagesUpsertWithWhereUniqueWithoutGroupsInput | group_messagesUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: group_messagesCreateManyGroupsInputEnvelope
    set?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    disconnect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    delete?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    update?: group_messagesUpdateWithWhereUniqueWithoutGroupsInput | group_messagesUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: group_messagesUpdateManyWithWhereWithoutGroupsInput | group_messagesUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
  }

  export type notesUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<notesCreateWithoutGroupsInput, notesUncheckedCreateWithoutGroupsInput> | notesCreateWithoutGroupsInput[] | notesUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutGroupsInput | notesCreateOrConnectWithoutGroupsInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutGroupsInput | notesUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: notesCreateManyGroupsInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutGroupsInput | notesUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: notesUpdateManyWithWhereWithoutGroupsInput | notesUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type user_groupsUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<user_groupsCreateWithoutGroupsInput, user_groupsUncheckedCreateWithoutGroupsInput> | user_groupsCreateWithoutGroupsInput[] | user_groupsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutGroupsInput | user_groupsCreateOrConnectWithoutGroupsInput[]
    upsert?: user_groupsUpsertWithWhereUniqueWithoutGroupsInput | user_groupsUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: user_groupsCreateManyGroupsInputEnvelope
    set?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    disconnect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    delete?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    update?: user_groupsUpdateWithWhereUniqueWithoutGroupsInput | user_groupsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: user_groupsUpdateManyWithWhereWithoutGroupsInput | user_groupsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: user_groupsScalarWhereInput | user_groupsScalarWhereInput[]
  }

  export type notesCreatetagsInput = {
    set: string[]
  }

  export type groupsCreateNestedOneWithoutNotesInput = {
    create?: XOR<groupsCreateWithoutNotesInput, groupsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutNotesInput
    connect?: groupsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutNotesInput = {
    create?: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type notesUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type groupsUpdateOneWithoutNotesNestedInput = {
    create?: XOR<groupsCreateWithoutNotesInput, groupsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutNotesInput
    upsert?: groupsUpsertWithoutNotesInput
    disconnect?: groupsWhereInput | boolean
    delete?: groupsWhereInput | boolean
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutNotesInput, groupsUpdateWithoutNotesInput>, groupsUncheckedUpdateWithoutNotesInput>
  }

  export type usersUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotesInput
    upsert?: usersUpsertWithoutNotesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotesInput, usersUpdateWithoutNotesInput>, usersUncheckedUpdateWithoutNotesInput>
  }

  export type questionsCreatetagsInput = {
    set: string[]
  }

  export type answersCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuestionsInput
    connect?: usersWhereUniqueInput
  }

  export type answersUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type questionsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type answersUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutQuestionsInput | answersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutQuestionsInput | answersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: answersUpdateManyWithWhereWithoutQuestionsInput | answersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuestionsInput
    upsert?: usersUpsertWithoutQuestionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutQuestionsInput, usersUpdateWithoutQuestionsInput>, usersUncheckedUpdateWithoutQuestionsInput>
  }

  export type answersUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutQuestionsInput | answersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutQuestionsInput | answersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: answersUpdateManyWithWhereWithoutQuestionsInput | answersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type tutorsCreateNestedOneWithoutTutor_availabilityInput = {
    create?: XOR<tutorsCreateWithoutTutor_availabilityInput, tutorsUncheckedCreateWithoutTutor_availabilityInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutTutor_availabilityInput
    connect?: tutorsWhereUniqueInput
  }

  export type tutorsUpdateOneRequiredWithoutTutor_availabilityNestedInput = {
    create?: XOR<tutorsCreateWithoutTutor_availabilityInput, tutorsUncheckedCreateWithoutTutor_availabilityInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutTutor_availabilityInput
    upsert?: tutorsUpsertWithoutTutor_availabilityInput
    connect?: tutorsWhereUniqueInput
    update?: XOR<XOR<tutorsUpdateToOneWithWhereWithoutTutor_availabilityInput, tutorsUpdateWithoutTutor_availabilityInput>, tutorsUncheckedUpdateWithoutTutor_availabilityInput>
  }

  export type tutorsCreatesubjectsInput = {
    set: string[]
  }

  export type bookingsCreateNestedManyWithoutTutorsInput = {
    create?: XOR<bookingsCreateWithoutTutorsInput, bookingsUncheckedCreateWithoutTutorsInput> | bookingsCreateWithoutTutorsInput[] | bookingsUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTutorsInput | bookingsCreateOrConnectWithoutTutorsInput[]
    createMany?: bookingsCreateManyTutorsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type tutor_availabilityCreateNestedManyWithoutTutorsInput = {
    create?: XOR<tutor_availabilityCreateWithoutTutorsInput, tutor_availabilityUncheckedCreateWithoutTutorsInput> | tutor_availabilityCreateWithoutTutorsInput[] | tutor_availabilityUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: tutor_availabilityCreateOrConnectWithoutTutorsInput | tutor_availabilityCreateOrConnectWithoutTutorsInput[]
    createMany?: tutor_availabilityCreateManyTutorsInputEnvelope
    connect?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTutorsInput = {
    create?: XOR<usersCreateWithoutTutorsInput, usersUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTutorsInput
    connect?: usersWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutTutorsInput = {
    create?: XOR<bookingsCreateWithoutTutorsInput, bookingsUncheckedCreateWithoutTutorsInput> | bookingsCreateWithoutTutorsInput[] | bookingsUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTutorsInput | bookingsCreateOrConnectWithoutTutorsInput[]
    createMany?: bookingsCreateManyTutorsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type tutor_availabilityUncheckedCreateNestedManyWithoutTutorsInput = {
    create?: XOR<tutor_availabilityCreateWithoutTutorsInput, tutor_availabilityUncheckedCreateWithoutTutorsInput> | tutor_availabilityCreateWithoutTutorsInput[] | tutor_availabilityUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: tutor_availabilityCreateOrConnectWithoutTutorsInput | tutor_availabilityCreateOrConnectWithoutTutorsInput[]
    createMany?: tutor_availabilityCreateManyTutorsInputEnvelope
    connect?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
  }

  export type tutorsUpdatesubjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type bookingsUpdateManyWithoutTutorsNestedInput = {
    create?: XOR<bookingsCreateWithoutTutorsInput, bookingsUncheckedCreateWithoutTutorsInput> | bookingsCreateWithoutTutorsInput[] | bookingsUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTutorsInput | bookingsCreateOrConnectWithoutTutorsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTutorsInput | bookingsUpsertWithWhereUniqueWithoutTutorsInput[]
    createMany?: bookingsCreateManyTutorsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTutorsInput | bookingsUpdateWithWhereUniqueWithoutTutorsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTutorsInput | bookingsUpdateManyWithWhereWithoutTutorsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type tutor_availabilityUpdateManyWithoutTutorsNestedInput = {
    create?: XOR<tutor_availabilityCreateWithoutTutorsInput, tutor_availabilityUncheckedCreateWithoutTutorsInput> | tutor_availabilityCreateWithoutTutorsInput[] | tutor_availabilityUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: tutor_availabilityCreateOrConnectWithoutTutorsInput | tutor_availabilityCreateOrConnectWithoutTutorsInput[]
    upsert?: tutor_availabilityUpsertWithWhereUniqueWithoutTutorsInput | tutor_availabilityUpsertWithWhereUniqueWithoutTutorsInput[]
    createMany?: tutor_availabilityCreateManyTutorsInputEnvelope
    set?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    disconnect?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    delete?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    connect?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    update?: tutor_availabilityUpdateWithWhereUniqueWithoutTutorsInput | tutor_availabilityUpdateWithWhereUniqueWithoutTutorsInput[]
    updateMany?: tutor_availabilityUpdateManyWithWhereWithoutTutorsInput | tutor_availabilityUpdateManyWithWhereWithoutTutorsInput[]
    deleteMany?: tutor_availabilityScalarWhereInput | tutor_availabilityScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutTutorsNestedInput = {
    create?: XOR<usersCreateWithoutTutorsInput, usersUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTutorsInput
    upsert?: usersUpsertWithoutTutorsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTutorsInput, usersUpdateWithoutTutorsInput>, usersUncheckedUpdateWithoutTutorsInput>
  }

  export type bookingsUncheckedUpdateManyWithoutTutorsNestedInput = {
    create?: XOR<bookingsCreateWithoutTutorsInput, bookingsUncheckedCreateWithoutTutorsInput> | bookingsCreateWithoutTutorsInput[] | bookingsUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTutorsInput | bookingsCreateOrConnectWithoutTutorsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTutorsInput | bookingsUpsertWithWhereUniqueWithoutTutorsInput[]
    createMany?: bookingsCreateManyTutorsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTutorsInput | bookingsUpdateWithWhereUniqueWithoutTutorsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTutorsInput | bookingsUpdateManyWithWhereWithoutTutorsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type tutor_availabilityUncheckedUpdateManyWithoutTutorsNestedInput = {
    create?: XOR<tutor_availabilityCreateWithoutTutorsInput, tutor_availabilityUncheckedCreateWithoutTutorsInput> | tutor_availabilityCreateWithoutTutorsInput[] | tutor_availabilityUncheckedCreateWithoutTutorsInput[]
    connectOrCreate?: tutor_availabilityCreateOrConnectWithoutTutorsInput | tutor_availabilityCreateOrConnectWithoutTutorsInput[]
    upsert?: tutor_availabilityUpsertWithWhereUniqueWithoutTutorsInput | tutor_availabilityUpsertWithWhereUniqueWithoutTutorsInput[]
    createMany?: tutor_availabilityCreateManyTutorsInputEnvelope
    set?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    disconnect?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    delete?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    connect?: tutor_availabilityWhereUniqueInput | tutor_availabilityWhereUniqueInput[]
    update?: tutor_availabilityUpdateWithWhereUniqueWithoutTutorsInput | tutor_availabilityUpdateWithWhereUniqueWithoutTutorsInput[]
    updateMany?: tutor_availabilityUpdateManyWithWhereWithoutTutorsInput | tutor_availabilityUpdateManyWithWhereWithoutTutorsInput[]
    deleteMany?: tutor_availabilityScalarWhereInput | tutor_availabilityScalarWhereInput[]
  }

  export type groupsCreateNestedOneWithoutUser_groupsInput = {
    create?: XOR<groupsCreateWithoutUser_groupsInput, groupsUncheckedCreateWithoutUser_groupsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutUser_groupsInput
    connect?: groupsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_groupsInput = {
    create?: XOR<usersCreateWithoutUser_groupsInput, usersUncheckedCreateWithoutUser_groupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_groupsInput
    connect?: usersWhereUniqueInput
  }

  export type groupsUpdateOneRequiredWithoutUser_groupsNestedInput = {
    create?: XOR<groupsCreateWithoutUser_groupsInput, groupsUncheckedCreateWithoutUser_groupsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutUser_groupsInput
    upsert?: groupsUpsertWithoutUser_groupsInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutUser_groupsInput, groupsUpdateWithoutUser_groupsInput>, groupsUncheckedUpdateWithoutUser_groupsInput>
  }

  export type usersUpdateOneRequiredWithoutUser_groupsNestedInput = {
    create?: XOR<usersCreateWithoutUser_groupsInput, usersUncheckedCreateWithoutUser_groupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_groupsInput
    upsert?: usersUpsertWithoutUser_groupsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_groupsInput, usersUpdateWithoutUser_groupsInput>, usersUncheckedUpdateWithoutUser_groupsInput>
  }

  export type answersCreateNestedManyWithoutUsersInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type bookingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type group_messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<group_messagesCreateWithoutUsersInput, group_messagesUncheckedCreateWithoutUsersInput> | group_messagesCreateWithoutUsersInput[] | group_messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutUsersInput | group_messagesCreateOrConnectWithoutUsersInput[]
    createMany?: group_messagesCreateManyUsersInputEnvelope
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
  }

  export type groupsCreateNestedManyWithoutUsersInput = {
    create?: XOR<groupsCreateWithoutUsersInput, groupsUncheckedCreateWithoutUsersInput> | groupsCreateWithoutUsersInput[] | groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutUsersInput | groupsCreateOrConnectWithoutUsersInput[]
    createMany?: groupsCreateManyUsersInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type notesCreateNestedManyWithoutUsersInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type questionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type transactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type tutorsCreateNestedOneWithoutUsersInput = {
    create?: XOR<tutorsCreateWithoutUsersInput, tutorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutUsersInput
    connect?: tutorsWhereUniqueInput
  }

  export type user_groupsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_groupsCreateWithoutUsersInput, user_groupsUncheckedCreateWithoutUsersInput> | user_groupsCreateWithoutUsersInput[] | user_groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutUsersInput | user_groupsCreateOrConnectWithoutUsersInput[]
    createMany?: user_groupsCreateManyUsersInputEnvelope
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
  }

  export type answersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type group_messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<group_messagesCreateWithoutUsersInput, group_messagesUncheckedCreateWithoutUsersInput> | group_messagesCreateWithoutUsersInput[] | group_messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutUsersInput | group_messagesCreateOrConnectWithoutUsersInput[]
    createMany?: group_messagesCreateManyUsersInputEnvelope
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
  }

  export type groupsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<groupsCreateWithoutUsersInput, groupsUncheckedCreateWithoutUsersInput> | groupsCreateWithoutUsersInput[] | groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutUsersInput | groupsCreateOrConnectWithoutUsersInput[]
    createMany?: groupsCreateManyUsersInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type notesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type tutorsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<tutorsCreateWithoutUsersInput, tutorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutUsersInput
    connect?: tutorsWhereUniqueInput
  }

  export type user_groupsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_groupsCreateWithoutUsersInput, user_groupsUncheckedCreateWithoutUsersInput> | user_groupsCreateWithoutUsersInput[] | user_groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutUsersInput | user_groupsCreateOrConnectWithoutUsersInput[]
    createMany?: user_groupsCreateManyUsersInputEnvelope
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
  }

  export type answersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutUsersInput | answersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutUsersInput | answersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: answersUpdateManyWithWhereWithoutUsersInput | answersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type bookingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type group_messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<group_messagesCreateWithoutUsersInput, group_messagesUncheckedCreateWithoutUsersInput> | group_messagesCreateWithoutUsersInput[] | group_messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutUsersInput | group_messagesCreateOrConnectWithoutUsersInput[]
    upsert?: group_messagesUpsertWithWhereUniqueWithoutUsersInput | group_messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: group_messagesCreateManyUsersInputEnvelope
    set?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    disconnect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    delete?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    update?: group_messagesUpdateWithWhereUniqueWithoutUsersInput | group_messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: group_messagesUpdateManyWithWhereWithoutUsersInput | group_messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
  }

  export type groupsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<groupsCreateWithoutUsersInput, groupsUncheckedCreateWithoutUsersInput> | groupsCreateWithoutUsersInput[] | groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutUsersInput | groupsCreateOrConnectWithoutUsersInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutUsersInput | groupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: groupsCreateManyUsersInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutUsersInput | groupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutUsersInput | groupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type notesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutUsersInput | notesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutUsersInput | notesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notesUpdateManyWithWhereWithoutUsersInput | notesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type questionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutUsersInput | questionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutUsersInput | questionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutUsersInput | questionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type transactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type tutorsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<tutorsCreateWithoutUsersInput, tutorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutUsersInput
    upsert?: tutorsUpsertWithoutUsersInput
    disconnect?: tutorsWhereInput | boolean
    delete?: tutorsWhereInput | boolean
    connect?: tutorsWhereUniqueInput
    update?: XOR<XOR<tutorsUpdateToOneWithWhereWithoutUsersInput, tutorsUpdateWithoutUsersInput>, tutorsUncheckedUpdateWithoutUsersInput>
  }

  export type user_groupsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_groupsCreateWithoutUsersInput, user_groupsUncheckedCreateWithoutUsersInput> | user_groupsCreateWithoutUsersInput[] | user_groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutUsersInput | user_groupsCreateOrConnectWithoutUsersInput[]
    upsert?: user_groupsUpsertWithWhereUniqueWithoutUsersInput | user_groupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_groupsCreateManyUsersInputEnvelope
    set?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    disconnect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    delete?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    update?: user_groupsUpdateWithWhereUniqueWithoutUsersInput | user_groupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_groupsUpdateManyWithWhereWithoutUsersInput | user_groupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_groupsScalarWhereInput | user_groupsScalarWhereInput[]
  }

  export type answersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutUsersInput | answersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutUsersInput | answersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: answersUpdateManyWithWhereWithoutUsersInput | answersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type group_messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<group_messagesCreateWithoutUsersInput, group_messagesUncheckedCreateWithoutUsersInput> | group_messagesCreateWithoutUsersInput[] | group_messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: group_messagesCreateOrConnectWithoutUsersInput | group_messagesCreateOrConnectWithoutUsersInput[]
    upsert?: group_messagesUpsertWithWhereUniqueWithoutUsersInput | group_messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: group_messagesCreateManyUsersInputEnvelope
    set?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    disconnect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    delete?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    connect?: group_messagesWhereUniqueInput | group_messagesWhereUniqueInput[]
    update?: group_messagesUpdateWithWhereUniqueWithoutUsersInput | group_messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: group_messagesUpdateManyWithWhereWithoutUsersInput | group_messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
  }

  export type groupsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<groupsCreateWithoutUsersInput, groupsUncheckedCreateWithoutUsersInput> | groupsCreateWithoutUsersInput[] | groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutUsersInput | groupsCreateOrConnectWithoutUsersInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutUsersInput | groupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: groupsCreateManyUsersInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutUsersInput | groupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutUsersInput | groupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type notesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutUsersInput | notesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutUsersInput | notesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notesUpdateManyWithWhereWithoutUsersInput | notesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutUsersInput | questionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutUsersInput | questionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutUsersInput | questionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type tutorsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<tutorsCreateWithoutUsersInput, tutorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tutorsCreateOrConnectWithoutUsersInput
    upsert?: tutorsUpsertWithoutUsersInput
    disconnect?: tutorsWhereInput | boolean
    delete?: tutorsWhereInput | boolean
    connect?: tutorsWhereUniqueInput
    update?: XOR<XOR<tutorsUpdateToOneWithWhereWithoutUsersInput, tutorsUpdateWithoutUsersInput>, tutorsUncheckedUpdateWithoutUsersInput>
  }

  export type user_groupsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_groupsCreateWithoutUsersInput, user_groupsUncheckedCreateWithoutUsersInput> | user_groupsCreateWithoutUsersInput[] | user_groupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_groupsCreateOrConnectWithoutUsersInput | user_groupsCreateOrConnectWithoutUsersInput[]
    upsert?: user_groupsUpsertWithWhereUniqueWithoutUsersInput | user_groupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_groupsCreateManyUsersInputEnvelope
    set?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    disconnect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    delete?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    connect?: user_groupsWhereUniqueInput | user_groupsWhereUniqueInput[]
    update?: user_groupsUpdateWithWhereUniqueWithoutUsersInput | user_groupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_groupsUpdateManyWithWhereWithoutUsersInput | user_groupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_groupsScalarWhereInput | user_groupsScalarWhereInput[]
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type usersCreateWithoutAnswersInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAnswersInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAnswersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
  }

  export type questionsCreateWithoutAnswersInput = {
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutAnswersInput = {
    id?: number
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    author_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type questionsCreateOrConnectWithoutAnswersInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
  }

  export type usersUpsertWithoutAnswersInput = {
    update: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAnswersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type usersUpdateWithoutAnswersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type questionsUpsertWithoutAnswersInput = {
    update: XOR<questionsUpdateWithoutAnswersInput, questionsUncheckedUpdateWithoutAnswersInput>
    create: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutAnswersInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutAnswersInput, questionsUncheckedUpdateWithoutAnswersInput>
  }

  export type questionsUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutBookingsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBookingsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBookingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
  }

  export type tutorsCreateWithoutBookingsInput = {
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tutor_availability?: tutor_availabilityCreateNestedManyWithoutTutorsInput
    users: usersCreateNestedOneWithoutTutorsInput
  }

  export type tutorsUncheckedCreateWithoutBookingsInput = {
    id?: number
    user_id: number
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tutor_availability?: tutor_availabilityUncheckedCreateNestedManyWithoutTutorsInput
  }

  export type tutorsCreateOrConnectWithoutBookingsInput = {
    where: tutorsWhereUniqueInput
    create: XOR<tutorsCreateWithoutBookingsInput, tutorsUncheckedCreateWithoutBookingsInput>
  }

  export type usersUpsertWithoutBookingsInput = {
    update: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tutorsUpsertWithoutBookingsInput = {
    update: XOR<tutorsUpdateWithoutBookingsInput, tutorsUncheckedUpdateWithoutBookingsInput>
    create: XOR<tutorsCreateWithoutBookingsInput, tutorsUncheckedCreateWithoutBookingsInput>
    where?: tutorsWhereInput
  }

  export type tutorsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: tutorsWhereInput
    data: XOR<tutorsUpdateWithoutBookingsInput, tutorsUncheckedUpdateWithoutBookingsInput>
  }

  export type tutorsUpdateWithoutBookingsInput = {
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutor_availability?: tutor_availabilityUpdateManyWithoutTutorsNestedInput
    users?: usersUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type tutorsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutor_availability?: tutor_availabilityUncheckedUpdateManyWithoutTutorsNestedInput
  }

  export type groupsCreateWithoutGroup_messagesInput = {
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutGroupsInput
    notes?: notesCreateNestedManyWithoutGroupsInput
    user_groups?: user_groupsCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutGroup_messagesInput = {
    id?: number
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    created_by: number
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notes?: notesUncheckedCreateNestedManyWithoutGroupsInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutGroup_messagesInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutGroup_messagesInput, groupsUncheckedCreateWithoutGroup_messagesInput>
  }

  export type group_messagesCreateWithoutOther_group_messagesInput = {
    message: string
    file_url?: string | null
    file_type?: string | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    groups: groupsCreateNestedOneWithoutGroup_messagesInput
    group_messages?: group_messagesCreateNestedOneWithoutOther_group_messagesInput
    users: usersCreateNestedOneWithoutGroup_messagesInput
  }

  export type group_messagesUncheckedCreateWithoutOther_group_messagesInput = {
    id?: number
    group_id: number
    user_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    reply_to?: number | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type group_messagesCreateOrConnectWithoutOther_group_messagesInput = {
    where: group_messagesWhereUniqueInput
    create: XOR<group_messagesCreateWithoutOther_group_messagesInput, group_messagesUncheckedCreateWithoutOther_group_messagesInput>
  }

  export type group_messagesCreateWithoutGroup_messagesInput = {
    message: string
    file_url?: string | null
    file_type?: string | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    groups: groupsCreateNestedOneWithoutGroup_messagesInput
    other_group_messages?: group_messagesCreateNestedManyWithoutGroup_messagesInput
    users: usersCreateNestedOneWithoutGroup_messagesInput
  }

  export type group_messagesUncheckedCreateWithoutGroup_messagesInput = {
    id?: number
    group_id: number
    user_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    other_group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroup_messagesInput
  }

  export type group_messagesCreateOrConnectWithoutGroup_messagesInput = {
    where: group_messagesWhereUniqueInput
    create: XOR<group_messagesCreateWithoutGroup_messagesInput, group_messagesUncheckedCreateWithoutGroup_messagesInput>
  }

  export type group_messagesCreateManyGroup_messagesInputEnvelope = {
    data: group_messagesCreateManyGroup_messagesInput | group_messagesCreateManyGroup_messagesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutGroup_messagesInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutGroup_messagesInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutGroup_messagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGroup_messagesInput, usersUncheckedCreateWithoutGroup_messagesInput>
  }

  export type groupsUpsertWithoutGroup_messagesInput = {
    update: XOR<groupsUpdateWithoutGroup_messagesInput, groupsUncheckedUpdateWithoutGroup_messagesInput>
    create: XOR<groupsCreateWithoutGroup_messagesInput, groupsUncheckedCreateWithoutGroup_messagesInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutGroup_messagesInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutGroup_messagesInput, groupsUncheckedUpdateWithoutGroup_messagesInput>
  }

  export type groupsUpdateWithoutGroup_messagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutGroupsNestedInput
    notes?: notesUpdateManyWithoutGroupsNestedInput
    user_groups?: user_groupsUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutGroup_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: IntFieldUpdateOperationsInput | number
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: notesUncheckedUpdateManyWithoutGroupsNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type group_messagesUpsertWithoutOther_group_messagesInput = {
    update: XOR<group_messagesUpdateWithoutOther_group_messagesInput, group_messagesUncheckedUpdateWithoutOther_group_messagesInput>
    create: XOR<group_messagesCreateWithoutOther_group_messagesInput, group_messagesUncheckedCreateWithoutOther_group_messagesInput>
    where?: group_messagesWhereInput
  }

  export type group_messagesUpdateToOneWithWhereWithoutOther_group_messagesInput = {
    where?: group_messagesWhereInput
    data: XOR<group_messagesUpdateWithoutOther_group_messagesInput, group_messagesUncheckedUpdateWithoutOther_group_messagesInput>
  }

  export type group_messagesUpdateWithoutOther_group_messagesInput = {
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutGroup_messagesNestedInput
    group_messages?: group_messagesUpdateOneWithoutOther_group_messagesNestedInput
    users?: usersUpdateOneRequiredWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateWithoutOther_group_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableIntFieldUpdateOperationsInput | number | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_messagesUpsertWithWhereUniqueWithoutGroup_messagesInput = {
    where: group_messagesWhereUniqueInput
    update: XOR<group_messagesUpdateWithoutGroup_messagesInput, group_messagesUncheckedUpdateWithoutGroup_messagesInput>
    create: XOR<group_messagesCreateWithoutGroup_messagesInput, group_messagesUncheckedCreateWithoutGroup_messagesInput>
  }

  export type group_messagesUpdateWithWhereUniqueWithoutGroup_messagesInput = {
    where: group_messagesWhereUniqueInput
    data: XOR<group_messagesUpdateWithoutGroup_messagesInput, group_messagesUncheckedUpdateWithoutGroup_messagesInput>
  }

  export type group_messagesUpdateManyWithWhereWithoutGroup_messagesInput = {
    where: group_messagesScalarWhereInput
    data: XOR<group_messagesUpdateManyMutationInput, group_messagesUncheckedUpdateManyWithoutGroup_messagesInput>
  }

  export type group_messagesScalarWhereInput = {
    AND?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
    OR?: group_messagesScalarWhereInput[]
    NOT?: group_messagesScalarWhereInput | group_messagesScalarWhereInput[]
    id?: IntFilter<"group_messages"> | number
    group_id?: IntFilter<"group_messages"> | number
    user_id?: IntFilter<"group_messages"> | number
    message?: StringFilter<"group_messages"> | string
    file_url?: StringNullableFilter<"group_messages"> | string | null
    file_type?: StringNullableFilter<"group_messages"> | string | null
    reply_to?: IntNullableFilter<"group_messages"> | number | null
    is_edited?: BoolNullableFilter<"group_messages"> | boolean | null
    created_at?: DateTimeNullableFilter<"group_messages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"group_messages"> | Date | string | null
  }

  export type usersUpsertWithoutGroup_messagesInput = {
    update: XOR<usersUpdateWithoutGroup_messagesInput, usersUncheckedUpdateWithoutGroup_messagesInput>
    create: XOR<usersCreateWithoutGroup_messagesInput, usersUncheckedCreateWithoutGroup_messagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGroup_messagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGroup_messagesInput, usersUncheckedUpdateWithoutGroup_messagesInput>
  }

  export type usersUpdateWithoutGroup_messagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutGroup_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type group_messagesCreateWithoutGroupsInput = {
    message: string
    file_url?: string | null
    file_type?: string | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesCreateNestedOneWithoutOther_group_messagesInput
    other_group_messages?: group_messagesCreateNestedManyWithoutGroup_messagesInput
    users: usersCreateNestedOneWithoutGroup_messagesInput
  }

  export type group_messagesUncheckedCreateWithoutGroupsInput = {
    id?: number
    user_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    reply_to?: number | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    other_group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroup_messagesInput
  }

  export type group_messagesCreateOrConnectWithoutGroupsInput = {
    where: group_messagesWhereUniqueInput
    create: XOR<group_messagesCreateWithoutGroupsInput, group_messagesUncheckedCreateWithoutGroupsInput>
  }

  export type group_messagesCreateManyGroupsInputEnvelope = {
    data: group_messagesCreateManyGroupsInput | group_messagesCreateManyGroupsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutGroupsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutGroupsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutGroupsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
  }

  export type notesCreateWithoutGroupsInput = {
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateWithoutGroupsInput = {
    id?: number
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    uploaded_by: number
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notesCreateOrConnectWithoutGroupsInput = {
    where: notesWhereUniqueInput
    create: XOR<notesCreateWithoutGroupsInput, notesUncheckedCreateWithoutGroupsInput>
  }

  export type notesCreateManyGroupsInputEnvelope = {
    data: notesCreateManyGroupsInput | notesCreateManyGroupsInput[]
    skipDuplicates?: boolean
  }

  export type user_groupsCreateWithoutGroupsInput = {
    role?: string | null
    joined_at?: Date | string | null
    users: usersCreateNestedOneWithoutUser_groupsInput
  }

  export type user_groupsUncheckedCreateWithoutGroupsInput = {
    user_id: number
    role?: string | null
    joined_at?: Date | string | null
  }

  export type user_groupsCreateOrConnectWithoutGroupsInput = {
    where: user_groupsWhereUniqueInput
    create: XOR<user_groupsCreateWithoutGroupsInput, user_groupsUncheckedCreateWithoutGroupsInput>
  }

  export type user_groupsCreateManyGroupsInputEnvelope = {
    data: user_groupsCreateManyGroupsInput | user_groupsCreateManyGroupsInput[]
    skipDuplicates?: boolean
  }

  export type group_messagesUpsertWithWhereUniqueWithoutGroupsInput = {
    where: group_messagesWhereUniqueInput
    update: XOR<group_messagesUpdateWithoutGroupsInput, group_messagesUncheckedUpdateWithoutGroupsInput>
    create: XOR<group_messagesCreateWithoutGroupsInput, group_messagesUncheckedCreateWithoutGroupsInput>
  }

  export type group_messagesUpdateWithWhereUniqueWithoutGroupsInput = {
    where: group_messagesWhereUniqueInput
    data: XOR<group_messagesUpdateWithoutGroupsInput, group_messagesUncheckedUpdateWithoutGroupsInput>
  }

  export type group_messagesUpdateManyWithWhereWithoutGroupsInput = {
    where: group_messagesScalarWhereInput
    data: XOR<group_messagesUpdateManyMutationInput, group_messagesUncheckedUpdateManyWithoutGroupsInput>
  }

  export type usersUpsertWithoutGroupsInput = {
    update: XOR<usersUpdateWithoutGroupsInput, usersUncheckedUpdateWithoutGroupsInput>
    create: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGroupsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGroupsInput, usersUncheckedUpdateWithoutGroupsInput>
  }

  export type usersUpdateWithoutGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type notesUpsertWithWhereUniqueWithoutGroupsInput = {
    where: notesWhereUniqueInput
    update: XOR<notesUpdateWithoutGroupsInput, notesUncheckedUpdateWithoutGroupsInput>
    create: XOR<notesCreateWithoutGroupsInput, notesUncheckedCreateWithoutGroupsInput>
  }

  export type notesUpdateWithWhereUniqueWithoutGroupsInput = {
    where: notesWhereUniqueInput
    data: XOR<notesUpdateWithoutGroupsInput, notesUncheckedUpdateWithoutGroupsInput>
  }

  export type notesUpdateManyWithWhereWithoutGroupsInput = {
    where: notesScalarWhereInput
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyWithoutGroupsInput>
  }

  export type notesScalarWhereInput = {
    AND?: notesScalarWhereInput | notesScalarWhereInput[]
    OR?: notesScalarWhereInput[]
    NOT?: notesScalarWhereInput | notesScalarWhereInput[]
    id?: IntFilter<"notes"> | number
    title?: StringFilter<"notes"> | string
    description?: StringFilter<"notes"> | string
    subject?: StringFilter<"notes"> | string
    file_path?: StringFilter<"notes"> | string
    file_type?: StringFilter<"notes"> | string
    downloads?: IntNullableFilter<"notes"> | number | null
    uploaded_by?: IntFilter<"notes"> | number
    group_id?: IntNullableFilter<"notes"> | number | null
    is_premium?: BoolNullableFilter<"notes"> | boolean | null
    price?: DecimalNullableFilter<"notes"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolNullableFilter<"notes"> | boolean | null
    tags?: StringNullableListFilter<"notes">
    created_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notes"> | Date | string | null
  }

  export type user_groupsUpsertWithWhereUniqueWithoutGroupsInput = {
    where: user_groupsWhereUniqueInput
    update: XOR<user_groupsUpdateWithoutGroupsInput, user_groupsUncheckedUpdateWithoutGroupsInput>
    create: XOR<user_groupsCreateWithoutGroupsInput, user_groupsUncheckedCreateWithoutGroupsInput>
  }

  export type user_groupsUpdateWithWhereUniqueWithoutGroupsInput = {
    where: user_groupsWhereUniqueInput
    data: XOR<user_groupsUpdateWithoutGroupsInput, user_groupsUncheckedUpdateWithoutGroupsInput>
  }

  export type user_groupsUpdateManyWithWhereWithoutGroupsInput = {
    where: user_groupsScalarWhereInput
    data: XOR<user_groupsUpdateManyMutationInput, user_groupsUncheckedUpdateManyWithoutGroupsInput>
  }

  export type user_groupsScalarWhereInput = {
    AND?: user_groupsScalarWhereInput | user_groupsScalarWhereInput[]
    OR?: user_groupsScalarWhereInput[]
    NOT?: user_groupsScalarWhereInput | user_groupsScalarWhereInput[]
    user_id?: IntFilter<"user_groups"> | number
    group_id?: IntFilter<"user_groups"> | number
    role?: StringNullableFilter<"user_groups"> | string | null
    joined_at?: DateTimeNullableFilter<"user_groups"> | Date | string | null
  }

  export type groupsCreateWithoutNotesInput = {
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesCreateNestedManyWithoutGroupsInput
    users: usersCreateNestedOneWithoutGroupsInput
    user_groups?: user_groupsCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    created_by: number
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroupsInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutNotesInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutNotesInput, groupsUncheckedCreateWithoutNotesInput>
  }

  export type usersCreateWithoutNotesInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotesInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
  }

  export type groupsUpsertWithoutNotesInput = {
    update: XOR<groupsUpdateWithoutNotesInput, groupsUncheckedUpdateWithoutNotesInput>
    create: XOR<groupsCreateWithoutNotesInput, groupsUncheckedCreateWithoutNotesInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutNotesInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutNotesInput, groupsUncheckedUpdateWithoutNotesInput>
  }

  export type groupsUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUpdateManyWithoutGroupsNestedInput
    users?: usersUpdateOneRequiredWithoutGroupsNestedInput
    user_groups?: user_groupsUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: IntFieldUpdateOperationsInput | number
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUncheckedUpdateManyWithoutGroupsNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type usersUpsertWithoutNotesInput = {
    update: XOR<usersUpdateWithoutNotesInput, usersUncheckedUpdateWithoutNotesInput>
    create: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotesInput, usersUncheckedUpdateWithoutNotesInput>
  }

  export type usersUpdateWithoutNotesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type answersCreateWithoutQuestionsInput = {
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutQuestionsInput = {
    id?: number
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    author_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type answersCreateOrConnectWithoutQuestionsInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput>
  }

  export type answersCreateManyQuestionsInputEnvelope = {
    data: answersCreateManyQuestionsInput | answersCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutQuestionsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutQuestionsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutQuestionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
  }

  export type answersUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutQuestionsInput, answersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput>
  }

  export type answersUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutQuestionsInput, answersUncheckedUpdateWithoutQuestionsInput>
  }

  export type answersUpdateManyWithWhereWithoutQuestionsInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type answersScalarWhereInput = {
    AND?: answersScalarWhereInput | answersScalarWhereInput[]
    OR?: answersScalarWhereInput[]
    NOT?: answersScalarWhereInput | answersScalarWhereInput[]
    id?: IntFilter<"answers"> | number
    content?: StringFilter<"answers"> | string
    votes?: IntNullableFilter<"answers"> | number | null
    is_accepted?: BoolNullableFilter<"answers"> | boolean | null
    question_id?: IntFilter<"answers"> | number
    author_id?: IntFilter<"answers"> | number
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"answers"> | Date | string | null
  }

  export type usersUpsertWithoutQuestionsInput = {
    update: XOR<usersUpdateWithoutQuestionsInput, usersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutQuestionsInput, usersUncheckedUpdateWithoutQuestionsInput>
  }

  export type usersUpdateWithoutQuestionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutTransactionsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTransactionsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
  }

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tutorsCreateWithoutTutor_availabilityInput = {
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutTutorsInput
    users: usersCreateNestedOneWithoutTutorsInput
  }

  export type tutorsUncheckedCreateWithoutTutor_availabilityInput = {
    id?: number
    user_id: number
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTutorsInput
  }

  export type tutorsCreateOrConnectWithoutTutor_availabilityInput = {
    where: tutorsWhereUniqueInput
    create: XOR<tutorsCreateWithoutTutor_availabilityInput, tutorsUncheckedCreateWithoutTutor_availabilityInput>
  }

  export type tutorsUpsertWithoutTutor_availabilityInput = {
    update: XOR<tutorsUpdateWithoutTutor_availabilityInput, tutorsUncheckedUpdateWithoutTutor_availabilityInput>
    create: XOR<tutorsCreateWithoutTutor_availabilityInput, tutorsUncheckedCreateWithoutTutor_availabilityInput>
    where?: tutorsWhereInput
  }

  export type tutorsUpdateToOneWithWhereWithoutTutor_availabilityInput = {
    where?: tutorsWhereInput
    data: XOR<tutorsUpdateWithoutTutor_availabilityInput, tutorsUncheckedUpdateWithoutTutor_availabilityInput>
  }

  export type tutorsUpdateWithoutTutor_availabilityInput = {
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutTutorsNestedInput
    users?: usersUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type tutorsUncheckedUpdateWithoutTutor_availabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutTutorsNestedInput
  }

  export type bookingsCreateWithoutTutorsInput = {
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutTutorsInput = {
    id?: number
    student_id: number
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsCreateOrConnectWithoutTutorsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutTutorsInput, bookingsUncheckedCreateWithoutTutorsInput>
  }

  export type bookingsCreateManyTutorsInputEnvelope = {
    data: bookingsCreateManyTutorsInput | bookingsCreateManyTutorsInput[]
    skipDuplicates?: boolean
  }

  export type tutor_availabilityCreateWithoutTutorsInput = {
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tutor_availabilityUncheckedCreateWithoutTutorsInput = {
    id?: number
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tutor_availabilityCreateOrConnectWithoutTutorsInput = {
    where: tutor_availabilityWhereUniqueInput
    create: XOR<tutor_availabilityCreateWithoutTutorsInput, tutor_availabilityUncheckedCreateWithoutTutorsInput>
  }

  export type tutor_availabilityCreateManyTutorsInputEnvelope = {
    data: tutor_availabilityCreateManyTutorsInput | tutor_availabilityCreateManyTutorsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTutorsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    user_groups?: user_groupsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTutorsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTutorsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTutorsInput, usersUncheckedCreateWithoutTutorsInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutTutorsInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutTutorsInput, bookingsUncheckedUpdateWithoutTutorsInput>
    create: XOR<bookingsCreateWithoutTutorsInput, bookingsUncheckedCreateWithoutTutorsInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutTutorsInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutTutorsInput, bookingsUncheckedUpdateWithoutTutorsInput>
  }

  export type bookingsUpdateManyWithWhereWithoutTutorsInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutTutorsInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: IntFilter<"bookings"> | number
    student_id?: IntFilter<"bookings"> | number
    tutor_id?: IntFilter<"bookings"> | number
    subject?: StringFilter<"bookings"> | string
    session_date?: DateTimeFilter<"bookings"> | Date | string
    start_time?: DateTimeFilter<"bookings"> | Date | string
    end_time?: DateTimeFilter<"bookings"> | Date | string
    duration_hours?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"bookings"> | string | null
    meeting_link?: StringNullableFilter<"bookings"> | string | null
    notes?: StringNullableFilter<"bookings"> | string | null
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
  }

  export type tutor_availabilityUpsertWithWhereUniqueWithoutTutorsInput = {
    where: tutor_availabilityWhereUniqueInput
    update: XOR<tutor_availabilityUpdateWithoutTutorsInput, tutor_availabilityUncheckedUpdateWithoutTutorsInput>
    create: XOR<tutor_availabilityCreateWithoutTutorsInput, tutor_availabilityUncheckedCreateWithoutTutorsInput>
  }

  export type tutor_availabilityUpdateWithWhereUniqueWithoutTutorsInput = {
    where: tutor_availabilityWhereUniqueInput
    data: XOR<tutor_availabilityUpdateWithoutTutorsInput, tutor_availabilityUncheckedUpdateWithoutTutorsInput>
  }

  export type tutor_availabilityUpdateManyWithWhereWithoutTutorsInput = {
    where: tutor_availabilityScalarWhereInput
    data: XOR<tutor_availabilityUpdateManyMutationInput, tutor_availabilityUncheckedUpdateManyWithoutTutorsInput>
  }

  export type tutor_availabilityScalarWhereInput = {
    AND?: tutor_availabilityScalarWhereInput | tutor_availabilityScalarWhereInput[]
    OR?: tutor_availabilityScalarWhereInput[]
    NOT?: tutor_availabilityScalarWhereInput | tutor_availabilityScalarWhereInput[]
    id?: IntFilter<"tutor_availability"> | number
    tutor_id?: IntFilter<"tutor_availability"> | number
    day_of_week?: StringFilter<"tutor_availability"> | string
    start_time?: DateTimeFilter<"tutor_availability"> | Date | string
    end_time?: DateTimeFilter<"tutor_availability"> | Date | string
    is_available?: BoolNullableFilter<"tutor_availability"> | boolean | null
    created_at?: DateTimeNullableFilter<"tutor_availability"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tutor_availability"> | Date | string | null
  }

  export type usersUpsertWithoutTutorsInput = {
    update: XOR<usersUpdateWithoutTutorsInput, usersUncheckedUpdateWithoutTutorsInput>
    create: XOR<usersCreateWithoutTutorsInput, usersUncheckedCreateWithoutTutorsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTutorsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTutorsInput, usersUncheckedUpdateWithoutTutorsInput>
  }

  export type usersUpdateWithoutTutorsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    user_groups?: user_groupsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type groupsCreateWithoutUser_groupsInput = {
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesCreateNestedManyWithoutGroupsInput
    users: usersCreateNestedOneWithoutGroupsInput
    notes?: notesCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutUser_groupsInput = {
    id?: number
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    created_by: number
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroupsInput
    notes?: notesUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutUser_groupsInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutUser_groupsInput, groupsUncheckedCreateWithoutUser_groupsInput>
  }

  export type usersCreateWithoutUser_groupsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesCreateNestedManyWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutUsersInput
    notes?: notesCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    tutors?: tutorsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_groupsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    university?: string | null
    field_of_study?: string | null
    reputation?: number | null
    profile_picture?: string | null
    bio?: string | null
    role?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutUsersInput
    groups?: groupsUncheckedCreateNestedManyWithoutUsersInput
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    tutors?: tutorsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_groupsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_groupsInput, usersUncheckedCreateWithoutUser_groupsInput>
  }

  export type groupsUpsertWithoutUser_groupsInput = {
    update: XOR<groupsUpdateWithoutUser_groupsInput, groupsUncheckedUpdateWithoutUser_groupsInput>
    create: XOR<groupsCreateWithoutUser_groupsInput, groupsUncheckedCreateWithoutUser_groupsInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutUser_groupsInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutUser_groupsInput, groupsUncheckedUpdateWithoutUser_groupsInput>
  }

  export type groupsUpdateWithoutUser_groupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUpdateManyWithoutGroupsNestedInput
    users?: usersUpdateOneRequiredWithoutGroupsNestedInput
    notes?: notesUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutUser_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: IntFieldUpdateOperationsInput | number
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUncheckedUpdateManyWithoutGroupsNestedInput
    notes?: notesUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type usersUpsertWithoutUser_groupsInput = {
    update: XOR<usersUpdateWithoutUser_groupsInput, usersUncheckedUpdateWithoutUser_groupsInput>
    create: XOR<usersCreateWithoutUser_groupsInput, usersUncheckedCreateWithoutUser_groupsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_groupsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_groupsInput, usersUncheckedUpdateWithoutUser_groupsInput>
  }

  export type usersUpdateWithoutUser_groupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUpdateManyWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutUsersNestedInput
    notes?: notesUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    field_of_study?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    group_messages?: group_messagesUncheckedUpdateManyWithoutUsersNestedInput
    groups?: groupsUncheckedUpdateManyWithoutUsersNestedInput
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    tutors?: tutorsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type answersCreateWithoutUsersInput = {
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    questions: questionsCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutUsersInput = {
    id?: number
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    question_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type answersCreateOrConnectWithoutUsersInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput>
  }

  export type answersCreateManyUsersInputEnvelope = {
    data: answersCreateManyUsersInput | answersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type bookingsCreateWithoutUsersInput = {
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tutors: tutorsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutUsersInput = {
    id?: number
    tutor_id: number
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsCreateOrConnectWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsCreateManyUsersInputEnvelope = {
    data: bookingsCreateManyUsersInput | bookingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type group_messagesCreateWithoutUsersInput = {
    message: string
    file_url?: string | null
    file_type?: string | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    groups: groupsCreateNestedOneWithoutGroup_messagesInput
    group_messages?: group_messagesCreateNestedOneWithoutOther_group_messagesInput
    other_group_messages?: group_messagesCreateNestedManyWithoutGroup_messagesInput
  }

  export type group_messagesUncheckedCreateWithoutUsersInput = {
    id?: number
    group_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    reply_to?: number | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    other_group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroup_messagesInput
  }

  export type group_messagesCreateOrConnectWithoutUsersInput = {
    where: group_messagesWhereUniqueInput
    create: XOR<group_messagesCreateWithoutUsersInput, group_messagesUncheckedCreateWithoutUsersInput>
  }

  export type group_messagesCreateManyUsersInputEnvelope = {
    data: group_messagesCreateManyUsersInput | group_messagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutUsersInput = {
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesCreateNestedManyWithoutGroupsInput
    notes?: notesCreateNestedManyWithoutGroupsInput
    user_groups?: user_groupsCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    group_messages?: group_messagesUncheckedCreateNestedManyWithoutGroupsInput
    notes?: notesUncheckedCreateNestedManyWithoutGroupsInput
    user_groups?: user_groupsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutUsersInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutUsersInput, groupsUncheckedCreateWithoutUsersInput>
  }

  export type groupsCreateManyUsersInputEnvelope = {
    data: groupsCreateManyUsersInput | groupsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type notesCreateWithoutUsersInput = {
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    groups?: groupsCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    group_id?: number | null
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notesCreateOrConnectWithoutUsersInput = {
    where: notesWhereUniqueInput
    create: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput>
  }

  export type notesCreateManyUsersInputEnvelope = {
    data: notesCreateManyUsersInput | notesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type questionsCreateWithoutUsersInput = {
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutUsersInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput>
  }

  export type questionsCreateManyUsersInputEnvelope = {
    data: questionsCreateManyUsersInput | questionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type transactionsCreateWithoutUsersInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: string
    status?: string | null
    reference?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type transactionsUncheckedCreateWithoutUsersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: string
    status?: string | null
    reference?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type transactionsCreateOrConnectWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsCreateManyUsersInputEnvelope = {
    data: transactionsCreateManyUsersInput | transactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tutorsCreateWithoutUsersInput = {
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutTutorsInput
    tutor_availability?: tutor_availabilityCreateNestedManyWithoutTutorsInput
  }

  export type tutorsUncheckedCreateWithoutUsersInput = {
    id?: number
    bio: string
    subjects?: tutorsCreatesubjectsInput | string[]
    hourly_rate: Decimal | DecimalJsLike | number | string
    experience_years?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    total_sessions?: number | null
    is_approved?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTutorsInput
    tutor_availability?: tutor_availabilityUncheckedCreateNestedManyWithoutTutorsInput
  }

  export type tutorsCreateOrConnectWithoutUsersInput = {
    where: tutorsWhereUniqueInput
    create: XOR<tutorsCreateWithoutUsersInput, tutorsUncheckedCreateWithoutUsersInput>
  }

  export type user_groupsCreateWithoutUsersInput = {
    role?: string | null
    joined_at?: Date | string | null
    groups: groupsCreateNestedOneWithoutUser_groupsInput
  }

  export type user_groupsUncheckedCreateWithoutUsersInput = {
    group_id: number
    role?: string | null
    joined_at?: Date | string | null
  }

  export type user_groupsCreateOrConnectWithoutUsersInput = {
    where: user_groupsWhereUniqueInput
    create: XOR<user_groupsCreateWithoutUsersInput, user_groupsUncheckedCreateWithoutUsersInput>
  }

  export type user_groupsCreateManyUsersInputEnvelope = {
    data: user_groupsCreateManyUsersInput | user_groupsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type answersUpsertWithWhereUniqueWithoutUsersInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutUsersInput, answersUncheckedUpdateWithoutUsersInput>
    create: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput>
  }

  export type answersUpdateWithWhereUniqueWithoutUsersInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutUsersInput, answersUncheckedUpdateWithoutUsersInput>
  }

  export type answersUpdateManyWithWhereWithoutUsersInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutUsersInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUsersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type group_messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: group_messagesWhereUniqueInput
    update: XOR<group_messagesUpdateWithoutUsersInput, group_messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<group_messagesCreateWithoutUsersInput, group_messagesUncheckedCreateWithoutUsersInput>
  }

  export type group_messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: group_messagesWhereUniqueInput
    data: XOR<group_messagesUpdateWithoutUsersInput, group_messagesUncheckedUpdateWithoutUsersInput>
  }

  export type group_messagesUpdateManyWithWhereWithoutUsersInput = {
    where: group_messagesScalarWhereInput
    data: XOR<group_messagesUpdateManyMutationInput, group_messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type groupsUpsertWithWhereUniqueWithoutUsersInput = {
    where: groupsWhereUniqueInput
    update: XOR<groupsUpdateWithoutUsersInput, groupsUncheckedUpdateWithoutUsersInput>
    create: XOR<groupsCreateWithoutUsersInput, groupsUncheckedCreateWithoutUsersInput>
  }

  export type groupsUpdateWithWhereUniqueWithoutUsersInput = {
    where: groupsWhereUniqueInput
    data: XOR<groupsUpdateWithoutUsersInput, groupsUncheckedUpdateWithoutUsersInput>
  }

  export type groupsUpdateManyWithWhereWithoutUsersInput = {
    where: groupsScalarWhereInput
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyWithoutUsersInput>
  }

  export type groupsScalarWhereInput = {
    AND?: groupsScalarWhereInput | groupsScalarWhereInput[]
    OR?: groupsScalarWhereInput[]
    NOT?: groupsScalarWhereInput | groupsScalarWhereInput[]
    id?: IntFilter<"groups"> | number
    name?: StringFilter<"groups"> | string
    description?: StringFilter<"groups"> | string
    subject?: StringFilter<"groups"> | string
    max_members?: IntNullableFilter<"groups"> | number | null
    current_members?: IntNullableFilter<"groups"> | number | null
    created_by?: IntFilter<"groups"> | number
    requires_approval?: BoolNullableFilter<"groups"> | boolean | null
    is_active?: BoolNullableFilter<"groups"> | boolean | null
    created_at?: DateTimeNullableFilter<"groups"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"groups"> | Date | string | null
  }

  export type notesUpsertWithWhereUniqueWithoutUsersInput = {
    where: notesWhereUniqueInput
    update: XOR<notesUpdateWithoutUsersInput, notesUncheckedUpdateWithoutUsersInput>
    create: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput>
  }

  export type notesUpdateWithWhereUniqueWithoutUsersInput = {
    where: notesWhereUniqueInput
    data: XOR<notesUpdateWithoutUsersInput, notesUncheckedUpdateWithoutUsersInput>
  }

  export type notesUpdateManyWithWhereWithoutUsersInput = {
    where: notesScalarWhereInput
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyWithoutUsersInput>
  }

  export type questionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutUsersInput, questionsUncheckedUpdateWithoutUsersInput>
    create: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutUsersInput, questionsUncheckedUpdateWithoutUsersInput>
  }

  export type questionsUpdateManyWithWhereWithoutUsersInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type questionsScalarWhereInput = {
    AND?: questionsScalarWhereInput | questionsScalarWhereInput[]
    OR?: questionsScalarWhereInput[]
    NOT?: questionsScalarWhereInput | questionsScalarWhereInput[]
    id?: IntFilter<"questions"> | number
    title?: StringFilter<"questions"> | string
    content?: StringFilter<"questions"> | string
    subject?: StringFilter<"questions"> | string
    tags?: StringNullableListFilter<"questions">
    votes?: IntNullableFilter<"questions"> | number | null
    answers_count?: IntNullableFilter<"questions"> | number | null
    views?: IntNullableFilter<"questions"> | number | null
    is_solved?: BoolNullableFilter<"questions"> | boolean | null
    author_id?: IntFilter<"questions"> | number
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"questions"> | Date | string | null
  }

  export type transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    id?: IntFilter<"transactions"> | number
    user_id?: IntFilter<"transactions"> | number
    amount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"transactions"> | string
    status?: StringNullableFilter<"transactions"> | string | null
    reference?: StringNullableFilter<"transactions"> | string | null
    description?: StringNullableFilter<"transactions"> | string | null
    metadata?: JsonNullableFilter<"transactions">
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
  }

  export type tutorsUpsertWithoutUsersInput = {
    update: XOR<tutorsUpdateWithoutUsersInput, tutorsUncheckedUpdateWithoutUsersInput>
    create: XOR<tutorsCreateWithoutUsersInput, tutorsUncheckedCreateWithoutUsersInput>
    where?: tutorsWhereInput
  }

  export type tutorsUpdateToOneWithWhereWithoutUsersInput = {
    where?: tutorsWhereInput
    data: XOR<tutorsUpdateWithoutUsersInput, tutorsUncheckedUpdateWithoutUsersInput>
  }

  export type tutorsUpdateWithoutUsersInput = {
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutTutorsNestedInput
    tutor_availability?: tutor_availabilityUpdateManyWithoutTutorsNestedInput
  }

  export type tutorsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    subjects?: tutorsUpdatesubjectsInput | string[]
    hourly_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutTutorsNestedInput
    tutor_availability?: tutor_availabilityUncheckedUpdateManyWithoutTutorsNestedInput
  }

  export type user_groupsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_groupsWhereUniqueInput
    update: XOR<user_groupsUpdateWithoutUsersInput, user_groupsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_groupsCreateWithoutUsersInput, user_groupsUncheckedCreateWithoutUsersInput>
  }

  export type user_groupsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_groupsWhereUniqueInput
    data: XOR<user_groupsUpdateWithoutUsersInput, user_groupsUncheckedUpdateWithoutUsersInput>
  }

  export type user_groupsUpdateManyWithWhereWithoutUsersInput = {
    where: user_groupsScalarWhereInput
    data: XOR<user_groupsUpdateManyMutationInput, user_groupsUncheckedUpdateManyWithoutUsersInput>
  }

  export type group_messagesCreateManyGroup_messagesInput = {
    id?: number
    group_id: number
    user_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type group_messagesUpdateWithoutGroup_messagesInput = {
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutGroup_messagesNestedInput
    other_group_messages?: group_messagesUpdateManyWithoutGroup_messagesNestedInput
    users?: usersUpdateOneRequiredWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateWithoutGroup_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_group_messages?: group_messagesUncheckedUpdateManyWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateManyWithoutGroup_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_messagesCreateManyGroupsInput = {
    id?: number
    user_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    reply_to?: number | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notesCreateManyGroupsInput = {
    id?: number
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    uploaded_by: number
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_groupsCreateManyGroupsInput = {
    user_id: number
    role?: string | null
    joined_at?: Date | string | null
  }

  export type group_messagesUpdateWithoutGroupsInput = {
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUpdateOneWithoutOther_group_messagesNestedInput
    other_group_messages?: group_messagesUpdateManyWithoutGroup_messagesNestedInput
    users?: usersUpdateOneRequiredWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableIntFieldUpdateOperationsInput | number | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_group_messages?: group_messagesUncheckedUpdateManyWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableIntFieldUpdateOperationsInput | number | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUpdateWithoutGroupsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    uploaded_by?: IntFieldUpdateOperationsInput | number
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    uploaded_by?: IntFieldUpdateOperationsInput | number
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_groupsUpdateWithoutGroupsInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutUser_groupsNestedInput
  }

  export type user_groupsUncheckedUpdateWithoutGroupsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_groupsUncheckedUpdateManyWithoutGroupsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyQuestionsInput = {
    id?: number
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    author_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type answersUpdateWithoutQuestionsInput = {
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsCreateManyTutorsInput = {
    id?: number
    student_id: number
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tutor_availabilityCreateManyTutorsInput = {
    id?: number
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsUpdateWithoutTutorsInput = {
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUncheckedUpdateManyWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutor_availabilityUpdateWithoutTutorsInput = {
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutor_availabilityUncheckedUpdateWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tutor_availabilityUncheckedUpdateManyWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyUsersInput = {
    id?: number
    content: string
    votes?: number | null
    is_accepted?: boolean | null
    question_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsCreateManyUsersInput = {
    id?: number
    tutor_id: number
    subject: string
    session_date: Date | string
    start_time: Date | string
    end_time: Date | string
    duration_hours: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    meeting_link?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type group_messagesCreateManyUsersInput = {
    id?: number
    group_id: number
    message: string
    file_url?: string | null
    file_type?: string | null
    reply_to?: number | null
    is_edited?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type groupsCreateManyUsersInput = {
    id?: number
    name: string
    description: string
    subject: string
    max_members?: number | null
    current_members?: number | null
    requires_approval?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notesCreateManyUsersInput = {
    id?: number
    title: string
    description: string
    subject: string
    file_path: string
    file_type: string
    downloads?: number | null
    group_id?: number | null
    is_premium?: boolean | null
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    tags?: notesCreatetagsInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type questionsCreateManyUsersInput = {
    id?: number
    title: string
    content: string
    subject: string
    tags?: questionsCreatetagsInput | string[]
    votes?: number | null
    answers_count?: number | null
    views?: number | null
    is_solved?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type transactionsCreateManyUsersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: string
    status?: string | null
    reference?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_groupsCreateManyUsersInput = {
    group_id: number
    role?: string | null
    joined_at?: Date | string | null
  }

  export type answersUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    is_accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUpdateWithoutUsersInput = {
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutors?: tutorsUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutor_id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutor_id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    session_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_messagesUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutGroup_messagesNestedInput
    group_messages?: group_messagesUpdateOneWithoutOther_group_messagesNestedInput
    other_group_messages?: group_messagesUpdateManyWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableIntFieldUpdateOperationsInput | number | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_group_messages?: group_messagesUncheckedUpdateManyWithoutGroup_messagesNestedInput
  }

  export type group_messagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableIntFieldUpdateOperationsInput | number | null
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUpdateManyWithoutGroupsNestedInput
    notes?: notesUpdateManyWithoutGroupsNestedInput
    user_groups?: user_groupsUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_messages?: group_messagesUncheckedUpdateManyWithoutGroupsNestedInput
    notes?: notesUncheckedUpdateManyWithoutGroupsNestedInput
    user_groups?: user_groupsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    max_members?: NullableIntFieldUpdateOperationsInput | number | null
    current_members?: NullableIntFieldUpdateOperationsInput | number | null
    requires_approval?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_premium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tags?: notesUpdatetagsInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    tags?: questionsUpdatetagsInput | string[]
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    answers_count?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    is_solved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUpdateWithoutUsersInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_groupsUpdateWithoutUsersInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutUser_groupsNestedInput
  }

  export type user_groupsUncheckedUpdateWithoutUsersInput = {
    group_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_groupsUncheckedUpdateManyWithoutUsersInput = {
    group_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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