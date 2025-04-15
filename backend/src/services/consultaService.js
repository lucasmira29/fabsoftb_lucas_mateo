import prisma from '../config/dbConfig.js';

class consultaService {
  static async agendarConsulta(data) {
    return await prisma.consulta.create({ data });
  }

  static async listarConsultas() {
    return await prisma.consulta.findMany({
      include: {
        paciente: { include: { user: true } },
        medico: { include: { user: true } },
        historico: true,
        registros: true,
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
