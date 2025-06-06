import express from 'express';
import router from './routes/index.js';
import cors from 'cors';
import './config/dbConfig.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

export default app;
