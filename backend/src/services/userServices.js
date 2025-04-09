import prisma from "../config/dbConfig.js";


class userServices {
  static async getUserByCpfEmail(data) {
    return await prisma.user.findUnique({ where: data });
  }

  static async getUsersByRole(role) {
    return await prisma.user.findMany({
      where: role ? { role } : {},
      orderBy: { created_at: 'desc' },
    });
  }

  static async getUserById(id) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }
}


export default userServices;
