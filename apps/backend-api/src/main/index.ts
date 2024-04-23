import express from 'express';
import { env } from './config/env';
import { setupMiddlewares } from './config/middlewares';
import { setupRoutes } from './config/routes';

const app = express();
const port = env.PORT || 3000;

setupMiddlewares(app)
setupRoutes(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
