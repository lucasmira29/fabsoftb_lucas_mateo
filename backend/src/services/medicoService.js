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


  static async getAllMedicos() {
    return await prisma.medico.findMany({
      where: {
        user: {
          deleted_at: null,
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

}

export default medicoService;
