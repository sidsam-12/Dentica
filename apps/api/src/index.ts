import dotenv from 'dotenv';
import { createApp } from './server.js';

dotenv.config();

const port = Number(process.env.PORT ?? 4000);
const app = createApp();

export default app;

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Dentica API listening on port ${port}`);
  });
}
