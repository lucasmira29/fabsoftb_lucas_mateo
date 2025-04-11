import userService from '../services/userService.js';

class userController {
  static async verificarEmailOuCpf(req, res) {
    try {
      const { document, email } = req.body;
  
      if (!document && !email) {
        return res.status(404).json({ message: "Dados são obrigatórios" });
      }
  
      const data = {
        document,
        email,
      };

      const user = await userService.getUserByCpfEmail(data);
  
      res.status(200).json(user);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao verificar email ou cpf" });
    }
  }

  static async listarUsuariosPorTipo(req, res) {
    try {
      const { role } = req.query;
  
      const users = await userService.getUsersByRole(role);
  
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao listar usuários" });
    }
  }
  
  static async listarUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      
      const user = await userService.getUserById(Number(id));
      if (user) {
        return res.status(200).json(user);
      }

      return res.status(404).json({ message: "Usuário com Id informado não encontrado" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao listar usuário por ID" });
    }
  }
}

export default userController;