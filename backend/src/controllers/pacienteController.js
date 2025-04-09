import pacienteServices from "../services/pacienteServices.js";


class pacienteController {
  static async cadastrarPaciente(req, res) {
    try {
      const { name, document, birthdate, phone, postal_code, email, password, history } = req.body;

      if (!name || !document || !birthdate || !phone || !postal_code || !email || !password) {
        return res.status(404).json({ message: "Todos os dados são obrigatórios." });
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

      const pacienteUser = await pacienteServices.createPaciente(userData, pacienteData);

      return res.status(201).json({ message: "Paciente cadastrado com sucesso!", user: pacienteUser });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao cadastrar paciente.", error });
    }
  }

  static async listarPacientes(req, res) {
    try {
      const pacientes = await pacienteServices.getAllPacientes();

      return res.status(200).json(pacientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao listar pacientes", error });
    }
  }
}


export default pacienteController;
