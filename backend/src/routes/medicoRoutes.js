import express from 'express';
import medicoController from '../controllers/medicoController.js';

const router = express.Router();

router.get("/", (req, res) => medicoController.listarMedicos(req, res));
router.get("/:id", (req, res) => medicoController.listarMedicoById(req, res));


export default router;
