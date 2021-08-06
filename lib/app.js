import express from 'express';
import notFoundMiddleware from './middleware/not-found';
import errorMiddleware from './middleware/error';
import studiosController from './controllers/studios';
import actorsController from './controllers/actors';

const app = express();

app.use(express.json());

app.use('/api/v1/studios', studiosController);
app.use('/api/v1/actors', actorsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
