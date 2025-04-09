import prisma from "../config/dbConfig.js";


class medicoServices {
  
  static async getAllMedicos() {
    return await prisma.medico.findMany({
      include: {
        user: true,
      },
    });
  } 
}


export default medicoServices;
