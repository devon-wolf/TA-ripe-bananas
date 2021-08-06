import { Router } from 'express';
import Studio from '../models/Studio';

const studiosController = Router()
  .post('/', (req, res, next) => {
    Studio.create(req.body)
      .then(studio => res.send(studio))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Studio.findAll()
      .then(studios => res.send(studios))
      .catch(next);
  });


export default studiosController;
