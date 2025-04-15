import express from 'express';
import consultaController from '../controllers/consultaController.js';

const router = express.Router();

router.post('/', consultaController.agendar);
router.get('/', consultaController.listarTodas);
router.get('/:id', consultaController.listarPorId);
router.put('/:id', consultaController.atualizar);
router.delete('/:id', consultaController.cancelar);

// extras
router.get('/paciente/:id', consultaController.listarPorPaciente);
router.get('/medico/:id', consultaController.listarPorMedico);

export default router;
