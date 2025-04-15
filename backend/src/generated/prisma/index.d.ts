
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Medico
 * 
 */
export type Medico = $Result.DefaultSelection<Prisma.$MedicoPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Recepcionista
 * 
 */
export type Recepcionista = $Result.DefaultSelection<Prisma.$RecepcionistaPayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>
/**
 * Model HistoricoConsulta
 * 
 */
export type HistoricoConsulta = $Result.DefaultSelection<Prisma.$HistoricoConsultaPayload>
/**
 * Model RegistroMedico
 * 
 */
export type RegistroMedico = $Result.DefaultSelection<Prisma.$RegistroMedicoPayload>
/**
 * Model HorarioMedico
 * 
 */
export type HorarioMedico = $Result.DefaultSelection<Prisma.$HorarioMedicoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  medico: 'medico',
  recepcionista: 'recepcionista',
  paciente: 'paciente'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ConsultaStatus: {
  agendado: 'agendado',
  cancelado: 'cancelado',
  realizado: 'realizado'
};

export type ConsultaStatus = (typeof ConsultaStatus)[keyof typeof ConsultaStatus]


export const DiaSemana: {
  domingo: 'domingo',
  segunda: 'segunda',
  terca: 'terca',
  quarta: 'quarta',
  quinta: 'quinta',
  sexta: 'sexta',
  sabado: 'sabado'
};

export type DiaSemana = (typeof DiaSemana)[keyof typeof DiaSemana]


export const AcaoConsulta: {
  agendado: 'agendado',
  cancelado: 'cancelado',
  reagendado: 'reagendado'
};

export type AcaoConsulta = (typeof AcaoConsulta)[keyof typeof AcaoConsulta]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ConsultaStatus = $Enums.ConsultaStatus

export const ConsultaStatus: typeof $Enums.ConsultaStatus

export type DiaSemana = $Enums.DiaSemana

export const DiaSemana: typeof $Enums.DiaSemana

export type AcaoConsulta = $Enums.AcaoConsulta

