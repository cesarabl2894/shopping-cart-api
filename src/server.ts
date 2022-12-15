import express, { Application } from 'express';
import cors from 'cors';
import errorHandler from '@middleware/errorHandler';
import router from '@config/routes';

const createServer = (): Application => {
  const app = express();
  app.use(cors());
  app.use(router);
  app.use(errorHandler);

  return app;
};

export { createServer };
