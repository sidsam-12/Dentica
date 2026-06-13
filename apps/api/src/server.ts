import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes.js';

export function createApp() {
  const app = express();

  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true }));

  app.get('/health', (_request, response) => {
    response.json({ ok: true, service: 'dentica-api' });
  });

  app.use('/api', apiRouter);

  return app;
}

const app = createApp();

export default app;
