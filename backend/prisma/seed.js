import { PrismaClient } from '../src/generated/prisma/index.js';
import { hashPassword } from '../src/utils/hash.js';

const prisma = new PrismaClient();


async function main() {
  const senhaPadrao = '123456';

  const adminPassword = await hashPassword(senhaPadrao);
  const medicoPassword = await hashPassword(senhaPadrao);
  const recepPassword = await hashPassword(senhaPadrao);

  await prisma.user.create({
    data: {
      name: 'Lucas Pereira',
      document: '12345678901',
      birthdate: new Date('1980-04-15'),
      phone: '11987654321',
      postal_code: '01001000',
      email: 'lucas.pereira@example.com',
      password: adminPassword,
      role: 'admin',
    },
  });

  await prisma.user.create({
    data: {
      name: 'Mariana Santos',
      document: '23456789012',
      birthdate: new Date('1975-09-30'),
      phone: '11981234567',
      postal_code: '02002020',
      email: 'mariana.santos@example.com',
      password: medicoPassword,
      role: 'medico',
      Medico: {
        create: {
          specialty: 'Cardiologia',
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: 'Ana Cláudia Ribeiro',
      document: '34567890123',
      birthdate: new Date('1990-12-10'),
      phone: '11983456789',
      postal_code: '03003030',
      email: 'ana.ribeiro@example.com',
      password: recepPassword,
      role: 'recepcionista',
      Recepcionista: {
        create: {},
      },
    },
  });

  const pacientes = [
    {
      name: 'João Carlos Almeida',
      document: '45678901234',
      birthdate: new Date('1992-07-21'),
      phone: '11986543210',
      postal_code: '04004040',
      email: 'joao.almeida@example.com',
      history: 'Hipertensão controlada',
      allergies: 'Penicilina',
    },
    {
      name: 'Mariana Oliveira',
      document: '56789012345',
      birthdate: new Date('1988-11-05'),
      phone: '11985432109',
      postal_code: '05005050',
      email: 'mariana.oliveira@example.com',
      history: 'Diabetes tipo 2',
      allergies: 'Nenhuma',
    },
    {
      name: 'Felipe Souza',
      document: '67890123456',
      birthdate: new Date('1995-03-15'),
      phone: '11984321098',
      postal_code: '06006060',
      email: 'felipe.souza@example.com',
      history: 'Asma leve',
      allergies: 'Ácaros',
    },
    {
      name: 'Beatriz Lima',
      document: '78901234567',
      birthdate: new Date('1990-08-25'),
      phone: '11983210987',
      postal_code: '07007070',
      email: 'beatriz.lima@example.com',
      history: 'Nenhuma',
      allergies: 'Frutos do mar',
    },
    {
      name: 'Rafael Mendes',
      document: '89012345678',
      birthdate: new Date('1985-01-18'),
      phone: '11982109876',
      postal_code: '08008080',
      email: 'rafael.mendes@example.com',
      history: 'Cirurgia cardíaca em 2018',
      allergies: 'Sulfa',
    },
  ];

  for (const paciente of pacientes) {
    await prisma.user.create({
      data: {
        name: paciente.name,
        document: paciente.document,
        birthdate: paciente.birthdate,
        phone: paciente.phone,
        postal_code: paciente.postal_code,
        email: paciente.email,
        role: 'paciente',
        Paciente: {
          create: {
            history: paciente.history,
            allergies: paciente.allergies,
          },
        },
      },
    });
  }

  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
