import recepcionistaService from '../services/recepcionistaService.js';

class recepcionistaController {
  static async cadastrarRecepcionista(req, res) {
    try {
      const {
        name,
        document,
        birthdate,
        phone,
        postal_code,
        email,
        password,
      } = req.body;

      if (!name || !document || !birthdate || !phone || !postal_code || !email || !password) {
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
      };

      const newRecepcionista = await recepcionistaService.createRecepcionista(userData);

      res.status(201).json({
        message: 'Recepcionista cadastrado com sucesso!',
        user: newRecepcionista,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao cadastrar recepcionista.', error });
    }
  }

  static async listarRecepcionistas(req, res) {
    const filtros = req.query;
    
    try {
      const recepcionistas = await recepcionistaService.getAllRecepcionistas(filtros);
      res.status(200).json(recepcionistas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar recepcionistas', error });
    }
  }

  static async listarRecepcionistaById(req, res) {
    const { id } = req.params;

    try {
      const recepcionista = await recepcionistaService.getRecepcionistaById(Number(id));
      if (!recepcionista) {
        return res.status(404).json({ message: 'Recepcionista não encontrado' });
      }
      res.status(200).json(recepcionista);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar recepcionista por ID', error });
    }
  }

  static async updateRecepcionista(req, res) {
    const { id } = req.params;
    const newData = req.body;

    try {
      const recepcionista = await recepcionistaService.getRecepcionistaById(Number(id));
      if (!recepcionista) {
        return res.status(404).json({ message: 'Recepcionista não encontrado' });
      }

      const updated = await recepcionistaService.updateRecepcionista(Number(id), newData);
      res.status(200).json(updated);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar recepcionista', error });
    }
  }

  static async deleteRecepcionista(req, res) {
    const { id } = req.params;

    try {
      const recepcionista = await recepcionistaService.getRecepcionistaById(Number(id));
      if (!recepcionista) {
        return res.status(404).json({ message: 'Recepcionista não encontrado' });
      }

      await recepcionistaService.deleteRecepcionista(Number(id));
      res.status(200).json({ message: 'Recepcionista deletado com sucesso' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao deletar recepcionista', error });
    }
  }
}

export default recepcionistaController;
