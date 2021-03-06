import './models/associations';
import express from 'express';
import notFoundMiddleware from './middleware/not-found';
import errorMiddleware from './middleware/error';
import studiosController from './controllers/studios';
import actorsController from './controllers/actors';
import reviewersController from './controllers/reviewers';
import filmsController from './controllers/films';
import reviewsController from './controllers/reviews';

const app = express();

app.use(express.json());

app.use('/api/v1/studios', studiosController);
app.use('/api/v1/actors', actorsController);
app.use('/api/v1/reviewers', reviewersController);
app.use('/api/v1/films', filmsController);
app.use('/api/v1/reviews', reviewsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
