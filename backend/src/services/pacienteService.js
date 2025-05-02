import prisma from '../config/dbConfig.js';
import { hashPassword } from '../utils/hash.js';

class pacienteService {
  static async createPaciente(userData, pacienteData) {
    return prisma.$transaction(async (tx) => {
      const hashedPassword = await hashPassword(userData.password);
      const user = await tx.user.create({
        data: {
          ...userData,
          password: hashedPassword,
        },
      });

      const paciente = await tx.paciente.create({
        data: {
          id: user.id,
          ...pacienteData,
        },
      });

      return { user, paciente };
    });
  }

  static async getAllPacientes(filtros) {
    return await prisma.paciente.findMany({
      where: {
        user : {
          ...filtros,    
          deleted_at: null,
        },
      },
      include: {
        user: true,
      },
    });
  }

  static async getPacienteById(id) {
    return await prisma.paciente.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  static async updatePaciente(id, newData) {
    return await prisma.user.update({
      where: { id },
      data: newData,
    });
  }

  static async deletePaciente(id) {
    return await prisma.user.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export default pacienteService;