export const AcaoConsulta: typeof $Enums.AcaoConsulta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * `prisma.medico`: Exposes CRUD operations for the **Medico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medico.findMany()
    * ```
    */
  get medico(): Prisma.MedicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recepcionista`: Exposes CRUD operations for the **Recepcionista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recepcionistas
    * const recepcionistas = await prisma.recepcionista.findMany()
    * ```
    */
  get recepcionista(): Prisma.RecepcionistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoConsulta`: Exposes CRUD operations for the **HistoricoConsulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoConsultas
    * const historicoConsultas = await prisma.historicoConsulta.findMany()
    * ```
    */
  get historicoConsulta(): Prisma.HistoricoConsultaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroMedico`: Exposes CRUD operations for the **RegistroMedico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroMedicos
    * const registroMedicos = await prisma.registroMedico.findMany()
    * ```
    */
  get registroMedico(): Prisma.RegistroMedicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarioMedico`: Exposes CRUD operations for the **HorarioMedico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorarioMedicos
    * const horarioMedicos = await prisma.horarioMedico.findMany()
    * ```
    */
  get horarioMedico(): Prisma.HorarioMedicoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Medico: 'Medico',
    Paciente: 'Paciente',
    Recepcionista: 'Recepcionista',
    Consulta: 'Consulta',
    HistoricoConsulta: 'HistoricoConsulta',
    RegistroMedico: 'RegistroMedico',
    HorarioMedico: 'HorarioMedico'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "medico" | "paciente" | "recepcionista" | "consulta" | "historicoConsulta" | "registroMedico" | "horarioMedico"
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
      Medico: {
        payload: Prisma.$MedicoPayload<ExtArgs>
        fields: Prisma.MedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findFirst: {
            args: Prisma.MedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findMany: {
            args: Prisma.MedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          create: {
            args: Prisma.MedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          createMany: {
            args: Prisma.MedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          update: {
            args: Prisma.MedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          deleteMany: {
            args: Prisma.MedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          aggregate: {
            args: Prisma.MedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico>
          }
          groupBy: {
            args: Prisma.MedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicoCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Recepcionista: {
        payload: Prisma.$RecepcionistaPayload<ExtArgs>
        fields: Prisma.RecepcionistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecepcionistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecepcionistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          findFirst: {
            args: Prisma.RecepcionistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecepcionistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          findMany: {
            args: Prisma.RecepcionistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>[]
          }
          create: {
            args: Prisma.RecepcionistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          createMany: {
            args: Prisma.RecepcionistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RecepcionistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          update: {
            args: Prisma.RecepcionistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          deleteMany: {
            args: Prisma.RecepcionistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecepcionistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecepcionistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          aggregate: {
            args: Prisma.RecepcionistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecepcionista>
          }
          groupBy: {
            args: Prisma.RecepcionistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecepcionistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecepcionistaCountArgs<ExtArgs>
            result: $Utils.Optional<RecepcionistaCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          createMany: {
            args: Prisma.ConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
      HistoricoConsulta: {
        payload: Prisma.$HistoricoConsultaPayload<ExtArgs>
        fields: Prisma.HistoricoConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload>
          }
          findFirst: {
            args: Prisma.HistoricoConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload>
          }
          findMany: {
            args: Prisma.HistoricoConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload>[]
          }
          create: {
            args: Prisma.HistoricoConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload>
          }
          createMany: {
            args: Prisma.HistoricoConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoricoConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload>
          }
          update: {
            args: Prisma.HistoricoConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoricoConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoConsultaPayload>
          }
          aggregate: {
            args: Prisma.HistoricoConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoConsulta>
          }
          groupBy: {
            args: Prisma.HistoricoConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoConsultaCountAggregateOutputType> | number
          }
        }
      }
      RegistroMedico: {
        payload: Prisma.$RegistroMedicoPayload<ExtArgs>
        fields: Prisma.RegistroMedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroMedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroMedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload>
          }
          findFirst: {
            args: Prisma.RegistroMedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroMedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload>
          }
          findMany: {
            args: Prisma.RegistroMedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload>[]
          }
          create: {
            args: Prisma.RegistroMedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload>
          }
          createMany: {
            args: Prisma.RegistroMedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistroMedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload>
          }
          update: {
            args: Prisma.RegistroMedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload>
          }
          deleteMany: {
            args: Prisma.RegistroMedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroMedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistroMedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroMedicoPayload>
          }
          aggregate: {
            args: Prisma.RegistroMedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroMedico>
          }
          groupBy: {
            args: Prisma.RegistroMedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroMedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroMedicoCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroMedicoCountAggregateOutputType> | number
          }
        }
      }
      HorarioMedico: {
        payload: Prisma.$HorarioMedicoPayload<ExtArgs>
        fields: Prisma.HorarioMedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioMedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioMedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload>
          }
          findFirst: {
            args: Prisma.HorarioMedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioMedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload>
          }
          findMany: {
            args: Prisma.HorarioMedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload>[]
          }
          create: {
            args: Prisma.HorarioMedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload>
          }
          createMany: {
            args: Prisma.HorarioMedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HorarioMedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload>
          }
          update: {
            args: Prisma.HorarioMedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload>
          }
          deleteMany: {
            args: Prisma.HorarioMedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioMedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HorarioMedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioMedicoPayload>
          }
          aggregate: {
            args: Prisma.HorarioMedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarioMedico>
          }
          groupBy: {
            args: Prisma.HorarioMedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioMedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioMedicoCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioMedicoCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    medico?: MedicoOmit
    paciente?: PacienteOmit
    recepcionista?: RecepcionistaOmit
    consulta?: ConsultaOmit
    historicoConsulta?: HistoricoConsultaOmit
    registroMedico?: RegistroMedicoOmit
    horarioMedico?: HorarioMedicoOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    historicoAcoes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoAcoes?: boolean | UserCountOutputTypeCountHistoricoAcoesArgs
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
  export type UserCountOutputTypeCountHistoricoAcoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoConsultaWhereInput
  }


  /**
   * Count Type MedicoCountOutputType
   */

  export type MedicoCountOutputType = {
    consultas: number
    registros: number
    horarios: number
  }

  export type MedicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | MedicoCountOutputTypeCountConsultasArgs
    registros?: boolean | MedicoCountOutputTypeCountRegistrosArgs
    horarios?: boolean | MedicoCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicoCountOutputType
     */
    select?: MedicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroMedicoWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioMedicoWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    consultas: number
    registros: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | PacienteCountOutputTypeCountConsultasArgs
    registros?: boolean | PacienteCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroMedicoWhereInput
  }


  /**
   * Count Type ConsultaCountOutputType
   */

  export type ConsultaCountOutputType = {
    historico: number
    registros: number
  }

  export type ConsultaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | ConsultaCountOutputTypeCountHistoricoArgs
    registros?: boolean | ConsultaCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultaCountOutputType
     */
    select?: ConsultaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoConsultaWhereInput
  }

  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroMedicoWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    document: string | null
    birthdate: Date | null
    phone: string | null
    postal_code: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    document: string | null
    birthdate: Date | null
    phone: string | null
    postal_code: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    document: number
    birthdate: number
    phone: number
    postal_code: number
    email: number
    password: number
    role: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    document?: true
    birthdate?: true
    phone?: true
    postal_code?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    document?: true
    birthdate?: true
    phone?: true
    postal_code?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    document?: true
    birthdate?: true
    phone?: true
    postal_code?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
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
    id: number
    name: string
    document: string
    birthdate: Date
    phone: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
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
    document?: boolean
    birthdate?: boolean
    phone?: boolean
    postal_code?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    Medico?: boolean | User$MedicoArgs<ExtArgs>
    Paciente?: boolean | User$PacienteArgs<ExtArgs>
    Recepcionista?: boolean | User$RecepcionistaArgs<ExtArgs>
    historicoAcoes?: boolean | User$historicoAcoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    document?: boolean
    birthdate?: boolean
    phone?: boolean
    postal_code?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "document" | "birthdate" | "phone" | "postal_code" | "email" | "password" | "role" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Medico?: boolean | User$MedicoArgs<ExtArgs>
    Paciente?: boolean | User$PacienteArgs<ExtArgs>
    Recepcionista?: boolean | User$RecepcionistaArgs<ExtArgs>
    historicoAcoes?: boolean | User$historicoAcoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Medico: Prisma.$MedicoPayload<ExtArgs> | null
      Paciente: Prisma.$PacientePayload<ExtArgs> | null
      Recepcionista: Prisma.$RecepcionistaPayload<ExtArgs> | null
      historicoAcoes: Prisma.$HistoricoConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      document: string
      birthdate: Date
      phone: string | null
      postal_code: string
      email: string
      password: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
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
    Medico<T extends User$MedicoArgs<ExtArgs> = {}>(args?: Subset<T, User$MedicoArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Paciente<T extends User$PacienteArgs<ExtArgs> = {}>(args?: Subset<T, User$PacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Recepcionista<T extends User$RecepcionistaArgs<ExtArgs> = {}>(args?: Subset<T, User$RecepcionistaArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    historicoAcoes<T extends User$historicoAcoesArgs<ExtArgs> = {}>(args?: Subset<T, User$historicoAcoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly document: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly phone: FieldRef<"User", 'String'>
    readonly postal_code: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
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
   * User.Medico
   */
  export type User$MedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
  }

  /**
   * User.Paciente
   */
  export type User$PacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }

  /**
   * User.Recepcionista
   */
  export type User$RecepcionistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    where?: RecepcionistaWhereInput
  }

  /**
   * User.historicoAcoes
   */
  export type User$historicoAcoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    where?: HistoricoConsultaWhereInput
    orderBy?: HistoricoConsultaOrderByWithRelationInput | HistoricoConsultaOrderByWithRelationInput[]
    cursor?: HistoricoConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoConsultaScalarFieldEnum | HistoricoConsultaScalarFieldEnum[]
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
   * Model Medico
   */

  export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  export type MedicoAvgAggregateOutputType = {
    id: number | null
  }

  export type MedicoSumAggregateOutputType = {
    id: number | null
  }

  export type MedicoMinAggregateOutputType = {
    id: number | null
    specialty: string | null
  }

  export type MedicoMaxAggregateOutputType = {
    id: number | null
    specialty: string | null
  }

  export type MedicoCountAggregateOutputType = {
    id: number
    specialty: number
    _all: number
  }


  export type MedicoAvgAggregateInputType = {
    id?: true
  }

  export type MedicoSumAggregateInputType = {
    id?: true
  }

  export type MedicoMinAggregateInputType = {
    id?: true
    specialty?: true
  }

  export type MedicoMaxAggregateInputType = {
    id?: true
    specialty?: true
  }

  export type MedicoCountAggregateInputType = {
    id?: true
    specialty?: true
    _all?: true
  }

  export type MedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico to aggregate.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicos
    **/
    _count?: true | MedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicoMaxAggregateInputType
  }

  export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico[P]>
      : GetScalarType<T[P], AggregateMedico[P]>
  }




  export type MedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithAggregationInput | MedicoOrderByWithAggregationInput[]
    by: MedicoScalarFieldEnum[] | MedicoScalarFieldEnum
    having?: MedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicoCountAggregateInputType | true
    _avg?: MedicoAvgAggregateInputType
    _sum?: MedicoSumAggregateInputType
    _min?: MedicoMinAggregateInputType
    _max?: MedicoMaxAggregateInputType
  }

  export type MedicoGroupByOutputType = {
    id: number
    specialty: string
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicoGroupByOutputType[P]>
        }
      >
    >


  export type MedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialty?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    consultas?: boolean | Medico$consultasArgs<ExtArgs>
    registros?: boolean | Medico$registrosArgs<ExtArgs>
    horarios?: boolean | Medico$horariosArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>



  export type MedicoSelectScalar = {
    id?: boolean
    specialty?: boolean
  }

  export type MedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "specialty", ExtArgs["result"]["medico"]>
  export type MedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    consultas?: boolean | Medico$consultasArgs<ExtArgs>
    registros?: boolean | Medico$registrosArgs<ExtArgs>
    horarios?: boolean | Medico$horariosArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
      registros: Prisma.$RegistroMedicoPayload<ExtArgs>[]
      horarios: Prisma.$HorarioMedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      specialty: string
    }, ExtArgs["result"]["medico"]>
    composites: {}
  }

  type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = $Result.GetResult<Prisma.$MedicoPayload, S>

  type MedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicoCountAggregateInputType | true
    }

  export interface MedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico'], meta: { name: 'Medico' } }
    /**
     * Find zero or one Medico that matches the filter.
     * @param {MedicoFindUniqueArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicoFindUniqueArgs>(args: SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicoFindUniqueOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicoFindFirstArgs>(args?: SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medico.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicoWithIdOnly = await prisma.medico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicoFindManyArgs>(args?: SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico.
     * @param {MedicoCreateArgs} args - Arguments to create a Medico.
     * @example
     * // Create one Medico
     * const Medico = await prisma.medico.create({
     *   data: {
     *     // ... data to create a Medico
     *   }
     * })
     * 
     */
    create<T extends MedicoCreateArgs>(args: SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicos.
     * @param {MedicoCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicoCreateManyArgs>(args?: SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medico.
     * @param {MedicoDeleteArgs} args - Arguments to delete one Medico.
     * @example
     * // Delete one Medico
     * const Medico = await prisma.medico.delete({
     *   where: {
     *     // ... filter to delete one Medico
     *   }
     * })
     * 
     */
    delete<T extends MedicoDeleteArgs>(args: SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico.
     * @param {MedicoUpdateArgs} args - Arguments to update one Medico.
     * @example
     * // Update one Medico
     * const medico = await prisma.medico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicoUpdateArgs>(args: SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicos.
     * @param {MedicoDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicoDeleteManyArgs>(args?: SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicoUpdateManyArgs>(args: SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medico.
     * @param {MedicoUpsertArgs} args - Arguments to update or create a Medico.
     * @example
     * // Update or create a Medico
     * const medico = await prisma.medico.upsert({
     *   create: {
     *     // ... data to create a Medico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico we want to update
     *   }
     * })
     */
    upsert<T extends MedicoUpsertArgs>(args: SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medico.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends MedicoCountArgs>(
      args?: Subset<T, MedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicoAggregateArgs>(args: Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>

    /**
     * Group by Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoGroupByArgs} args - Group by arguments.
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
      T extends MedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicoGroupByArgs['orderBy'] }
        : { orderBy?: MedicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico model
   */
  readonly fields: MedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultas<T extends Medico$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Medico$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros<T extends Medico$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Medico$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends Medico$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Medico$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medico model
   */
  interface MedicoFieldRefs {
    readonly id: FieldRef<"Medico", 'Int'>
    readonly specialty: FieldRef<"Medico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medico findUnique
   */
  export type MedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findUniqueOrThrow
   */
  export type MedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findFirst
   */
  export type MedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findFirstOrThrow
   */
  export type MedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findMany
   */
  export type MedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medicos to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico create
   */
  export type MedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico.
     */
    data: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
  }

  /**
   * Medico createMany
   */
  export type MedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico update
   */
  export type MedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico.
     */
    data: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
    /**
     * Choose, which Medico to update.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico updateMany
   */
  export type MedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
  }

  /**
   * Medico upsert
   */
  export type MedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico to update in case it exists.
     */
    where: MedicoWhereUniqueInput
    /**
     * In case the Medico found by the `where` argument doesn't exist, create a new Medico with this data.
     */
    create: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
    /**
     * In case the Medico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
  }

  /**
   * Medico delete
   */
  export type MedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter which Medico to delete.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico deleteMany
   */
  export type MedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicos to delete
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to delete.
     */
    limit?: number
  }

  /**
   * Medico.consultas
   */
  export type Medico$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Medico.registros
   */
  export type Medico$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    where?: RegistroMedicoWhereInput
    orderBy?: RegistroMedicoOrderByWithRelationInput | RegistroMedicoOrderByWithRelationInput[]
    cursor?: RegistroMedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroMedicoScalarFieldEnum | RegistroMedicoScalarFieldEnum[]
  }

  /**
   * Medico.horarios
   */
  export type Medico$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    where?: HorarioMedicoWhereInput
    orderBy?: HorarioMedicoOrderByWithRelationInput | HorarioMedicoOrderByWithRelationInput[]
    cursor?: HorarioMedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioMedicoScalarFieldEnum | HorarioMedicoScalarFieldEnum[]
  }

  /**
   * Medico without action
   */
  export type MedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    history: string | null
    allergies: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    history: string | null
    allergies: string | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    history: number
    allergies: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    history?: true
    allergies?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    history?: true
    allergies?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    history?: true
    allergies?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    history: string | null
    allergies: string | null
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    history?: boolean
    allergies?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    registros?: boolean | Paciente$registrosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>



  export type PacienteSelectScalar = {
    id?: boolean
    history?: boolean
    allergies?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "history" | "allergies", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    registros?: boolean | Paciente$registrosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
      registros: Prisma.$RegistroMedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      history: string | null
      allergies: string | null
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultas<T extends Paciente$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros<T extends Paciente$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly history: FieldRef<"Paciente", 'String'>
    readonly allergies: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.consultas
   */
  export type Paciente$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Paciente.registros
   */
  export type Paciente$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    where?: RegistroMedicoWhereInput
    orderBy?: RegistroMedicoOrderByWithRelationInput | RegistroMedicoOrderByWithRelationInput[]
    cursor?: RegistroMedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroMedicoScalarFieldEnum | RegistroMedicoScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Recepcionista
   */

  export type AggregateRecepcionista = {
    _count: RecepcionistaCountAggregateOutputType | null
    _avg: RecepcionistaAvgAggregateOutputType | null
    _sum: RecepcionistaSumAggregateOutputType | null
    _min: RecepcionistaMinAggregateOutputType | null
    _max: RecepcionistaMaxAggregateOutputType | null
  }

  export type RecepcionistaAvgAggregateOutputType = {
    id: number | null
  }

  export type RecepcionistaSumAggregateOutputType = {
    id: number | null
  }

  export type RecepcionistaMinAggregateOutputType = {
    id: number | null
  }

  export type RecepcionistaMaxAggregateOutputType = {
    id: number | null
  }

  export type RecepcionistaCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type RecepcionistaAvgAggregateInputType = {
    id?: true
  }

  export type RecepcionistaSumAggregateInputType = {
    id?: true
  }

  export type RecepcionistaMinAggregateInputType = {
    id?: true
  }

  export type RecepcionistaMaxAggregateInputType = {
    id?: true
  }

  export type RecepcionistaCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type RecepcionistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recepcionista to aggregate.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recepcionistas
    **/
    _count?: true | RecepcionistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecepcionistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecepcionistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecepcionistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecepcionistaMaxAggregateInputType
  }

  export type GetRecepcionistaAggregateType<T extends RecepcionistaAggregateArgs> = {
        [P in keyof T & keyof AggregateRecepcionista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecepcionista[P]>
      : GetScalarType<T[P], AggregateRecepcionista[P]>
  }




  export type RecepcionistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecepcionistaWhereInput
    orderBy?: RecepcionistaOrderByWithAggregationInput | RecepcionistaOrderByWithAggregationInput[]
    by: RecepcionistaScalarFieldEnum[] | RecepcionistaScalarFieldEnum
    having?: RecepcionistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecepcionistaCountAggregateInputType | true
    _avg?: RecepcionistaAvgAggregateInputType
    _sum?: RecepcionistaSumAggregateInputType
    _min?: RecepcionistaMinAggregateInputType
    _max?: RecepcionistaMaxAggregateInputType
  }

  export type RecepcionistaGroupByOutputType = {
    id: number
    _count: RecepcionistaCountAggregateOutputType | null
    _avg: RecepcionistaAvgAggregateOutputType | null
    _sum: RecepcionistaSumAggregateOutputType | null
    _min: RecepcionistaMinAggregateOutputType | null
    _max: RecepcionistaMaxAggregateOutputType | null
  }

  type GetRecepcionistaGroupByPayload<T extends RecepcionistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecepcionistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecepcionistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecepcionistaGroupByOutputType[P]>
            : GetScalarType<T[P], RecepcionistaGroupByOutputType[P]>
        }
      >
    >


  export type RecepcionistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recepcionista"]>



  export type RecepcionistaSelectScalar = {
    id?: boolean
  }

  export type RecepcionistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["recepcionista"]>
  export type RecepcionistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecepcionistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recepcionista"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["recepcionista"]>
    composites: {}
  }

  type RecepcionistaGetPayload<S extends boolean | null | undefined | RecepcionistaDefaultArgs> = $Result.GetResult<Prisma.$RecepcionistaPayload, S>

  type RecepcionistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecepcionistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecepcionistaCountAggregateInputType | true
    }

  export interface RecepcionistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recepcionista'], meta: { name: 'Recepcionista' } }
    /**
     * Find zero or one Recepcionista that matches the filter.
     * @param {RecepcionistaFindUniqueArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecepcionistaFindUniqueArgs>(args: SelectSubset<T, RecepcionistaFindUniqueArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recepcionista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecepcionistaFindUniqueOrThrowArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecepcionistaFindUniqueOrThrowArgs>(args: SelectSubset<T, RecepcionistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recepcionista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaFindFirstArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecepcionistaFindFirstArgs>(args?: SelectSubset<T, RecepcionistaFindFirstArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recepcionista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaFindFirstOrThrowArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecepcionistaFindFirstOrThrowArgs>(args?: SelectSubset<T, RecepcionistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recepcionistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recepcionistas
     * const recepcionistas = await prisma.recepcionista.findMany()
     * 
     * // Get first 10 Recepcionistas
     * const recepcionistas = await prisma.recepcionista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recepcionistaWithIdOnly = await prisma.recepcionista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecepcionistaFindManyArgs>(args?: SelectSubset<T, RecepcionistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recepcionista.
     * @param {RecepcionistaCreateArgs} args - Arguments to create a Recepcionista.
     * @example
     * // Create one Recepcionista
     * const Recepcionista = await prisma.recepcionista.create({
     *   data: {
     *     // ... data to create a Recepcionista
     *   }
     * })
     * 
     */
    create<T extends RecepcionistaCreateArgs>(args: SelectSubset<T, RecepcionistaCreateArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recepcionistas.
     * @param {RecepcionistaCreateManyArgs} args - Arguments to create many Recepcionistas.
     * @example
     * // Create many Recepcionistas
     * const recepcionista = await prisma.recepcionista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecepcionistaCreateManyArgs>(args?: SelectSubset<T, RecepcionistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recepcionista.
     * @param {RecepcionistaDeleteArgs} args - Arguments to delete one Recepcionista.
     * @example
     * // Delete one Recepcionista
     * const Recepcionista = await prisma.recepcionista.delete({
     *   where: {
     *     // ... filter to delete one Recepcionista
     *   }
     * })
     * 
     */
    delete<T extends RecepcionistaDeleteArgs>(args: SelectSubset<T, RecepcionistaDeleteArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recepcionista.
     * @param {RecepcionistaUpdateArgs} args - Arguments to update one Recepcionista.
     * @example
     * // Update one Recepcionista
     * const recepcionista = await prisma.recepcionista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecepcionistaUpdateArgs>(args: SelectSubset<T, RecepcionistaUpdateArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recepcionistas.
     * @param {RecepcionistaDeleteManyArgs} args - Arguments to filter Recepcionistas to delete.
     * @example
     * // Delete a few Recepcionistas
     * const { count } = await prisma.recepcionista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecepcionistaDeleteManyArgs>(args?: SelectSubset<T, RecepcionistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recepcionistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recepcionistas
     * const recepcionista = await prisma.recepcionista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecepcionistaUpdateManyArgs>(args: SelectSubset<T, RecepcionistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recepcionista.
     * @param {RecepcionistaUpsertArgs} args - Arguments to update or create a Recepcionista.
     * @example
     * // Update or create a Recepcionista
     * const recepcionista = await prisma.recepcionista.upsert({
     *   create: {
     *     // ... data to create a Recepcionista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recepcionista we want to update
     *   }
     * })
     */
    upsert<T extends RecepcionistaUpsertArgs>(args: SelectSubset<T, RecepcionistaUpsertArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recepcionistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaCountArgs} args - Arguments to filter Recepcionistas to count.
     * @example
     * // Count the number of Recepcionistas
     * const count = await prisma.recepcionista.count({
     *   where: {
     *     // ... the filter for the Recepcionistas we want to count
     *   }
     * })
    **/
    count<T extends RecepcionistaCountArgs>(
      args?: Subset<T, RecepcionistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecepcionistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recepcionista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecepcionistaAggregateArgs>(args: Subset<T, RecepcionistaAggregateArgs>): Prisma.PrismaPromise<GetRecepcionistaAggregateType<T>>

    /**
     * Group by Recepcionista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaGroupByArgs} args - Group by arguments.
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
      T extends RecepcionistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecepcionistaGroupByArgs['orderBy'] }
        : { orderBy?: RecepcionistaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecepcionistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecepcionistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recepcionista model
   */
  readonly fields: RecepcionistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recepcionista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecepcionistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Recepcionista model
   */
  interface RecepcionistaFieldRefs {
    readonly id: FieldRef<"Recepcionista", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recepcionista findUnique
   */
  export type RecepcionistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista findUniqueOrThrow
   */
  export type RecepcionistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista findFirst
   */
  export type RecepcionistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recepcionistas.
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recepcionistas.
     */
    distinct?: RecepcionistaScalarFieldEnum | RecepcionistaScalarFieldEnum[]
  }

  /**
   * Recepcionista findFirstOrThrow
   */
  export type RecepcionistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recepcionistas.
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recepcionistas.
     */
    distinct?: RecepcionistaScalarFieldEnum | RecepcionistaScalarFieldEnum[]
  }

  /**
   * Recepcionista findMany
   */
  export type RecepcionistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * Filter, which Recepcionistas to fetch.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recepcionistas.
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    distinct?: RecepcionistaScalarFieldEnum | RecepcionistaScalarFieldEnum[]
  }

  /**
   * Recepcionista create
   */
  export type RecepcionistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Recepcionista.
     */
    data: XOR<RecepcionistaCreateInput, RecepcionistaUncheckedCreateInput>
  }

  /**
   * Recepcionista createMany
   */
  export type RecepcionistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recepcionistas.
     */
    data: RecepcionistaCreateManyInput | RecepcionistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recepcionista update
   */
  export type RecepcionistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Recepcionista.
     */
    data: XOR<RecepcionistaUpdateInput, RecepcionistaUncheckedUpdateInput>
    /**
     * Choose, which Recepcionista to update.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista updateMany
   */
  export type RecepcionistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recepcionistas.
     */
    data: XOR<RecepcionistaUpdateManyMutationInput, RecepcionistaUncheckedUpdateManyInput>
    /**
     * Filter which Recepcionistas to update
     */
    where?: RecepcionistaWhereInput
    /**
     * Limit how many Recepcionistas to update.
     */
    limit?: number
  }

  /**
   * Recepcionista upsert
   */
  export type RecepcionistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Recepcionista to update in case it exists.
     */
    where: RecepcionistaWhereUniqueInput
    /**
     * In case the Recepcionista found by the `where` argument doesn't exist, create a new Recepcionista with this data.
     */
    create: XOR<RecepcionistaCreateInput, RecepcionistaUncheckedCreateInput>
    /**
     * In case the Recepcionista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecepcionistaUpdateInput, RecepcionistaUncheckedUpdateInput>
  }

  /**
   * Recepcionista delete
   */
  export type RecepcionistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
    /**
     * Filter which Recepcionista to delete.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista deleteMany
   */
  export type RecepcionistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recepcionistas to delete
     */
    where?: RecepcionistaWhereInput
    /**
     * Limit how many Recepcionistas to delete.
     */
    limit?: number
  }

  /**
   * Recepcionista without action
   */
  export type RecepcionistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecepcionistaInclude<ExtArgs> | null
  }


  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    medico_id: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    medico_id: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    medico_id: number | null
    date_time: Date | null
    status: $Enums.ConsultaStatus | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    medico_id: number | null
    date_time: Date | null
    status: $Enums.ConsultaStatus | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    paciente_id: number
    medico_id: number
    date_time: number
    status: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
    paciente_id?: true
    medico_id?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
    paciente_id?: true
    medico_id?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    paciente_id?: true
    medico_id?: true
    date_time?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    paciente_id?: true
    medico_id?: true
    date_time?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    paciente_id?: true
    medico_id?: true
    date_time?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    paciente_id: number
    medico_id: number
    date_time: Date
    status: $Enums.ConsultaStatus
    description: string | null
    created_at: Date
    updated_at: Date
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    medico_id?: boolean
    date_time?: boolean
    status?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    historico?: boolean | Consulta$historicoArgs<ExtArgs>
    registros?: boolean | Consulta$registrosArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>



  export type ConsultaSelectScalar = {
    id?: boolean
    paciente_id?: boolean
    medico_id?: boolean
    date_time?: boolean
    status?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paciente_id" | "medico_id" | "date_time" | "status" | "description" | "created_at" | "updated_at", ExtArgs["result"]["consulta"]>
  export type ConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    historico?: boolean | Consulta$historicoArgs<ExtArgs>
    registros?: boolean | Consulta$registrosArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
      historico: Prisma.$HistoricoConsultaPayload<ExtArgs>[]
      registros: Prisma.$RegistroMedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paciente_id: number
      medico_id: number
      date_time: Date
      status: $Enums.ConsultaStatus
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }

  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultaFindManyArgs>(args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
     */
    create<T extends ConsultaCreateArgs>(args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
     */
    delete<T extends ConsultaDeleteArgs>(args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultaUpdateArgs>(args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
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
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historico<T extends Consulta$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros<T extends Consulta$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Consulta model
   */
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly paciente_id: FieldRef<"Consulta", 'Int'>
    readonly medico_id: FieldRef<"Consulta", 'Int'>
    readonly date_time: FieldRef<"Consulta", 'DateTime'>
    readonly status: FieldRef<"Consulta", 'ConsultaStatus'>
    readonly description: FieldRef<"Consulta", 'String'>
    readonly created_at: FieldRef<"Consulta", 'DateTime'>
    readonly updated_at: FieldRef<"Consulta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }

  /**
   * Consulta createMany
   */
  export type ConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }

  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consulta.historico
   */
  export type Consulta$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    where?: HistoricoConsultaWhereInput
    orderBy?: HistoricoConsultaOrderByWithRelationInput | HistoricoConsultaOrderByWithRelationInput[]
    cursor?: HistoricoConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoConsultaScalarFieldEnum | HistoricoConsultaScalarFieldEnum[]
  }

  /**
   * Consulta.registros
   */
  export type Consulta$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    where?: RegistroMedicoWhereInput
    orderBy?: RegistroMedicoOrderByWithRelationInput | RegistroMedicoOrderByWithRelationInput[]
    cursor?: RegistroMedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroMedicoScalarFieldEnum | RegistroMedicoScalarFieldEnum[]
  }

  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoConsulta
   */

  export type AggregateHistoricoConsulta = {
    _count: HistoricoConsultaCountAggregateOutputType | null
    _avg: HistoricoConsultaAvgAggregateOutputType | null
    _sum: HistoricoConsultaSumAggregateOutputType | null
    _min: HistoricoConsultaMinAggregateOutputType | null
    _max: HistoricoConsultaMaxAggregateOutputType | null
  }

  export type HistoricoConsultaAvgAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    realizado_por: number | null
  }

  export type HistoricoConsultaSumAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    realizado_por: number | null
  }

  export type HistoricoConsultaMinAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    acao: $Enums.AcaoConsulta | null
    realizado_por: number | null
    data_acao: Date | null
    observacao: string | null
  }

  export type HistoricoConsultaMaxAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    acao: $Enums.AcaoConsulta | null
    realizado_por: number | null
    data_acao: Date | null
    observacao: string | null
  }

  export type HistoricoConsultaCountAggregateOutputType = {
    id: number
    consulta_id: number
    acao: number
    realizado_por: number
    data_acao: number
    observacao: number
    _all: number
  }


  export type HistoricoConsultaAvgAggregateInputType = {
    id?: true
    consulta_id?: true
    realizado_por?: true
  }

  export type HistoricoConsultaSumAggregateInputType = {
    id?: true
    consulta_id?: true
    realizado_por?: true
  }

  export type HistoricoConsultaMinAggregateInputType = {
    id?: true
    consulta_id?: true
    acao?: true
    realizado_por?: true
    data_acao?: true
    observacao?: true
  }

  export type HistoricoConsultaMaxAggregateInputType = {
    id?: true
    consulta_id?: true
    acao?: true
    realizado_por?: true
    data_acao?: true
    observacao?: true
  }

  export type HistoricoConsultaCountAggregateInputType = {
    id?: true
    consulta_id?: true
    acao?: true
    realizado_por?: true
    data_acao?: true
    observacao?: true
    _all?: true
  }

  export type HistoricoConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoConsulta to aggregate.
     */
    where?: HistoricoConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoConsultas to fetch.
     */
    orderBy?: HistoricoConsultaOrderByWithRelationInput | HistoricoConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoConsultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoConsultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoConsultas
    **/
    _count?: true | HistoricoConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoConsultaMaxAggregateInputType
  }

  export type GetHistoricoConsultaAggregateType<T extends HistoricoConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoConsulta[P]>
      : GetScalarType<T[P], AggregateHistoricoConsulta[P]>
  }




  export type HistoricoConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoConsultaWhereInput
    orderBy?: HistoricoConsultaOrderByWithAggregationInput | HistoricoConsultaOrderByWithAggregationInput[]
    by: HistoricoConsultaScalarFieldEnum[] | HistoricoConsultaScalarFieldEnum
    having?: HistoricoConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoConsultaCountAggregateInputType | true
    _avg?: HistoricoConsultaAvgAggregateInputType
    _sum?: HistoricoConsultaSumAggregateInputType
    _min?: HistoricoConsultaMinAggregateInputType
    _max?: HistoricoConsultaMaxAggregateInputType
  }

  export type HistoricoConsultaGroupByOutputType = {
    id: number
    consulta_id: number
    acao: $Enums.AcaoConsulta
    realizado_por: number
    data_acao: Date
    observacao: string | null
    _count: HistoricoConsultaCountAggregateOutputType | null
    _avg: HistoricoConsultaAvgAggregateOutputType | null
    _sum: HistoricoConsultaSumAggregateOutputType | null
    _min: HistoricoConsultaMinAggregateOutputType | null
    _max: HistoricoConsultaMaxAggregateOutputType | null
  }

  type GetHistoricoConsultaGroupByPayload<T extends HistoricoConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoConsultaGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consulta_id?: boolean
    acao?: boolean
    realizado_por?: boolean
    data_acao?: boolean
    observacao?: boolean
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
    realizadoPor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoConsulta"]>



  export type HistoricoConsultaSelectScalar = {
    id?: boolean
    consulta_id?: boolean
    acao?: boolean
    realizado_por?: boolean
    data_acao?: boolean
    observacao?: boolean
  }

  export type HistoricoConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consulta_id" | "acao" | "realizado_por" | "data_acao" | "observacao", ExtArgs["result"]["historicoConsulta"]>
  export type HistoricoConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
    realizadoPor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoricoConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoConsulta"
    objects: {
      consulta: Prisma.$ConsultaPayload<ExtArgs>
      realizadoPor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      consulta_id: number
      acao: $Enums.AcaoConsulta
      realizado_por: number
      data_acao: Date
      observacao: string | null
    }, ExtArgs["result"]["historicoConsulta"]>
    composites: {}
  }

  type HistoricoConsultaGetPayload<S extends boolean | null | undefined | HistoricoConsultaDefaultArgs> = $Result.GetResult<Prisma.$HistoricoConsultaPayload, S>

  type HistoricoConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoConsultaCountAggregateInputType | true
    }

  export interface HistoricoConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoConsulta'], meta: { name: 'HistoricoConsulta' } }
    /**
     * Find zero or one HistoricoConsulta that matches the filter.
     * @param {HistoricoConsultaFindUniqueArgs} args - Arguments to find a HistoricoConsulta
     * @example
     * // Get one HistoricoConsulta
     * const historicoConsulta = await prisma.historicoConsulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoConsultaFindUniqueArgs>(args: SelectSubset<T, HistoricoConsultaFindUniqueArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoConsulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoConsultaFindUniqueOrThrowArgs} args - Arguments to find a HistoricoConsulta
     * @example
     * // Get one HistoricoConsulta
     * const historicoConsulta = await prisma.historicoConsulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoConsulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoConsultaFindFirstArgs} args - Arguments to find a HistoricoConsulta
     * @example
     * // Get one HistoricoConsulta
     * const historicoConsulta = await prisma.historicoConsulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoConsultaFindFirstArgs>(args?: SelectSubset<T, HistoricoConsultaFindFirstArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoConsulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoConsultaFindFirstOrThrowArgs} args - Arguments to find a HistoricoConsulta
     * @example
     * // Get one HistoricoConsulta
     * const historicoConsulta = await prisma.historicoConsulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoConsultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoConsultas
     * const historicoConsultas = await prisma.historicoConsulta.findMany()
     * 
     * // Get first 10 HistoricoConsultas
     * const historicoConsultas = await prisma.historicoConsulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoConsultaWithIdOnly = await prisma.historicoConsulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoConsultaFindManyArgs>(args?: SelectSubset<T, HistoricoConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoConsulta.
     * @param {HistoricoConsultaCreateArgs} args - Arguments to create a HistoricoConsulta.
     * @example
     * // Create one HistoricoConsulta
     * const HistoricoConsulta = await prisma.historicoConsulta.create({
     *   data: {
     *     // ... data to create a HistoricoConsulta
     *   }
     * })
     * 
     */
    create<T extends HistoricoConsultaCreateArgs>(args: SelectSubset<T, HistoricoConsultaCreateArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoConsultas.
     * @param {HistoricoConsultaCreateManyArgs} args - Arguments to create many HistoricoConsultas.
     * @example
     * // Create many HistoricoConsultas
     * const historicoConsulta = await prisma.historicoConsulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoConsultaCreateManyArgs>(args?: SelectSubset<T, HistoricoConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoricoConsulta.
     * @param {HistoricoConsultaDeleteArgs} args - Arguments to delete one HistoricoConsulta.
     * @example
     * // Delete one HistoricoConsulta
     * const HistoricoConsulta = await prisma.historicoConsulta.delete({
     *   where: {
     *     // ... filter to delete one HistoricoConsulta
     *   }
     * })
     * 
     */
    delete<T extends HistoricoConsultaDeleteArgs>(args: SelectSubset<T, HistoricoConsultaDeleteArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoConsulta.
     * @param {HistoricoConsultaUpdateArgs} args - Arguments to update one HistoricoConsulta.
     * @example
     * // Update one HistoricoConsulta
     * const historicoConsulta = await prisma.historicoConsulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoConsultaUpdateArgs>(args: SelectSubset<T, HistoricoConsultaUpdateArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoConsultas.
     * @param {HistoricoConsultaDeleteManyArgs} args - Arguments to filter HistoricoConsultas to delete.
     * @example
     * // Delete a few HistoricoConsultas
     * const { count } = await prisma.historicoConsulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoConsultaDeleteManyArgs>(args?: SelectSubset<T, HistoricoConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoConsultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoConsultas
     * const historicoConsulta = await prisma.historicoConsulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoConsultaUpdateManyArgs>(args: SelectSubset<T, HistoricoConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoricoConsulta.
     * @param {HistoricoConsultaUpsertArgs} args - Arguments to update or create a HistoricoConsulta.
     * @example
     * // Update or create a HistoricoConsulta
     * const historicoConsulta = await prisma.historicoConsulta.upsert({
     *   create: {
     *     // ... data to create a HistoricoConsulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoConsulta we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoConsultaUpsertArgs>(args: SelectSubset<T, HistoricoConsultaUpsertArgs<ExtArgs>>): Prisma__HistoricoConsultaClient<$Result.GetResult<Prisma.$HistoricoConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoConsultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoConsultaCountArgs} args - Arguments to filter HistoricoConsultas to count.
     * @example
     * // Count the number of HistoricoConsultas
     * const count = await prisma.historicoConsulta.count({
     *   where: {
     *     // ... the filter for the HistoricoConsultas we want to count
     *   }
     * })
    **/
    count<T extends HistoricoConsultaCountArgs>(
      args?: Subset<T, HistoricoConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoConsulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoConsultaAggregateArgs>(args: Subset<T, HistoricoConsultaAggregateArgs>): Prisma.PrismaPromise<GetHistoricoConsultaAggregateType<T>>

    /**
     * Group by HistoricoConsulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoConsultaGroupByArgs} args - Group by arguments.
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
      T extends HistoricoConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoConsultaGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoConsultaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoConsulta model
   */
  readonly fields: HistoricoConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoConsulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consulta<T extends ConsultaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultaDefaultArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    realizadoPor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoricoConsulta model
   */
  interface HistoricoConsultaFieldRefs {
    readonly id: FieldRef<"HistoricoConsulta", 'Int'>
    readonly consulta_id: FieldRef<"HistoricoConsulta", 'Int'>
    readonly acao: FieldRef<"HistoricoConsulta", 'AcaoConsulta'>
    readonly realizado_por: FieldRef<"HistoricoConsulta", 'Int'>
    readonly data_acao: FieldRef<"HistoricoConsulta", 'DateTime'>
    readonly observacao: FieldRef<"HistoricoConsulta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoConsulta findUnique
   */
  export type HistoricoConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoConsulta to fetch.
     */
    where: HistoricoConsultaWhereUniqueInput
  }

  /**
   * HistoricoConsulta findUniqueOrThrow
   */
  export type HistoricoConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoConsulta to fetch.
     */
    where: HistoricoConsultaWhereUniqueInput
  }

  /**
   * HistoricoConsulta findFirst
   */
  export type HistoricoConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoConsulta to fetch.
     */
    where?: HistoricoConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoConsultas to fetch.
     */
    orderBy?: HistoricoConsultaOrderByWithRelationInput | HistoricoConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoConsultas.
     */
    cursor?: HistoricoConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoConsultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoConsultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoConsultas.
     */
    distinct?: HistoricoConsultaScalarFieldEnum | HistoricoConsultaScalarFieldEnum[]
  }

  /**
   * HistoricoConsulta findFirstOrThrow
   */
  export type HistoricoConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoConsulta to fetch.
     */
    where?: HistoricoConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoConsultas to fetch.
     */
    orderBy?: HistoricoConsultaOrderByWithRelationInput | HistoricoConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoConsultas.
     */
    cursor?: HistoricoConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoConsultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoConsultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoConsultas.
     */
    distinct?: HistoricoConsultaScalarFieldEnum | HistoricoConsultaScalarFieldEnum[]
  }

  /**
   * HistoricoConsulta findMany
   */
  export type HistoricoConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoConsultas to fetch.
     */
    where?: HistoricoConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoConsultas to fetch.
     */
    orderBy?: HistoricoConsultaOrderByWithRelationInput | HistoricoConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoConsultas.
     */
    cursor?: HistoricoConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoConsultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoConsultas.
     */
    skip?: number
    distinct?: HistoricoConsultaScalarFieldEnum | HistoricoConsultaScalarFieldEnum[]
  }

  /**
   * HistoricoConsulta create
   */
  export type HistoricoConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoConsulta.
     */
    data: XOR<HistoricoConsultaCreateInput, HistoricoConsultaUncheckedCreateInput>
  }

  /**
   * HistoricoConsulta createMany
   */
  export type HistoricoConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoConsultas.
     */
    data: HistoricoConsultaCreateManyInput | HistoricoConsultaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricoConsulta update
   */
  export type HistoricoConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoConsulta.
     */
    data: XOR<HistoricoConsultaUpdateInput, HistoricoConsultaUncheckedUpdateInput>
    /**
     * Choose, which HistoricoConsulta to update.
     */
    where: HistoricoConsultaWhereUniqueInput
  }

  /**
   * HistoricoConsulta updateMany
   */
  export type HistoricoConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoConsultas.
     */
    data: XOR<HistoricoConsultaUpdateManyMutationInput, HistoricoConsultaUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoConsultas to update
     */
    where?: HistoricoConsultaWhereInput
    /**
     * Limit how many HistoricoConsultas to update.
     */
    limit?: number
  }

  /**
   * HistoricoConsulta upsert
   */
  export type HistoricoConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoConsulta to update in case it exists.
     */
    where: HistoricoConsultaWhereUniqueInput
    /**
     * In case the HistoricoConsulta found by the `where` argument doesn't exist, create a new HistoricoConsulta with this data.
     */
    create: XOR<HistoricoConsultaCreateInput, HistoricoConsultaUncheckedCreateInput>
    /**
     * In case the HistoricoConsulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoConsultaUpdateInput, HistoricoConsultaUncheckedUpdateInput>
  }

  /**
   * HistoricoConsulta delete
   */
  export type HistoricoConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
    /**
     * Filter which HistoricoConsulta to delete.
     */
    where: HistoricoConsultaWhereUniqueInput
  }

  /**
   * HistoricoConsulta deleteMany
   */
  export type HistoricoConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoConsultas to delete
     */
    where?: HistoricoConsultaWhereInput
    /**
     * Limit how many HistoricoConsultas to delete.
     */
    limit?: number
  }

  /**
   * HistoricoConsulta without action
   */
  export type HistoricoConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoConsulta
     */
    select?: HistoricoConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoConsulta
     */
    omit?: HistoricoConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoConsultaInclude<ExtArgs> | null
  }


  /**
   * Model RegistroMedico
   */

  export type AggregateRegistroMedico = {
    _count: RegistroMedicoCountAggregateOutputType | null
    _avg: RegistroMedicoAvgAggregateOutputType | null
    _sum: RegistroMedicoSumAggregateOutputType | null
    _min: RegistroMedicoMinAggregateOutputType | null
    _max: RegistroMedicoMaxAggregateOutputType | null
  }

  export type RegistroMedicoAvgAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    medico_id: number | null
    paciente_id: number | null
  }

  export type RegistroMedicoSumAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    medico_id: number | null
    paciente_id: number | null
  }

  export type RegistroMedicoMinAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    medico_id: number | null
    paciente_id: number | null
    observacoes: string | null
    diagnostico: string | null
    tratamento: string | null
    created_at: Date | null
  }

  export type RegistroMedicoMaxAggregateOutputType = {
    id: number | null
    consulta_id: number | null
    medico_id: number | null
    paciente_id: number | null
    observacoes: string | null
    diagnostico: string | null
    tratamento: string | null
    created_at: Date | null
  }

  export type RegistroMedicoCountAggregateOutputType = {
    id: number
    consulta_id: number
    medico_id: number
    paciente_id: number
    observacoes: number
    diagnostico: number
    tratamento: number
    created_at: number
    _all: number
  }


  export type RegistroMedicoAvgAggregateInputType = {
    id?: true
    consulta_id?: true
    medico_id?: true
    paciente_id?: true
  }

  export type RegistroMedicoSumAggregateInputType = {
    id?: true
    consulta_id?: true
    medico_id?: true
    paciente_id?: true
  }

  export type RegistroMedicoMinAggregateInputType = {
    id?: true
    consulta_id?: true
    medico_id?: true
    paciente_id?: true
    observacoes?: true
    diagnostico?: true
    tratamento?: true
    created_at?: true
  }

  export type RegistroMedicoMaxAggregateInputType = {
    id?: true
    consulta_id?: true
    medico_id?: true
    paciente_id?: true
    observacoes?: true
    diagnostico?: true
    tratamento?: true
    created_at?: true
  }

  export type RegistroMedicoCountAggregateInputType = {
    id?: true
    consulta_id?: true
    medico_id?: true
    paciente_id?: true
    observacoes?: true
    diagnostico?: true
    tratamento?: true
    created_at?: true
    _all?: true
  }

  export type RegistroMedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroMedico to aggregate.
     */
    where?: RegistroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroMedicos to fetch.
     */
    orderBy?: RegistroMedicoOrderByWithRelationInput | RegistroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroMedicos
    **/
    _count?: true | RegistroMedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroMedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroMedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroMedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroMedicoMaxAggregateInputType
  }

  export type GetRegistroMedicoAggregateType<T extends RegistroMedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroMedico[P]>
      : GetScalarType<T[P], AggregateRegistroMedico[P]>
  }




  export type RegistroMedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroMedicoWhereInput
    orderBy?: RegistroMedicoOrderByWithAggregationInput | RegistroMedicoOrderByWithAggregationInput[]
    by: RegistroMedicoScalarFieldEnum[] | RegistroMedicoScalarFieldEnum
    having?: RegistroMedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroMedicoCountAggregateInputType | true
    _avg?: RegistroMedicoAvgAggregateInputType
    _sum?: RegistroMedicoSumAggregateInputType
    _min?: RegistroMedicoMinAggregateInputType
    _max?: RegistroMedicoMaxAggregateInputType
  }

  export type RegistroMedicoGroupByOutputType = {
    id: number
    consulta_id: number
    medico_id: number
    paciente_id: number
    observacoes: string | null
    diagnostico: string | null
    tratamento: string | null
    created_at: Date
    _count: RegistroMedicoCountAggregateOutputType | null
    _avg: RegistroMedicoAvgAggregateOutputType | null
    _sum: RegistroMedicoSumAggregateOutputType | null
    _min: RegistroMedicoMinAggregateOutputType | null
    _max: RegistroMedicoMaxAggregateOutputType | null
  }

  type GetRegistroMedicoGroupByPayload<T extends RegistroMedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroMedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroMedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroMedicoGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroMedicoGroupByOutputType[P]>
        }
      >
    >


  export type RegistroMedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consulta_id?: boolean
    medico_id?: boolean
    paciente_id?: boolean
    observacoes?: boolean
    diagnostico?: boolean
    tratamento?: boolean
    created_at?: boolean
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroMedico"]>



  export type RegistroMedicoSelectScalar = {
    id?: boolean
    consulta_id?: boolean
    medico_id?: boolean
    paciente_id?: boolean
    observacoes?: boolean
    diagnostico?: boolean
    tratamento?: boolean
    created_at?: boolean
  }

  export type RegistroMedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consulta_id" | "medico_id" | "paciente_id" | "observacoes" | "diagnostico" | "tratamento" | "created_at", ExtArgs["result"]["registroMedico"]>
  export type RegistroMedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $RegistroMedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroMedico"
    objects: {
      consulta: Prisma.$ConsultaPayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      consulta_id: number
      medico_id: number
      paciente_id: number
      observacoes: string | null
      diagnostico: string | null
      tratamento: string | null
      created_at: Date
    }, ExtArgs["result"]["registroMedico"]>
    composites: {}
  }

  type RegistroMedicoGetPayload<S extends boolean | null | undefined | RegistroMedicoDefaultArgs> = $Result.GetResult<Prisma.$RegistroMedicoPayload, S>

  type RegistroMedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroMedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroMedicoCountAggregateInputType | true
    }

  export interface RegistroMedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroMedico'], meta: { name: 'RegistroMedico' } }
    /**
     * Find zero or one RegistroMedico that matches the filter.
     * @param {RegistroMedicoFindUniqueArgs} args - Arguments to find a RegistroMedico
     * @example
     * // Get one RegistroMedico
     * const registroMedico = await prisma.registroMedico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroMedicoFindUniqueArgs>(args: SelectSubset<T, RegistroMedicoFindUniqueArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroMedico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroMedicoFindUniqueOrThrowArgs} args - Arguments to find a RegistroMedico
     * @example
     * // Get one RegistroMedico
     * const registroMedico = await prisma.registroMedico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroMedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroMedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroMedico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroMedicoFindFirstArgs} args - Arguments to find a RegistroMedico
     * @example
     * // Get one RegistroMedico
     * const registroMedico = await prisma.registroMedico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroMedicoFindFirstArgs>(args?: SelectSubset<T, RegistroMedicoFindFirstArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroMedico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroMedicoFindFirstOrThrowArgs} args - Arguments to find a RegistroMedico
     * @example
     * // Get one RegistroMedico
     * const registroMedico = await prisma.registroMedico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroMedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroMedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroMedicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroMedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroMedicos
     * const registroMedicos = await prisma.registroMedico.findMany()
     * 
     * // Get first 10 RegistroMedicos
     * const registroMedicos = await prisma.registroMedico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroMedicoWithIdOnly = await prisma.registroMedico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroMedicoFindManyArgs>(args?: SelectSubset<T, RegistroMedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroMedico.
     * @param {RegistroMedicoCreateArgs} args - Arguments to create a RegistroMedico.
     * @example
     * // Create one RegistroMedico
     * const RegistroMedico = await prisma.registroMedico.create({
     *   data: {
     *     // ... data to create a RegistroMedico
     *   }
     * })
     * 
     */
    create<T extends RegistroMedicoCreateArgs>(args: SelectSubset<T, RegistroMedicoCreateArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroMedicos.
     * @param {RegistroMedicoCreateManyArgs} args - Arguments to create many RegistroMedicos.
     * @example
     * // Create many RegistroMedicos
     * const registroMedico = await prisma.registroMedico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroMedicoCreateManyArgs>(args?: SelectSubset<T, RegistroMedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegistroMedico.
     * @param {RegistroMedicoDeleteArgs} args - Arguments to delete one RegistroMedico.
     * @example
     * // Delete one RegistroMedico
     * const RegistroMedico = await prisma.registroMedico.delete({
     *   where: {
     *     // ... filter to delete one RegistroMedico
     *   }
     * })
     * 
     */
    delete<T extends RegistroMedicoDeleteArgs>(args: SelectSubset<T, RegistroMedicoDeleteArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroMedico.
     * @param {RegistroMedicoUpdateArgs} args - Arguments to update one RegistroMedico.
     * @example
     * // Update one RegistroMedico
     * const registroMedico = await prisma.registroMedico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroMedicoUpdateArgs>(args: SelectSubset<T, RegistroMedicoUpdateArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroMedicos.
     * @param {RegistroMedicoDeleteManyArgs} args - Arguments to filter RegistroMedicos to delete.
     * @example
     * // Delete a few RegistroMedicos
     * const { count } = await prisma.registroMedico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroMedicoDeleteManyArgs>(args?: SelectSubset<T, RegistroMedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroMedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroMedicos
     * const registroMedico = await prisma.registroMedico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroMedicoUpdateManyArgs>(args: SelectSubset<T, RegistroMedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistroMedico.
     * @param {RegistroMedicoUpsertArgs} args - Arguments to update or create a RegistroMedico.
     * @example
     * // Update or create a RegistroMedico
     * const registroMedico = await prisma.registroMedico.upsert({
     *   create: {
     *     // ... data to create a RegistroMedico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroMedico we want to update
     *   }
     * })
     */
    upsert<T extends RegistroMedicoUpsertArgs>(args: SelectSubset<T, RegistroMedicoUpsertArgs<ExtArgs>>): Prisma__RegistroMedicoClient<$Result.GetResult<Prisma.$RegistroMedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroMedicoCountArgs} args - Arguments to filter RegistroMedicos to count.
     * @example
     * // Count the number of RegistroMedicos
     * const count = await prisma.registroMedico.count({
     *   where: {
     *     // ... the filter for the RegistroMedicos we want to count
     *   }
     * })
    **/
    count<T extends RegistroMedicoCountArgs>(
      args?: Subset<T, RegistroMedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroMedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroMedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroMedicoAggregateArgs>(args: Subset<T, RegistroMedicoAggregateArgs>): Prisma.PrismaPromise<GetRegistroMedicoAggregateType<T>>

    /**
     * Group by RegistroMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroMedicoGroupByArgs} args - Group by arguments.
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
      T extends RegistroMedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroMedicoGroupByArgs['orderBy'] }
        : { orderBy?: RegistroMedicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroMedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroMedico model
   */
  readonly fields: RegistroMedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroMedico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroMedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consulta<T extends ConsultaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultaDefaultArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroMedico model
   */
  interface RegistroMedicoFieldRefs {
    readonly id: FieldRef<"RegistroMedico", 'Int'>
    readonly consulta_id: FieldRef<"RegistroMedico", 'Int'>
    readonly medico_id: FieldRef<"RegistroMedico", 'Int'>
    readonly paciente_id: FieldRef<"RegistroMedico", 'Int'>
    readonly observacoes: FieldRef<"RegistroMedico", 'String'>
    readonly diagnostico: FieldRef<"RegistroMedico", 'String'>
    readonly tratamento: FieldRef<"RegistroMedico", 'String'>
    readonly created_at: FieldRef<"RegistroMedico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroMedico findUnique
   */
  export type RegistroMedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroMedico to fetch.
     */
    where: RegistroMedicoWhereUniqueInput
  }

  /**
   * RegistroMedico findUniqueOrThrow
   */
  export type RegistroMedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroMedico to fetch.
     */
    where: RegistroMedicoWhereUniqueInput
  }

  /**
   * RegistroMedico findFirst
   */
  export type RegistroMedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroMedico to fetch.
     */
    where?: RegistroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroMedicos to fetch.
     */
    orderBy?: RegistroMedicoOrderByWithRelationInput | RegistroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroMedicos.
     */
    cursor?: RegistroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroMedicos.
     */
    distinct?: RegistroMedicoScalarFieldEnum | RegistroMedicoScalarFieldEnum[]
  }

  /**
   * RegistroMedico findFirstOrThrow
   */
  export type RegistroMedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroMedico to fetch.
     */
    where?: RegistroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroMedicos to fetch.
     */
    orderBy?: RegistroMedicoOrderByWithRelationInput | RegistroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroMedicos.
     */
    cursor?: RegistroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroMedicos.
     */
    distinct?: RegistroMedicoScalarFieldEnum | RegistroMedicoScalarFieldEnum[]
  }

  /**
   * RegistroMedico findMany
   */
  export type RegistroMedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroMedicos to fetch.
     */
    where?: RegistroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroMedicos to fetch.
     */
    orderBy?: RegistroMedicoOrderByWithRelationInput | RegistroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroMedicos.
     */
    cursor?: RegistroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroMedicos.
     */
    skip?: number
    distinct?: RegistroMedicoScalarFieldEnum | RegistroMedicoScalarFieldEnum[]
  }

  /**
   * RegistroMedico create
   */
  export type RegistroMedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroMedico.
     */
    data: XOR<RegistroMedicoCreateInput, RegistroMedicoUncheckedCreateInput>
  }

  /**
   * RegistroMedico createMany
   */
  export type RegistroMedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroMedicos.
     */
    data: RegistroMedicoCreateManyInput | RegistroMedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroMedico update
   */
  export type RegistroMedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroMedico.
     */
    data: XOR<RegistroMedicoUpdateInput, RegistroMedicoUncheckedUpdateInput>
    /**
     * Choose, which RegistroMedico to update.
     */
    where: RegistroMedicoWhereUniqueInput
  }

  /**
   * RegistroMedico updateMany
   */
  export type RegistroMedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroMedicos.
     */
    data: XOR<RegistroMedicoUpdateManyMutationInput, RegistroMedicoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroMedicos to update
     */
    where?: RegistroMedicoWhereInput
    /**
     * Limit how many RegistroMedicos to update.
     */
    limit?: number
  }

  /**
   * RegistroMedico upsert
   */
  export type RegistroMedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroMedico to update in case it exists.
     */
    where: RegistroMedicoWhereUniqueInput
    /**
     * In case the RegistroMedico found by the `where` argument doesn't exist, create a new RegistroMedico with this data.
     */
    create: XOR<RegistroMedicoCreateInput, RegistroMedicoUncheckedCreateInput>
    /**
     * In case the RegistroMedico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroMedicoUpdateInput, RegistroMedicoUncheckedUpdateInput>
  }

  /**
   * RegistroMedico delete
   */
  export type RegistroMedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
    /**
     * Filter which RegistroMedico to delete.
     */
    where: RegistroMedicoWhereUniqueInput
  }

  /**
   * RegistroMedico deleteMany
   */
  export type RegistroMedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroMedicos to delete
     */
    where?: RegistroMedicoWhereInput
    /**
     * Limit how many RegistroMedicos to delete.
     */
    limit?: number
  }

  /**
   * RegistroMedico without action
   */
  export type RegistroMedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroMedico
     */
    select?: RegistroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroMedico
     */
    omit?: RegistroMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroMedicoInclude<ExtArgs> | null
  }


  /**
   * Model HorarioMedico
   */

  export type AggregateHorarioMedico = {
    _count: HorarioMedicoCountAggregateOutputType | null
    _avg: HorarioMedicoAvgAggregateOutputType | null
    _sum: HorarioMedicoSumAggregateOutputType | null
    _min: HorarioMedicoMinAggregateOutputType | null
    _max: HorarioMedicoMaxAggregateOutputType | null
  }

  export type HorarioMedicoAvgAggregateOutputType = {
    id: number | null
    medico_id: number | null
  }

  export type HorarioMedicoSumAggregateOutputType = {
    id: number | null
    medico_id: number | null
  }

  export type HorarioMedicoMinAggregateOutputType = {
    id: number | null
    medico_id: number | null
    day_of_week: $Enums.DiaSemana | null
    start_time: Date | null
    end_time: Date | null
  }

  export type HorarioMedicoMaxAggregateOutputType = {
    id: number | null
    medico_id: number | null
    day_of_week: $Enums.DiaSemana | null
    start_time: Date | null
    end_time: Date | null
  }

  export type HorarioMedicoCountAggregateOutputType = {
    id: number
    medico_id: number
    day_of_week: number
    start_time: number
    end_time: number
    _all: number
  }


  export type HorarioMedicoAvgAggregateInputType = {
    id?: true
    medico_id?: true
  }

  export type HorarioMedicoSumAggregateInputType = {
    id?: true
    medico_id?: true
  }

  export type HorarioMedicoMinAggregateInputType = {
    id?: true
    medico_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
  }

  export type HorarioMedicoMaxAggregateInputType = {
    id?: true
    medico_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
  }

  export type HorarioMedicoCountAggregateInputType = {
    id?: true
    medico_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type HorarioMedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioMedico to aggregate.
     */
    where?: HorarioMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioMedicos to fetch.
     */
    orderBy?: HorarioMedicoOrderByWithRelationInput | HorarioMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorarioMedicos
    **/
    _count?: true | HorarioMedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorarioMedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorarioMedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioMedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioMedicoMaxAggregateInputType
  }

  export type GetHorarioMedicoAggregateType<T extends HorarioMedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarioMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarioMedico[P]>
      : GetScalarType<T[P], AggregateHorarioMedico[P]>
  }




  export type HorarioMedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioMedicoWhereInput
    orderBy?: HorarioMedicoOrderByWithAggregationInput | HorarioMedicoOrderByWithAggregationInput[]
    by: HorarioMedicoScalarFieldEnum[] | HorarioMedicoScalarFieldEnum
    having?: HorarioMedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioMedicoCountAggregateInputType | true
    _avg?: HorarioMedicoAvgAggregateInputType
    _sum?: HorarioMedicoSumAggregateInputType
    _min?: HorarioMedicoMinAggregateInputType
    _max?: HorarioMedicoMaxAggregateInputType
  }

  export type HorarioMedicoGroupByOutputType = {
    id: number
    medico_id: number
    day_of_week: $Enums.DiaSemana
    start_time: Date
    end_time: Date
    _count: HorarioMedicoCountAggregateOutputType | null
    _avg: HorarioMedicoAvgAggregateOutputType | null
    _sum: HorarioMedicoSumAggregateOutputType | null
    _min: HorarioMedicoMinAggregateOutputType | null
    _max: HorarioMedicoMaxAggregateOutputType | null
  }

  type GetHorarioMedicoGroupByPayload<T extends HorarioMedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioMedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioMedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioMedicoGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioMedicoGroupByOutputType[P]>
        }
      >
    >


  export type HorarioMedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medico_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioMedico"]>



  export type HorarioMedicoSelectScalar = {
    id?: boolean
    medico_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type HorarioMedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medico_id" | "day_of_week" | "start_time" | "end_time", ExtArgs["result"]["horarioMedico"]>
  export type HorarioMedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }

  export type $HorarioMedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorarioMedico"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medico_id: number
      day_of_week: $Enums.DiaSemana
      start_time: Date
      end_time: Date
    }, ExtArgs["result"]["horarioMedico"]>
    composites: {}
  }

  type HorarioMedicoGetPayload<S extends boolean | null | undefined | HorarioMedicoDefaultArgs> = $Result.GetResult<Prisma.$HorarioMedicoPayload, S>

  type HorarioMedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioMedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioMedicoCountAggregateInputType | true
    }

  export interface HorarioMedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorarioMedico'], meta: { name: 'HorarioMedico' } }
    /**
     * Find zero or one HorarioMedico that matches the filter.
     * @param {HorarioMedicoFindUniqueArgs} args - Arguments to find a HorarioMedico
     * @example
     * // Get one HorarioMedico
     * const horarioMedico = await prisma.horarioMedico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioMedicoFindUniqueArgs>(args: SelectSubset<T, HorarioMedicoFindUniqueArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorarioMedico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioMedicoFindUniqueOrThrowArgs} args - Arguments to find a HorarioMedico
     * @example
     * // Get one HorarioMedico
     * const horarioMedico = await prisma.horarioMedico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioMedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioMedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioMedico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioMedicoFindFirstArgs} args - Arguments to find a HorarioMedico
     * @example
     * // Get one HorarioMedico
     * const horarioMedico = await prisma.horarioMedico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioMedicoFindFirstArgs>(args?: SelectSubset<T, HorarioMedicoFindFirstArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioMedico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioMedicoFindFirstOrThrowArgs} args - Arguments to find a HorarioMedico
     * @example
     * // Get one HorarioMedico
     * const horarioMedico = await prisma.horarioMedico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioMedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioMedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorarioMedicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioMedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorarioMedicos
     * const horarioMedicos = await prisma.horarioMedico.findMany()
     * 
     * // Get first 10 HorarioMedicos
     * const horarioMedicos = await prisma.horarioMedico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioMedicoWithIdOnly = await prisma.horarioMedico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioMedicoFindManyArgs>(args?: SelectSubset<T, HorarioMedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorarioMedico.
     * @param {HorarioMedicoCreateArgs} args - Arguments to create a HorarioMedico.
     * @example
     * // Create one HorarioMedico
     * const HorarioMedico = await prisma.horarioMedico.create({
     *   data: {
     *     // ... data to create a HorarioMedico
     *   }
     * })
     * 
     */
    create<T extends HorarioMedicoCreateArgs>(args: SelectSubset<T, HorarioMedicoCreateArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorarioMedicos.
     * @param {HorarioMedicoCreateManyArgs} args - Arguments to create many HorarioMedicos.
     * @example
     * // Create many HorarioMedicos
     * const horarioMedico = await prisma.horarioMedico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioMedicoCreateManyArgs>(args?: SelectSubset<T, HorarioMedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HorarioMedico.
     * @param {HorarioMedicoDeleteArgs} args - Arguments to delete one HorarioMedico.
     * @example
     * // Delete one HorarioMedico
     * const HorarioMedico = await prisma.horarioMedico.delete({
     *   where: {
     *     // ... filter to delete one HorarioMedico
     *   }
     * })
     * 
     */
    delete<T extends HorarioMedicoDeleteArgs>(args: SelectSubset<T, HorarioMedicoDeleteArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorarioMedico.
     * @param {HorarioMedicoUpdateArgs} args - Arguments to update one HorarioMedico.
     * @example
     * // Update one HorarioMedico
     * const horarioMedico = await prisma.horarioMedico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioMedicoUpdateArgs>(args: SelectSubset<T, HorarioMedicoUpdateArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorarioMedicos.
     * @param {HorarioMedicoDeleteManyArgs} args - Arguments to filter HorarioMedicos to delete.
     * @example
     * // Delete a few HorarioMedicos
     * const { count } = await prisma.horarioMedico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioMedicoDeleteManyArgs>(args?: SelectSubset<T, HorarioMedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioMedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorarioMedicos
     * const horarioMedico = await prisma.horarioMedico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioMedicoUpdateManyArgs>(args: SelectSubset<T, HorarioMedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HorarioMedico.
     * @param {HorarioMedicoUpsertArgs} args - Arguments to update or create a HorarioMedico.
     * @example
     * // Update or create a HorarioMedico
     * const horarioMedico = await prisma.horarioMedico.upsert({
     *   create: {
     *     // ... data to create a HorarioMedico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorarioMedico we want to update
     *   }
     * })
     */
    upsert<T extends HorarioMedicoUpsertArgs>(args: SelectSubset<T, HorarioMedicoUpsertArgs<ExtArgs>>): Prisma__HorarioMedicoClient<$Result.GetResult<Prisma.$HorarioMedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorarioMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioMedicoCountArgs} args - Arguments to filter HorarioMedicos to count.
     * @example
     * // Count the number of HorarioMedicos
     * const count = await prisma.horarioMedico.count({
     *   where: {
     *     // ... the filter for the HorarioMedicos we want to count
     *   }
     * })
    **/
    count<T extends HorarioMedicoCountArgs>(
      args?: Subset<T, HorarioMedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioMedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorarioMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioMedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioMedicoAggregateArgs>(args: Subset<T, HorarioMedicoAggregateArgs>): Prisma.PrismaPromise<GetHorarioMedicoAggregateType<T>>

    /**
     * Group by HorarioMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioMedicoGroupByArgs} args - Group by arguments.
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
      T extends HorarioMedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioMedicoGroupByArgs['orderBy'] }
        : { orderBy?: HorarioMedicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HorarioMedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorarioMedico model
   */
  readonly fields: HorarioMedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorarioMedico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioMedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HorarioMedico model
   */
  interface HorarioMedicoFieldRefs {
    readonly id: FieldRef<"HorarioMedico", 'Int'>
    readonly medico_id: FieldRef<"HorarioMedico", 'Int'>
    readonly day_of_week: FieldRef<"HorarioMedico", 'DiaSemana'>
    readonly start_time: FieldRef<"HorarioMedico", 'DateTime'>
    readonly end_time: FieldRef<"HorarioMedico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HorarioMedico findUnique
   */
  export type HorarioMedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioMedico to fetch.
     */
    where: HorarioMedicoWhereUniqueInput
  }

  /**
   * HorarioMedico findUniqueOrThrow
   */
  export type HorarioMedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioMedico to fetch.
     */
    where: HorarioMedicoWhereUniqueInput
  }

  /**
   * HorarioMedico findFirst
   */
  export type HorarioMedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioMedico to fetch.
     */
    where?: HorarioMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioMedicos to fetch.
     */
    orderBy?: HorarioMedicoOrderByWithRelationInput | HorarioMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioMedicos.
     */
    cursor?: HorarioMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioMedicos.
     */
    distinct?: HorarioMedicoScalarFieldEnum | HorarioMedicoScalarFieldEnum[]
  }

  /**
   * HorarioMedico findFirstOrThrow
   */
  export type HorarioMedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioMedico to fetch.
     */
    where?: HorarioMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioMedicos to fetch.
     */
    orderBy?: HorarioMedicoOrderByWithRelationInput | HorarioMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioMedicos.
     */
    cursor?: HorarioMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioMedicos.
     */
    distinct?: HorarioMedicoScalarFieldEnum | HorarioMedicoScalarFieldEnum[]
  }

  /**
   * HorarioMedico findMany
   */
  export type HorarioMedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioMedicos to fetch.
     */
    where?: HorarioMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioMedicos to fetch.
     */
    orderBy?: HorarioMedicoOrderByWithRelationInput | HorarioMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorarioMedicos.
     */
    cursor?: HorarioMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioMedicos.
     */
    skip?: number
    distinct?: HorarioMedicoScalarFieldEnum | HorarioMedicoScalarFieldEnum[]
  }

  /**
   * HorarioMedico create
   */
  export type HorarioMedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a HorarioMedico.
     */
    data: XOR<HorarioMedicoCreateInput, HorarioMedicoUncheckedCreateInput>
  }

  /**
   * HorarioMedico createMany
   */
  export type HorarioMedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorarioMedicos.
     */
    data: HorarioMedicoCreateManyInput | HorarioMedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HorarioMedico update
   */
  export type HorarioMedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a HorarioMedico.
     */
    data: XOR<HorarioMedicoUpdateInput, HorarioMedicoUncheckedUpdateInput>
    /**
     * Choose, which HorarioMedico to update.
     */
    where: HorarioMedicoWhereUniqueInput
  }

  /**
   * HorarioMedico updateMany
   */
  export type HorarioMedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorarioMedicos.
     */
    data: XOR<HorarioMedicoUpdateManyMutationInput, HorarioMedicoUncheckedUpdateManyInput>
    /**
     * Filter which HorarioMedicos to update
     */
    where?: HorarioMedicoWhereInput
    /**
     * Limit how many HorarioMedicos to update.
     */
    limit?: number
  }

  /**
   * HorarioMedico upsert
   */
  export type HorarioMedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the HorarioMedico to update in case it exists.
     */
    where: HorarioMedicoWhereUniqueInput
    /**
     * In case the HorarioMedico found by the `where` argument doesn't exist, create a new HorarioMedico with this data.
     */
    create: XOR<HorarioMedicoCreateInput, HorarioMedicoUncheckedCreateInput>
    /**
     * In case the HorarioMedico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioMedicoUpdateInput, HorarioMedicoUncheckedUpdateInput>
  }

  /**
   * HorarioMedico delete
   */
  export type HorarioMedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
    /**
     * Filter which HorarioMedico to delete.
     */
    where: HorarioMedicoWhereUniqueInput
  }

  /**
   * HorarioMedico deleteMany
   */
  export type HorarioMedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioMedicos to delete
     */
    where?: HorarioMedicoWhereInput
    /**
     * Limit how many HorarioMedicos to delete.
     */
    limit?: number
  }

  /**
   * HorarioMedico without action
   */
  export type HorarioMedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioMedico
     */
    select?: HorarioMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioMedico
     */
    omit?: HorarioMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioMedicoInclude<ExtArgs> | null
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
    document: 'document',
    birthdate: 'birthdate',
    phone: 'phone',
    postal_code: 'postal_code',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MedicoScalarFieldEnum: {
    id: 'id',
    specialty: 'specialty'
  };

  export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    history: 'history',
    allergies: 'allergies'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const RecepcionistaScalarFieldEnum: {
    id: 'id'
  };

  export type RecepcionistaScalarFieldEnum = (typeof RecepcionistaScalarFieldEnum)[keyof typeof RecepcionistaScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    paciente_id: 'paciente_id',
    medico_id: 'medico_id',
    date_time: 'date_time',
    status: 'status',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const HistoricoConsultaScalarFieldEnum: {
    id: 'id',
    consulta_id: 'consulta_id',
    acao: 'acao',
    realizado_por: 'realizado_por',
    data_acao: 'data_acao',
    observacao: 'observacao'
  };

  export type HistoricoConsultaScalarFieldEnum = (typeof HistoricoConsultaScalarFieldEnum)[keyof typeof HistoricoConsultaScalarFieldEnum]


  export const RegistroMedicoScalarFieldEnum: {
    id: 'id',
    consulta_id: 'consulta_id',
    medico_id: 'medico_id',
    paciente_id: 'paciente_id',
    observacoes: 'observacoes',
    diagnostico: 'diagnostico',
    tratamento: 'tratamento',
    created_at: 'created_at'
  };

  export type RegistroMedicoScalarFieldEnum = (typeof RegistroMedicoScalarFieldEnum)[keyof typeof RegistroMedicoScalarFieldEnum]


  export const HorarioMedicoScalarFieldEnum: {
    id: 'id',
    medico_id: 'medico_id',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type HorarioMedicoScalarFieldEnum = (typeof HorarioMedicoScalarFieldEnum)[keyof typeof HorarioMedicoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    document: 'document',
    phone: 'phone',
    postal_code: 'postal_code',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const MedicoOrderByRelevanceFieldEnum: {
    specialty: 'specialty'
  };

  export type MedicoOrderByRelevanceFieldEnum = (typeof MedicoOrderByRelevanceFieldEnum)[keyof typeof MedicoOrderByRelevanceFieldEnum]


  export const PacienteOrderByRelevanceFieldEnum: {
    history: 'history',
    allergies: 'allergies'
  };

  export type PacienteOrderByRelevanceFieldEnum = (typeof PacienteOrderByRelevanceFieldEnum)[keyof typeof PacienteOrderByRelevanceFieldEnum]


  export const ConsultaOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type ConsultaOrderByRelevanceFieldEnum = (typeof ConsultaOrderByRelevanceFieldEnum)[keyof typeof ConsultaOrderByRelevanceFieldEnum]


  export const HistoricoConsultaOrderByRelevanceFieldEnum: {
    observacao: 'observacao'
  };

  export type HistoricoConsultaOrderByRelevanceFieldEnum = (typeof HistoricoConsultaOrderByRelevanceFieldEnum)[keyof typeof HistoricoConsultaOrderByRelevanceFieldEnum]


  export const RegistroMedicoOrderByRelevanceFieldEnum: {
    observacoes: 'observacoes',
    diagnostico: 'diagnostico',
    tratamento: 'tratamento'
  };

  export type RegistroMedicoOrderByRelevanceFieldEnum = (typeof RegistroMedicoOrderByRelevanceFieldEnum)[keyof typeof RegistroMedicoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'ConsultaStatus'
   */
  export type EnumConsultaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultaStatus'>
    


  /**
   * Reference to a field of type 'AcaoConsulta'
   */
  export type EnumAcaoConsultaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcaoConsulta'>
    


  /**
   * Reference to a field of type 'DiaSemana'
   */
  export type EnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    document?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    phone?: StringNullableFilter<"User"> | string | null
    postal_code?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    Medico?: XOR<MedicoNullableScalarRelationFilter, MedicoWhereInput> | null
    Paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
    Recepcionista?: XOR<RecepcionistaNullableScalarRelationFilter, RecepcionistaWhereInput> | null
    historicoAcoes?: HistoricoConsultaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrderInput | SortOrder
    postal_code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    Medico?: MedicoOrderByWithRelationInput
    Paciente?: PacienteOrderByWithRelationInput
    Recepcionista?: RecepcionistaOrderByWithRelationInput
    historicoAcoes?: HistoricoConsultaOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    phone?: StringNullableFilter<"User"> | string | null
    postal_code?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    Medico?: XOR<MedicoNullableScalarRelationFilter, MedicoWhereInput> | null
    Paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
    Recepcionista?: XOR<RecepcionistaNullableScalarRelationFilter, RecepcionistaWhereInput> | null
    historicoAcoes?: HistoricoConsultaListRelationFilter
  }, "id" | "document" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrderInput | SortOrder
    postal_code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    document?: StringWithAggregatesFilter<"User"> | string
    birthdate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    postal_code?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type MedicoWhereInput = {
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    id?: IntFilter<"Medico"> | number
    specialty?: StringFilter<"Medico"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultas?: ConsultaListRelationFilter
    registros?: RegistroMedicoListRelationFilter
    horarios?: HorarioMedicoListRelationFilter
  }

  export type MedicoOrderByWithRelationInput = {
    id?: SortOrder
    specialty?: SortOrder
    user?: UserOrderByWithRelationInput
    consultas?: ConsultaOrderByRelationAggregateInput
    registros?: RegistroMedicoOrderByRelationAggregateInput
    horarios?: HorarioMedicoOrderByRelationAggregateInput
    _relevance?: MedicoOrderByRelevanceInput
  }

  export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    specialty?: StringFilter<"Medico"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultas?: ConsultaListRelationFilter
    registros?: RegistroMedicoListRelationFilter
    horarios?: HorarioMedicoListRelationFilter
  }, "id">

  export type MedicoOrderByWithAggregationInput = {
    id?: SortOrder
    specialty?: SortOrder
    _count?: MedicoCountOrderByAggregateInput
    _avg?: MedicoAvgOrderByAggregateInput
    _max?: MedicoMaxOrderByAggregateInput
    _min?: MedicoMinOrderByAggregateInput
    _sum?: MedicoSumOrderByAggregateInput
  }

  export type MedicoScalarWhereWithAggregatesInput = {
    AND?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    OR?: MedicoScalarWhereWithAggregatesInput[]
    NOT?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medico"> | number
    specialty?: StringWithAggregatesFilter<"Medico"> | string
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    history?: StringNullableFilter<"Paciente"> | string | null
    allergies?: StringNullableFilter<"Paciente"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultas?: ConsultaListRelationFilter
    registros?: RegistroMedicoListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    history?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    consultas?: ConsultaOrderByRelationAggregateInput
    registros?: RegistroMedicoOrderByRelationAggregateInput
    _relevance?: PacienteOrderByRelevanceInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    history?: StringNullableFilter<"Paciente"> | string | null
    allergies?: StringNullableFilter<"Paciente"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultas?: ConsultaListRelationFilter
    registros?: RegistroMedicoListRelationFilter
  }, "id">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    history?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    history?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    allergies?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
  }

  export type RecepcionistaWhereInput = {
    AND?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    OR?: RecepcionistaWhereInput[]
    NOT?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    id?: IntFilter<"Recepcionista"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecepcionistaOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecepcionistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    OR?: RecepcionistaWhereInput[]
    NOT?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecepcionistaOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: RecepcionistaCountOrderByAggregateInput
    _avg?: RecepcionistaAvgOrderByAggregateInput
    _max?: RecepcionistaMaxOrderByAggregateInput
    _min?: RecepcionistaMinOrderByAggregateInput
    _sum?: RecepcionistaSumOrderByAggregateInput
  }

  export type RecepcionistaScalarWhereWithAggregatesInput = {
    AND?: RecepcionistaScalarWhereWithAggregatesInput | RecepcionistaScalarWhereWithAggregatesInput[]
    OR?: RecepcionistaScalarWhereWithAggregatesInput[]
    NOT?: RecepcionistaScalarWhereWithAggregatesInput | RecepcionistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recepcionista"> | number
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    paciente_id?: IntFilter<"Consulta"> | number
    medico_id?: IntFilter<"Consulta"> | number
    date_time?: DateTimeFilter<"Consulta"> | Date | string
    status?: EnumConsultaStatusFilter<"Consulta"> | $Enums.ConsultaStatus
    description?: StringNullableFilter<"Consulta"> | string | null
    created_at?: DateTimeFilter<"Consulta"> | Date | string
    updated_at?: DateTimeFilter<"Consulta"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    historico?: HistoricoConsultaListRelationFilter
    registros?: RegistroMedicoListRelationFilter
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medico_id?: SortOrder
    date_time?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    historico?: HistoricoConsultaOrderByRelationAggregateInput
    registros?: RegistroMedicoOrderByRelationAggregateInput
    _relevance?: ConsultaOrderByRelevanceInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    paciente_id?: IntFilter<"Consulta"> | number
    medico_id?: IntFilter<"Consulta"> | number
    date_time?: DateTimeFilter<"Consulta"> | Date | string
    status?: EnumConsultaStatusFilter<"Consulta"> | $Enums.ConsultaStatus
    description?: StringNullableFilter<"Consulta"> | string | null
    created_at?: DateTimeFilter<"Consulta"> | Date | string
    updated_at?: DateTimeFilter<"Consulta"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    historico?: HistoricoConsultaListRelationFilter
    registros?: RegistroMedicoListRelationFilter
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medico_id?: SortOrder
    date_time?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    paciente_id?: IntWithAggregatesFilter<"Consulta"> | number
    medico_id?: IntWithAggregatesFilter<"Consulta"> | number
    date_time?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    status?: EnumConsultaStatusWithAggregatesFilter<"Consulta"> | $Enums.ConsultaStatus
    description?: StringNullableWithAggregatesFilter<"Consulta"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
  }

  export type HistoricoConsultaWhereInput = {
    AND?: HistoricoConsultaWhereInput | HistoricoConsultaWhereInput[]
    OR?: HistoricoConsultaWhereInput[]
    NOT?: HistoricoConsultaWhereInput | HistoricoConsultaWhereInput[]
    id?: IntFilter<"HistoricoConsulta"> | number
    consulta_id?: IntFilter<"HistoricoConsulta"> | number
    acao?: EnumAcaoConsultaFilter<"HistoricoConsulta"> | $Enums.AcaoConsulta
    realizado_por?: IntFilter<"HistoricoConsulta"> | number
    data_acao?: DateTimeFilter<"HistoricoConsulta"> | Date | string
    observacao?: StringNullableFilter<"HistoricoConsulta"> | string | null
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
    realizadoPor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HistoricoConsultaOrderByWithRelationInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    acao?: SortOrder
    realizado_por?: SortOrder
    data_acao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    consulta?: ConsultaOrderByWithRelationInput
    realizadoPor?: UserOrderByWithRelationInput
    _relevance?: HistoricoConsultaOrderByRelevanceInput
  }

  export type HistoricoConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoricoConsultaWhereInput | HistoricoConsultaWhereInput[]
    OR?: HistoricoConsultaWhereInput[]
    NOT?: HistoricoConsultaWhereInput | HistoricoConsultaWhereInput[]
    consulta_id?: IntFilter<"HistoricoConsulta"> | number
    acao?: EnumAcaoConsultaFilter<"HistoricoConsulta"> | $Enums.AcaoConsulta
    realizado_por?: IntFilter<"HistoricoConsulta"> | number
    data_acao?: DateTimeFilter<"HistoricoConsulta"> | Date | string
    observacao?: StringNullableFilter<"HistoricoConsulta"> | string | null
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
    realizadoPor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HistoricoConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    acao?: SortOrder
    realizado_por?: SortOrder
    data_acao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: HistoricoConsultaCountOrderByAggregateInput
    _avg?: HistoricoConsultaAvgOrderByAggregateInput
    _max?: HistoricoConsultaMaxOrderByAggregateInput
    _min?: HistoricoConsultaMinOrderByAggregateInput
    _sum?: HistoricoConsultaSumOrderByAggregateInput
  }

  export type HistoricoConsultaScalarWhereWithAggregatesInput = {
    AND?: HistoricoConsultaScalarWhereWithAggregatesInput | HistoricoConsultaScalarWhereWithAggregatesInput[]
    OR?: HistoricoConsultaScalarWhereWithAggregatesInput[]
    NOT?: HistoricoConsultaScalarWhereWithAggregatesInput | HistoricoConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoricoConsulta"> | number
    consulta_id?: IntWithAggregatesFilter<"HistoricoConsulta"> | number
    acao?: EnumAcaoConsultaWithAggregatesFilter<"HistoricoConsulta"> | $Enums.AcaoConsulta
    realizado_por?: IntWithAggregatesFilter<"HistoricoConsulta"> | number
    data_acao?: DateTimeWithAggregatesFilter<"HistoricoConsulta"> | Date | string
    observacao?: StringNullableWithAggregatesFilter<"HistoricoConsulta"> | string | null
  }

  export type RegistroMedicoWhereInput = {
    AND?: RegistroMedicoWhereInput | RegistroMedicoWhereInput[]
    OR?: RegistroMedicoWhereInput[]
    NOT?: RegistroMedicoWhereInput | RegistroMedicoWhereInput[]
    id?: IntFilter<"RegistroMedico"> | number
    consulta_id?: IntFilter<"RegistroMedico"> | number
    medico_id?: IntFilter<"RegistroMedico"> | number
    paciente_id?: IntFilter<"RegistroMedico"> | number
    observacoes?: StringNullableFilter<"RegistroMedico"> | string | null
    diagnostico?: StringNullableFilter<"RegistroMedico"> | string | null
    tratamento?: StringNullableFilter<"RegistroMedico"> | string | null
    created_at?: DateTimeFilter<"RegistroMedico"> | Date | string
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type RegistroMedicoOrderByWithRelationInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    diagnostico?: SortOrderInput | SortOrder
    tratamento?: SortOrderInput | SortOrder
    created_at?: SortOrder
    consulta?: ConsultaOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
    _relevance?: RegistroMedicoOrderByRelevanceInput
  }

  export type RegistroMedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistroMedicoWhereInput | RegistroMedicoWhereInput[]
    OR?: RegistroMedicoWhereInput[]
    NOT?: RegistroMedicoWhereInput | RegistroMedicoWhereInput[]
    consulta_id?: IntFilter<"RegistroMedico"> | number
    medico_id?: IntFilter<"RegistroMedico"> | number
    paciente_id?: IntFilter<"RegistroMedico"> | number
    observacoes?: StringNullableFilter<"RegistroMedico"> | string | null
    diagnostico?: StringNullableFilter<"RegistroMedico"> | string | null
    tratamento?: StringNullableFilter<"RegistroMedico"> | string | null
    created_at?: DateTimeFilter<"RegistroMedico"> | Date | string
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "id">

  export type RegistroMedicoOrderByWithAggregationInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    diagnostico?: SortOrderInput | SortOrder
    tratamento?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: RegistroMedicoCountOrderByAggregateInput
    _avg?: RegistroMedicoAvgOrderByAggregateInput
    _max?: RegistroMedicoMaxOrderByAggregateInput
    _min?: RegistroMedicoMinOrderByAggregateInput
    _sum?: RegistroMedicoSumOrderByAggregateInput
  }

  export type RegistroMedicoScalarWhereWithAggregatesInput = {
    AND?: RegistroMedicoScalarWhereWithAggregatesInput | RegistroMedicoScalarWhereWithAggregatesInput[]
    OR?: RegistroMedicoScalarWhereWithAggregatesInput[]
    NOT?: RegistroMedicoScalarWhereWithAggregatesInput | RegistroMedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegistroMedico"> | number
    consulta_id?: IntWithAggregatesFilter<"RegistroMedico"> | number
    medico_id?: IntWithAggregatesFilter<"RegistroMedico"> | number
    paciente_id?: IntWithAggregatesFilter<"RegistroMedico"> | number
    observacoes?: StringNullableWithAggregatesFilter<"RegistroMedico"> | string | null
    diagnostico?: StringNullableWithAggregatesFilter<"RegistroMedico"> | string | null
    tratamento?: StringNullableWithAggregatesFilter<"RegistroMedico"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"RegistroMedico"> | Date | string
  }

  export type HorarioMedicoWhereInput = {
    AND?: HorarioMedicoWhereInput | HorarioMedicoWhereInput[]
    OR?: HorarioMedicoWhereInput[]
    NOT?: HorarioMedicoWhereInput | HorarioMedicoWhereInput[]
    id?: IntFilter<"HorarioMedico"> | number
    medico_id?: IntFilter<"HorarioMedico"> | number
    day_of_week?: EnumDiaSemanaFilter<"HorarioMedico"> | $Enums.DiaSemana
    start_time?: DateTimeFilter<"HorarioMedico"> | Date | string
    end_time?: DateTimeFilter<"HorarioMedico"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }

  export type HorarioMedicoOrderByWithRelationInput = {
    id?: SortOrder
    medico_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    medico?: MedicoOrderByWithRelationInput
  }

  export type HorarioMedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HorarioMedicoWhereInput | HorarioMedicoWhereInput[]
    OR?: HorarioMedicoWhereInput[]
    NOT?: HorarioMedicoWhereInput | HorarioMedicoWhereInput[]
    medico_id?: IntFilter<"HorarioMedico"> | number
    day_of_week?: EnumDiaSemanaFilter<"HorarioMedico"> | $Enums.DiaSemana
    start_time?: DateTimeFilter<"HorarioMedico"> | Date | string
    end_time?: DateTimeFilter<"HorarioMedico"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }, "id">

  export type HorarioMedicoOrderByWithAggregationInput = {
    id?: SortOrder
    medico_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    _count?: HorarioMedicoCountOrderByAggregateInput
    _avg?: HorarioMedicoAvgOrderByAggregateInput
    _max?: HorarioMedicoMaxOrderByAggregateInput
    _min?: HorarioMedicoMinOrderByAggregateInput
    _sum?: HorarioMedicoSumOrderByAggregateInput
  }

  export type HorarioMedicoScalarWhereWithAggregatesInput = {
    AND?: HorarioMedicoScalarWhereWithAggregatesInput | HorarioMedicoScalarWhereWithAggregatesInput[]
    OR?: HorarioMedicoScalarWhereWithAggregatesInput[]
    NOT?: HorarioMedicoScalarWhereWithAggregatesInput | HorarioMedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HorarioMedico"> | number
    medico_id?: IntWithAggregatesFilter<"HorarioMedico"> | number
    day_of_week?: EnumDiaSemanaWithAggregatesFilter<"HorarioMedico"> | $Enums.DiaSemana
    start_time?: DateTimeWithAggregatesFilter<"HorarioMedico"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"HorarioMedico"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoCreateNestedOneWithoutUserInput
    Paciente?: PacienteCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoUncheckedCreateNestedOneWithoutUserInput
    Paciente?: PacienteUncheckedCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaUncheckedCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaUncheckedCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUpdateOneWithoutUserNestedInput
    Paciente?: PacienteUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUpdateManyWithoutRealizadoPorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUncheckedUpdateOneWithoutUserNestedInput
    Paciente?: PacienteUncheckedUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUncheckedUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUncheckedUpdateManyWithoutRealizadoPorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicoCreateInput = {
    specialty: string
    user: UserCreateNestedOneWithoutMedicoInput
    consultas?: ConsultaCreateNestedManyWithoutMedicoInput
    registros?: RegistroMedicoCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateInput = {
    id: number
    specialty: string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutMedicoInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUpdateInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedicoNestedInput
    consultas?: ConsultaUpdateManyWithoutMedicoNestedInput
    registros?: RegistroMedicoUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUncheckedUpdateManyWithoutMedicoNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoCreateManyInput = {
    id: number
    specialty: string
  }

  export type MedicoUpdateManyMutationInput = {
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type MedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteCreateInput = {
    history?: string | null
    allergies?: string | null
    user: UserCreateNestedOneWithoutPacienteInput
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
    registros?: RegistroMedicoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id: number
    history?: string | null
    allergies?: string | null
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPacienteNestedInput
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
    registros?: RegistroMedicoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id: number
    history?: string | null
    allergies?: string | null
  }

  export type PacienteUpdateManyMutationInput = {
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecepcionistaCreateInput = {
    user: UserCreateNestedOneWithoutRecepcionistaInput
  }

  export type RecepcionistaUncheckedCreateInput = {
    id: number
  }

  export type RecepcionistaUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRecepcionistaNestedInput
  }

  export type RecepcionistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type RecepcionistaCreateManyInput = {
    id: number
  }

  export type RecepcionistaUpdateManyMutationInput = {

  }

  export type RecepcionistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaCreateInput = {
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    medico: MedicoCreateNestedOneWithoutConsultasInput
    historico?: HistoricoConsultaCreateNestedManyWithoutConsultaInput
    registros?: RegistroMedicoCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    paciente_id: number
    medico_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    historico?: HistoricoConsultaUncheckedCreateNestedManyWithoutConsultaInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUpdateInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutConsultasNestedInput
    historico?: HistoricoConsultaUpdateManyWithoutConsultaNestedInput
    registros?: RegistroMedicoUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoConsultaUncheckedUpdateManyWithoutConsultaNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaCreateManyInput = {
    id?: number
    paciente_id: number
    medico_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsultaUpdateManyMutationInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoConsultaCreateInput = {
    acao: $Enums.AcaoConsulta
    data_acao: Date | string
    observacao?: string | null
    consulta: ConsultaCreateNestedOneWithoutHistoricoInput
    realizadoPor: UserCreateNestedOneWithoutHistoricoAcoesInput
  }

  export type HistoricoConsultaUncheckedCreateInput = {
    id?: number
    consulta_id: number
    acao: $Enums.AcaoConsulta
    realizado_por: number
    data_acao: Date | string
    observacao?: string | null
  }

  export type HistoricoConsultaUpdateInput = {
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    consulta?: ConsultaUpdateOneRequiredWithoutHistoricoNestedInput
    realizadoPor?: UserUpdateOneRequiredWithoutHistoricoAcoesNestedInput
  }

  export type HistoricoConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    realizado_por?: IntFieldUpdateOperationsInput | number
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoConsultaCreateManyInput = {
    id?: number
    consulta_id: number
    acao: $Enums.AcaoConsulta
    realizado_por: number
    data_acao: Date | string
    observacao?: string | null
  }

  export type HistoricoConsultaUpdateManyMutationInput = {
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    realizado_por?: IntFieldUpdateOperationsInput | number
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroMedicoCreateInput = {
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
    consulta: ConsultaCreateNestedOneWithoutRegistrosInput
    medico: MedicoCreateNestedOneWithoutRegistrosInput
    paciente: PacienteCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroMedicoUncheckedCreateInput = {
    id?: number
    consulta_id: number
    medico_id: number
    paciente_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type RegistroMedicoUpdateInput = {
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneRequiredWithoutRegistrosNestedInput
    medico?: MedicoUpdateOneRequiredWithoutRegistrosNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroMedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroMedicoCreateManyInput = {
    id?: number
    consulta_id: number
    medico_id: number
    paciente_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type RegistroMedicoUpdateManyMutationInput = {
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroMedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioMedicoCreateInput = {
    day_of_week: $Enums.DiaSemana
    start_time: Date | string
    end_time: Date | string
    medico: MedicoCreateNestedOneWithoutHorariosInput
  }

  export type HorarioMedicoUncheckedCreateInput = {
    id?: number
    medico_id: number
    day_of_week: $Enums.DiaSemana
    start_time: Date | string
    end_time: Date | string
  }

  export type HorarioMedicoUpdateInput = {
    day_of_week?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioMedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioMedicoCreateManyInput = {
    id?: number
    medico_id: number
    day_of_week: $Enums.DiaSemana
    start_time: Date | string
    end_time: Date | string
  }

  export type HorarioMedicoUpdateManyMutationInput = {
    day_of_week?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioMedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MedicoNullableScalarRelationFilter = {
    is?: MedicoWhereInput | null
    isNot?: MedicoWhereInput | null
  }

  export type PacienteNullableScalarRelationFilter = {
    is?: PacienteWhereInput | null
    isNot?: PacienteWhereInput | null
  }

  export type RecepcionistaNullableScalarRelationFilter = {
    is?: RecepcionistaWhereInput | null
    isNot?: RecepcionistaWhereInput | null
  }

  export type HistoricoConsultaListRelationFilter = {
    every?: HistoricoConsultaWhereInput
    some?: HistoricoConsultaWhereInput
    none?: HistoricoConsultaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HistoricoConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    postal_code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    postal_code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    postal_code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type RegistroMedicoListRelationFilter = {
    every?: RegistroMedicoWhereInput
    some?: RegistroMedicoWhereInput
    none?: RegistroMedicoWhereInput
  }

  export type HorarioMedicoListRelationFilter = {
    every?: HorarioMedicoWhereInput
    some?: HorarioMedicoWhereInput
    none?: HorarioMedicoWhereInput
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroMedicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HorarioMedicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicoOrderByRelevanceInput = {
    fields: MedicoOrderByRelevanceFieldEnum | MedicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MedicoCountOrderByAggregateInput = {
    id?: SortOrder
    specialty?: SortOrder
  }

  export type MedicoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    specialty?: SortOrder
  }

  export type MedicoMinOrderByAggregateInput = {
    id?: SortOrder
    specialty?: SortOrder
  }

  export type MedicoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteOrderByRelevanceInput = {
    fields: PacienteOrderByRelevanceFieldEnum | PacienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    history?: SortOrder
    allergies?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    history?: SortOrder
    allergies?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    history?: SortOrder
    allergies?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecepcionistaCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecepcionistaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecepcionistaMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecepcionistaMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecepcionistaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumConsultaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultaStatus | EnumConsultaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultaStatus[]
    notIn?: $Enums.ConsultaStatus[]
    not?: NestedEnumConsultaStatusFilter<$PrismaModel> | $Enums.ConsultaStatus
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type MedicoScalarRelationFilter = {
    is?: MedicoWhereInput
    isNot?: MedicoWhereInput
  }

  export type ConsultaOrderByRelevanceInput = {
    fields: ConsultaOrderByRelevanceFieldEnum | ConsultaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medico_id?: SortOrder
    date_time?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medico_id?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medico_id?: SortOrder
    date_time?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medico_id?: SortOrder
    date_time?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medico_id?: SortOrder
  }

  export type EnumConsultaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultaStatus | EnumConsultaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultaStatus[]
    notIn?: $Enums.ConsultaStatus[]
    not?: NestedEnumConsultaStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultaStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultaStatusFilter<$PrismaModel>
  }

  export type EnumAcaoConsultaFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoConsulta | EnumAcaoConsultaFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoConsulta[]
    notIn?: $Enums.AcaoConsulta[]
    not?: NestedEnumAcaoConsultaFilter<$PrismaModel> | $Enums.AcaoConsulta
  }

  export type ConsultaScalarRelationFilter = {
    is?: ConsultaWhereInput
    isNot?: ConsultaWhereInput
  }

  export type HistoricoConsultaOrderByRelevanceInput = {
    fields: HistoricoConsultaOrderByRelevanceFieldEnum | HistoricoConsultaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoricoConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    acao?: SortOrder
    realizado_por?: SortOrder
    data_acao?: SortOrder
    observacao?: SortOrder
  }

  export type HistoricoConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    realizado_por?: SortOrder
  }

  export type HistoricoConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    acao?: SortOrder
    realizado_por?: SortOrder
    data_acao?: SortOrder
    observacao?: SortOrder
  }

  export type HistoricoConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    acao?: SortOrder
    realizado_por?: SortOrder
    data_acao?: SortOrder
    observacao?: SortOrder
  }

  export type HistoricoConsultaSumOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    realizado_por?: SortOrder
  }

  export type EnumAcaoConsultaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoConsulta | EnumAcaoConsultaFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoConsulta[]
    notIn?: $Enums.AcaoConsulta[]
    not?: NestedEnumAcaoConsultaWithAggregatesFilter<$PrismaModel> | $Enums.AcaoConsulta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoConsultaFilter<$PrismaModel>
    _max?: NestedEnumAcaoConsultaFilter<$PrismaModel>
  }

  export type RegistroMedicoOrderByRelevanceInput = {
    fields: RegistroMedicoOrderByRelevanceFieldEnum | RegistroMedicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegistroMedicoCountOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    observacoes?: SortOrder
    diagnostico?: SortOrder
    tratamento?: SortOrder
    created_at?: SortOrder
  }

  export type RegistroMedicoAvgOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
  }

  export type RegistroMedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    observacoes?: SortOrder
    diagnostico?: SortOrder
    tratamento?: SortOrder
    created_at?: SortOrder
  }

  export type RegistroMedicoMinOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    observacoes?: SortOrder
    diagnostico?: SortOrder
    tratamento?: SortOrder
    created_at?: SortOrder
  }

  export type RegistroMedicoSumOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
  }

  export type EnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[]
    notIn?: $Enums.DiaSemana[]
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type HorarioMedicoCountOrderByAggregateInput = {
    id?: SortOrder
    medico_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type HorarioMedicoAvgOrderByAggregateInput = {
    id?: SortOrder
    medico_id?: SortOrder
  }

  export type HorarioMedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    medico_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type HorarioMedicoMinOrderByAggregateInput = {
    id?: SortOrder
    medico_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type HorarioMedicoSumOrderByAggregateInput = {
    id?: SortOrder
    medico_id?: SortOrder
  }

  export type EnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[]
    notIn?: $Enums.DiaSemana[]
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
  }

  export type MedicoCreateNestedOneWithoutUserInput = {
    create?: XOR<MedicoCreateWithoutUserInput, MedicoUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUserInput
    connect?: MedicoWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutUserInput = {
    create?: XOR<PacienteCreateWithoutUserInput, PacienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUserInput
    connect?: PacienteWhereUniqueInput
  }

  export type RecepcionistaCreateNestedOneWithoutUserInput = {
    create?: XOR<RecepcionistaCreateWithoutUserInput, RecepcionistaUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecepcionistaCreateOrConnectWithoutUserInput
    connect?: RecepcionistaWhereUniqueInput
  }

  export type HistoricoConsultaCreateNestedManyWithoutRealizadoPorInput = {
    create?: XOR<HistoricoConsultaCreateWithoutRealizadoPorInput, HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput> | HistoricoConsultaCreateWithoutRealizadoPorInput[] | HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput | HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput[]
    createMany?: HistoricoConsultaCreateManyRealizadoPorInputEnvelope
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
  }

  export type MedicoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MedicoCreateWithoutUserInput, MedicoUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUserInput
    connect?: MedicoWhereUniqueInput
  }

  export type PacienteUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PacienteCreateWithoutUserInput, PacienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUserInput
    connect?: PacienteWhereUniqueInput
  }

  export type RecepcionistaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RecepcionistaCreateWithoutUserInput, RecepcionistaUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecepcionistaCreateOrConnectWithoutUserInput
    connect?: RecepcionistaWhereUniqueInput
  }

  export type HistoricoConsultaUncheckedCreateNestedManyWithoutRealizadoPorInput = {
    create?: XOR<HistoricoConsultaCreateWithoutRealizadoPorInput, HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput> | HistoricoConsultaCreateWithoutRealizadoPorInput[] | HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput | HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput[]
    createMany?: HistoricoConsultaCreateManyRealizadoPorInputEnvelope
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MedicoUpdateOneWithoutUserNestedInput = {
    create?: XOR<MedicoCreateWithoutUserInput, MedicoUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUserInput
    upsert?: MedicoUpsertWithoutUserInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUserInput, MedicoUpdateWithoutUserInput>, MedicoUncheckedUpdateWithoutUserInput>
  }

  export type PacienteUpdateOneWithoutUserNestedInput = {
    create?: XOR<PacienteCreateWithoutUserInput, PacienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUserInput
    upsert?: PacienteUpsertWithoutUserInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUserInput, PacienteUpdateWithoutUserInput>, PacienteUncheckedUpdateWithoutUserInput>
  }

  export type RecepcionistaUpdateOneWithoutUserNestedInput = {
    create?: XOR<RecepcionistaCreateWithoutUserInput, RecepcionistaUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecepcionistaCreateOrConnectWithoutUserInput
    upsert?: RecepcionistaUpsertWithoutUserInput
    disconnect?: RecepcionistaWhereInput | boolean
    delete?: RecepcionistaWhereInput | boolean
    connect?: RecepcionistaWhereUniqueInput
    update?: XOR<XOR<RecepcionistaUpdateToOneWithWhereWithoutUserInput, RecepcionistaUpdateWithoutUserInput>, RecepcionistaUncheckedUpdateWithoutUserInput>
  }

  export type HistoricoConsultaUpdateManyWithoutRealizadoPorNestedInput = {
    create?: XOR<HistoricoConsultaCreateWithoutRealizadoPorInput, HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput> | HistoricoConsultaCreateWithoutRealizadoPorInput[] | HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput | HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput[]
    upsert?: HistoricoConsultaUpsertWithWhereUniqueWithoutRealizadoPorInput | HistoricoConsultaUpsertWithWhereUniqueWithoutRealizadoPorInput[]
    createMany?: HistoricoConsultaCreateManyRealizadoPorInputEnvelope
    set?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    disconnect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    delete?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    update?: HistoricoConsultaUpdateWithWhereUniqueWithoutRealizadoPorInput | HistoricoConsultaUpdateWithWhereUniqueWithoutRealizadoPorInput[]
    updateMany?: HistoricoConsultaUpdateManyWithWhereWithoutRealizadoPorInput | HistoricoConsultaUpdateManyWithWhereWithoutRealizadoPorInput[]
    deleteMany?: HistoricoConsultaScalarWhereInput | HistoricoConsultaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MedicoCreateWithoutUserInput, MedicoUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUserInput
    upsert?: MedicoUpsertWithoutUserInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUserInput, MedicoUpdateWithoutUserInput>, MedicoUncheckedUpdateWithoutUserInput>
  }

  export type PacienteUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PacienteCreateWithoutUserInput, PacienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUserInput
    upsert?: PacienteUpsertWithoutUserInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUserInput, PacienteUpdateWithoutUserInput>, PacienteUncheckedUpdateWithoutUserInput>
  }

  export type RecepcionistaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RecepcionistaCreateWithoutUserInput, RecepcionistaUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecepcionistaCreateOrConnectWithoutUserInput
    upsert?: RecepcionistaUpsertWithoutUserInput
    disconnect?: RecepcionistaWhereInput | boolean
    delete?: RecepcionistaWhereInput | boolean
    connect?: RecepcionistaWhereUniqueInput
    update?: XOR<XOR<RecepcionistaUpdateToOneWithWhereWithoutUserInput, RecepcionistaUpdateWithoutUserInput>, RecepcionistaUncheckedUpdateWithoutUserInput>
  }

  export type HistoricoConsultaUncheckedUpdateManyWithoutRealizadoPorNestedInput = {
    create?: XOR<HistoricoConsultaCreateWithoutRealizadoPorInput, HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput> | HistoricoConsultaCreateWithoutRealizadoPorInput[] | HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput | HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput[]
    upsert?: HistoricoConsultaUpsertWithWhereUniqueWithoutRealizadoPorInput | HistoricoConsultaUpsertWithWhereUniqueWithoutRealizadoPorInput[]
    createMany?: HistoricoConsultaCreateManyRealizadoPorInputEnvelope
    set?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    disconnect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    delete?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    update?: HistoricoConsultaUpdateWithWhereUniqueWithoutRealizadoPorInput | HistoricoConsultaUpdateWithWhereUniqueWithoutRealizadoPorInput[]
    updateMany?: HistoricoConsultaUpdateManyWithWhereWithoutRealizadoPorInput | HistoricoConsultaUpdateManyWithWhereWithoutRealizadoPorInput[]
    deleteMany?: HistoricoConsultaScalarWhereInput | HistoricoConsultaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMedicoInput = {
    create?: XOR<UserCreateWithoutMedicoInput, UserUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicoInput
    connect?: UserWhereUniqueInput
  }

  export type ConsultaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<ConsultaCreateWithoutMedicoInput, ConsultaUncheckedCreateWithoutMedicoInput> | ConsultaCreateWithoutMedicoInput[] | ConsultaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutMedicoInput | ConsultaCreateOrConnectWithoutMedicoInput[]
    createMany?: ConsultaCreateManyMedicoInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type RegistroMedicoCreateNestedManyWithoutMedicoInput = {
    create?: XOR<RegistroMedicoCreateWithoutMedicoInput, RegistroMedicoUncheckedCreateWithoutMedicoInput> | RegistroMedicoCreateWithoutMedicoInput[] | RegistroMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutMedicoInput | RegistroMedicoCreateOrConnectWithoutMedicoInput[]
    createMany?: RegistroMedicoCreateManyMedicoInputEnvelope
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
  }

  export type HorarioMedicoCreateNestedManyWithoutMedicoInput = {
    create?: XOR<HorarioMedicoCreateWithoutMedicoInput, HorarioMedicoUncheckedCreateWithoutMedicoInput> | HorarioMedicoCreateWithoutMedicoInput[] | HorarioMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HorarioMedicoCreateOrConnectWithoutMedicoInput | HorarioMedicoCreateOrConnectWithoutMedicoInput[]
    createMany?: HorarioMedicoCreateManyMedicoInputEnvelope
    connect?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<ConsultaCreateWithoutMedicoInput, ConsultaUncheckedCreateWithoutMedicoInput> | ConsultaCreateWithoutMedicoInput[] | ConsultaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutMedicoInput | ConsultaCreateOrConnectWithoutMedicoInput[]
    createMany?: ConsultaCreateManyMedicoInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type RegistroMedicoUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<RegistroMedicoCreateWithoutMedicoInput, RegistroMedicoUncheckedCreateWithoutMedicoInput> | RegistroMedicoCreateWithoutMedicoInput[] | RegistroMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutMedicoInput | RegistroMedicoCreateOrConnectWithoutMedicoInput[]
    createMany?: RegistroMedicoCreateManyMedicoInputEnvelope
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
  }

  export type HorarioMedicoUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<HorarioMedicoCreateWithoutMedicoInput, HorarioMedicoUncheckedCreateWithoutMedicoInput> | HorarioMedicoCreateWithoutMedicoInput[] | HorarioMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HorarioMedicoCreateOrConnectWithoutMedicoInput | HorarioMedicoCreateOrConnectWithoutMedicoInput[]
    createMany?: HorarioMedicoCreateManyMedicoInputEnvelope
    connect?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: XOR<UserCreateWithoutMedicoInput, UserUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicoInput
    upsert?: UserUpsertWithoutMedicoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicoInput, UserUpdateWithoutMedicoInput>, UserUncheckedUpdateWithoutMedicoInput>
  }

  export type ConsultaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<ConsultaCreateWithoutMedicoInput, ConsultaUncheckedCreateWithoutMedicoInput> | ConsultaCreateWithoutMedicoInput[] | ConsultaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutMedicoInput | ConsultaCreateOrConnectWithoutMedicoInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutMedicoInput | ConsultaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: ConsultaCreateManyMedicoInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutMedicoInput | ConsultaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutMedicoInput | ConsultaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type RegistroMedicoUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<RegistroMedicoCreateWithoutMedicoInput, RegistroMedicoUncheckedCreateWithoutMedicoInput> | RegistroMedicoCreateWithoutMedicoInput[] | RegistroMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutMedicoInput | RegistroMedicoCreateOrConnectWithoutMedicoInput[]
    upsert?: RegistroMedicoUpsertWithWhereUniqueWithoutMedicoInput | RegistroMedicoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: RegistroMedicoCreateManyMedicoInputEnvelope
    set?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    disconnect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    delete?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    update?: RegistroMedicoUpdateWithWhereUniqueWithoutMedicoInput | RegistroMedicoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: RegistroMedicoUpdateManyWithWhereWithoutMedicoInput | RegistroMedicoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
  }

  export type HorarioMedicoUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<HorarioMedicoCreateWithoutMedicoInput, HorarioMedicoUncheckedCreateWithoutMedicoInput> | HorarioMedicoCreateWithoutMedicoInput[] | HorarioMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HorarioMedicoCreateOrConnectWithoutMedicoInput | HorarioMedicoCreateOrConnectWithoutMedicoInput[]
    upsert?: HorarioMedicoUpsertWithWhereUniqueWithoutMedicoInput | HorarioMedicoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: HorarioMedicoCreateManyMedicoInputEnvelope
    set?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    disconnect?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    delete?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    connect?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    update?: HorarioMedicoUpdateWithWhereUniqueWithoutMedicoInput | HorarioMedicoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: HorarioMedicoUpdateManyWithWhereWithoutMedicoInput | HorarioMedicoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: HorarioMedicoScalarWhereInput | HorarioMedicoScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<ConsultaCreateWithoutMedicoInput, ConsultaUncheckedCreateWithoutMedicoInput> | ConsultaCreateWithoutMedicoInput[] | ConsultaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutMedicoInput | ConsultaCreateOrConnectWithoutMedicoInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutMedicoInput | ConsultaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: ConsultaCreateManyMedicoInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutMedicoInput | ConsultaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutMedicoInput | ConsultaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type RegistroMedicoUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<RegistroMedicoCreateWithoutMedicoInput, RegistroMedicoUncheckedCreateWithoutMedicoInput> | RegistroMedicoCreateWithoutMedicoInput[] | RegistroMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutMedicoInput | RegistroMedicoCreateOrConnectWithoutMedicoInput[]
    upsert?: RegistroMedicoUpsertWithWhereUniqueWithoutMedicoInput | RegistroMedicoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: RegistroMedicoCreateManyMedicoInputEnvelope
    set?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    disconnect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    delete?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    update?: RegistroMedicoUpdateWithWhereUniqueWithoutMedicoInput | RegistroMedicoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: RegistroMedicoUpdateManyWithWhereWithoutMedicoInput | RegistroMedicoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
  }

  export type HorarioMedicoUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<HorarioMedicoCreateWithoutMedicoInput, HorarioMedicoUncheckedCreateWithoutMedicoInput> | HorarioMedicoCreateWithoutMedicoInput[] | HorarioMedicoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HorarioMedicoCreateOrConnectWithoutMedicoInput | HorarioMedicoCreateOrConnectWithoutMedicoInput[]
    upsert?: HorarioMedicoUpsertWithWhereUniqueWithoutMedicoInput | HorarioMedicoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: HorarioMedicoCreateManyMedicoInputEnvelope
    set?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    disconnect?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    delete?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    connect?: HorarioMedicoWhereUniqueInput | HorarioMedicoWhereUniqueInput[]
    update?: HorarioMedicoUpdateWithWhereUniqueWithoutMedicoInput | HorarioMedicoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: HorarioMedicoUpdateManyWithWhereWithoutMedicoInput | HorarioMedicoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: HorarioMedicoScalarWhereInput | HorarioMedicoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPacienteInput = {
    create?: XOR<UserCreateWithoutPacienteInput, UserUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UserCreateOrConnectWithoutPacienteInput
    connect?: UserWhereUniqueInput
  }

  export type ConsultaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type RegistroMedicoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RegistroMedicoCreateWithoutPacienteInput, RegistroMedicoUncheckedCreateWithoutPacienteInput> | RegistroMedicoCreateWithoutPacienteInput[] | RegistroMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutPacienteInput | RegistroMedicoCreateOrConnectWithoutPacienteInput[]
    createMany?: RegistroMedicoCreateManyPacienteInputEnvelope
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type RegistroMedicoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RegistroMedicoCreateWithoutPacienteInput, RegistroMedicoUncheckedCreateWithoutPacienteInput> | RegistroMedicoCreateWithoutPacienteInput[] | RegistroMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutPacienteInput | RegistroMedicoCreateOrConnectWithoutPacienteInput[]
    createMany?: RegistroMedicoCreateManyPacienteInputEnvelope
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPacienteNestedInput = {
    create?: XOR<UserCreateWithoutPacienteInput, UserUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UserCreateOrConnectWithoutPacienteInput
    upsert?: UserUpsertWithoutPacienteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPacienteInput, UserUpdateWithoutPacienteInput>, UserUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type RegistroMedicoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RegistroMedicoCreateWithoutPacienteInput, RegistroMedicoUncheckedCreateWithoutPacienteInput> | RegistroMedicoCreateWithoutPacienteInput[] | RegistroMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutPacienteInput | RegistroMedicoCreateOrConnectWithoutPacienteInput[]
    upsert?: RegistroMedicoUpsertWithWhereUniqueWithoutPacienteInput | RegistroMedicoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RegistroMedicoCreateManyPacienteInputEnvelope
    set?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    disconnect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    delete?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    update?: RegistroMedicoUpdateWithWhereUniqueWithoutPacienteInput | RegistroMedicoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RegistroMedicoUpdateManyWithWhereWithoutPacienteInput | RegistroMedicoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type RegistroMedicoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RegistroMedicoCreateWithoutPacienteInput, RegistroMedicoUncheckedCreateWithoutPacienteInput> | RegistroMedicoCreateWithoutPacienteInput[] | RegistroMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutPacienteInput | RegistroMedicoCreateOrConnectWithoutPacienteInput[]
    upsert?: RegistroMedicoUpsertWithWhereUniqueWithoutPacienteInput | RegistroMedicoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RegistroMedicoCreateManyPacienteInputEnvelope
    set?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    disconnect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    delete?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    update?: RegistroMedicoUpdateWithWhereUniqueWithoutPacienteInput | RegistroMedicoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RegistroMedicoUpdateManyWithWhereWithoutPacienteInput | RegistroMedicoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecepcionistaInput = {
    create?: XOR<UserCreateWithoutRecepcionistaInput, UserUncheckedCreateWithoutRecepcionistaInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecepcionistaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecepcionistaNestedInput = {
    create?: XOR<UserCreateWithoutRecepcionistaInput, UserUncheckedCreateWithoutRecepcionistaInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecepcionistaInput
    upsert?: UserUpsertWithoutRecepcionistaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecepcionistaInput, UserUpdateWithoutRecepcionistaInput>, UserUncheckedUpdateWithoutRecepcionistaInput>
  }

  export type PacienteCreateNestedOneWithoutConsultasInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutConsultasInput = {
    create?: XOR<MedicoCreateWithoutConsultasInput, MedicoUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutConsultasInput
    connect?: MedicoWhereUniqueInput
  }

  export type HistoricoConsultaCreateNestedManyWithoutConsultaInput = {
    create?: XOR<HistoricoConsultaCreateWithoutConsultaInput, HistoricoConsultaUncheckedCreateWithoutConsultaInput> | HistoricoConsultaCreateWithoutConsultaInput[] | HistoricoConsultaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutConsultaInput | HistoricoConsultaCreateOrConnectWithoutConsultaInput[]
    createMany?: HistoricoConsultaCreateManyConsultaInputEnvelope
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
  }

  export type RegistroMedicoCreateNestedManyWithoutConsultaInput = {
    create?: XOR<RegistroMedicoCreateWithoutConsultaInput, RegistroMedicoUncheckedCreateWithoutConsultaInput> | RegistroMedicoCreateWithoutConsultaInput[] | RegistroMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutConsultaInput | RegistroMedicoCreateOrConnectWithoutConsultaInput[]
    createMany?: RegistroMedicoCreateManyConsultaInputEnvelope
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
  }

  export type HistoricoConsultaUncheckedCreateNestedManyWithoutConsultaInput = {
    create?: XOR<HistoricoConsultaCreateWithoutConsultaInput, HistoricoConsultaUncheckedCreateWithoutConsultaInput> | HistoricoConsultaCreateWithoutConsultaInput[] | HistoricoConsultaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutConsultaInput | HistoricoConsultaCreateOrConnectWithoutConsultaInput[]
    createMany?: HistoricoConsultaCreateManyConsultaInputEnvelope
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
  }

  export type RegistroMedicoUncheckedCreateNestedManyWithoutConsultaInput = {
    create?: XOR<RegistroMedicoCreateWithoutConsultaInput, RegistroMedicoUncheckedCreateWithoutConsultaInput> | RegistroMedicoCreateWithoutConsultaInput[] | RegistroMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutConsultaInput | RegistroMedicoCreateOrConnectWithoutConsultaInput[]
    createMany?: RegistroMedicoCreateManyConsultaInputEnvelope
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
  }

  export type EnumConsultaStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConsultaStatus
  }

  export type PacienteUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    upsert?: PacienteUpsertWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutConsultasInput, PacienteUpdateWithoutConsultasInput>, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type MedicoUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<MedicoCreateWithoutConsultasInput, MedicoUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutConsultasInput
    upsert?: MedicoUpsertWithoutConsultasInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutConsultasInput, MedicoUpdateWithoutConsultasInput>, MedicoUncheckedUpdateWithoutConsultasInput>
  }

  export type HistoricoConsultaUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<HistoricoConsultaCreateWithoutConsultaInput, HistoricoConsultaUncheckedCreateWithoutConsultaInput> | HistoricoConsultaCreateWithoutConsultaInput[] | HistoricoConsultaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutConsultaInput | HistoricoConsultaCreateOrConnectWithoutConsultaInput[]
    upsert?: HistoricoConsultaUpsertWithWhereUniqueWithoutConsultaInput | HistoricoConsultaUpsertWithWhereUniqueWithoutConsultaInput[]
    createMany?: HistoricoConsultaCreateManyConsultaInputEnvelope
    set?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    disconnect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    delete?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    update?: HistoricoConsultaUpdateWithWhereUniqueWithoutConsultaInput | HistoricoConsultaUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: HistoricoConsultaUpdateManyWithWhereWithoutConsultaInput | HistoricoConsultaUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: HistoricoConsultaScalarWhereInput | HistoricoConsultaScalarWhereInput[]
  }

  export type RegistroMedicoUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<RegistroMedicoCreateWithoutConsultaInput, RegistroMedicoUncheckedCreateWithoutConsultaInput> | RegistroMedicoCreateWithoutConsultaInput[] | RegistroMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutConsultaInput | RegistroMedicoCreateOrConnectWithoutConsultaInput[]
    upsert?: RegistroMedicoUpsertWithWhereUniqueWithoutConsultaInput | RegistroMedicoUpsertWithWhereUniqueWithoutConsultaInput[]
    createMany?: RegistroMedicoCreateManyConsultaInputEnvelope
    set?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    disconnect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    delete?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    update?: RegistroMedicoUpdateWithWhereUniqueWithoutConsultaInput | RegistroMedicoUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: RegistroMedicoUpdateManyWithWhereWithoutConsultaInput | RegistroMedicoUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
  }

  export type HistoricoConsultaUncheckedUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<HistoricoConsultaCreateWithoutConsultaInput, HistoricoConsultaUncheckedCreateWithoutConsultaInput> | HistoricoConsultaCreateWithoutConsultaInput[] | HistoricoConsultaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoConsultaCreateOrConnectWithoutConsultaInput | HistoricoConsultaCreateOrConnectWithoutConsultaInput[]
    upsert?: HistoricoConsultaUpsertWithWhereUniqueWithoutConsultaInput | HistoricoConsultaUpsertWithWhereUniqueWithoutConsultaInput[]
    createMany?: HistoricoConsultaCreateManyConsultaInputEnvelope
    set?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    disconnect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    delete?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    connect?: HistoricoConsultaWhereUniqueInput | HistoricoConsultaWhereUniqueInput[]
    update?: HistoricoConsultaUpdateWithWhereUniqueWithoutConsultaInput | HistoricoConsultaUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: HistoricoConsultaUpdateManyWithWhereWithoutConsultaInput | HistoricoConsultaUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: HistoricoConsultaScalarWhereInput | HistoricoConsultaScalarWhereInput[]
  }

  export type RegistroMedicoUncheckedUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<RegistroMedicoCreateWithoutConsultaInput, RegistroMedicoUncheckedCreateWithoutConsultaInput> | RegistroMedicoCreateWithoutConsultaInput[] | RegistroMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: RegistroMedicoCreateOrConnectWithoutConsultaInput | RegistroMedicoCreateOrConnectWithoutConsultaInput[]
    upsert?: RegistroMedicoUpsertWithWhereUniqueWithoutConsultaInput | RegistroMedicoUpsertWithWhereUniqueWithoutConsultaInput[]
    createMany?: RegistroMedicoCreateManyConsultaInputEnvelope
    set?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    disconnect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    delete?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    connect?: RegistroMedicoWhereUniqueInput | RegistroMedicoWhereUniqueInput[]
    update?: RegistroMedicoUpdateWithWhereUniqueWithoutConsultaInput | RegistroMedicoUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: RegistroMedicoUpdateManyWithWhereWithoutConsultaInput | RegistroMedicoUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
  }

  export type ConsultaCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<ConsultaCreateWithoutHistoricoInput, ConsultaUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutHistoricoInput
    connect?: ConsultaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoricoAcoesInput = {
    create?: XOR<UserCreateWithoutHistoricoAcoesInput, UserUncheckedCreateWithoutHistoricoAcoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricoAcoesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAcaoConsultaFieldUpdateOperationsInput = {
    set?: $Enums.AcaoConsulta
  }

  export type ConsultaUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<ConsultaCreateWithoutHistoricoInput, ConsultaUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutHistoricoInput
    upsert?: ConsultaUpsertWithoutHistoricoInput
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutHistoricoInput, ConsultaUpdateWithoutHistoricoInput>, ConsultaUncheckedUpdateWithoutHistoricoInput>
  }

  export type UserUpdateOneRequiredWithoutHistoricoAcoesNestedInput = {
    create?: XOR<UserCreateWithoutHistoricoAcoesInput, UserUncheckedCreateWithoutHistoricoAcoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricoAcoesInput
    upsert?: UserUpsertWithoutHistoricoAcoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoricoAcoesInput, UserUpdateWithoutHistoricoAcoesInput>, UserUncheckedUpdateWithoutHistoricoAcoesInput>
  }

  export type ConsultaCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<ConsultaCreateWithoutRegistrosInput, ConsultaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutRegistrosInput
    connect?: ConsultaWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<MedicoCreateWithoutRegistrosInput, MedicoUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutRegistrosInput
    connect?: MedicoWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<PacienteCreateWithoutRegistrosInput, PacienteUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRegistrosInput
    connect?: PacienteWhereUniqueInput
  }

  export type ConsultaUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<ConsultaCreateWithoutRegistrosInput, ConsultaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutRegistrosInput
    upsert?: ConsultaUpsertWithoutRegistrosInput
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutRegistrosInput, ConsultaUpdateWithoutRegistrosInput>, ConsultaUncheckedUpdateWithoutRegistrosInput>
  }

  export type MedicoUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<MedicoCreateWithoutRegistrosInput, MedicoUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutRegistrosInput
    upsert?: MedicoUpsertWithoutRegistrosInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutRegistrosInput, MedicoUpdateWithoutRegistrosInput>, MedicoUncheckedUpdateWithoutRegistrosInput>
  }

  export type PacienteUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<PacienteCreateWithoutRegistrosInput, PacienteUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRegistrosInput
    upsert?: PacienteUpsertWithoutRegistrosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutRegistrosInput, PacienteUpdateWithoutRegistrosInput>, PacienteUncheckedUpdateWithoutRegistrosInput>
  }

  export type MedicoCreateNestedOneWithoutHorariosInput = {
    create?: XOR<MedicoCreateWithoutHorariosInput, MedicoUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutHorariosInput
    connect?: MedicoWhereUniqueInput
  }

  export type EnumDiaSemanaFieldUpdateOperationsInput = {
    set?: $Enums.DiaSemana
  }

  export type MedicoUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<MedicoCreateWithoutHorariosInput, MedicoUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutHorariosInput
    upsert?: MedicoUpsertWithoutHorariosInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutHorariosInput, MedicoUpdateWithoutHorariosInput>, MedicoUncheckedUpdateWithoutHorariosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumConsultaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultaStatus | EnumConsultaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultaStatus[]
    notIn?: $Enums.ConsultaStatus[]
    not?: NestedEnumConsultaStatusFilter<$PrismaModel> | $Enums.ConsultaStatus
  }

  export type NestedEnumConsultaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultaStatus | EnumConsultaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultaStatus[]
    notIn?: $Enums.ConsultaStatus[]
    not?: NestedEnumConsultaStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultaStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultaStatusFilter<$PrismaModel>
  }

  export type NestedEnumAcaoConsultaFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoConsulta | EnumAcaoConsultaFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoConsulta[]
    notIn?: $Enums.AcaoConsulta[]
    not?: NestedEnumAcaoConsultaFilter<$PrismaModel> | $Enums.AcaoConsulta
  }

  export type NestedEnumAcaoConsultaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoConsulta | EnumAcaoConsultaFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoConsulta[]
    notIn?: $Enums.AcaoConsulta[]
    not?: NestedEnumAcaoConsultaWithAggregatesFilter<$PrismaModel> | $Enums.AcaoConsulta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoConsultaFilter<$PrismaModel>
    _max?: NestedEnumAcaoConsultaFilter<$PrismaModel>
  }

  export type NestedEnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[]
    notIn?: $Enums.DiaSemana[]
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[]
    notIn?: $Enums.DiaSemana[]
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
  }

  export type MedicoCreateWithoutUserInput = {
    specialty: string
    consultas?: ConsultaCreateNestedManyWithoutMedicoInput
    registros?: RegistroMedicoCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutUserInput = {
    specialty: string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutMedicoInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutUserInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutUserInput, MedicoUncheckedCreateWithoutUserInput>
  }

  export type PacienteCreateWithoutUserInput = {
    history?: string | null
    allergies?: string | null
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
    registros?: RegistroMedicoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutUserInput = {
    history?: string | null
    allergies?: string | null
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutUserInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutUserInput, PacienteUncheckedCreateWithoutUserInput>
  }

  export type RecepcionistaCreateWithoutUserInput = {

  }

  export type RecepcionistaUncheckedCreateWithoutUserInput = {

  }

  export type RecepcionistaCreateOrConnectWithoutUserInput = {
    where: RecepcionistaWhereUniqueInput
    create: XOR<RecepcionistaCreateWithoutUserInput, RecepcionistaUncheckedCreateWithoutUserInput>
  }

  export type HistoricoConsultaCreateWithoutRealizadoPorInput = {
    acao: $Enums.AcaoConsulta
    data_acao: Date | string
    observacao?: string | null
    consulta: ConsultaCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput = {
    id?: number
    consulta_id: number
    acao: $Enums.AcaoConsulta
    data_acao: Date | string
    observacao?: string | null
  }

  export type HistoricoConsultaCreateOrConnectWithoutRealizadoPorInput = {
    where: HistoricoConsultaWhereUniqueInput
    create: XOR<HistoricoConsultaCreateWithoutRealizadoPorInput, HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput>
  }

  export type HistoricoConsultaCreateManyRealizadoPorInputEnvelope = {
    data: HistoricoConsultaCreateManyRealizadoPorInput | HistoricoConsultaCreateManyRealizadoPorInput[]
    skipDuplicates?: boolean
  }

  export type MedicoUpsertWithoutUserInput = {
    update: XOR<MedicoUpdateWithoutUserInput, MedicoUncheckedUpdateWithoutUserInput>
    create: XOR<MedicoCreateWithoutUserInput, MedicoUncheckedCreateWithoutUserInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutUserInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutUserInput, MedicoUncheckedUpdateWithoutUserInput>
  }

  export type MedicoUpdateWithoutUserInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUpdateManyWithoutMedicoNestedInput
    registros?: RegistroMedicoUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutUserInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUncheckedUpdateManyWithoutMedicoNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type PacienteUpsertWithoutUserInput = {
    update: XOR<PacienteUpdateWithoutUserInput, PacienteUncheckedUpdateWithoutUserInput>
    create: XOR<PacienteCreateWithoutUserInput, PacienteUncheckedCreateWithoutUserInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutUserInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutUserInput, PacienteUncheckedUpdateWithoutUserInput>
  }

  export type PacienteUpdateWithoutUserInput = {
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
    registros?: RegistroMedicoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutUserInput = {
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type RecepcionistaUpsertWithoutUserInput = {
    update: XOR<RecepcionistaUpdateWithoutUserInput, RecepcionistaUncheckedUpdateWithoutUserInput>
    create: XOR<RecepcionistaCreateWithoutUserInput, RecepcionistaUncheckedCreateWithoutUserInput>
    where?: RecepcionistaWhereInput
  }

  export type RecepcionistaUpdateToOneWithWhereWithoutUserInput = {
    where?: RecepcionistaWhereInput
    data: XOR<RecepcionistaUpdateWithoutUserInput, RecepcionistaUncheckedUpdateWithoutUserInput>
  }

  export type RecepcionistaUpdateWithoutUserInput = {

  }

  export type RecepcionistaUncheckedUpdateWithoutUserInput = {

  }

  export type HistoricoConsultaUpsertWithWhereUniqueWithoutRealizadoPorInput = {
    where: HistoricoConsultaWhereUniqueInput
    update: XOR<HistoricoConsultaUpdateWithoutRealizadoPorInput, HistoricoConsultaUncheckedUpdateWithoutRealizadoPorInput>
    create: XOR<HistoricoConsultaCreateWithoutRealizadoPorInput, HistoricoConsultaUncheckedCreateWithoutRealizadoPorInput>
  }

  export type HistoricoConsultaUpdateWithWhereUniqueWithoutRealizadoPorInput = {
    where: HistoricoConsultaWhereUniqueInput
    data: XOR<HistoricoConsultaUpdateWithoutRealizadoPorInput, HistoricoConsultaUncheckedUpdateWithoutRealizadoPorInput>
  }

  export type HistoricoConsultaUpdateManyWithWhereWithoutRealizadoPorInput = {
    where: HistoricoConsultaScalarWhereInput
    data: XOR<HistoricoConsultaUpdateManyMutationInput, HistoricoConsultaUncheckedUpdateManyWithoutRealizadoPorInput>
  }

  export type HistoricoConsultaScalarWhereInput = {
    AND?: HistoricoConsultaScalarWhereInput | HistoricoConsultaScalarWhereInput[]
    OR?: HistoricoConsultaScalarWhereInput[]
    NOT?: HistoricoConsultaScalarWhereInput | HistoricoConsultaScalarWhereInput[]
    id?: IntFilter<"HistoricoConsulta"> | number
    consulta_id?: IntFilter<"HistoricoConsulta"> | number
    acao?: EnumAcaoConsultaFilter<"HistoricoConsulta"> | $Enums.AcaoConsulta
    realizado_por?: IntFilter<"HistoricoConsulta"> | number
    data_acao?: DateTimeFilter<"HistoricoConsulta"> | Date | string
    observacao?: StringNullableFilter<"HistoricoConsulta"> | string | null
  }

  export type UserCreateWithoutMedicoInput = {
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Paciente?: PacienteCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserUncheckedCreateWithoutMedicoInput = {
    id?: number
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Paciente?: PacienteUncheckedCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaUncheckedCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaUncheckedCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserCreateOrConnectWithoutMedicoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicoInput, UserUncheckedCreateWithoutMedicoInput>
  }

  export type ConsultaCreateWithoutMedicoInput = {
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    historico?: HistoricoConsultaCreateNestedManyWithoutConsultaInput
    registros?: RegistroMedicoCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutMedicoInput = {
    id?: number
    paciente_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    historico?: HistoricoConsultaUncheckedCreateNestedManyWithoutConsultaInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutMedicoInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutMedicoInput, ConsultaUncheckedCreateWithoutMedicoInput>
  }

  export type ConsultaCreateManyMedicoInputEnvelope = {
    data: ConsultaCreateManyMedicoInput | ConsultaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type RegistroMedicoCreateWithoutMedicoInput = {
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
    consulta: ConsultaCreateNestedOneWithoutRegistrosInput
    paciente: PacienteCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroMedicoUncheckedCreateWithoutMedicoInput = {
    id?: number
    consulta_id: number
    paciente_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type RegistroMedicoCreateOrConnectWithoutMedicoInput = {
    where: RegistroMedicoWhereUniqueInput
    create: XOR<RegistroMedicoCreateWithoutMedicoInput, RegistroMedicoUncheckedCreateWithoutMedicoInput>
  }

  export type RegistroMedicoCreateManyMedicoInputEnvelope = {
    data: RegistroMedicoCreateManyMedicoInput | RegistroMedicoCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type HorarioMedicoCreateWithoutMedicoInput = {
    day_of_week: $Enums.DiaSemana
    start_time: Date | string
    end_time: Date | string
  }

  export type HorarioMedicoUncheckedCreateWithoutMedicoInput = {
    id?: number
    day_of_week: $Enums.DiaSemana
    start_time: Date | string
    end_time: Date | string
  }

  export type HorarioMedicoCreateOrConnectWithoutMedicoInput = {
    where: HorarioMedicoWhereUniqueInput
    create: XOR<HorarioMedicoCreateWithoutMedicoInput, HorarioMedicoUncheckedCreateWithoutMedicoInput>
  }

  export type HorarioMedicoCreateManyMedicoInputEnvelope = {
    data: HorarioMedicoCreateManyMedicoInput | HorarioMedicoCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMedicoInput = {
    update: XOR<UserUpdateWithoutMedicoInput, UserUncheckedUpdateWithoutMedicoInput>
    create: XOR<UserCreateWithoutMedicoInput, UserUncheckedCreateWithoutMedicoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicoInput, UserUncheckedUpdateWithoutMedicoInput>
  }

  export type UserUpdateWithoutMedicoInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paciente?: PacienteUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUpdateManyWithoutRealizadoPorNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paciente?: PacienteUncheckedUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUncheckedUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUncheckedUpdateManyWithoutRealizadoPorNestedInput
  }

  export type ConsultaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutMedicoInput, ConsultaUncheckedUpdateWithoutMedicoInput>
    create: XOR<ConsultaCreateWithoutMedicoInput, ConsultaUncheckedCreateWithoutMedicoInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutMedicoInput, ConsultaUncheckedUpdateWithoutMedicoInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutMedicoInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: IntFilter<"Consulta"> | number
    paciente_id?: IntFilter<"Consulta"> | number
    medico_id?: IntFilter<"Consulta"> | number
    date_time?: DateTimeFilter<"Consulta"> | Date | string
    status?: EnumConsultaStatusFilter<"Consulta"> | $Enums.ConsultaStatus
    description?: StringNullableFilter<"Consulta"> | string | null
    created_at?: DateTimeFilter<"Consulta"> | Date | string
    updated_at?: DateTimeFilter<"Consulta"> | Date | string
  }

  export type RegistroMedicoUpsertWithWhereUniqueWithoutMedicoInput = {
    where: RegistroMedicoWhereUniqueInput
    update: XOR<RegistroMedicoUpdateWithoutMedicoInput, RegistroMedicoUncheckedUpdateWithoutMedicoInput>
    create: XOR<RegistroMedicoCreateWithoutMedicoInput, RegistroMedicoUncheckedCreateWithoutMedicoInput>
  }

  export type RegistroMedicoUpdateWithWhereUniqueWithoutMedicoInput = {
    where: RegistroMedicoWhereUniqueInput
    data: XOR<RegistroMedicoUpdateWithoutMedicoInput, RegistroMedicoUncheckedUpdateWithoutMedicoInput>
  }

  export type RegistroMedicoUpdateManyWithWhereWithoutMedicoInput = {
    where: RegistroMedicoScalarWhereInput
    data: XOR<RegistroMedicoUpdateManyMutationInput, RegistroMedicoUncheckedUpdateManyWithoutMedicoInput>
  }

  export type RegistroMedicoScalarWhereInput = {
    AND?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
    OR?: RegistroMedicoScalarWhereInput[]
    NOT?: RegistroMedicoScalarWhereInput | RegistroMedicoScalarWhereInput[]
    id?: IntFilter<"RegistroMedico"> | number
    consulta_id?: IntFilter<"RegistroMedico"> | number
    medico_id?: IntFilter<"RegistroMedico"> | number
    paciente_id?: IntFilter<"RegistroMedico"> | number
    observacoes?: StringNullableFilter<"RegistroMedico"> | string | null
    diagnostico?: StringNullableFilter<"RegistroMedico"> | string | null
    tratamento?: StringNullableFilter<"RegistroMedico"> | string | null
    created_at?: DateTimeFilter<"RegistroMedico"> | Date | string
  }

  export type HorarioMedicoUpsertWithWhereUniqueWithoutMedicoInput = {
    where: HorarioMedicoWhereUniqueInput
    update: XOR<HorarioMedicoUpdateWithoutMedicoInput, HorarioMedicoUncheckedUpdateWithoutMedicoInput>
    create: XOR<HorarioMedicoCreateWithoutMedicoInput, HorarioMedicoUncheckedCreateWithoutMedicoInput>
  }

  export type HorarioMedicoUpdateWithWhereUniqueWithoutMedicoInput = {
    where: HorarioMedicoWhereUniqueInput
    data: XOR<HorarioMedicoUpdateWithoutMedicoInput, HorarioMedicoUncheckedUpdateWithoutMedicoInput>
  }

  export type HorarioMedicoUpdateManyWithWhereWithoutMedicoInput = {
    where: HorarioMedicoScalarWhereInput
    data: XOR<HorarioMedicoUpdateManyMutationInput, HorarioMedicoUncheckedUpdateManyWithoutMedicoInput>
  }

  export type HorarioMedicoScalarWhereInput = {
    AND?: HorarioMedicoScalarWhereInput | HorarioMedicoScalarWhereInput[]
    OR?: HorarioMedicoScalarWhereInput[]
    NOT?: HorarioMedicoScalarWhereInput | HorarioMedicoScalarWhereInput[]
    id?: IntFilter<"HorarioMedico"> | number
    medico_id?: IntFilter<"HorarioMedico"> | number
    day_of_week?: EnumDiaSemanaFilter<"HorarioMedico"> | $Enums.DiaSemana
    start_time?: DateTimeFilter<"HorarioMedico"> | Date | string
    end_time?: DateTimeFilter<"HorarioMedico"> | Date | string
  }

  export type UserCreateWithoutPacienteInput = {
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserUncheckedCreateWithoutPacienteInput = {
    id?: number
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoUncheckedCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaUncheckedCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaUncheckedCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserCreateOrConnectWithoutPacienteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPacienteInput, UserUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaCreateWithoutPacienteInput = {
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    medico: MedicoCreateNestedOneWithoutConsultasInput
    historico?: HistoricoConsultaCreateNestedManyWithoutConsultaInput
    registros?: RegistroMedicoCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutPacienteInput = {
    id?: number
    medico_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    historico?: HistoricoConsultaUncheckedCreateNestedManyWithoutConsultaInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaCreateManyPacienteInputEnvelope = {
    data: ConsultaCreateManyPacienteInput | ConsultaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type RegistroMedicoCreateWithoutPacienteInput = {
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
    consulta: ConsultaCreateNestedOneWithoutRegistrosInput
    medico: MedicoCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroMedicoUncheckedCreateWithoutPacienteInput = {
    id?: number
    consulta_id: number
    medico_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type RegistroMedicoCreateOrConnectWithoutPacienteInput = {
    where: RegistroMedicoWhereUniqueInput
    create: XOR<RegistroMedicoCreateWithoutPacienteInput, RegistroMedicoUncheckedCreateWithoutPacienteInput>
  }

  export type RegistroMedicoCreateManyPacienteInputEnvelope = {
    data: RegistroMedicoCreateManyPacienteInput | RegistroMedicoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPacienteInput = {
    update: XOR<UserUpdateWithoutPacienteInput, UserUncheckedUpdateWithoutPacienteInput>
    create: XOR<UserCreateWithoutPacienteInput, UserUncheckedCreateWithoutPacienteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPacienteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPacienteInput, UserUncheckedUpdateWithoutPacienteInput>
  }

  export type UserUpdateWithoutPacienteInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUpdateManyWithoutRealizadoPorNestedInput
  }

  export type UserUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUncheckedUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUncheckedUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUncheckedUpdateManyWithoutRealizadoPorNestedInput
  }

  export type ConsultaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutPacienteInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type RegistroMedicoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: RegistroMedicoWhereUniqueInput
    update: XOR<RegistroMedicoUpdateWithoutPacienteInput, RegistroMedicoUncheckedUpdateWithoutPacienteInput>
    create: XOR<RegistroMedicoCreateWithoutPacienteInput, RegistroMedicoUncheckedCreateWithoutPacienteInput>
  }

  export type RegistroMedicoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: RegistroMedicoWhereUniqueInput
    data: XOR<RegistroMedicoUpdateWithoutPacienteInput, RegistroMedicoUncheckedUpdateWithoutPacienteInput>
  }

  export type RegistroMedicoUpdateManyWithWhereWithoutPacienteInput = {
    where: RegistroMedicoScalarWhereInput
    data: XOR<RegistroMedicoUpdateManyMutationInput, RegistroMedicoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type UserCreateWithoutRecepcionistaInput = {
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoCreateNestedOneWithoutUserInput
    Paciente?: PacienteCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserUncheckedCreateWithoutRecepcionistaInput = {
    id?: number
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoUncheckedCreateNestedOneWithoutUserInput
    Paciente?: PacienteUncheckedCreateNestedOneWithoutUserInput
    historicoAcoes?: HistoricoConsultaUncheckedCreateNestedManyWithoutRealizadoPorInput
  }

  export type UserCreateOrConnectWithoutRecepcionistaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecepcionistaInput, UserUncheckedCreateWithoutRecepcionistaInput>
  }

  export type UserUpsertWithoutRecepcionistaInput = {
    update: XOR<UserUpdateWithoutRecepcionistaInput, UserUncheckedUpdateWithoutRecepcionistaInput>
    create: XOR<UserCreateWithoutRecepcionistaInput, UserUncheckedCreateWithoutRecepcionistaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecepcionistaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecepcionistaInput, UserUncheckedUpdateWithoutRecepcionistaInput>
  }

  export type UserUpdateWithoutRecepcionistaInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUpdateOneWithoutUserNestedInput
    Paciente?: PacienteUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUpdateManyWithoutRealizadoPorNestedInput
  }

  export type UserUncheckedUpdateWithoutRecepcionistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUncheckedUpdateOneWithoutUserNestedInput
    Paciente?: PacienteUncheckedUpdateOneWithoutUserNestedInput
    historicoAcoes?: HistoricoConsultaUncheckedUpdateManyWithoutRealizadoPorNestedInput
  }

  export type PacienteCreateWithoutConsultasInput = {
    history?: string | null
    allergies?: string | null
    user: UserCreateNestedOneWithoutPacienteInput
    registros?: RegistroMedicoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutConsultasInput = {
    id: number
    history?: string | null
    allergies?: string | null
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutConsultasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
  }

  export type MedicoCreateWithoutConsultasInput = {
    specialty: string
    user: UserCreateNestedOneWithoutMedicoInput
    registros?: RegistroMedicoCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutConsultasInput = {
    id: number
    specialty: string
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutConsultasInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutConsultasInput, MedicoUncheckedCreateWithoutConsultasInput>
  }

  export type HistoricoConsultaCreateWithoutConsultaInput = {
    acao: $Enums.AcaoConsulta
    data_acao: Date | string
    observacao?: string | null
    realizadoPor: UserCreateNestedOneWithoutHistoricoAcoesInput
  }

  export type HistoricoConsultaUncheckedCreateWithoutConsultaInput = {
    id?: number
    acao: $Enums.AcaoConsulta
    realizado_por: number
    data_acao: Date | string
    observacao?: string | null
  }

  export type HistoricoConsultaCreateOrConnectWithoutConsultaInput = {
    where: HistoricoConsultaWhereUniqueInput
    create: XOR<HistoricoConsultaCreateWithoutConsultaInput, HistoricoConsultaUncheckedCreateWithoutConsultaInput>
  }

  export type HistoricoConsultaCreateManyConsultaInputEnvelope = {
    data: HistoricoConsultaCreateManyConsultaInput | HistoricoConsultaCreateManyConsultaInput[]
    skipDuplicates?: boolean
  }

  export type RegistroMedicoCreateWithoutConsultaInput = {
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
    medico: MedicoCreateNestedOneWithoutRegistrosInput
    paciente: PacienteCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroMedicoUncheckedCreateWithoutConsultaInput = {
    id?: number
    medico_id: number
    paciente_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type RegistroMedicoCreateOrConnectWithoutConsultaInput = {
    where: RegistroMedicoWhereUniqueInput
    create: XOR<RegistroMedicoCreateWithoutConsultaInput, RegistroMedicoUncheckedCreateWithoutConsultaInput>
  }

  export type RegistroMedicoCreateManyConsultaInputEnvelope = {
    data: RegistroMedicoCreateManyConsultaInput | RegistroMedicoCreateManyConsultaInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithoutConsultasInput = {
    update: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutConsultasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type PacienteUpdateWithoutConsultasInput = {
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPacienteNestedInput
    registros?: RegistroMedicoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    registros?: RegistroMedicoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type MedicoUpsertWithoutConsultasInput = {
    update: XOR<MedicoUpdateWithoutConsultasInput, MedicoUncheckedUpdateWithoutConsultasInput>
    create: XOR<MedicoCreateWithoutConsultasInput, MedicoUncheckedCreateWithoutConsultasInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutConsultasInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutConsultasInput, MedicoUncheckedUpdateWithoutConsultasInput>
  }

  export type MedicoUpdateWithoutConsultasInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedicoNestedInput
    registros?: RegistroMedicoUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    registros?: RegistroMedicoUncheckedUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type HistoricoConsultaUpsertWithWhereUniqueWithoutConsultaInput = {
    where: HistoricoConsultaWhereUniqueInput
    update: XOR<HistoricoConsultaUpdateWithoutConsultaInput, HistoricoConsultaUncheckedUpdateWithoutConsultaInput>
    create: XOR<HistoricoConsultaCreateWithoutConsultaInput, HistoricoConsultaUncheckedCreateWithoutConsultaInput>
  }

  export type HistoricoConsultaUpdateWithWhereUniqueWithoutConsultaInput = {
    where: HistoricoConsultaWhereUniqueInput
    data: XOR<HistoricoConsultaUpdateWithoutConsultaInput, HistoricoConsultaUncheckedUpdateWithoutConsultaInput>
  }

  export type HistoricoConsultaUpdateManyWithWhereWithoutConsultaInput = {
    where: HistoricoConsultaScalarWhereInput
    data: XOR<HistoricoConsultaUpdateManyMutationInput, HistoricoConsultaUncheckedUpdateManyWithoutConsultaInput>
  }

  export type RegistroMedicoUpsertWithWhereUniqueWithoutConsultaInput = {
    where: RegistroMedicoWhereUniqueInput
    update: XOR<RegistroMedicoUpdateWithoutConsultaInput, RegistroMedicoUncheckedUpdateWithoutConsultaInput>
    create: XOR<RegistroMedicoCreateWithoutConsultaInput, RegistroMedicoUncheckedCreateWithoutConsultaInput>
  }

  export type RegistroMedicoUpdateWithWhereUniqueWithoutConsultaInput = {
    where: RegistroMedicoWhereUniqueInput
    data: XOR<RegistroMedicoUpdateWithoutConsultaInput, RegistroMedicoUncheckedUpdateWithoutConsultaInput>
  }

  export type RegistroMedicoUpdateManyWithWhereWithoutConsultaInput = {
    where: RegistroMedicoScalarWhereInput
    data: XOR<RegistroMedicoUpdateManyMutationInput, RegistroMedicoUncheckedUpdateManyWithoutConsultaInput>
  }

  export type ConsultaCreateWithoutHistoricoInput = {
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    medico: MedicoCreateNestedOneWithoutConsultasInput
    registros?: RegistroMedicoCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutHistoricoInput = {
    id?: number
    paciente_id: number
    medico_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutHistoricoInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutHistoricoInput, ConsultaUncheckedCreateWithoutHistoricoInput>
  }

  export type UserCreateWithoutHistoricoAcoesInput = {
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoCreateNestedOneWithoutUserInput
    Paciente?: PacienteCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoricoAcoesInput = {
    id?: number
    name: string
    document: string
    birthdate: Date | string
    phone?: string | null
    postal_code: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    Medico?: MedicoUncheckedCreateNestedOneWithoutUserInput
    Paciente?: PacienteUncheckedCreateNestedOneWithoutUserInput
    Recepcionista?: RecepcionistaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoricoAcoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoricoAcoesInput, UserUncheckedCreateWithoutHistoricoAcoesInput>
  }

  export type ConsultaUpsertWithoutHistoricoInput = {
    update: XOR<ConsultaUpdateWithoutHistoricoInput, ConsultaUncheckedUpdateWithoutHistoricoInput>
    create: XOR<ConsultaCreateWithoutHistoricoInput, ConsultaUncheckedCreateWithoutHistoricoInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutHistoricoInput, ConsultaUncheckedUpdateWithoutHistoricoInput>
  }

  export type ConsultaUpdateWithoutHistoricoInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutConsultasNestedInput
    registros?: RegistroMedicoUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroMedicoUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type UserUpsertWithoutHistoricoAcoesInput = {
    update: XOR<UserUpdateWithoutHistoricoAcoesInput, UserUncheckedUpdateWithoutHistoricoAcoesInput>
    create: XOR<UserCreateWithoutHistoricoAcoesInput, UserUncheckedCreateWithoutHistoricoAcoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoricoAcoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoricoAcoesInput, UserUncheckedUpdateWithoutHistoricoAcoesInput>
  }

  export type UserUpdateWithoutHistoricoAcoesInput = {
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUpdateOneWithoutUserNestedInput
    Paciente?: PacienteUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoricoAcoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Medico?: MedicoUncheckedUpdateOneWithoutUserNestedInput
    Paciente?: PacienteUncheckedUpdateOneWithoutUserNestedInput
    Recepcionista?: RecepcionistaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ConsultaCreateWithoutRegistrosInput = {
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    medico: MedicoCreateNestedOneWithoutConsultasInput
    historico?: HistoricoConsultaCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutRegistrosInput = {
    id?: number
    paciente_id: number
    medico_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    historico?: HistoricoConsultaUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutRegistrosInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutRegistrosInput, ConsultaUncheckedCreateWithoutRegistrosInput>
  }

  export type MedicoCreateWithoutRegistrosInput = {
    specialty: string
    user: UserCreateNestedOneWithoutMedicoInput
    consultas?: ConsultaCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutRegistrosInput = {
    id: number
    specialty: string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutMedicoInput
    horarios?: HorarioMedicoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutRegistrosInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutRegistrosInput, MedicoUncheckedCreateWithoutRegistrosInput>
  }

  export type PacienteCreateWithoutRegistrosInput = {
    history?: string | null
    allergies?: string | null
    user: UserCreateNestedOneWithoutPacienteInput
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutRegistrosInput = {
    id: number
    history?: string | null
    allergies?: string | null
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutRegistrosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutRegistrosInput, PacienteUncheckedCreateWithoutRegistrosInput>
  }

  export type ConsultaUpsertWithoutRegistrosInput = {
    update: XOR<ConsultaUpdateWithoutRegistrosInput, ConsultaUncheckedUpdateWithoutRegistrosInput>
    create: XOR<ConsultaCreateWithoutRegistrosInput, ConsultaUncheckedCreateWithoutRegistrosInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutRegistrosInput, ConsultaUncheckedUpdateWithoutRegistrosInput>
  }

  export type ConsultaUpdateWithoutRegistrosInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutConsultasNestedInput
    historico?: HistoricoConsultaUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutRegistrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoConsultaUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type MedicoUpsertWithoutRegistrosInput = {
    update: XOR<MedicoUpdateWithoutRegistrosInput, MedicoUncheckedUpdateWithoutRegistrosInput>
    create: XOR<MedicoCreateWithoutRegistrosInput, MedicoUncheckedCreateWithoutRegistrosInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutRegistrosInput, MedicoUncheckedUpdateWithoutRegistrosInput>
  }

  export type MedicoUpdateWithoutRegistrosInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedicoNestedInput
    consultas?: ConsultaUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutRegistrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUncheckedUpdateManyWithoutMedicoNestedInput
    horarios?: HorarioMedicoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type PacienteUpsertWithoutRegistrosInput = {
    update: XOR<PacienteUpdateWithoutRegistrosInput, PacienteUncheckedUpdateWithoutRegistrosInput>
    create: XOR<PacienteCreateWithoutRegistrosInput, PacienteUncheckedCreateWithoutRegistrosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutRegistrosInput, PacienteUncheckedUpdateWithoutRegistrosInput>
  }

  export type PacienteUpdateWithoutRegistrosInput = {
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPacienteNestedInput
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutRegistrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    history?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type MedicoCreateWithoutHorariosInput = {
    specialty: string
    user: UserCreateNestedOneWithoutMedicoInput
    consultas?: ConsultaCreateNestedManyWithoutMedicoInput
    registros?: RegistroMedicoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutHorariosInput = {
    id: number
    specialty: string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutMedicoInput
    registros?: RegistroMedicoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutHorariosInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutHorariosInput, MedicoUncheckedCreateWithoutHorariosInput>
  }

  export type MedicoUpsertWithoutHorariosInput = {
    update: XOR<MedicoUpdateWithoutHorariosInput, MedicoUncheckedUpdateWithoutHorariosInput>
    create: XOR<MedicoCreateWithoutHorariosInput, MedicoUncheckedCreateWithoutHorariosInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutHorariosInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutHorariosInput, MedicoUncheckedUpdateWithoutHorariosInput>
  }

  export type MedicoUpdateWithoutHorariosInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedicoNestedInput
    consultas?: ConsultaUpdateManyWithoutMedicoNestedInput
    registros?: RegistroMedicoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutHorariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUncheckedUpdateManyWithoutMedicoNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type HistoricoConsultaCreateManyRealizadoPorInput = {
    id?: number
    consulta_id: number
    acao: $Enums.AcaoConsulta
    data_acao: Date | string
    observacao?: string | null
  }

  export type HistoricoConsultaUpdateWithoutRealizadoPorInput = {
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    consulta?: ConsultaUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoConsultaUncheckedUpdateWithoutRealizadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoConsultaUncheckedUpdateManyWithoutRealizadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultaCreateManyMedicoInput = {
    id?: number
    paciente_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistroMedicoCreateManyMedicoInput = {
    id?: number
    consulta_id: number
    paciente_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type HorarioMedicoCreateManyMedicoInput = {
    id?: number
    day_of_week: $Enums.DiaSemana
    start_time: Date | string
    end_time: Date | string
  }

  export type ConsultaUpdateWithoutMedicoInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    historico?: HistoricoConsultaUpdateManyWithoutConsultaNestedInput
    registros?: RegistroMedicoUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoConsultaUncheckedUpdateManyWithoutConsultaNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroMedicoUpdateWithoutMedicoInput = {
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneRequiredWithoutRegistrosNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroMedicoUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroMedicoUncheckedUpdateManyWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioMedicoUpdateWithoutMedicoInput = {
    day_of_week?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioMedicoUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_of_week?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioMedicoUncheckedUpdateManyWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_of_week?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateManyPacienteInput = {
    id?: number
    medico_id: number
    date_time: Date | string
    status: $Enums.ConsultaStatus
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistroMedicoCreateManyPacienteInput = {
    id?: number
    consulta_id: number
    medico_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type ConsultaUpdateWithoutPacienteInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutConsultasNestedInput
    historico?: HistoricoConsultaUpdateManyWithoutConsultaNestedInput
    registros?: RegistroMedicoUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoConsultaUncheckedUpdateManyWithoutConsultaNestedInput
    registros?: RegistroMedicoUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultaStatusFieldUpdateOperationsInput | $Enums.ConsultaStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroMedicoUpdateWithoutPacienteInput = {
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneRequiredWithoutRegistrosNestedInput
    medico?: MedicoUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroMedicoUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroMedicoUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    consulta_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoConsultaCreateManyConsultaInput = {
    id?: number
    acao: $Enums.AcaoConsulta
    realizado_por: number
    data_acao: Date | string
    observacao?: string | null
  }

  export type RegistroMedicoCreateManyConsultaInput = {
    id?: number
    medico_id: number
    paciente_id: number
    observacoes?: string | null
    diagnostico?: string | null
    tratamento?: string | null
    created_at?: Date | string
  }

  export type HistoricoConsultaUpdateWithoutConsultaInput = {
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    realizadoPor?: UserUpdateOneRequiredWithoutHistoricoAcoesNestedInput
  }

  export type HistoricoConsultaUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    realizado_por?: IntFieldUpdateOperationsInput | number
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoConsultaUncheckedUpdateManyWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: EnumAcaoConsultaFieldUpdateOperationsInput | $Enums.AcaoConsulta
    realizado_por?: IntFieldUpdateOperationsInput | number
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroMedicoUpdateWithoutConsultaInput = {
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutRegistrosNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroMedicoUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroMedicoUncheckedUpdateManyWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamento?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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