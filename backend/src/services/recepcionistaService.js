import prisma from '../config/dbConfig.js';
import { hashPassword } from '../utils/hash.js';

class recepcionistaService {
  static async createRecepcionista(userData) {
    const hashedPassword = await hashPassword(userData.password);

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          ...userData,
          password: hashedPassword,
          role: 'recepcionista',
        },
      });

      const recepcionista = await tx.recepcionista.create({
        data: {
          id: user.id,
        },
      });

      return { user, recepcionista };
    });
  }

  static async getAllRecepcionistas() {
    return await prisma.recepcionista.findMany({
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

  static async getRecepcionistaById(id) {
    return await prisma.recepcionista.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  static async updateRecepcionista(id, newData) {
    return await prisma.user.update({
      where: { id },
      data: newData,
    });
  }

  static async deleteRecepcionista(id) {
    return await prisma.user.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export default recepcionistaService;
