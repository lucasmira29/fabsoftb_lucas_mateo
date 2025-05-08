import prisma from '../config/dbConfig.js';

class consultaService {
  static async agendarConsulta(data) {
    return await prisma.consulta.create({ data });
  }

  static async listarConsultas(filtros = {}) {
    const where = {};
  
    // filtro por data exata
    if (filtros.data) {
      const data = new Date(filtros.data);
      const diaSeguinte = new Date(data);
      diaSeguinte.setDate(data.getDate() + 1);
  
      where.date_time = {
        gte: data,
        lt: diaSeguinte,
      };
    }
  
    // filtro por intervalo de datas
    if (filtros.dataInicio || filtros.dataFim) {
      where.date_time = {
        ...(filtros.dataInicio && { gte: new Date(filtros.dataInicio) }),
        ...(filtros.dataFim && { lte: new Date(filtros.dataFim) }),
      };
    }
  
    // filtro por paciente
    if (filtros.pacienteId) {
      where.paciente_id = Number(filtros.pacienteId);
    }
  
    // filtro por médico
    if (filtros.medicoId) {
      where.medico_id = Number(filtros.medicoId);
    }
  
    // filtro por status
    if (filtros.status) {
      where.status = filtros.status;
    }
  
    return await prisma.consulta.findMany({
      where,
      include: {
        paciente: { include: { user: true } },
        medico: { include: { user: true } },
        historico: true,
        registros: true,
      },
      orderBy: {
        date_time: 'desc',
      },
    });
  }

  static async listarConsultaPorId(id) {
    return await prisma.consulta.findUnique({
      where: { id },
      include: {
        paciente: { include: { user: true } },
        medico: { include: { user: true } },
        historico: true,
        registros: true,
      },
    });
  }

  static async listarPorPaciente(paciente_id) {
    return await prisma.consulta.findMany({
      where: { paciente_id },
      include: { medico: { include: { user: true } } },
    });
  }

  static async listarPorMedico(medico_id) {
    return await prisma.consulta.findMany({
      where: { medico_id },
      include: { paciente: { include: { user: true } } },
    });
  }

  static async atualizarConsulta(id, data) {
    return await prisma.consulta.update({
      where: { id },
      data,
    });
  }

  static async cancelarConsulta(id) {
    return await prisma.consulta.update({
      where: { id },
      data: { status: 'cancelado' },
    });
  }
}

export default consultaService;
