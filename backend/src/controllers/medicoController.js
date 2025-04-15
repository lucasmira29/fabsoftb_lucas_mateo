import medicoService from "../services/medicoService.js";



class medicoController {
  
  static async cadastrarMedico(req, res) {
    try {
      const {
        name,
        document,
        birthdate,
        phone,
        postal_code,
        email,
        password,
        specialty,
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
        return res.status(400).json({ message: 'Todos os dados são obrigatórios.' });
      }
      
      const userData = {
        name,
        document,
        birthdate: new Date(birthdate),
        phone,
        postal_code,
        email,
        password,
        role: 'medico',
      };


      const medico = await medicoService.createMedico(userData, specialty);

      res.status(200).json({ message: 'Médico cadastrado', medico });

    } catch (error) {
      console.error(error);
      
    }
  }
  
  static async listarMedicos(req, res) {
    try {
      const medico = await medicoService.getAllMedicos();

      res.status(200).json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ocorreu um erro ao listar os médicos" });
    }
  }


  static async listarMedicoById(req, res) {    
    try {
      const { id } = req.params;
      const medico = await medicoService.getMedicoById(Number(id));
    
      if (!medico) {
        return res.status(404).json({ message: "Médico não encontrado" });
      }
      
      res.status(200).json(medico);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Erro ao ao listar médico por Id" });
    }
  }
}

export default medicoController;
