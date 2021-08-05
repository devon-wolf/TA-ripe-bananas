import { Router } from 'express';
import Studio from '../models/Studio';

const studiosController = Router()
  .post('/', (req, res, next) => {
    Studio.create(req.body)
      .then(studio => res.send(studio))
      .catch(next);
  });


export default studiosController;
