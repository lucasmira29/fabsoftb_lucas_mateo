import historicoConsultaService from "../services/historicoConsultaService.js";

class historicoConsultaController {
  static async criar(req, res) {
    const { consultaId, acao, realizadoPor, dataAcao, observacao } = req.body;

    if (!consultaId || !acao || !realizadoPor || !dataAcao) {
      return res.status(400).json({ message: "Campos obrigatórios faltando" });
    }

    const historicoData = {
      consulta_id: consultaId,
      acao,
      realizado_por: realizadoPor,
      data_acao: new Date(dataAcao),
      observacao: observacao || null,
    };

    try {
      const historicoConsulta = await historicoConsultaService.criarHistorico(historicoData);
      
      if (!historicoConsulta) return res.status(404).json({ message: "Erro ao criar histórico da consulta" });

      res.status(201).json(historicoConsulta);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar consulta", error });
    }
  }

  static async listarPorConsulta(req, res) {
    
    try {
      const consultaId = req.params;
  
      const historico = await historicoConsultaService.listarPorConsulta(consultaId);

      res.status(200).json(historico);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar por consulta", error });
    }
  }
}


export default historicoConsultaController;