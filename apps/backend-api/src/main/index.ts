import express from 'express';
import router from '../interfaces/http/routes';
// import { validateTokenMiddleware } from './main/middlewares/validateTokenMiddleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.use('/api', validateTokenMiddleware, router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
