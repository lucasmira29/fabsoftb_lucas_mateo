import express from 'express';
import historicoConsultaController from '../controllers/historicoConsultaController.js';

const router = express.Router();

router.post('/', historicoConsultaController.criar);
router.get('/:consultaId', historicoConsultaController.listarPorConsulta);

export default router;