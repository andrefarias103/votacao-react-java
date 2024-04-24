
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Votacao
 * 
 */
export type Votacao = $Result.DefaultSelection<Prisma.$VotacaoPayload>
/**
 * Model Pauta
 * 
 */
export type Pauta = $Result.DefaultSelection<Prisma.$PautaPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Sessao
 * 
 */
export type Sessao = $Result.DefaultSelection<Prisma.$SessaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusSessaoEnum: {
  STATUS_AGUARDANDO: 'STATUS_AGUARDANDO',
  STATUS_INICIADA: 'STATUS_INICIADA',
  STATUS_CONCLUIDA: 'STATUS_CONCLUIDA',
  STATUS_CANCELADA: 'STATUS_CANCELADA'
};

export type StatusSessaoEnum = (typeof StatusSessaoEnum)[keyof typeof StatusSessaoEnum]

}

export type StatusSessaoEnum = $Enums.StatusSessaoEnum

export const StatusSessaoEnum: typeof $Enums.StatusSessaoEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.votacao`: Exposes CRUD operations for the **Votacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votacaos
    * const votacaos = await prisma.votacao.findMany()
    * ```
    */
  get votacao(): Prisma.VotacaoDelegate<ExtArgs>;

  /**
   * `prisma.pauta`: Exposes CRUD operations for the **Pauta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pautas
    * const pautas = await prisma.pauta.findMany()
    * ```
    */
  get pauta(): Prisma.PautaDelegate<ExtArgs>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs>;

  /**
   * `prisma.sessao`: Exposes CRUD operations for the **Sessao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessaos
    * const sessaos = await prisma.sessao.findMany()
    * ```
    */
  get sessao(): Prisma.SessaoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Votacao: 'Votacao',
    Pauta: 'Pauta',
    Categoria: 'Categoria',
    Sessao: 'Sessao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'usuario' | 'votacao' | 'pauta' | 'categoria' | 'sessao'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Votacao: {
        payload: Prisma.$VotacaoPayload<ExtArgs>
        fields: Prisma.VotacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VotacaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VotacaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload>
          }
          findFirst: {
            args: Prisma.VotacaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VotacaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload>
          }
          findMany: {
            args: Prisma.VotacaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload>[]
          }
          create: {
            args: Prisma.VotacaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload>
          }
          createMany: {
            args: Prisma.VotacaoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VotacaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload>
          }
          update: {
            args: Prisma.VotacaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload>
          }
          deleteMany: {
            args: Prisma.VotacaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VotacaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VotacaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotacaoPayload>
          }
          aggregate: {
            args: Prisma.VotacaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVotacao>
          }
          groupBy: {
            args: Prisma.VotacaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VotacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VotacaoCountArgs<ExtArgs>,
            result: $Utils.Optional<VotacaoCountAggregateOutputType> | number
          }
        }
      }
      Pauta: {
        payload: Prisma.$PautaPayload<ExtArgs>
        fields: Prisma.PautaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PautaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PautaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload>
          }
          findFirst: {
            args: Prisma.PautaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PautaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload>
          }
          findMany: {
            args: Prisma.PautaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload>[]
          }
          create: {
            args: Prisma.PautaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload>
          }
          createMany: {
            args: Prisma.PautaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PautaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload>
          }
          update: {
            args: Prisma.PautaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload>
          }
          deleteMany: {
            args: Prisma.PautaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PautaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PautaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PautaPayload>
          }
          aggregate: {
            args: Prisma.PautaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePauta>
          }
          groupBy: {
            args: Prisma.PautaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PautaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PautaCountArgs<ExtArgs>,
            result: $Utils.Optional<PautaCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Sessao: {
        payload: Prisma.$SessaoPayload<ExtArgs>
        fields: Prisma.SessaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findFirst: {
            args: Prisma.SessaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findMany: {
            args: Prisma.SessaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          create: {
            args: Prisma.SessaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          createMany: {
            args: Prisma.SessaoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          update: {
            args: Prisma.SessaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          deleteMany: {
            args: Prisma.SessaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          aggregate: {
            args: Prisma.SessaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSessao>
          }
          groupBy: {
            args: Prisma.SessaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessaoCountArgs<ExtArgs>,
            result: $Utils.Optional<SessaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    voto: number
    Pauta: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voto?: boolean | UsuarioCountOutputTypeCountVotoArgs
    Pauta?: boolean | UsuarioCountOutputTypeCountPautaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPautaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PautaWhereInput
  }


  /**
   * Count Type PautaCountOutputType
   */

  export type PautaCountOutputType = {
    votacao: number
  }

  export type PautaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votacao?: boolean | PautaCountOutputTypeCountVotacaoArgs
  }

  // Custom InputTypes
  /**
   * PautaCountOutputType without action
   */
  export type PautaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PautaCountOutputType
     */
    select?: PautaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PautaCountOutputType without action
   */
  export type PautaCountOutputTypeCountVotacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotacaoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    pautas: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pautas?: boolean | CategoriaCountOutputTypeCountPautasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPautasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PautaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    login: string | null
    senha: string | null
    nome: string | null
    endereco: string | null
    email: string | null
    cpf: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    login: string | null
    senha: string | null
    nome: string | null
    endereco: string | null
    email: string | null
    cpf: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    login: number
    senha: number
    nome: number
    endereco: number
    email: number
    cpf: number
    tipo: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    login?: true
    senha?: true
    nome?: true
    endereco?: true
    email?: true
    cpf?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    login?: true
    senha?: true
    nome?: true
    endereco?: true
    email?: true
    cpf?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    login?: true
    senha?: true
    nome?: true
    endereco?: true
    email?: true
    cpf?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    senha?: boolean
    nome?: boolean
    endereco?: boolean
    email?: boolean
    cpf?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    voto?: boolean | Usuario$votoArgs<ExtArgs>
    Pauta?: boolean | Usuario$PautaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    login?: boolean
    senha?: boolean
    nome?: boolean
    endereco?: boolean
    email?: boolean
    cpf?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voto?: boolean | Usuario$votoArgs<ExtArgs>
    Pauta?: boolean | Usuario$PautaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      voto: Prisma.$VotacaoPayload<ExtArgs>[]
      Pauta: Prisma.$PautaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      login: string
      senha: string
      nome: string
      endereco: string
      email: string
      cpf: string
      tipo: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    voto<T extends Usuario$votoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$votoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    Pauta<T extends Usuario$PautaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$PautaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly login: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly endereco: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly deletedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.voto
   */
  export type Usuario$votoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    where?: VotacaoWhereInput
    orderBy?: VotacaoOrderByWithRelationInput | VotacaoOrderByWithRelationInput[]
    cursor?: VotacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotacaoScalarFieldEnum | VotacaoScalarFieldEnum[]
  }

  /**
   * Usuario.Pauta
   */
  export type Usuario$PautaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    where?: PautaWhereInput
    orderBy?: PautaOrderByWithRelationInput | PautaOrderByWithRelationInput[]
    cursor?: PautaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PautaScalarFieldEnum | PautaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Votacao
   */

  export type AggregateVotacao = {
    _count: VotacaoCountAggregateOutputType | null
    _avg: VotacaoAvgAggregateOutputType | null
    _sum: VotacaoSumAggregateOutputType | null
    _min: VotacaoMinAggregateOutputType | null
    _max: VotacaoMaxAggregateOutputType | null
  }

  export type VotacaoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    pautaId: number | null
  }

  export type VotacaoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    pautaId: number | null
  }

  export type VotacaoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    opcaoVotada: string | null
    dataHoraVoto: string | null
    pautaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VotacaoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    opcaoVotada: string | null
    dataHoraVoto: string | null
    pautaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VotacaoCountAggregateOutputType = {
    id: number
    usuarioId: number
    opcaoVotada: number
    dataHoraVoto: number
    pautaId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type VotacaoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    pautaId?: true
  }

  export type VotacaoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    pautaId?: true
  }

  export type VotacaoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    opcaoVotada?: true
    dataHoraVoto?: true
    pautaId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VotacaoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    opcaoVotada?: true
    dataHoraVoto?: true
    pautaId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VotacaoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    opcaoVotada?: true
    dataHoraVoto?: true
    pautaId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type VotacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votacao to aggregate.
     */
    where?: VotacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votacaos to fetch.
     */
    orderBy?: VotacaoOrderByWithRelationInput | VotacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VotacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votacaos
    **/
    _count?: true | VotacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotacaoMaxAggregateInputType
  }

  export type GetVotacaoAggregateType<T extends VotacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateVotacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotacao[P]>
      : GetScalarType<T[P], AggregateVotacao[P]>
  }




  export type VotacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotacaoWhereInput
    orderBy?: VotacaoOrderByWithAggregationInput | VotacaoOrderByWithAggregationInput[]
    by: VotacaoScalarFieldEnum[] | VotacaoScalarFieldEnum
    having?: VotacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotacaoCountAggregateInputType | true
    _avg?: VotacaoAvgAggregateInputType
    _sum?: VotacaoSumAggregateInputType
    _min?: VotacaoMinAggregateInputType
    _max?: VotacaoMaxAggregateInputType
  }

  export type VotacaoGroupByOutputType = {
    id: number
    usuarioId: number
    opcaoVotada: string
    dataHoraVoto: string
    pautaId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    _count: VotacaoCountAggregateOutputType | null
    _avg: VotacaoAvgAggregateOutputType | null
    _sum: VotacaoSumAggregateOutputType | null
    _min: VotacaoMinAggregateOutputType | null
    _max: VotacaoMaxAggregateOutputType | null
  }

  type GetVotacaoGroupByPayload<T extends VotacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotacaoGroupByOutputType[P]>
            : GetScalarType<T[P], VotacaoGroupByOutputType[P]>
        }
      >
    >


  export type VotacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    opcaoVotada?: boolean
    dataHoraVoto?: boolean
    pautaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pauta?: boolean | PautaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votacao"]>

  export type VotacaoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    opcaoVotada?: boolean
    dataHoraVoto?: boolean
    pautaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type VotacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pauta?: boolean | PautaDefaultArgs<ExtArgs>
  }


  export type $VotacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Votacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      pauta: Prisma.$PautaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      opcaoVotada: string
      dataHoraVoto: string
      pautaId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date
    }, ExtArgs["result"]["votacao"]>
    composites: {}
  }


  type VotacaoGetPayload<S extends boolean | null | undefined | VotacaoDefaultArgs> = $Result.GetResult<Prisma.$VotacaoPayload, S>

  type VotacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VotacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VotacaoCountAggregateInputType | true
    }

  export interface VotacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Votacao'], meta: { name: 'Votacao' } }
    /**
     * Find zero or one Votacao that matches the filter.
     * @param {VotacaoFindUniqueArgs} args - Arguments to find a Votacao
     * @example
     * // Get one Votacao
     * const votacao = await prisma.votacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VotacaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VotacaoFindUniqueArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Votacao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VotacaoFindUniqueOrThrowArgs} args - Arguments to find a Votacao
     * @example
     * // Get one Votacao
     * const votacao = await prisma.votacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VotacaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VotacaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Votacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotacaoFindFirstArgs} args - Arguments to find a Votacao
     * @example
     * // Get one Votacao
     * const votacao = await prisma.votacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VotacaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VotacaoFindFirstArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Votacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotacaoFindFirstOrThrowArgs} args - Arguments to find a Votacao
     * @example
     * // Get one Votacao
     * const votacao = await prisma.votacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VotacaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VotacaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Votacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotacaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votacaos
     * const votacaos = await prisma.votacao.findMany()
     * 
     * // Get first 10 Votacaos
     * const votacaos = await prisma.votacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votacaoWithIdOnly = await prisma.votacao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VotacaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VotacaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Votacao.
     * @param {VotacaoCreateArgs} args - Arguments to create a Votacao.
     * @example
     * // Create one Votacao
     * const Votacao = await prisma.votacao.create({
     *   data: {
     *     // ... data to create a Votacao
     *   }
     * })
     * 
    **/
    create<T extends VotacaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VotacaoCreateArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Votacaos.
     *     @param {VotacaoCreateManyArgs} args - Arguments to create many Votacaos.
     *     @example
     *     // Create many Votacaos
     *     const votacao = await prisma.votacao.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VotacaoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VotacaoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Votacao.
     * @param {VotacaoDeleteArgs} args - Arguments to delete one Votacao.
     * @example
     * // Delete one Votacao
     * const Votacao = await prisma.votacao.delete({
     *   where: {
     *     // ... filter to delete one Votacao
     *   }
     * })
     * 
    **/
    delete<T extends VotacaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VotacaoDeleteArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Votacao.
     * @param {VotacaoUpdateArgs} args - Arguments to update one Votacao.
     * @example
     * // Update one Votacao
     * const votacao = await prisma.votacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VotacaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VotacaoUpdateArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Votacaos.
     * @param {VotacaoDeleteManyArgs} args - Arguments to filter Votacaos to delete.
     * @example
     * // Delete a few Votacaos
     * const { count } = await prisma.votacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VotacaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VotacaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votacaos
     * const votacao = await prisma.votacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VotacaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VotacaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Votacao.
     * @param {VotacaoUpsertArgs} args - Arguments to update or create a Votacao.
     * @example
     * // Update or create a Votacao
     * const votacao = await prisma.votacao.upsert({
     *   create: {
     *     // ... data to create a Votacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Votacao we want to update
     *   }
     * })
    **/
    upsert<T extends VotacaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VotacaoUpsertArgs<ExtArgs>>
    ): Prisma__VotacaoClient<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Votacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotacaoCountArgs} args - Arguments to filter Votacaos to count.
     * @example
     * // Count the number of Votacaos
     * const count = await prisma.votacao.count({
     *   where: {
     *     // ... the filter for the Votacaos we want to count
     *   }
     * })
    **/
    count<T extends VotacaoCountArgs>(
      args?: Subset<T, VotacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Votacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VotacaoAggregateArgs>(args: Subset<T, VotacaoAggregateArgs>): Prisma.PrismaPromise<GetVotacaoAggregateType<T>>

    /**
     * Group by Votacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotacaoGroupByArgs} args - Group by arguments.
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
      T extends VotacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VotacaoGroupByArgs['orderBy'] }
        : { orderBy?: VotacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VotacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Votacao model
   */
  readonly fields: VotacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Votacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VotacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    pauta<T extends PautaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PautaDefaultArgs<ExtArgs>>): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Votacao model
   */ 
  interface VotacaoFieldRefs {
    readonly id: FieldRef<"Votacao", 'Int'>
    readonly usuarioId: FieldRef<"Votacao", 'Int'>
    readonly opcaoVotada: FieldRef<"Votacao", 'String'>
    readonly dataHoraVoto: FieldRef<"Votacao", 'String'>
    readonly pautaId: FieldRef<"Votacao", 'Int'>
    readonly createdAt: FieldRef<"Votacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Votacao", 'DateTime'>
    readonly deletedAt: FieldRef<"Votacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Votacao findUnique
   */
  export type VotacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * Filter, which Votacao to fetch.
     */
    where: VotacaoWhereUniqueInput
  }

  /**
   * Votacao findUniqueOrThrow
   */
  export type VotacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * Filter, which Votacao to fetch.
     */
    where: VotacaoWhereUniqueInput
  }

  /**
   * Votacao findFirst
   */
  export type VotacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * Filter, which Votacao to fetch.
     */
    where?: VotacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votacaos to fetch.
     */
    orderBy?: VotacaoOrderByWithRelationInput | VotacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votacaos.
     */
    cursor?: VotacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votacaos.
     */
    distinct?: VotacaoScalarFieldEnum | VotacaoScalarFieldEnum[]
  }

  /**
   * Votacao findFirstOrThrow
   */
  export type VotacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * Filter, which Votacao to fetch.
     */
    where?: VotacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votacaos to fetch.
     */
    orderBy?: VotacaoOrderByWithRelationInput | VotacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votacaos.
     */
    cursor?: VotacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votacaos.
     */
    distinct?: VotacaoScalarFieldEnum | VotacaoScalarFieldEnum[]
  }

  /**
   * Votacao findMany
   */
  export type VotacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * Filter, which Votacaos to fetch.
     */
    where?: VotacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votacaos to fetch.
     */
    orderBy?: VotacaoOrderByWithRelationInput | VotacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votacaos.
     */
    cursor?: VotacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votacaos.
     */
    skip?: number
    distinct?: VotacaoScalarFieldEnum | VotacaoScalarFieldEnum[]
  }

  /**
   * Votacao create
   */
  export type VotacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Votacao.
     */
    data: XOR<VotacaoCreateInput, VotacaoUncheckedCreateInput>
  }

  /**
   * Votacao createMany
   */
  export type VotacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votacaos.
     */
    data: VotacaoCreateManyInput | VotacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Votacao update
   */
  export type VotacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Votacao.
     */
    data: XOR<VotacaoUpdateInput, VotacaoUncheckedUpdateInput>
    /**
     * Choose, which Votacao to update.
     */
    where: VotacaoWhereUniqueInput
  }

  /**
   * Votacao updateMany
   */
  export type VotacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votacaos.
     */
    data: XOR<VotacaoUpdateManyMutationInput, VotacaoUncheckedUpdateManyInput>
    /**
     * Filter which Votacaos to update
     */
    where?: VotacaoWhereInput
  }

  /**
   * Votacao upsert
   */
  export type VotacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Votacao to update in case it exists.
     */
    where: VotacaoWhereUniqueInput
    /**
     * In case the Votacao found by the `where` argument doesn't exist, create a new Votacao with this data.
     */
    create: XOR<VotacaoCreateInput, VotacaoUncheckedCreateInput>
    /**
     * In case the Votacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VotacaoUpdateInput, VotacaoUncheckedUpdateInput>
  }

  /**
   * Votacao delete
   */
  export type VotacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    /**
     * Filter which Votacao to delete.
     */
    where: VotacaoWhereUniqueInput
  }

  /**
   * Votacao deleteMany
   */
  export type VotacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votacaos to delete
     */
    where?: VotacaoWhereInput
  }

  /**
   * Votacao without action
   */
  export type VotacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
  }


  /**
   * Model Pauta
   */

  export type AggregatePauta = {
    _count: PautaCountAggregateOutputType | null
    _avg: PautaAvgAggregateOutputType | null
    _sum: PautaSumAggregateOutputType | null
    _min: PautaMinAggregateOutputType | null
    _max: PautaMaxAggregateOutputType | null
  }

  export type PautaAvgAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    sessaoId: number | null
    usuarioId: number | null
  }

  export type PautaSumAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    sessaoId: number | null
    usuarioId: number | null
  }

  export type PautaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoriaId: number | null
    sessaoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PautaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoriaId: number | null
    sessaoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PautaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    categoriaId: number
    sessaoId: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PautaAvgAggregateInputType = {
    id?: true
    categoriaId?: true
    sessaoId?: true
    usuarioId?: true
  }

  export type PautaSumAggregateInputType = {
    id?: true
    categoriaId?: true
    sessaoId?: true
    usuarioId?: true
  }

  export type PautaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
    sessaoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PautaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
    sessaoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PautaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
    sessaoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PautaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pauta to aggregate.
     */
    where?: PautaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pautas to fetch.
     */
    orderBy?: PautaOrderByWithRelationInput | PautaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PautaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pautas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pautas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pautas
    **/
    _count?: true | PautaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PautaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PautaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PautaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PautaMaxAggregateInputType
  }

  export type GetPautaAggregateType<T extends PautaAggregateArgs> = {
        [P in keyof T & keyof AggregatePauta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePauta[P]>
      : GetScalarType<T[P], AggregatePauta[P]>
  }




  export type PautaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PautaWhereInput
    orderBy?: PautaOrderByWithAggregationInput | PautaOrderByWithAggregationInput[]
    by: PautaScalarFieldEnum[] | PautaScalarFieldEnum
    having?: PautaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PautaCountAggregateInputType | true
    _avg?: PautaAvgAggregateInputType
    _sum?: PautaSumAggregateInputType
    _min?: PautaMinAggregateInputType
    _max?: PautaMaxAggregateInputType
  }

  export type PautaGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    categoriaId: number
    sessaoId: number | null
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    _count: PautaCountAggregateOutputType | null
    _avg: PautaAvgAggregateOutputType | null
    _sum: PautaSumAggregateOutputType | null
    _min: PautaMinAggregateOutputType | null
    _max: PautaMaxAggregateOutputType | null
  }

  type GetPautaGroupByPayload<T extends PautaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PautaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PautaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PautaGroupByOutputType[P]>
            : GetScalarType<T[P], PautaGroupByOutputType[P]>
        }
      >
    >


  export type PautaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoriaId?: boolean
    sessaoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    categoria?: boolean | Pauta$categoriaArgs<ExtArgs>
    sessao?: boolean | Pauta$sessaoArgs<ExtArgs>
    votacao?: boolean | Pauta$votacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | PautaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pauta"]>

  export type PautaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoriaId?: boolean
    sessaoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type PautaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Pauta$categoriaArgs<ExtArgs>
    sessao?: boolean | Pauta$sessaoArgs<ExtArgs>
    votacao?: boolean | Pauta$votacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | PautaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PautaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pauta"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      sessao: Prisma.$SessaoPayload<ExtArgs> | null
      votacao: Prisma.$VotacaoPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      categoriaId: number
      sessaoId: number | null
      usuarioId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date
    }, ExtArgs["result"]["pauta"]>
    composites: {}
  }


  type PautaGetPayload<S extends boolean | null | undefined | PautaDefaultArgs> = $Result.GetResult<Prisma.$PautaPayload, S>

  type PautaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PautaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PautaCountAggregateInputType | true
    }

  export interface PautaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pauta'], meta: { name: 'Pauta' } }
    /**
     * Find zero or one Pauta that matches the filter.
     * @param {PautaFindUniqueArgs} args - Arguments to find a Pauta
     * @example
     * // Get one Pauta
     * const pauta = await prisma.pauta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PautaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PautaFindUniqueArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pauta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PautaFindUniqueOrThrowArgs} args - Arguments to find a Pauta
     * @example
     * // Get one Pauta
     * const pauta = await prisma.pauta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PautaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PautaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pauta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PautaFindFirstArgs} args - Arguments to find a Pauta
     * @example
     * // Get one Pauta
     * const pauta = await prisma.pauta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PautaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PautaFindFirstArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pauta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PautaFindFirstOrThrowArgs} args - Arguments to find a Pauta
     * @example
     * // Get one Pauta
     * const pauta = await prisma.pauta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PautaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PautaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pautas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PautaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pautas
     * const pautas = await prisma.pauta.findMany()
     * 
     * // Get first 10 Pautas
     * const pautas = await prisma.pauta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pautaWithIdOnly = await prisma.pauta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PautaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PautaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pauta.
     * @param {PautaCreateArgs} args - Arguments to create a Pauta.
     * @example
     * // Create one Pauta
     * const Pauta = await prisma.pauta.create({
     *   data: {
     *     // ... data to create a Pauta
     *   }
     * })
     * 
    **/
    create<T extends PautaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PautaCreateArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pautas.
     *     @param {PautaCreateManyArgs} args - Arguments to create many Pautas.
     *     @example
     *     // Create many Pautas
     *     const pauta = await prisma.pauta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PautaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PautaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pauta.
     * @param {PautaDeleteArgs} args - Arguments to delete one Pauta.
     * @example
     * // Delete one Pauta
     * const Pauta = await prisma.pauta.delete({
     *   where: {
     *     // ... filter to delete one Pauta
     *   }
     * })
     * 
    **/
    delete<T extends PautaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PautaDeleteArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pauta.
     * @param {PautaUpdateArgs} args - Arguments to update one Pauta.
     * @example
     * // Update one Pauta
     * const pauta = await prisma.pauta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PautaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PautaUpdateArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pautas.
     * @param {PautaDeleteManyArgs} args - Arguments to filter Pautas to delete.
     * @example
     * // Delete a few Pautas
     * const { count } = await prisma.pauta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PautaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PautaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pautas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PautaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pautas
     * const pauta = await prisma.pauta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PautaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PautaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pauta.
     * @param {PautaUpsertArgs} args - Arguments to update or create a Pauta.
     * @example
     * // Update or create a Pauta
     * const pauta = await prisma.pauta.upsert({
     *   create: {
     *     // ... data to create a Pauta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pauta we want to update
     *   }
     * })
    **/
    upsert<T extends PautaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PautaUpsertArgs<ExtArgs>>
    ): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pautas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PautaCountArgs} args - Arguments to filter Pautas to count.
     * @example
     * // Count the number of Pautas
     * const count = await prisma.pauta.count({
     *   where: {
     *     // ... the filter for the Pautas we want to count
     *   }
     * })
    **/
    count<T extends PautaCountArgs>(
      args?: Subset<T, PautaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PautaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pauta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PautaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PautaAggregateArgs>(args: Subset<T, PautaAggregateArgs>): Prisma.PrismaPromise<GetPautaAggregateType<T>>

    /**
     * Group by Pauta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PautaGroupByArgs} args - Group by arguments.
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
      T extends PautaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PautaGroupByArgs['orderBy'] }
        : { orderBy?: PautaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PautaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPautaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pauta model
   */
  readonly fields: PautaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pauta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PautaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categoria<T extends Pauta$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Pauta$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    sessao<T extends Pauta$sessaoArgs<ExtArgs> = {}>(args?: Subset<T, Pauta$sessaoArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    votacao<T extends Pauta$votacaoArgs<ExtArgs> = {}>(args?: Subset<T, Pauta$votacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pauta model
   */ 
  interface PautaFieldRefs {
    readonly id: FieldRef<"Pauta", 'Int'>
    readonly titulo: FieldRef<"Pauta", 'String'>
    readonly descricao: FieldRef<"Pauta", 'String'>
    readonly categoriaId: FieldRef<"Pauta", 'Int'>
    readonly sessaoId: FieldRef<"Pauta", 'Int'>
    readonly usuarioId: FieldRef<"Pauta", 'Int'>
    readonly createdAt: FieldRef<"Pauta", 'DateTime'>
    readonly updatedAt: FieldRef<"Pauta", 'DateTime'>
    readonly deletedAt: FieldRef<"Pauta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pauta findUnique
   */
  export type PautaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * Filter, which Pauta to fetch.
     */
    where: PautaWhereUniqueInput
  }

  /**
   * Pauta findUniqueOrThrow
   */
  export type PautaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * Filter, which Pauta to fetch.
     */
    where: PautaWhereUniqueInput
  }

  /**
   * Pauta findFirst
   */
  export type PautaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * Filter, which Pauta to fetch.
     */
    where?: PautaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pautas to fetch.
     */
    orderBy?: PautaOrderByWithRelationInput | PautaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pautas.
     */
    cursor?: PautaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pautas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pautas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pautas.
     */
    distinct?: PautaScalarFieldEnum | PautaScalarFieldEnum[]
  }

  /**
   * Pauta findFirstOrThrow
   */
  export type PautaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * Filter, which Pauta to fetch.
     */
    where?: PautaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pautas to fetch.
     */
    orderBy?: PautaOrderByWithRelationInput | PautaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pautas.
     */
    cursor?: PautaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pautas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pautas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pautas.
     */
    distinct?: PautaScalarFieldEnum | PautaScalarFieldEnum[]
  }

  /**
   * Pauta findMany
   */
  export type PautaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * Filter, which Pautas to fetch.
     */
    where?: PautaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pautas to fetch.
     */
    orderBy?: PautaOrderByWithRelationInput | PautaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pautas.
     */
    cursor?: PautaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pautas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pautas.
     */
    skip?: number
    distinct?: PautaScalarFieldEnum | PautaScalarFieldEnum[]
  }

  /**
   * Pauta create
   */
  export type PautaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pauta.
     */
    data: XOR<PautaCreateInput, PautaUncheckedCreateInput>
  }

  /**
   * Pauta createMany
   */
  export type PautaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pautas.
     */
    data: PautaCreateManyInput | PautaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pauta update
   */
  export type PautaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pauta.
     */
    data: XOR<PautaUpdateInput, PautaUncheckedUpdateInput>
    /**
     * Choose, which Pauta to update.
     */
    where: PautaWhereUniqueInput
  }

  /**
   * Pauta updateMany
   */
  export type PautaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pautas.
     */
    data: XOR<PautaUpdateManyMutationInput, PautaUncheckedUpdateManyInput>
    /**
     * Filter which Pautas to update
     */
    where?: PautaWhereInput
  }

  /**
   * Pauta upsert
   */
  export type PautaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pauta to update in case it exists.
     */
    where: PautaWhereUniqueInput
    /**
     * In case the Pauta found by the `where` argument doesn't exist, create a new Pauta with this data.
     */
    create: XOR<PautaCreateInput, PautaUncheckedCreateInput>
    /**
     * In case the Pauta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PautaUpdateInput, PautaUncheckedUpdateInput>
  }

  /**
   * Pauta delete
   */
  export type PautaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    /**
     * Filter which Pauta to delete.
     */
    where: PautaWhereUniqueInput
  }

  /**
   * Pauta deleteMany
   */
  export type PautaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pautas to delete
     */
    where?: PautaWhereInput
  }

  /**
   * Pauta.categoria
   */
  export type Pauta$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Pauta.sessao
   */
  export type Pauta$sessaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
  }

  /**
   * Pauta.votacao
   */
  export type Pauta$votacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votacao
     */
    select?: VotacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotacaoInclude<ExtArgs> | null
    where?: VotacaoWhereInput
    orderBy?: VotacaoOrderByWithRelationInput | VotacaoOrderByWithRelationInput[]
    cursor?: VotacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotacaoScalarFieldEnum | VotacaoScalarFieldEnum[]
  }

  /**
   * Pauta without action
   */
  export type PautaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pautas?: boolean | Categoria$pautasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pautas?: boolean | Categoria$pautasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      pautas: Prisma.$PautaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }


  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categoria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoriaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
    **/
    create<T extends CategoriaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categorias.
     *     @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     *     @example
     *     // Create many Categorias
     *     const categoria = await prisma.categoria.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
    **/
    delete<T extends CategoriaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pautas<T extends Categoria$pautasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$pautasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Categoria model
   */ 
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
    readonly deletedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
  }

  /**
   * Categoria.pautas
   */
  export type Categoria$pautasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    where?: PautaWhereInput
    orderBy?: PautaOrderByWithRelationInput | PautaOrderByWithRelationInput[]
    cursor?: PautaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PautaScalarFieldEnum | PautaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Sessao
   */

  export type AggregateSessao = {
    _count: SessaoCountAggregateOutputType | null
    _avg: SessaoAvgAggregateOutputType | null
    _sum: SessaoSumAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  export type SessaoAvgAggregateOutputType = {
    id: number | null
    pautaId: number | null
  }

  export type SessaoSumAggregateOutputType = {
    id: number | null
    pautaId: number | null
  }

  export type SessaoMinAggregateOutputType = {
    id: number | null
    pautaId: number | null
    dataHoraInicio: string | null
    dataHoraFim: string | null
    status: $Enums.StatusSessaoEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SessaoMaxAggregateOutputType = {
    id: number | null
    pautaId: number | null
    dataHoraInicio: string | null
    dataHoraFim: string | null
    status: $Enums.StatusSessaoEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SessaoCountAggregateOutputType = {
    id: number
    pautaId: number
    dataHoraInicio: number
    dataHoraFim: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SessaoAvgAggregateInputType = {
    id?: true
    pautaId?: true
  }

  export type SessaoSumAggregateInputType = {
    id?: true
    pautaId?: true
  }

  export type SessaoMinAggregateInputType = {
    id?: true
    pautaId?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SessaoMaxAggregateInputType = {
    id?: true
    pautaId?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SessaoCountAggregateInputType = {
    id?: true
    pautaId?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SessaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessao to aggregate.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessaos
    **/
    _count?: true | SessaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessaoMaxAggregateInputType
  }

  export type GetSessaoAggregateType<T extends SessaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSessao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessao[P]>
      : GetScalarType<T[P], AggregateSessao[P]>
  }




  export type SessaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithAggregationInput | SessaoOrderByWithAggregationInput[]
    by: SessaoScalarFieldEnum[] | SessaoScalarFieldEnum
    having?: SessaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessaoCountAggregateInputType | true
    _avg?: SessaoAvgAggregateInputType
    _sum?: SessaoSumAggregateInputType
    _min?: SessaoMinAggregateInputType
    _max?: SessaoMaxAggregateInputType
  }

  export type SessaoGroupByOutputType = {
    id: number
    pautaId: number | null
    dataHoraInicio: string
    dataHoraFim: string
    status: $Enums.StatusSessaoEnum | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    _count: SessaoCountAggregateOutputType | null
    _avg: SessaoAvgAggregateOutputType | null
    _sum: SessaoSumAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  type GetSessaoGroupByPayload<T extends SessaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessaoGroupByOutputType[P]>
            : GetScalarType<T[P], SessaoGroupByOutputType[P]>
        }
      >
    >


  export type SessaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pautaId?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pauta?: boolean | Sessao$pautaArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectScalar = {
    id?: boolean
    pautaId?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type SessaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pauta?: boolean | Sessao$pautaArgs<ExtArgs>
  }


  export type $SessaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessao"
    objects: {
      pauta: Prisma.$PautaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pautaId: number | null
      dataHoraInicio: string
      dataHoraFim: string
      status: $Enums.StatusSessaoEnum | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date
    }, ExtArgs["result"]["sessao"]>
    composites: {}
  }


  type SessaoGetPayload<S extends boolean | null | undefined | SessaoDefaultArgs> = $Result.GetResult<Prisma.$SessaoPayload, S>

  type SessaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessaoCountAggregateInputType | true
    }

  export interface SessaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessao'], meta: { name: 'Sessao' } }
    /**
     * Find zero or one Sessao that matches the filter.
     * @param {SessaoFindUniqueArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessaoFindUniqueArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sessao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessaoFindUniqueOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sessao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessaoFindFirstArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sessao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessaos
     * const sessaos = await prisma.sessao.findMany()
     * 
     * // Get first 10 Sessaos
     * const sessaos = await prisma.sessao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessaoWithIdOnly = await prisma.sessao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sessao.
     * @param {SessaoCreateArgs} args - Arguments to create a Sessao.
     * @example
     * // Create one Sessao
     * const Sessao = await prisma.sessao.create({
     *   data: {
     *     // ... data to create a Sessao
     *   }
     * })
     * 
    **/
    create<T extends SessaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessaoCreateArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessaos.
     *     @param {SessaoCreateManyArgs} args - Arguments to create many Sessaos.
     *     @example
     *     // Create many Sessaos
     *     const sessao = await prisma.sessao.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessaoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessaoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessao.
     * @param {SessaoDeleteArgs} args - Arguments to delete one Sessao.
     * @example
     * // Delete one Sessao
     * const Sessao = await prisma.sessao.delete({
     *   where: {
     *     // ... filter to delete one Sessao
     *   }
     * })
     * 
    **/
    delete<T extends SessaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessaoDeleteArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sessao.
     * @param {SessaoUpdateArgs} args - Arguments to update one Sessao.
     * @example
     * // Update one Sessao
     * const sessao = await prisma.sessao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessaoUpdateArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessaos.
     * @param {SessaoDeleteManyArgs} args - Arguments to filter Sessaos to delete.
     * @example
     * // Delete a few Sessaos
     * const { count } = await prisma.sessao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessao.
     * @param {SessaoUpsertArgs} args - Arguments to update or create a Sessao.
     * @example
     * // Update or create a Sessao
     * const sessao = await prisma.sessao.upsert({
     *   create: {
     *     // ... data to create a Sessao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessao we want to update
     *   }
     * })
    **/
    upsert<T extends SessaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessaoUpsertArgs<ExtArgs>>
    ): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoCountArgs} args - Arguments to filter Sessaos to count.
     * @example
     * // Count the number of Sessaos
     * const count = await prisma.sessao.count({
     *   where: {
     *     // ... the filter for the Sessaos we want to count
     *   }
     * })
    **/
    count<T extends SessaoCountArgs>(
      args?: Subset<T, SessaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessaoAggregateArgs>(args: Subset<T, SessaoAggregateArgs>): Prisma.PrismaPromise<GetSessaoAggregateType<T>>

    /**
     * Group by Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoGroupByArgs} args - Group by arguments.
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
      T extends SessaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessaoGroupByArgs['orderBy'] }
        : { orderBy?: SessaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessao model
   */
  readonly fields: SessaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pauta<T extends Sessao$pautaArgs<ExtArgs> = {}>(args?: Subset<T, Sessao$pautaArgs<ExtArgs>>): Prisma__PautaClient<$Result.GetResult<Prisma.$PautaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sessao model
   */ 
  interface SessaoFieldRefs {
    readonly id: FieldRef<"Sessao", 'Int'>
    readonly pautaId: FieldRef<"Sessao", 'Int'>
    readonly dataHoraInicio: FieldRef<"Sessao", 'String'>
    readonly dataHoraFim: FieldRef<"Sessao", 'String'>
    readonly status: FieldRef<"Sessao", 'StatusSessaoEnum'>
    readonly createdAt: FieldRef<"Sessao", 'DateTime'>
    readonly updatedAt: FieldRef<"Sessao", 'DateTime'>
    readonly deletedAt: FieldRef<"Sessao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sessao findUnique
   */
  export type SessaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findUniqueOrThrow
   */
  export type SessaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findFirst
   */
  export type SessaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findFirstOrThrow
   */
  export type SessaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findMany
   */
  export type SessaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessaos to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao create
   */
  export type SessaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessao.
     */
    data: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
  }

  /**
   * Sessao createMany
   */
  export type SessaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessao update
   */
  export type SessaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessao.
     */
    data: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
    /**
     * Choose, which Sessao to update.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao updateMany
   */
  export type SessaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
  }

  /**
   * Sessao upsert
   */
  export type SessaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessao to update in case it exists.
     */
    where: SessaoWhereUniqueInput
    /**
     * In case the Sessao found by the `where` argument doesn't exist, create a new Sessao with this data.
     */
    create: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
    /**
     * In case the Sessao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
  }

  /**
   * Sessao delete
   */
  export type SessaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter which Sessao to delete.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao deleteMany
   */
  export type SessaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessaos to delete
     */
    where?: SessaoWhereInput
  }

  /**
   * Sessao.pauta
   */
  export type Sessao$pautaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pauta
     */
    select?: PautaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PautaInclude<ExtArgs> | null
    where?: PautaWhereInput
  }

  /**
   * Sessao without action
   */
  export type SessaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    login: 'login',
    senha: 'senha',
    nome: 'nome',
    endereco: 'endereco',
    email: 'email',
    cpf: 'cpf',
    tipo: 'tipo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VotacaoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    opcaoVotada: 'opcaoVotada',
    dataHoraVoto: 'dataHoraVoto',
    pautaId: 'pautaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type VotacaoScalarFieldEnum = (typeof VotacaoScalarFieldEnum)[keyof typeof VotacaoScalarFieldEnum]


  export const PautaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    categoriaId: 'categoriaId',
    sessaoId: 'sessaoId',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PautaScalarFieldEnum = (typeof PautaScalarFieldEnum)[keyof typeof PautaScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SessaoScalarFieldEnum: {
    id: 'id',
    pautaId: 'pautaId',
    dataHoraInicio: 'dataHoraInicio',
    dataHoraFim: 'dataHoraFim',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SessaoScalarFieldEnum = (typeof SessaoScalarFieldEnum)[keyof typeof SessaoScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusSessaoEnum'
   */
  export type EnumStatusSessaoEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSessaoEnum'>
    


  /**
   * Reference to a field of type 'StatusSessaoEnum[]'
   */
  export type ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSessaoEnum[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    login?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    endereco?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    deletedAt?: DateTimeFilter<"Usuario"> | Date | string
    voto?: VotacaoListRelationFilter
    Pauta?: PautaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    voto?: VotacaoOrderByRelationAggregateInput
    Pauta?: PautaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    login?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    endereco?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    deletedAt?: DateTimeFilter<"Usuario"> | Date | string
    voto?: VotacaoListRelationFilter
    Pauta?: PautaListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    login?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    endereco?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type VotacaoWhereInput = {
    AND?: VotacaoWhereInput | VotacaoWhereInput[]
    OR?: VotacaoWhereInput[]
    NOT?: VotacaoWhereInput | VotacaoWhereInput[]
    id?: IntFilter<"Votacao"> | number
    usuarioId?: IntFilter<"Votacao"> | number
    opcaoVotada?: StringFilter<"Votacao"> | string
    dataHoraVoto?: StringFilter<"Votacao"> | string
    pautaId?: IntFilter<"Votacao"> | number
    createdAt?: DateTimeFilter<"Votacao"> | Date | string
    updatedAt?: DateTimeFilter<"Votacao"> | Date | string
    deletedAt?: DateTimeFilter<"Votacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    pauta?: XOR<PautaRelationFilter, PautaWhereInput>
  }

  export type VotacaoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    opcaoVotada?: SortOrder
    dataHoraVoto?: SortOrder
    pautaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    pauta?: PautaOrderByWithRelationInput
  }

  export type VotacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VotacaoWhereInput | VotacaoWhereInput[]
    OR?: VotacaoWhereInput[]
    NOT?: VotacaoWhereInput | VotacaoWhereInput[]
    usuarioId?: IntFilter<"Votacao"> | number
    opcaoVotada?: StringFilter<"Votacao"> | string
    dataHoraVoto?: StringFilter<"Votacao"> | string
    pautaId?: IntFilter<"Votacao"> | number
    createdAt?: DateTimeFilter<"Votacao"> | Date | string
    updatedAt?: DateTimeFilter<"Votacao"> | Date | string
    deletedAt?: DateTimeFilter<"Votacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    pauta?: XOR<PautaRelationFilter, PautaWhereInput>
  }, "id">

  export type VotacaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    opcaoVotada?: SortOrder
    dataHoraVoto?: SortOrder
    pautaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: VotacaoCountOrderByAggregateInput
    _avg?: VotacaoAvgOrderByAggregateInput
    _max?: VotacaoMaxOrderByAggregateInput
    _min?: VotacaoMinOrderByAggregateInput
    _sum?: VotacaoSumOrderByAggregateInput
  }

  export type VotacaoScalarWhereWithAggregatesInput = {
    AND?: VotacaoScalarWhereWithAggregatesInput | VotacaoScalarWhereWithAggregatesInput[]
    OR?: VotacaoScalarWhereWithAggregatesInput[]
    NOT?: VotacaoScalarWhereWithAggregatesInput | VotacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Votacao"> | number
    usuarioId?: IntWithAggregatesFilter<"Votacao"> | number
    opcaoVotada?: StringWithAggregatesFilter<"Votacao"> | string
    dataHoraVoto?: StringWithAggregatesFilter<"Votacao"> | string
    pautaId?: IntWithAggregatesFilter<"Votacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Votacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Votacao"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"Votacao"> | Date | string
  }

  export type PautaWhereInput = {
    AND?: PautaWhereInput | PautaWhereInput[]
    OR?: PautaWhereInput[]
    NOT?: PautaWhereInput | PautaWhereInput[]
    id?: IntFilter<"Pauta"> | number
    titulo?: StringFilter<"Pauta"> | string
    descricao?: StringFilter<"Pauta"> | string
    categoriaId?: IntFilter<"Pauta"> | number
    sessaoId?: IntNullableFilter<"Pauta"> | number | null
    usuarioId?: IntFilter<"Pauta"> | number
    createdAt?: DateTimeFilter<"Pauta"> | Date | string
    updatedAt?: DateTimeFilter<"Pauta"> | Date | string
    deletedAt?: DateTimeFilter<"Pauta"> | Date | string
    categoria?: XOR<CategoriaNullableRelationFilter, CategoriaWhereInput> | null
    sessao?: XOR<SessaoNullableRelationFilter, SessaoWhereInput> | null
    votacao?: VotacaoListRelationFilter
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type PautaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    sessaoId?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    sessao?: SessaoOrderByWithRelationInput
    votacao?: VotacaoOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PautaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessaoId?: number
    AND?: PautaWhereInput | PautaWhereInput[]
    OR?: PautaWhereInput[]
    NOT?: PautaWhereInput | PautaWhereInput[]
    titulo?: StringFilter<"Pauta"> | string
    descricao?: StringFilter<"Pauta"> | string
    categoriaId?: IntFilter<"Pauta"> | number
    usuarioId?: IntFilter<"Pauta"> | number
    createdAt?: DateTimeFilter<"Pauta"> | Date | string
    updatedAt?: DateTimeFilter<"Pauta"> | Date | string
    deletedAt?: DateTimeFilter<"Pauta"> | Date | string
    categoria?: XOR<CategoriaNullableRelationFilter, CategoriaWhereInput> | null
    sessao?: XOR<SessaoNullableRelationFilter, SessaoWhereInput> | null
    votacao?: VotacaoListRelationFilter
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id" | "sessaoId">

  export type PautaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    sessaoId?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: PautaCountOrderByAggregateInput
    _avg?: PautaAvgOrderByAggregateInput
    _max?: PautaMaxOrderByAggregateInput
    _min?: PautaMinOrderByAggregateInput
    _sum?: PautaSumOrderByAggregateInput
  }

  export type PautaScalarWhereWithAggregatesInput = {
    AND?: PautaScalarWhereWithAggregatesInput | PautaScalarWhereWithAggregatesInput[]
    OR?: PautaScalarWhereWithAggregatesInput[]
    NOT?: PautaScalarWhereWithAggregatesInput | PautaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pauta"> | number
    titulo?: StringWithAggregatesFilter<"Pauta"> | string
    descricao?: StringWithAggregatesFilter<"Pauta"> | string
    categoriaId?: IntWithAggregatesFilter<"Pauta"> | number
    sessaoId?: IntNullableWithAggregatesFilter<"Pauta"> | number | null
    usuarioId?: IntWithAggregatesFilter<"Pauta"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pauta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pauta"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"Pauta"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    deletedAt?: DateTimeFilter<"Categoria"> | Date | string
    pautas?: PautaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pautas?: PautaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descricao?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    deletedAt?: DateTimeFilter<"Categoria"> | Date | string
    pautas?: PautaListRelationFilter
  }, "id" | "nome">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringWithAggregatesFilter<"Categoria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type SessaoWhereInput = {
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    id?: IntFilter<"Sessao"> | number
    pautaId?: IntNullableFilter<"Sessao"> | number | null
    dataHoraInicio?: StringFilter<"Sessao"> | string
    dataHoraFim?: StringFilter<"Sessao"> | string
    status?: EnumStatusSessaoEnumNullableFilter<"Sessao"> | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFilter<"Sessao"> | Date | string
    updatedAt?: DateTimeFilter<"Sessao"> | Date | string
    deletedAt?: DateTimeFilter<"Sessao"> | Date | string
    pauta?: XOR<PautaNullableRelationFilter, PautaWhereInput> | null
  }

  export type SessaoOrderByWithRelationInput = {
    id?: SortOrder
    pautaId?: SortOrderInput | SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pauta?: PautaOrderByWithRelationInput
  }

  export type SessaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pautaId?: number
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    dataHoraInicio?: StringFilter<"Sessao"> | string
    dataHoraFim?: StringFilter<"Sessao"> | string
    status?: EnumStatusSessaoEnumNullableFilter<"Sessao"> | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFilter<"Sessao"> | Date | string
    updatedAt?: DateTimeFilter<"Sessao"> | Date | string
    deletedAt?: DateTimeFilter<"Sessao"> | Date | string
    pauta?: XOR<PautaNullableRelationFilter, PautaWhereInput> | null
  }, "id" | "pautaId">

  export type SessaoOrderByWithAggregationInput = {
    id?: SortOrder
    pautaId?: SortOrderInput | SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: SessaoCountOrderByAggregateInput
    _avg?: SessaoAvgOrderByAggregateInput
    _max?: SessaoMaxOrderByAggregateInput
    _min?: SessaoMinOrderByAggregateInput
    _sum?: SessaoSumOrderByAggregateInput
  }

  export type SessaoScalarWhereWithAggregatesInput = {
    AND?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    OR?: SessaoScalarWhereWithAggregatesInput[]
    NOT?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sessao"> | number
    pautaId?: IntNullableWithAggregatesFilter<"Sessao"> | number | null
    dataHoraInicio?: StringWithAggregatesFilter<"Sessao"> | string
    dataHoraFim?: StringWithAggregatesFilter<"Sessao"> | string
    status?: EnumStatusSessaoEnumNullableWithAggregatesFilter<"Sessao"> | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeWithAggregatesFilter<"Sessao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sessao"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"Sessao"> | Date | string
  }

  export type UsuarioCreateInput = {
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    voto?: VotacaoCreateNestedManyWithoutUsuarioInput
    Pauta?: PautaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    voto?: VotacaoUncheckedCreateNestedManyWithoutUsuarioInput
    Pauta?: PautaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voto?: VotacaoUpdateManyWithoutUsuarioNestedInput
    Pauta?: PautaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voto?: VotacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    Pauta?: PautaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotacaoCreateInput = {
    opcaoVotada?: string
    dataHoraVoto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutVotoInput
    pauta: PautaCreateNestedOneWithoutVotacaoInput
  }

  export type VotacaoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    opcaoVotada?: string
    dataHoraVoto: string
    pautaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type VotacaoUpdateInput = {
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutVotoNestedInput
    pauta?: PautaUpdateOneRequiredWithoutVotacaoNestedInput
  }

  export type VotacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    pautaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotacaoCreateManyInput = {
    id?: number
    usuarioId: number
    opcaoVotada?: string
    dataHoraVoto: string
    pautaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type VotacaoUpdateManyMutationInput = {
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    pautaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PautaCreateInput = {
    titulo: string
    descricao: string
    sessaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutPautasInput
    sessao?: SessaoCreateNestedOneWithoutPautaInput
    votacao?: VotacaoCreateNestedManyWithoutPautaInput
    usuario: UsuarioCreateNestedOneWithoutPautaInput
  }

  export type PautaUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    sessaoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    sessao?: SessaoUncheckedCreateNestedOneWithoutPautaInput
    votacao?: VotacaoUncheckedCreateNestedManyWithoutPautaInput
  }

  export type PautaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutPautasNestedInput
    sessao?: SessaoUpdateOneWithoutPautaNestedInput
    votacao?: VotacaoUpdateManyWithoutPautaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPautaNestedInput
  }

  export type PautaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessao?: SessaoUncheckedUpdateOneWithoutPautaNestedInput
    votacao?: VotacaoUncheckedUpdateManyWithoutPautaNestedInput
  }

  export type PautaCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    sessaoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type PautaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PautaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    pautas?: PautaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    pautas?: PautaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pautas?: PautaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pautas?: PautaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoCreateInput = {
    dataHoraInicio: string
    dataHoraFim: string
    status?: $Enums.StatusSessaoEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    pauta?: PautaCreateNestedOneWithoutSessaoInput
  }

  export type SessaoUncheckedCreateInput = {
    id?: number
    pautaId?: number | null
    dataHoraInicio: string
    dataHoraFim: string
    status?: $Enums.StatusSessaoEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type SessaoUpdateInput = {
    dataHoraInicio?: StringFieldUpdateOperationsInput | string
    dataHoraFim?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusSessaoEnumFieldUpdateOperationsInput | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pauta?: PautaUpdateOneWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pautaId?: NullableIntFieldUpdateOperationsInput | number | null
    dataHoraInicio?: StringFieldUpdateOperationsInput | string
    dataHoraFim?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusSessaoEnumFieldUpdateOperationsInput | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoCreateManyInput = {
    id?: number
    pautaId?: number | null
    dataHoraInicio: string
    dataHoraFim: string
    status?: $Enums.StatusSessaoEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type SessaoUpdateManyMutationInput = {
    dataHoraInicio?: StringFieldUpdateOperationsInput | string
    dataHoraFim?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusSessaoEnumFieldUpdateOperationsInput | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pautaId?: NullableIntFieldUpdateOperationsInput | number | null
    dataHoraInicio?: StringFieldUpdateOperationsInput | string
    dataHoraFim?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusSessaoEnumFieldUpdateOperationsInput | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type VotacaoListRelationFilter = {
    every?: VotacaoWhereInput
    some?: VotacaoWhereInput
    none?: VotacaoWhereInput
  }

  export type PautaListRelationFilter = {
    every?: PautaWhereInput
    some?: PautaWhereInput
    none?: PautaWhereInput
  }

  export type VotacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PautaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PautaRelationFilter = {
    is?: PautaWhereInput
    isNot?: PautaWhereInput
  }

  export type VotacaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    opcaoVotada?: SortOrder
    dataHoraVoto?: SortOrder
    pautaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VotacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    pautaId?: SortOrder
  }

  export type VotacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    opcaoVotada?: SortOrder
    dataHoraVoto?: SortOrder
    pautaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VotacaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    opcaoVotada?: SortOrder
    dataHoraVoto?: SortOrder
    pautaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VotacaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    pautaId?: SortOrder
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

  export type CategoriaNullableRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type SessaoNullableRelationFilter = {
    is?: SessaoWhereInput | null
    isNot?: SessaoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PautaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    sessaoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PautaAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    sessaoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type PautaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    sessaoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PautaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    sessaoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PautaSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    sessaoId?: SortOrder
    usuarioId?: SortOrder
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

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusSessaoEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSessaoEnum | EnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSessaoEnumNullableFilter<$PrismaModel> | $Enums.StatusSessaoEnum | null
  }

  export type PautaNullableRelationFilter = {
    is?: PautaWhereInput | null
    isNot?: PautaWhereInput | null
  }

  export type SessaoCountOrderByAggregateInput = {
    id?: SortOrder
    pautaId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SessaoAvgOrderByAggregateInput = {
    id?: SortOrder
    pautaId?: SortOrder
  }

  export type SessaoMaxOrderByAggregateInput = {
    id?: SortOrder
    pautaId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SessaoMinOrderByAggregateInput = {
    id?: SortOrder
    pautaId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SessaoSumOrderByAggregateInput = {
    id?: SortOrder
    pautaId?: SortOrder
  }

  export type EnumStatusSessaoEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSessaoEnum | EnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSessaoEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusSessaoEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusSessaoEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusSessaoEnumNullableFilter<$PrismaModel>
  }

  export type VotacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VotacaoCreateWithoutUsuarioInput, VotacaoUncheckedCreateWithoutUsuarioInput> | VotacaoCreateWithoutUsuarioInput[] | VotacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutUsuarioInput | VotacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VotacaoCreateManyUsuarioInputEnvelope
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
  }

  export type PautaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PautaCreateWithoutUsuarioInput, PautaUncheckedCreateWithoutUsuarioInput> | PautaCreateWithoutUsuarioInput[] | PautaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutUsuarioInput | PautaCreateOrConnectWithoutUsuarioInput[]
    createMany?: PautaCreateManyUsuarioInputEnvelope
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
  }

  export type VotacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VotacaoCreateWithoutUsuarioInput, VotacaoUncheckedCreateWithoutUsuarioInput> | VotacaoCreateWithoutUsuarioInput[] | VotacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutUsuarioInput | VotacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VotacaoCreateManyUsuarioInputEnvelope
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
  }

  export type PautaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PautaCreateWithoutUsuarioInput, PautaUncheckedCreateWithoutUsuarioInput> | PautaCreateWithoutUsuarioInput[] | PautaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutUsuarioInput | PautaCreateOrConnectWithoutUsuarioInput[]
    createMany?: PautaCreateManyUsuarioInputEnvelope
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VotacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VotacaoCreateWithoutUsuarioInput, VotacaoUncheckedCreateWithoutUsuarioInput> | VotacaoCreateWithoutUsuarioInput[] | VotacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutUsuarioInput | VotacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VotacaoUpsertWithWhereUniqueWithoutUsuarioInput | VotacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VotacaoCreateManyUsuarioInputEnvelope
    set?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    disconnect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    delete?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    update?: VotacaoUpdateWithWhereUniqueWithoutUsuarioInput | VotacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VotacaoUpdateManyWithWhereWithoutUsuarioInput | VotacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VotacaoScalarWhereInput | VotacaoScalarWhereInput[]
  }

  export type PautaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PautaCreateWithoutUsuarioInput, PautaUncheckedCreateWithoutUsuarioInput> | PautaCreateWithoutUsuarioInput[] | PautaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutUsuarioInput | PautaCreateOrConnectWithoutUsuarioInput[]
    upsert?: PautaUpsertWithWhereUniqueWithoutUsuarioInput | PautaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PautaCreateManyUsuarioInputEnvelope
    set?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    disconnect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    delete?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    update?: PautaUpdateWithWhereUniqueWithoutUsuarioInput | PautaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PautaUpdateManyWithWhereWithoutUsuarioInput | PautaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PautaScalarWhereInput | PautaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VotacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VotacaoCreateWithoutUsuarioInput, VotacaoUncheckedCreateWithoutUsuarioInput> | VotacaoCreateWithoutUsuarioInput[] | VotacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutUsuarioInput | VotacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VotacaoUpsertWithWhereUniqueWithoutUsuarioInput | VotacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VotacaoCreateManyUsuarioInputEnvelope
    set?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    disconnect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    delete?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    update?: VotacaoUpdateWithWhereUniqueWithoutUsuarioInput | VotacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VotacaoUpdateManyWithWhereWithoutUsuarioInput | VotacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VotacaoScalarWhereInput | VotacaoScalarWhereInput[]
  }

  export type PautaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PautaCreateWithoutUsuarioInput, PautaUncheckedCreateWithoutUsuarioInput> | PautaCreateWithoutUsuarioInput[] | PautaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutUsuarioInput | PautaCreateOrConnectWithoutUsuarioInput[]
    upsert?: PautaUpsertWithWhereUniqueWithoutUsuarioInput | PautaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PautaCreateManyUsuarioInputEnvelope
    set?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    disconnect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    delete?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    update?: PautaUpdateWithWhereUniqueWithoutUsuarioInput | PautaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PautaUpdateManyWithWhereWithoutUsuarioInput | PautaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PautaScalarWhereInput | PautaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutVotoInput = {
    create?: XOR<UsuarioCreateWithoutVotoInput, UsuarioUncheckedCreateWithoutVotoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVotoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PautaCreateNestedOneWithoutVotacaoInput = {
    create?: XOR<PautaCreateWithoutVotacaoInput, PautaUncheckedCreateWithoutVotacaoInput>
    connectOrCreate?: PautaCreateOrConnectWithoutVotacaoInput
    connect?: PautaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutVotoNestedInput = {
    create?: XOR<UsuarioCreateWithoutVotoInput, UsuarioUncheckedCreateWithoutVotoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVotoInput
    upsert?: UsuarioUpsertWithoutVotoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVotoInput, UsuarioUpdateWithoutVotoInput>, UsuarioUncheckedUpdateWithoutVotoInput>
  }

  export type PautaUpdateOneRequiredWithoutVotacaoNestedInput = {
    create?: XOR<PautaCreateWithoutVotacaoInput, PautaUncheckedCreateWithoutVotacaoInput>
    connectOrCreate?: PautaCreateOrConnectWithoutVotacaoInput
    upsert?: PautaUpsertWithoutVotacaoInput
    connect?: PautaWhereUniqueInput
    update?: XOR<XOR<PautaUpdateToOneWithWhereWithoutVotacaoInput, PautaUpdateWithoutVotacaoInput>, PautaUncheckedUpdateWithoutVotacaoInput>
  }

  export type CategoriaCreateNestedOneWithoutPautasInput = {
    create?: XOR<CategoriaCreateWithoutPautasInput, CategoriaUncheckedCreateWithoutPautasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPautasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type SessaoCreateNestedOneWithoutPautaInput = {
    create?: XOR<SessaoCreateWithoutPautaInput, SessaoUncheckedCreateWithoutPautaInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutPautaInput
    connect?: SessaoWhereUniqueInput
  }

  export type VotacaoCreateNestedManyWithoutPautaInput = {
    create?: XOR<VotacaoCreateWithoutPautaInput, VotacaoUncheckedCreateWithoutPautaInput> | VotacaoCreateWithoutPautaInput[] | VotacaoUncheckedCreateWithoutPautaInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutPautaInput | VotacaoCreateOrConnectWithoutPautaInput[]
    createMany?: VotacaoCreateManyPautaInputEnvelope
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutPautaInput = {
    create?: XOR<UsuarioCreateWithoutPautaInput, UsuarioUncheckedCreateWithoutPautaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPautaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type SessaoUncheckedCreateNestedOneWithoutPautaInput = {
    create?: XOR<SessaoCreateWithoutPautaInput, SessaoUncheckedCreateWithoutPautaInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutPautaInput
    connect?: SessaoWhereUniqueInput
  }

  export type VotacaoUncheckedCreateNestedManyWithoutPautaInput = {
    create?: XOR<VotacaoCreateWithoutPautaInput, VotacaoUncheckedCreateWithoutPautaInput> | VotacaoCreateWithoutPautaInput[] | VotacaoUncheckedCreateWithoutPautaInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutPautaInput | VotacaoCreateOrConnectWithoutPautaInput[]
    createMany?: VotacaoCreateManyPautaInputEnvelope
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaUpdateOneWithoutPautasNestedInput = {
    create?: XOR<CategoriaCreateWithoutPautasInput, CategoriaUncheckedCreateWithoutPautasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPautasInput
    upsert?: CategoriaUpsertWithoutPautasInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPautasInput, CategoriaUpdateWithoutPautasInput>, CategoriaUncheckedUpdateWithoutPautasInput>
  }

  export type SessaoUpdateOneWithoutPautaNestedInput = {
    create?: XOR<SessaoCreateWithoutPautaInput, SessaoUncheckedCreateWithoutPautaInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutPautaInput
    upsert?: SessaoUpsertWithoutPautaInput
    disconnect?: SessaoWhereInput | boolean
    delete?: SessaoWhereInput | boolean
    connect?: SessaoWhereUniqueInput
    update?: XOR<XOR<SessaoUpdateToOneWithWhereWithoutPautaInput, SessaoUpdateWithoutPautaInput>, SessaoUncheckedUpdateWithoutPautaInput>
  }

  export type VotacaoUpdateManyWithoutPautaNestedInput = {
    create?: XOR<VotacaoCreateWithoutPautaInput, VotacaoUncheckedCreateWithoutPautaInput> | VotacaoCreateWithoutPautaInput[] | VotacaoUncheckedCreateWithoutPautaInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutPautaInput | VotacaoCreateOrConnectWithoutPautaInput[]
    upsert?: VotacaoUpsertWithWhereUniqueWithoutPautaInput | VotacaoUpsertWithWhereUniqueWithoutPautaInput[]
    createMany?: VotacaoCreateManyPautaInputEnvelope
    set?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    disconnect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    delete?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    update?: VotacaoUpdateWithWhereUniqueWithoutPautaInput | VotacaoUpdateWithWhereUniqueWithoutPautaInput[]
    updateMany?: VotacaoUpdateManyWithWhereWithoutPautaInput | VotacaoUpdateManyWithWhereWithoutPautaInput[]
    deleteMany?: VotacaoScalarWhereInput | VotacaoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPautaNestedInput = {
    create?: XOR<UsuarioCreateWithoutPautaInput, UsuarioUncheckedCreateWithoutPautaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPautaInput
    upsert?: UsuarioUpsertWithoutPautaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPautaInput, UsuarioUpdateWithoutPautaInput>, UsuarioUncheckedUpdateWithoutPautaInput>
  }

  export type SessaoUncheckedUpdateOneWithoutPautaNestedInput = {
    create?: XOR<SessaoCreateWithoutPautaInput, SessaoUncheckedCreateWithoutPautaInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutPautaInput
    upsert?: SessaoUpsertWithoutPautaInput
    disconnect?: SessaoWhereInput | boolean
    delete?: SessaoWhereInput | boolean
    connect?: SessaoWhereUniqueInput
    update?: XOR<XOR<SessaoUpdateToOneWithWhereWithoutPautaInput, SessaoUpdateWithoutPautaInput>, SessaoUncheckedUpdateWithoutPautaInput>
  }

  export type VotacaoUncheckedUpdateManyWithoutPautaNestedInput = {
    create?: XOR<VotacaoCreateWithoutPautaInput, VotacaoUncheckedCreateWithoutPautaInput> | VotacaoCreateWithoutPautaInput[] | VotacaoUncheckedCreateWithoutPautaInput[]
    connectOrCreate?: VotacaoCreateOrConnectWithoutPautaInput | VotacaoCreateOrConnectWithoutPautaInput[]
    upsert?: VotacaoUpsertWithWhereUniqueWithoutPautaInput | VotacaoUpsertWithWhereUniqueWithoutPautaInput[]
    createMany?: VotacaoCreateManyPautaInputEnvelope
    set?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    disconnect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    delete?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    connect?: VotacaoWhereUniqueInput | VotacaoWhereUniqueInput[]
    update?: VotacaoUpdateWithWhereUniqueWithoutPautaInput | VotacaoUpdateWithWhereUniqueWithoutPautaInput[]
    updateMany?: VotacaoUpdateManyWithWhereWithoutPautaInput | VotacaoUpdateManyWithWhereWithoutPautaInput[]
    deleteMany?: VotacaoScalarWhereInput | VotacaoScalarWhereInput[]
  }

  export type PautaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PautaCreateWithoutCategoriaInput, PautaUncheckedCreateWithoutCategoriaInput> | PautaCreateWithoutCategoriaInput[] | PautaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutCategoriaInput | PautaCreateOrConnectWithoutCategoriaInput[]
    createMany?: PautaCreateManyCategoriaInputEnvelope
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
  }

  export type PautaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PautaCreateWithoutCategoriaInput, PautaUncheckedCreateWithoutCategoriaInput> | PautaCreateWithoutCategoriaInput[] | PautaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutCategoriaInput | PautaCreateOrConnectWithoutCategoriaInput[]
    createMany?: PautaCreateManyCategoriaInputEnvelope
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
  }

  export type PautaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PautaCreateWithoutCategoriaInput, PautaUncheckedCreateWithoutCategoriaInput> | PautaCreateWithoutCategoriaInput[] | PautaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutCategoriaInput | PautaCreateOrConnectWithoutCategoriaInput[]
    upsert?: PautaUpsertWithWhereUniqueWithoutCategoriaInput | PautaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PautaCreateManyCategoriaInputEnvelope
    set?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    disconnect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    delete?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    update?: PautaUpdateWithWhereUniqueWithoutCategoriaInput | PautaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PautaUpdateManyWithWhereWithoutCategoriaInput | PautaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PautaScalarWhereInput | PautaScalarWhereInput[]
  }

  export type PautaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PautaCreateWithoutCategoriaInput, PautaUncheckedCreateWithoutCategoriaInput> | PautaCreateWithoutCategoriaInput[] | PautaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PautaCreateOrConnectWithoutCategoriaInput | PautaCreateOrConnectWithoutCategoriaInput[]
    upsert?: PautaUpsertWithWhereUniqueWithoutCategoriaInput | PautaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PautaCreateManyCategoriaInputEnvelope
    set?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    disconnect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    delete?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    connect?: PautaWhereUniqueInput | PautaWhereUniqueInput[]
    update?: PautaUpdateWithWhereUniqueWithoutCategoriaInput | PautaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PautaUpdateManyWithWhereWithoutCategoriaInput | PautaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PautaScalarWhereInput | PautaScalarWhereInput[]
  }

  export type PautaCreateNestedOneWithoutSessaoInput = {
    create?: XOR<PautaCreateWithoutSessaoInput, PautaUncheckedCreateWithoutSessaoInput>
    connectOrCreate?: PautaCreateOrConnectWithoutSessaoInput
    connect?: PautaWhereUniqueInput
  }

  export type NullableEnumStatusSessaoEnumFieldUpdateOperationsInput = {
    set?: $Enums.StatusSessaoEnum | null
  }

  export type PautaUpdateOneWithoutSessaoNestedInput = {
    create?: XOR<PautaCreateWithoutSessaoInput, PautaUncheckedCreateWithoutSessaoInput>
    connectOrCreate?: PautaCreateOrConnectWithoutSessaoInput
    upsert?: PautaUpsertWithoutSessaoInput
    disconnect?: PautaWhereInput | boolean
    delete?: PautaWhereInput | boolean
    connect?: PautaWhereUniqueInput
    update?: XOR<XOR<PautaUpdateToOneWithWhereWithoutSessaoInput, PautaUpdateWithoutSessaoInput>, PautaUncheckedUpdateWithoutSessaoInput>
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

  export type NestedEnumStatusSessaoEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSessaoEnum | EnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSessaoEnumNullableFilter<$PrismaModel> | $Enums.StatusSessaoEnum | null
  }

  export type NestedEnumStatusSessaoEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSessaoEnum | EnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSessaoEnum[] | ListEnumStatusSessaoEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSessaoEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusSessaoEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusSessaoEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusSessaoEnumNullableFilter<$PrismaModel>
  }

  export type VotacaoCreateWithoutUsuarioInput = {
    opcaoVotada?: string
    dataHoraVoto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    pauta: PautaCreateNestedOneWithoutVotacaoInput
  }

  export type VotacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    opcaoVotada?: string
    dataHoraVoto: string
    pautaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type VotacaoCreateOrConnectWithoutUsuarioInput = {
    where: VotacaoWhereUniqueInput
    create: XOR<VotacaoCreateWithoutUsuarioInput, VotacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type VotacaoCreateManyUsuarioInputEnvelope = {
    data: VotacaoCreateManyUsuarioInput | VotacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PautaCreateWithoutUsuarioInput = {
    titulo: string
    descricao: string
    sessaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutPautasInput
    sessao?: SessaoCreateNestedOneWithoutPautaInput
    votacao?: VotacaoCreateNestedManyWithoutPautaInput
  }

  export type PautaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    sessaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    sessao?: SessaoUncheckedCreateNestedOneWithoutPautaInput
    votacao?: VotacaoUncheckedCreateNestedManyWithoutPautaInput
  }

  export type PautaCreateOrConnectWithoutUsuarioInput = {
    where: PautaWhereUniqueInput
    create: XOR<PautaCreateWithoutUsuarioInput, PautaUncheckedCreateWithoutUsuarioInput>
  }

  export type PautaCreateManyUsuarioInputEnvelope = {
    data: PautaCreateManyUsuarioInput | PautaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VotacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VotacaoWhereUniqueInput
    update: XOR<VotacaoUpdateWithoutUsuarioInput, VotacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VotacaoCreateWithoutUsuarioInput, VotacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type VotacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VotacaoWhereUniqueInput
    data: XOR<VotacaoUpdateWithoutUsuarioInput, VotacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type VotacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: VotacaoScalarWhereInput
    data: XOR<VotacaoUpdateManyMutationInput, VotacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VotacaoScalarWhereInput = {
    AND?: VotacaoScalarWhereInput | VotacaoScalarWhereInput[]
    OR?: VotacaoScalarWhereInput[]
    NOT?: VotacaoScalarWhereInput | VotacaoScalarWhereInput[]
    id?: IntFilter<"Votacao"> | number
    usuarioId?: IntFilter<"Votacao"> | number
    opcaoVotada?: StringFilter<"Votacao"> | string
    dataHoraVoto?: StringFilter<"Votacao"> | string
    pautaId?: IntFilter<"Votacao"> | number
    createdAt?: DateTimeFilter<"Votacao"> | Date | string
    updatedAt?: DateTimeFilter<"Votacao"> | Date | string
    deletedAt?: DateTimeFilter<"Votacao"> | Date | string
  }

  export type PautaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PautaWhereUniqueInput
    update: XOR<PautaUpdateWithoutUsuarioInput, PautaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PautaCreateWithoutUsuarioInput, PautaUncheckedCreateWithoutUsuarioInput>
  }

  export type PautaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PautaWhereUniqueInput
    data: XOR<PautaUpdateWithoutUsuarioInput, PautaUncheckedUpdateWithoutUsuarioInput>
  }

  export type PautaUpdateManyWithWhereWithoutUsuarioInput = {
    where: PautaScalarWhereInput
    data: XOR<PautaUpdateManyMutationInput, PautaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PautaScalarWhereInput = {
    AND?: PautaScalarWhereInput | PautaScalarWhereInput[]
    OR?: PautaScalarWhereInput[]
    NOT?: PautaScalarWhereInput | PautaScalarWhereInput[]
    id?: IntFilter<"Pauta"> | number
    titulo?: StringFilter<"Pauta"> | string
    descricao?: StringFilter<"Pauta"> | string
    categoriaId?: IntFilter<"Pauta"> | number
    sessaoId?: IntNullableFilter<"Pauta"> | number | null
    usuarioId?: IntFilter<"Pauta"> | number
    createdAt?: DateTimeFilter<"Pauta"> | Date | string
    updatedAt?: DateTimeFilter<"Pauta"> | Date | string
    deletedAt?: DateTimeFilter<"Pauta"> | Date | string
  }

  export type UsuarioCreateWithoutVotoInput = {
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    Pauta?: PautaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutVotoInput = {
    id?: number
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    Pauta?: PautaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutVotoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVotoInput, UsuarioUncheckedCreateWithoutVotoInput>
  }

  export type PautaCreateWithoutVotacaoInput = {
    titulo: string
    descricao: string
    sessaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutPautasInput
    sessao?: SessaoCreateNestedOneWithoutPautaInput
    usuario: UsuarioCreateNestedOneWithoutPautaInput
  }

  export type PautaUncheckedCreateWithoutVotacaoInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    sessaoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    sessao?: SessaoUncheckedCreateNestedOneWithoutPautaInput
  }

  export type PautaCreateOrConnectWithoutVotacaoInput = {
    where: PautaWhereUniqueInput
    create: XOR<PautaCreateWithoutVotacaoInput, PautaUncheckedCreateWithoutVotacaoInput>
  }

  export type UsuarioUpsertWithoutVotoInput = {
    update: XOR<UsuarioUpdateWithoutVotoInput, UsuarioUncheckedUpdateWithoutVotoInput>
    create: XOR<UsuarioCreateWithoutVotoInput, UsuarioUncheckedCreateWithoutVotoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVotoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVotoInput, UsuarioUncheckedUpdateWithoutVotoInput>
  }

  export type UsuarioUpdateWithoutVotoInput = {
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pauta?: PautaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pauta?: PautaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PautaUpsertWithoutVotacaoInput = {
    update: XOR<PautaUpdateWithoutVotacaoInput, PautaUncheckedUpdateWithoutVotacaoInput>
    create: XOR<PautaCreateWithoutVotacaoInput, PautaUncheckedCreateWithoutVotacaoInput>
    where?: PautaWhereInput
  }

  export type PautaUpdateToOneWithWhereWithoutVotacaoInput = {
    where?: PautaWhereInput
    data: XOR<PautaUpdateWithoutVotacaoInput, PautaUncheckedUpdateWithoutVotacaoInput>
  }

  export type PautaUpdateWithoutVotacaoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutPautasNestedInput
    sessao?: SessaoUpdateOneWithoutPautaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPautaNestedInput
  }

  export type PautaUncheckedUpdateWithoutVotacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessao?: SessaoUncheckedUpdateOneWithoutPautaNestedInput
  }

  export type CategoriaCreateWithoutPautasInput = {
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutPautasInput = {
    id?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutPautasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPautasInput, CategoriaUncheckedCreateWithoutPautasInput>
  }

  export type SessaoCreateWithoutPautaInput = {
    dataHoraInicio: string
    dataHoraFim: string
    status?: $Enums.StatusSessaoEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type SessaoUncheckedCreateWithoutPautaInput = {
    id?: number
    dataHoraInicio: string
    dataHoraFim: string
    status?: $Enums.StatusSessaoEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type SessaoCreateOrConnectWithoutPautaInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutPautaInput, SessaoUncheckedCreateWithoutPautaInput>
  }

  export type VotacaoCreateWithoutPautaInput = {
    opcaoVotada?: string
    dataHoraVoto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutVotoInput
  }

  export type VotacaoUncheckedCreateWithoutPautaInput = {
    id?: number
    usuarioId: number
    opcaoVotada?: string
    dataHoraVoto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type VotacaoCreateOrConnectWithoutPautaInput = {
    where: VotacaoWhereUniqueInput
    create: XOR<VotacaoCreateWithoutPautaInput, VotacaoUncheckedCreateWithoutPautaInput>
  }

  export type VotacaoCreateManyPautaInputEnvelope = {
    data: VotacaoCreateManyPautaInput | VotacaoCreateManyPautaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutPautaInput = {
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    voto?: VotacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPautaInput = {
    id?: number
    login: string
    senha: string
    nome: string
    endereco: string
    email: string
    cpf: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    voto?: VotacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPautaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPautaInput, UsuarioUncheckedCreateWithoutPautaInput>
  }

  export type CategoriaUpsertWithoutPautasInput = {
    update: XOR<CategoriaUpdateWithoutPautasInput, CategoriaUncheckedUpdateWithoutPautasInput>
    create: XOR<CategoriaCreateWithoutPautasInput, CategoriaUncheckedCreateWithoutPautasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPautasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPautasInput, CategoriaUncheckedUpdateWithoutPautasInput>
  }

  export type CategoriaUpdateWithoutPautasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutPautasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoUpsertWithoutPautaInput = {
    update: XOR<SessaoUpdateWithoutPautaInput, SessaoUncheckedUpdateWithoutPautaInput>
    create: XOR<SessaoCreateWithoutPautaInput, SessaoUncheckedCreateWithoutPautaInput>
    where?: SessaoWhereInput
  }

  export type SessaoUpdateToOneWithWhereWithoutPautaInput = {
    where?: SessaoWhereInput
    data: XOR<SessaoUpdateWithoutPautaInput, SessaoUncheckedUpdateWithoutPautaInput>
  }

  export type SessaoUpdateWithoutPautaInput = {
    dataHoraInicio?: StringFieldUpdateOperationsInput | string
    dataHoraFim?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusSessaoEnumFieldUpdateOperationsInput | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoUncheckedUpdateWithoutPautaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHoraInicio?: StringFieldUpdateOperationsInput | string
    dataHoraFim?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusSessaoEnumFieldUpdateOperationsInput | $Enums.StatusSessaoEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotacaoUpsertWithWhereUniqueWithoutPautaInput = {
    where: VotacaoWhereUniqueInput
    update: XOR<VotacaoUpdateWithoutPautaInput, VotacaoUncheckedUpdateWithoutPautaInput>
    create: XOR<VotacaoCreateWithoutPautaInput, VotacaoUncheckedCreateWithoutPautaInput>
  }

  export type VotacaoUpdateWithWhereUniqueWithoutPautaInput = {
    where: VotacaoWhereUniqueInput
    data: XOR<VotacaoUpdateWithoutPautaInput, VotacaoUncheckedUpdateWithoutPautaInput>
  }

  export type VotacaoUpdateManyWithWhereWithoutPautaInput = {
    where: VotacaoScalarWhereInput
    data: XOR<VotacaoUpdateManyMutationInput, VotacaoUncheckedUpdateManyWithoutPautaInput>
  }

  export type UsuarioUpsertWithoutPautaInput = {
    update: XOR<UsuarioUpdateWithoutPautaInput, UsuarioUncheckedUpdateWithoutPautaInput>
    create: XOR<UsuarioCreateWithoutPautaInput, UsuarioUncheckedCreateWithoutPautaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPautaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPautaInput, UsuarioUncheckedUpdateWithoutPautaInput>
  }

  export type UsuarioUpdateWithoutPautaInput = {
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voto?: VotacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPautaInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voto?: VotacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PautaCreateWithoutCategoriaInput = {
    titulo: string
    descricao: string
    sessaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    sessao?: SessaoCreateNestedOneWithoutPautaInput
    votacao?: VotacaoCreateNestedManyWithoutPautaInput
    usuario: UsuarioCreateNestedOneWithoutPautaInput
  }

  export type PautaUncheckedCreateWithoutCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    sessaoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    sessao?: SessaoUncheckedCreateNestedOneWithoutPautaInput
    votacao?: VotacaoUncheckedCreateNestedManyWithoutPautaInput
  }

  export type PautaCreateOrConnectWithoutCategoriaInput = {
    where: PautaWhereUniqueInput
    create: XOR<PautaCreateWithoutCategoriaInput, PautaUncheckedCreateWithoutCategoriaInput>
  }

  export type PautaCreateManyCategoriaInputEnvelope = {
    data: PautaCreateManyCategoriaInput | PautaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type PautaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PautaWhereUniqueInput
    update: XOR<PautaUpdateWithoutCategoriaInput, PautaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PautaCreateWithoutCategoriaInput, PautaUncheckedCreateWithoutCategoriaInput>
  }

  export type PautaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PautaWhereUniqueInput
    data: XOR<PautaUpdateWithoutCategoriaInput, PautaUncheckedUpdateWithoutCategoriaInput>
  }

  export type PautaUpdateManyWithWhereWithoutCategoriaInput = {
    where: PautaScalarWhereInput
    data: XOR<PautaUpdateManyMutationInput, PautaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type PautaCreateWithoutSessaoInput = {
    titulo: string
    descricao: string
    sessaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutPautasInput
    votacao?: VotacaoCreateNestedManyWithoutPautaInput
    usuario: UsuarioCreateNestedOneWithoutPautaInput
  }

  export type PautaUncheckedCreateWithoutSessaoInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    sessaoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    votacao?: VotacaoUncheckedCreateNestedManyWithoutPautaInput
  }

  export type PautaCreateOrConnectWithoutSessaoInput = {
    where: PautaWhereUniqueInput
    create: XOR<PautaCreateWithoutSessaoInput, PautaUncheckedCreateWithoutSessaoInput>
  }

  export type PautaUpsertWithoutSessaoInput = {
    update: XOR<PautaUpdateWithoutSessaoInput, PautaUncheckedUpdateWithoutSessaoInput>
    create: XOR<PautaCreateWithoutSessaoInput, PautaUncheckedCreateWithoutSessaoInput>
    where?: PautaWhereInput
  }

  export type PautaUpdateToOneWithWhereWithoutSessaoInput = {
    where?: PautaWhereInput
    data: XOR<PautaUpdateWithoutSessaoInput, PautaUncheckedUpdateWithoutSessaoInput>
  }

  export type PautaUpdateWithoutSessaoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutPautasNestedInput
    votacao?: VotacaoUpdateManyWithoutPautaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPautaNestedInput
  }

  export type PautaUncheckedUpdateWithoutSessaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votacao?: VotacaoUncheckedUpdateManyWithoutPautaNestedInput
  }

  export type VotacaoCreateManyUsuarioInput = {
    id?: number
    opcaoVotada?: string
    dataHoraVoto: string
    pautaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type PautaCreateManyUsuarioInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    sessaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type VotacaoUpdateWithoutUsuarioInput = {
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pauta?: PautaUpdateOneRequiredWithoutVotacaoNestedInput
  }

  export type VotacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    pautaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    pautaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PautaUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutPautasNestedInput
    sessao?: SessaoUpdateOneWithoutPautaNestedInput
    votacao?: VotacaoUpdateManyWithoutPautaNestedInput
  }

  export type PautaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessao?: SessaoUncheckedUpdateOneWithoutPautaNestedInput
    votacao?: VotacaoUncheckedUpdateManyWithoutPautaNestedInput
  }

  export type PautaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotacaoCreateManyPautaInput = {
    id?: number
    usuarioId: number
    opcaoVotada?: string
    dataHoraVoto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type VotacaoUpdateWithoutPautaInput = {
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutVotoNestedInput
  }

  export type VotacaoUncheckedUpdateWithoutPautaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotacaoUncheckedUpdateManyWithoutPautaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    opcaoVotada?: StringFieldUpdateOperationsInput | string
    dataHoraVoto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PautaCreateManyCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    sessaoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
  }

  export type PautaUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessao?: SessaoUpdateOneWithoutPautaNestedInput
    votacao?: VotacaoUpdateManyWithoutPautaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPautaNestedInput
  }

  export type PautaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessao?: SessaoUncheckedUpdateOneWithoutPautaNestedInput
    votacao?: VotacaoUncheckedUpdateManyWithoutPautaNestedInput
  }

  export type PautaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sessaoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PautaCountOutputTypeDefaultArgs instead
     */
    export type PautaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PautaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaCountOutputTypeDefaultArgs instead
     */
    export type CategoriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VotacaoDefaultArgs instead
     */
    export type VotacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VotacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PautaDefaultArgs instead
     */
    export type PautaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PautaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaDefaultArgs instead
     */
    export type CategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessaoDefaultArgs instead
     */
    export type SessaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessaoDefaultArgs<ExtArgs>

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