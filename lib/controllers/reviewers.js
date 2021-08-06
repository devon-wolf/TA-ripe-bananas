import { Router } from 'express';
import Reviewer from '../models/Reviewer';

const reviewersController = Router()
  .post('/', (req, res, next) => {
    Reviewer.create(req.body)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  });

export default reviewersController;
