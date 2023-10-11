import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import authRouter from './routes/auth.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', authRouter);

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}/api`),
);
