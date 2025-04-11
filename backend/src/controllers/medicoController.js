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
