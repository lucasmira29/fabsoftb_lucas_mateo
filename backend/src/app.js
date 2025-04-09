import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes.js';
import userRoutes from './routes/userRoutes.js';
import medicoRoutes from './routes/medicoRoutes.js';
import './config/dbConfig.js';

const app = express();

app.use(express.json());

app.use("/paciente", pacienteRoutes);
app.use("/medico",  medicoRoutes);
app.use("/user", userRoutes);

export default app;
