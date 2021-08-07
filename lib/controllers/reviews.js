import { Router } from 'express';
import Review from '../models/Review';

const reviewsController = Router()
  .post('/', (req, res, next) => {
    Review.create(req.body)
      .then(review => res.send(review))
      .catch(next);
  });

export default reviewsController;
