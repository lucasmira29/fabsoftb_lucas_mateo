import bcrypt from 'bcrypt';
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

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email e senha são obrigatórios" });
      }

      const user = await userService.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "Usuário ou senha incorreto" });
      }

      const senhaValida = await bcrypt.compare(password, user.password);
      if (!senhaValida) {
        return res.status(401).json({ message: "Usuário ou senha incorreto" });
      }


      return res.status(200).json({
        message: "Login realizado com sucesso",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao realizar login", error });
    }
  }
}

export default userController;
