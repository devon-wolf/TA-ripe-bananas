import { Router } from 'express';
import Studio from '../models/Studio';

const studiosController = Router()
  .post('/', (req, res, next) => {
    Studio.create(req.body)
      .then(studio => res.send(studio))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Studio.findAll({ attributes: ['id', 'name'] })
      .then(studios => res.send(studios))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Studio.findByPk(req.params.id)
      .then(studio => res.send(studio))
      .catch(next);
  });


export default studiosController;
