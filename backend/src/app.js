import express from 'express';
import router from './routes/index.js';
import './config/dbConfig.js';

const app = express();
app.use(express.json());
app.use('/api', router);

export default app;
