import consultaService from '../services/consultaService.js';

class consultaController {
  
  static async agendar(req, res) {
    try {
      const { paciente_id, medico_id, date_time, status, description } = req.body;
  
      if (!paciente_id || !medico_id || !date_time || !status) {
        return res.status(400).json({ message: 'Campos obrigatórios faltando' });
      }
  
      const consulta = await consultaService.agendarConsulta({
        paciente_id,
        medico_id,
        date_time: new Date(date_time),
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
      const consultas = await consultaService.listarConsultas();
      res.status(200).json(consultas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar consultas', error });
    }
  }

  static async listarPorId(req, res) {
    try {
      const { id } = req.params;
      const consulta = await consultaService.listarConsultaPorId(Number(id));
      if (!consulta) return res.status(404).json({ message: 'Consulta não encontrada' });
      res.status(200).json(consulta);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar consulta', error });
    }
  }

  static async listarPorPaciente(req, res) {
    try {
      const { id } = req.params;
      const consultas = await consultaService.listarPorPaciente(Number(id));
      res.status(200).json(consultas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar consultas do paciente', error });
    }
  }

  static async listarPorMedico(req, res) {
    try {
      const { id } = req.params;
      const consultas = await consultaService.listarPorMedico(Number(id));
      res.status(200).json(consultas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar consultas do médico', error });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const consulta = await consultaService.atualizarConsulta(Number(id), data);
      res.status(200).json({ message: 'Consulta atualizada', consulta });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar consulta', error });
    }
  }

  static async cancelar(req, res) {
    try {
      const { id } = req.params;
      await consultaService.cancelarConsulta(Number(id));
      res.status(200).json({ message: 'Consulta cancelada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao cancelar consulta', error });
    }
  }
}

export default consultaController;
