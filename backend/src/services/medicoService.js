import prisma from "../config/dbConfig.js";
import { hashPassword } from "../utils/hash.js";


class medicoService {
  
  static async createMedico(userData, specialty) {
    return prisma.$transaction(async (tx) => {
      const hashedPassword = await hashPassword(userData.password);
      const user = await tx.user.create({
        data: {
          ...userData,
          password: hashedPassword,
        },
      });

      const medico = await tx.medico.create({
        data: {
          id: user.id,
          specialty: specialty,
        },
      });

      return { user, medico };
    });
  }


  static async getAllMedicos(filtros) {
    const medicoWhere = {};
    const userWhere = { deleted_at: null };
  
    if (filtros.specialty) {
      medicoWhere.specialty = filtros.specialty;
    }
  
    if (filtros.name) userWhere.name = filtros.name;
    if (filtros.email) userWhere.email = filtros.email;
  
    return await prisma.medico.findMany({
      where: {
        ...medicoWhere,
        user: {
          ...userWhere,
        },
      },
      include: {
        user: true,
      },
    });
  }  


  static async getMedicoById(id) {
    return await prisma.medico.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  static async updateMedico(id, newData) {
    return await prisma.user.update({
      where: { id },
      data: newData,
    });
  }

  static async deleteMedico(id) {
    return await prisma.user.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });
  }

}

export default medicoService;
