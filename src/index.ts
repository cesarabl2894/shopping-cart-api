import * as moduleAlias from 'module-alias';
import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
const sourcePath = 'src';

moduleAlias.addAliases({
  '@server': sourcePath,
  '@controllers': `${sourcePath}/controller`,
  '@middleware': `${sourcePath}/middleware`,
  '@utils': `${sourcePath}/utils`,
});

import { createServer } from './server';

const startServer = () => {
  const app = createServer();

  app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
  });
};

startServer();
