import consultaService from '../services/consultaService.js';
import { parseDateTimeToDate, formatDateTime } from '../utils/dateUtils.js';

class consultaController {

  static async agendar(req, res) {
    try {
      const { paciente_id, medico_id, date_time, status, description } = req.body;

      if (!paciente_id || !medico_id || !date_time || !status) {
        return res.status(400).json({ message: 'Campos obrigatórios faltando' });
      }

      const dataHora = parseDateTimeToDate(date_time); 

      const consulta = await consultaService.agendarConsulta({
        paciente_id,
        medico_id,
        date_time: dataHora,
        status,
        description,
      });

      res.status(201).json({ message: 'Consulta agendada', consulta });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao agendar consulta', error });
    }
  }

  static async listarTodas(req, res) {
    try {
      const filtros = req.query;
      const consultas = await consultaService.listarConsultas(filtros);

      const consultasFormatadas = consultas.map(consulta => ({
        ...consulta,
        date_time: formatDateTime(consulta.date_time), 
      }));

      res.status(200).json(consultasFormatadas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar consultas', error });
    }
  }

  static async listarPorId(req, res) {
    try {
      const { id } = req.params;
      const consulta = await consultaService.listarConsultaPorId(id);

      if (!consulta) {
        return res.status(404).json({ message: 'Consulta não encontrada' });
      }

      consulta.date_time = formatDateTime(consulta.date_time);

      res.status(200).json(consulta);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar consulta', error });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      if (data.date_time) {
        data.date_time = parseDateTimeToDate(data.date_time);
      }

      const consulta = await consultaService.atualizarConsulta(id, data);
      res.status(200).json({ message: 'Consulta atualizada', consulta });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar consulta', error });
    }
  }

  static async cancelar(req, res) {
    try {
      const { id } = req.params;
      await consultaService.cancelarConsulta(id);
      res.status(200).json({ message: 'Consulta cancelada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao cancelar consulta', error });
    }
  }
}

export default consultaController;
