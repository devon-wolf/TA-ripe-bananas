import request from 'supertest';
import app from '../lib/app.js';
import database from '../lib/utils/database';

const newStudio = {
  name: 'TA Studio',
  city: 'Your Computer',
  state: 'OR',
  country: 'USA'
};

describe('studio routes', () => {
  beforeEach(() => {
    return database.sync({ force: true });
  });

  beforeEach(() => {
    return request(app)
      .post('/api/v1/studios')
      .send(newStudio);
  });
  
  it('creates a studio', () => {
    const newerStudio = {
      name: 'Another Studio',
      city: 'Another Computer',
      state: 'OR',
      country: 'USA'
    };

    return request(app)
      .post('/api/v1/studios')
      .send(newerStudio)
      .then(response => {
        expect(response.body).toEqual({
          id: 2,
          ...newerStudio
        });
      });
  });

  it('gets all studios', () => {
    return request(app)
      .get('/api/v1/studios')
      .then(response => {
        expect(response.body).toEqual([{
          id: 1,
          ...newStudio
        }]);
      });
  });

  it('gets a studio by id', () => {
    return request(app)
      .get('/api/v1/studios/1')
      .then(response => {
        expect(response.body).toEqual({
          id: 1,
          ...newStudio
        });
      });
  });

});
