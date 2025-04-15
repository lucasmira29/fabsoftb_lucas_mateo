import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes.js';
import userRoutes from './routes/userRoutes.js';
import medicoRoutes from './routes/medicoRoutes.js';
import recepcionistaRoutes from './routes/recepcionistaRoutes.js';
import consultaRoutes from './routes/consultaRoutes.js';
import './config/dbConfig.js';



const app = express();

app.use(express.json());

app.use("/paciente", pacienteRoutes);
app.use("/recepcionista", recepcionistaRoutes);
app.use("/medico",  medicoRoutes);
app.use("/user", userRoutes);
app.use("/consulta", consultaRoutes);

export default app;
