import express from 'express';
import consultaController from '../controllers/consultaController.js';
import { parseDateTimeFields } from '../middlewares/parseDateMiddleware.js';
import { formatDateTimeFields } from '../middlewares/formatDateMiddleware.js';

const router = express.Router();

router.post('/', parseDateTimeFields(['date_time']), consultaController.agendar);
router.get('/', formatDateTimeFields(['date_time']), consultaController.listarTodas);
router.get('/:id', formatDateTimeFields(['date_time']), consultaController.listarPorId);
router.put('/:id', parseDateTimeFields(['date_time']), consultaController.atualizar);
router.delete('/:id', consultaController.cancelar);

export default router;
