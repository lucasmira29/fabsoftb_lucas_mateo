import prisma from '../config/dbConfig.js';
import { hashPassword } from '../utils/hash.js';

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

    if (filtros.name) userWhere.name = { contains: filtros.name };
    if (filtros.email) userWhere.email = { contains: filtros.email };

    const page = parseInt(filtros.page) || 1;
    const limit = parseInt(filtros.limit) || 10;
    const skip = (page - 1) * limit;

    const medicos = await prisma.medico.findMany({
      where: {
        ...medicoWhere,
        user: {
          ...userWhere,
        },
      },
      select: {
        id: true,
        specialty: true,
        user: {
          select: {
            name: true,
            document: true,
            birthdate: true,
            phone: true,
            postal_code: true,
            email: true,
            role: true,
          },
        },
        horarios: {
          select: {
            day_of_week: true,
            start_time: true,
            end_time: true,
          },
        },
      },
      skip,
      take: limit,
    });

    const total = await prisma.medico.count({
      where: {
        ...medicoWhere,
        user: {
          ...userWhere,
        },
      },
    });

    return {
      medicos,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  static async getMedicoById(id) {
    return await prisma.medico.findUnique({
      where: { id },
      select: {
        id: true,
        specialty: true,
        user: {
          select: {
            name: true,
            document: true,
            birthdate: true,
            phone: true,
            postal_code: true,
            email: true,
            role: true,
          },
        },
        horarios: {
          select: {
            day_of_week: true,
            start_time: true,
            end_time: true,
          },
        },
      },
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
