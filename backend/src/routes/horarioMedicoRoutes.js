import express from 'express';
import HorarioMedicoController from '../controllers/horarioMedicoController.js';

const router = express.Router();

router.get("/", (req, res) => HorarioMedicoController.listarHorarios(req, res));
router.get("/:id", (req, res) => HorarioMedicoController.listarHorarioMedicoId(req, res));
router.post("/", (req, res) => HorarioMedicoController.criarHorario(req, res));
router.put("/:id", (req, res) => HorarioMedicoController.atualizarHorario(req, res));
router.delete("/:id", (req, res) => HorarioMedicoController.deletarHorario(req, res));

export default router;
