import express from 'express';
import dotenv from 'dotenv';
import { publicRouter } from './routes/public-api';
import { errorMiddleware } from './middleware/error-middleware';

dotenv.config();
export const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(publicRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
