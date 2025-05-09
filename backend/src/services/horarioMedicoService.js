import prisma from '../config/dbConfig.js';
import { format } from 'date-fns';

class horarioMedicoService {
  static async getAll() {
    const horarios = await prisma.horarioMedico.findMany({
      select: {
        id: true,
        medico_id: true,
        day_of_week: true,
        start_time: true,
        end_time: true,
      },
    });

    const horariosFormatados = horarios.map((h) => ({
      id: h.id,
      medico_id: h.medico_id,
      day_of_week: h.day_of_week,
      start_time: format(h.start_time, 'HH:mm'),
      end_time: format(h.end_time, 'HH:mm'),
    }));

    return horariosFormatados;
  }

  static async getById(id) {
    const horarios = await prisma.horarioMedico.findMany({
      where: { medico_id: id },
      select: {
        id: true,
        medico_id: true,
        day_of_week: true,
        start_time: true,
        end_time: true,
      },
    });

    if (!horarios || horarios.length === 0) return null;

    const horariosFormatados = horarios.map((h) => ({
      id: h.id,
      medico_id: h.medico_id,
      day_of_week: h.day_of_week,
      start_time: format(h.start_time, 'HH:mm'),
      end_time: format(h.end_time, 'HH:mm'),
    }));

    return horariosFormatados;
  }

  static async create(data) {
    return await prisma.horarioMedico.create({ data });
  }

  static async update(id, data) {
    const horarioExistente = await prisma.horarioMedico.update({
      where: { id },
      data,
    });

    return horarioExistente;
  }

  static async delete(id) {
    const horarioExistente = await prisma.horarioMedico.findUnique({
      where: { id },
    });

    if (!horarioExistente) return null;

    return await prisma.horarioMedico.delete({
      where: { id },
    });
  }
}

export default horarioMedicoService;
