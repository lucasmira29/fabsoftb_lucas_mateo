import prisma from "../config/dbConfig.js";

class historicoConsultaService {
  static async criarHistorico(data) {
    return await prisma.historicoConsulta.create({ data });
  }

  static async listarPorConsulta(consultaId) {
    return await prisma.historicoConsulta.findMany({ 
      where: { consulta_id: consultaId },
      orderBy: { data_acao: 'desc' },
      include: {
        realizadoPor: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
      },
    });
  }
}

export default historicoConsultaService;
