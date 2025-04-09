import prisma from '../config/dbConfig.js';

class pacienteServices {

  static async createPaciente(userData, pacienteData) {
    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: userData,
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

  static async getAllPacientes() {
    return await prisma.paciente.findMany({
      include: {
        user: true,
      },
    });
  }
}

export default pacienteServices;
