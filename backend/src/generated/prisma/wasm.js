
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.MedicoScalarFieldEnum = {
  id: 'id',
  specialty: 'specialty'
};

exports.Prisma.PacienteScalarFieldEnum = {
  id: 'id',
  history: 'history',
  allergies: 'allergies'
};

exports.Prisma.RecepcionistaScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.ConsultaScalarFieldEnum = {
  id: 'id',
  paciente_id: 'paciente_id',
  medico_id: 'medico_id',
  date_time: 'date_time',
  status: 'status',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.HistoricoConsultaScalarFieldEnum = {
  id: 'id',
  consulta_id: 'consulta_id',
  acao: 'acao',
  realizado_por: 'realizado_por',
  data_acao: 'data_acao',
  observacao: 'observacao'
};

exports.Prisma.RegistroMedicoScalarFieldEnum = {
  id: 'id',
  consulta_id: 'consulta_id',
  medico_id: 'medico_id',
  paciente_id: 'paciente_id',
  observacoes: 'observacoes',
  diagnostico: 'diagnostico',
  tratamento: 'tratamento',
  created_at: 'created_at'
};

exports.Prisma.HorarioMedicoScalarFieldEnum = {
  id: 'id',
  medico_id: 'medico_id',
  day_of_week: 'day_of_week',
  start_time: 'start_time',
  end_time: 'end_time'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  name: 'name',
  document: 'document',
  phone: 'phone',
  postal_code: 'postal_code',
  email: 'email',
  password: 'password'
};

exports.Prisma.MedicoOrderByRelevanceFieldEnum = {
  specialty: 'specialty'
};

exports.Prisma.PacienteOrderByRelevanceFieldEnum = {
  history: 'history',
  allergies: 'allergies'
};

exports.Prisma.ConsultaOrderByRelevanceFieldEnum = {
  description: 'description'
};

exports.Prisma.HistoricoConsultaOrderByRelevanceFieldEnum = {
  observacao: 'observacao'
};

exports.Prisma.RegistroMedicoOrderByRelevanceFieldEnum = {
  observacoes: 'observacoes',
  diagnostico: 'diagnostico',
  tratamento: 'tratamento'
};
exports.Role = exports.$Enums.Role = {
  admin: 'admin',
  medico: 'medico',
  recepcionista: 'recepcionista',
  paciente: 'paciente'
};

exports.ConsultaStatus = exports.$Enums.ConsultaStatus = {
  agendado: 'agendado',
  cancelado: 'cancelado',
  realizado: 'realizado'
};

exports.AcaoConsulta = exports.$Enums.AcaoConsulta = {
  agendado: 'agendado',
  cancelado: 'cancelado',
  reagendado: 'reagendado'
};

exports.DiaSemana = exports.$Enums.DiaSemana = {
  domingo: 'domingo',
  segunda: 'segunda',
  terca: 'terca',
  quarta: 'quarta',
  quinta: 'quinta',
  sexta: 'sexta',
  sabado: 'sabado'
};

exports.Prisma.ModelName = {
  User: 'User',
  Medico: 'Medico',
  Paciente: 'Paciente',
  Recepcionista: 'Recepcionista',
  Consulta: 'Consulta',
  HistoricoConsulta: 'HistoricoConsulta',
  RegistroMedico: 'RegistroMedico',
  HorarioMedico: 'HorarioMedico'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
