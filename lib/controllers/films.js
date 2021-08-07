import { Router } from 'express';
import Film from '../models/Film';

const filmsController = Router()
  .post('/', (req, res, next) => {
    Film.create(req.body)
      .then(film => res.send(film))
      .catch(next);
  });

export default filmsController;
