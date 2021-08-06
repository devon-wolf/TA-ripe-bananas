import { Router } from 'express';
import Reviewer from '../models/Reviewer';

const reviewersController = Router()
  .post('/', (req, res, next) => {
    Reviewer.create(req.body)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Reviewer.findAll()
      .then(reviewers => res.send(reviewers))
      .catch(next);
  }) ;

export default reviewersController;
