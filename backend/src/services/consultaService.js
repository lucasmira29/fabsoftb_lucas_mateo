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
      select: {
        id: true,
        date_time: true,
        status: true,
        paciente: {
          select: {
            id: true,
            history: true,
            allergies: true,
            user: {
              select: {
                id: true,
                name: true,
                document: true,
                birthdate: true,
                phone: true,
                postal_code: true,
                email: true,
                role: true,
              },
            },
          },
        },
        medico: {
          select: {
            id: true,
            specialty: true,
            user: {
              select: {
                id: true,
                name: true,
                document: true,
                birthdate: true,
                phone: true,
                postal_code: true,
                email: true,
                role: true,
              },
            },
          },
        },
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
      select: {
        id: true,
        date_time: true,
        status: true,
        paciente: {
          select: {
            id: true,
            history: true,
            allergies: true,
            user: {
              select: {
                id: true,
                name: true,
                document: true,
                birthdate: true,
                phone: true,
                postal_code: true,
                email: true,
                role: true,
              },
            },
          },
        },
        medico: {
          select: {
            id: true,
            specialty: true,
            user: {
              select: {
                id: true,
                name: true,
                document: true,
                birthdate: true,
                phone: true,
                postal_code: true,
                email: true,
                role: true,
              },
            },
          },
        },
        historico: true,
        registros: true,
      },
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
