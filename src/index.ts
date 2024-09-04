import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  res.send('Berhasil');
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
