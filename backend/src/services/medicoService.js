import prisma from "../config/dbConfig.js";
import { hashPassword } from "../utils/hash.js";


class medicoService {
  
  static async createMedico(userData) {
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

        },
      });

      return { user, medico };
    });
  }


  static async getAllMedicos() {
    return await prisma.medico.findMany({
      include: {
        user: true,
      },
    });
  } 
}


export default medicoService;
