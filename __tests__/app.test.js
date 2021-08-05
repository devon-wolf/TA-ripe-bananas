import request from 'supertest';
import app from '../lib/app.js';
import database from '../lib/utils/database';

describe('demo routes', () => {
  beforeEach(() => {
    return database.sync({ force: true });
  });
  
  it('creates a studio', () => {
    const newStudio = {
      name: 'TA Studio',
      city: 'Your Computer',
      state: 'OR',
      country: 'USA'
    };

    return request(app)
      .post('/api/v1/studios')
      .send(newStudio)
      .then(response => {
        expect(response.body).toEqual({
          id: 1,
          ...newStudio
        });
      });
  });

  it.skip('gets all studios', () => {
    return request(app)
      .get('/api/v1/studios')
      .then(response => {
        expect(response.body).toEqual([{ id: 1, name: 'studio' }]);
      });
  });

  it.skip('gets a studio by id', () => {

  });

});
