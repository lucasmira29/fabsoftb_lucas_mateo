import prisma from '../config/dbConfig.js';

class userService {
  static async getUserByCpfEmail(data) {
    return await prisma.user.findFirst({
      where: {
        OR: [{ document: data.document }, { email: data.email }],
      },
    });
  }

  static async getUserById(id) {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        document: true,
        birthdate: true,
        phone: true,
        postal_code: true,
        email: true,
        role: true,
      },
    });
  }

  static async getUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  static async filtrarUsuarios(filtros) {
    const where = {};

    if (filtros.name) {
      where.name = { contains: filtros.name };
    }

    if (filtros.email) {
      where.email = { contains: filtros.email };
    }

    if (filtros.role) {
      where.role = filtros.role;
    }

    if (filtros.document) {
      where.document = { contains: filtros.document };
    }

    if (filtros.status) {
      where.status = filtros.status;
    }

    const page = parseInt(filtros.page) || 1;
    const limit = parseInt(filtros.limit) || 10;
    const skip = (page - 1) * limit;


    const users = await prisma.user.findMany({
      where,
      skip,
      take: limit,
      select: {
        id: true,
        document: true,
        birthdate: true,
        phone: true,
        postal_code: true,
        email: true,
        role: true,
      },
      orderBy: { created_at: 'desc' },
    });

    const total = await prisma.user.count({ where });

    return {
      users,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}

export default userService;
