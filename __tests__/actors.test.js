import request from 'supertest';
import app from '../lib/app.js';
import database from '../lib/utils/database';

const newActor = {
  name: 'Actor Schmactor',
  dob: 'idk date format',
  pob: 'Anchorage, AK, USA'
};

describe('actors routes', () => {
  beforeEach(() => {
    return database.sync({ force: true });
  });

  beforeEach(() => {
    return request(app)
      .post('/api/v1/actors')
      .send(newActor);
  });

  it('creates a new actor', () => {
    const anotherActor = {
      name: 'Actor Two',
      dob: 'idk date format',
      pob: 'Birmingham, AL, USA'
    };

    return request(app)
      .post('/api/v1/actors')
      .send(anotherActor)
      .then(response => {
        expect(response.body).toEqual({
          id: 2,
          ...anotherActor
        });
      });
  });
});
