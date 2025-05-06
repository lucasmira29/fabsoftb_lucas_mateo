import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get("/", (req, res) => userController.listarUsuariosPorTipo(req, res));
router.get("/:id", (req, res) => userController.listarUsuarioPorId(req, res));
router.post("/verify-user", (req, res) => userController.verificarEmailOuCpf(req, res));
router.post('/login', (req, res) => userController.login(req, res));

export default router;