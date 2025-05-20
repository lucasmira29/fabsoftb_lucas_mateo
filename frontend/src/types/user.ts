
export type User = {
  name: string;
  email: string;
  password: string;
  document: string;
  birthdate: Date;
  phone?: string;
  postal_code: string;
  specialty?: string;
}

export type Role = 'admin' | 'medico' | 'recepcionista' | 'paciente';
