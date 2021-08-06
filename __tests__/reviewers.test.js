import request from 'supertest';
import app from '../lib/app.js';
import database from '../lib/utils/database';

const newReviewer = {
  name: 'Skinny Ebert',
  company: 'Just a String'
};

describe('reviewers routes', () => {
  beforeEach(() => {
    return database.sync({ force: true });
  });

  beforeEach(() => {
    return request(app)
      .post('/api/v1/reviewers')
      .send(newReviewer);
  });

  it('creates a new reviewer', () => {
    const anotherReviewer = {
      name: 'Mathias Modulo',
      company: 'Numbers'
    };

    return request(app)
      .post('/api/v1/reviewers')
      .send(anotherReviewer)
      .then(response => {
        expect(response.body).toEqual({
          id: 2,
          ...anotherReviewer
        });
      });
  });

  it('gets all reviewers', () => {
    return request(app)
      .get('/api/v1/reviewers')
      .then(response => {
        expect(response.body).toEqual([{
          id: 1,
          ...newReviewer
        }]);
      });
  });
});
