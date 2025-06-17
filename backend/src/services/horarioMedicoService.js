import { toZonedTime } from 'date-fns-tz';
import prisma from '../config/dbConfig.js';
import { addMinutes, endOfDay, format, startOfDay } from 'date-fns';

class horarioMedicoService {
  static async getAll() {
    const horarios = await prisma.horarioMedico.findMany({
      select: {
        id: true,
        medico_id: true,
        start_time: true,
        end_time: true,
      },
    });

    const horariosFormatados = horarios.map((h) => ({
      id: h.id,
      medico_id: h.medico_id,
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
        start_time: true,
        end_time: true,
      },
    });

    if (!horarios || horarios.length === 0) return null;

    const horariosFormatados = horarios.map((h) => ({
      id: h.id,
      medico_id: h.medico_id,
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

  static async getHorariosDisponiveis(medico_id, dataString) {
    const timeZone = 'America/Sao_Paulo';

    // Interpreta a string de data (ex: '2025-06-18') como o início do dia no fuso horário alvo.
    const dataAlvo = toZonedTime(`${dataString}T00:00:00`, timeZone);

    const inicioDoDia = startOfDay(dataAlvo);
    const fimDoDia = endOfDay(dataAlvo);

    const horariosTrabalho = await prisma.horarioMedico.findMany({
      where: { medico_id },
    });

    if (!horariosTrabalho.length) {
      return [];
    }

    const consultasDoDia = await prisma.consulta.findMany({
      where: {
        medico_id,
        date_time: {
          gte: inicioDoDia,
          lte: fimDoDia,
        },
      },
    });

    // Cria um conjunto com os horários já agendados, formatados em 'HH:mm' no fuso correto.
    const consultasMarcadas = new Set(
      consultasDoDia.map(c => {
        const zoned = toZonedTime(c.date_time, timeZone);
        return format(zoned, 'HH:mm');
      }),
    );

    const horariosDisponiveis = [];

    for (const h of horariosTrabalho) {
      // Define o início e o fim do expediente para a data alvo, usando as horas UTC do banco de dados.
      let slotAtual = new Date(dataAlvo);
      slotAtual.setUTCHours(h.start_time.getUTCHours(), h.start_time.getUTCMinutes(), 0, 0);

      const fimDoExpediente = new Date(dataAlvo);
      fimDoExpediente.setUTCHours(h.end_time.getUTCHours(), h.end_time.getUTCMinutes(), 0, 0);

      // Itera sobre os slots de tempo do expediente para gerar os horários disponíveis.
      while (slotAtual < fimDoExpediente) {
        // Formata o slot de horário no fuso correto para fazer a comparação.
        const horaFormatada = format(toZonedTime(slotAtual, timeZone), 'HH:mm');

        if (!consultasMarcadas.has(horaFormatada)) {
          horariosDisponiveis.push(horaFormatada);
        }

        slotAtual = addMinutes(slotAtual, 30);
      }
    }

    return horariosDisponiveis;
  }

}

export default horarioMedicoService;
