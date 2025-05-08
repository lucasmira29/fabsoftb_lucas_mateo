import { Router } from 'express';
import pacienteRoutes from './pacienteRoutes.js';
import userRoutes from './userRoutes.js';
import medicoRoutes from './medicoRoutes.js';
import recepcionistaRoutes from './recepcionistaRoutes.js';
import consultaRoutes from './consultaRoutes.js';

const router = Router();

router.use("/paciente", pacienteRoutes);
router.use("/usuario", userRoutes);
router.use("/medico", medicoRoutes);
router.use("/recepcionista", recepcionistaRoutes);
router.use("/consulta", consultaRoutes);

export default router;
