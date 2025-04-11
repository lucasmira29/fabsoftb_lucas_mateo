import medicoService from "../services/medicoService.js";



class medicoController {
  static async listarMedicos(req, res) {
    try {
      const medico = await medicoService.getAllMedicos();

      res.status(200).json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ocorreu um erro ao listar os médicos" });
    }
  }
}

export default medicoController;
