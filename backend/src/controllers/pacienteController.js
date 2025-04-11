import pacienteService from '../services/pacienteService.js';

class pacienteController {
  static async cadastrarPaciente(req, res) {
    try {
      const {
        name,
        document,
        birthdate,
        phone,
        postal_code,
        email,
        password,
        history,
      } = req.body;

      if (
        !name ||
        !document ||
        !birthdate ||
        !phone ||
        !postal_code ||
        !email ||
        !password
      ) {
        return res
          .status(404)
          .json({ message: 'Todos os dados são obrigatórios.' });
      }

      const userData = {
        name,
        document,
        birthdate: new Date(birthdate),
        phone,
        postal_code,
        email,
        password,
        role: 'paciente',
      };

      const pacienteData = { history };

      const pacienteUser = await pacienteService.createPaciente(
        userData,
        pacienteData,
      );

      return res
        .status(201)
        .json({
          message: 'Paciente cadastrado com sucesso!',
          user: pacienteUser,
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao cadastrar paciente.', error });
    }
  }

  static async listarPacientes(req, res) {
    try {
      const pacientes = await pacienteService.getAllPacientes();

      return res.status(200).json(pacientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar pacientes', error });
    }
  }

  static async listarPacienteById(req, res) {
    const { id } = req.params;

    try {
      const paciente = await pacienteService.getPacienteById(Number(id));
      if (!paciente) {
        return res.status(404).json({ message: 'Paciente não encontrado' });
      }
      return res.status(200).json(paciente);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'Erro ao listar paciente por Id', error });
    }
  }

  static async updatePaciente(req, res) {
    const { id } = req.params;
    const data = req.body;
  
    try {
      const existingPaciente = await pacienteService.getPacienteById(Number(id));
      
      if (!existingPaciente) {
        return res.status(404).json({ message: 'Paciente não encontrado' });
      }
  
      const newData = await pacienteService.updatePaciente(Number(id), data);
  
      return res.status(200).json(newData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar paciente', error });
    }
  }
  
}

export default pacienteController;
