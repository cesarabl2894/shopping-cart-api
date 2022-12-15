import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

import { createServer } from './server';

const startServer = () => {
  const app = createServer();

  app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
  });
};

startServer();
