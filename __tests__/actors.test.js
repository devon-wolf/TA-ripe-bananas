import request from 'supertest';
import app from '../lib/app.js';
import database from '../lib/utils/database';

const newActor = {
  name: 'Actor Schmactor',
  dob: '1970-01-01',
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
      dob: '1970-01-01',
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

  it('gets all actors', () => {
    return request(app)
      .get('/api/v1/actors')
      .then(response => {
        expect(response.body).toEqual([{
          id: 1,
          name: newActor.name
        }]);
      });
  });

  it('gets an actor by id', () => {
    return request(app)
      .get('/api/v1/actors/1')
      .then(response => {
        expect(response.body).toEqual({
          id: 1,
          ...newActor
        });
      });
  });
});
