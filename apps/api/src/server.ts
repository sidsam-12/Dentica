import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes.js';

export function createApp() {
  const app = express();

  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (_request, response) => {
    response.status(200).json({
      ok: true,
      service: 'dentica-api',
      message: 'Dentica API is running.',
      routes: ['/health', '/api/doctors', '/api/services', '/api/appointments', '/api/leads']
    });
  });

  app.get('/health', (_request, response) => {
    response.json({ ok: true, service: 'dentica-api' });
  });

  app.use('/api', apiRouter);

  return app;
}

const app = createApp();

export default function handler(request: express.Request, response: express.Response) {
  return app(request, response);
}
