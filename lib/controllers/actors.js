import { Router } from 'express';
import Actor from '../models/Actor';

const actorsController = Router()
  .post('/', (req, res, next) => {
    Actor.create(req.body)
      .then(actor => res.send(actor))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Actor.findAll({ attributes: ['id', 'name'] })
      .then(actors => res.send(actors))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Actor.findByPk(req.params.id,
      { attributes: ['name', 'dob', 'pob'] })
      .then(actor => res.send(actor))
      .catch(next);
  });
	
export default actorsController;
