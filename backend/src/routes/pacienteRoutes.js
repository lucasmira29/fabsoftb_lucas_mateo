import express from 'express';
import pacienteController from '../controllers/pacienteController.js';

const router = express.Router();

router.get("/", (req, res) => pacienteController.listarPacientes(req, res));
router.post("/create", (req, res) => pacienteController.cadastrarPaciente(req, res));


export default router;
