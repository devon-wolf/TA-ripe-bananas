import request from 'supertest';
import app from '../lib/app.js';
import database from '../lib/utils/database';

const newFilm = {
  title: 'The Greatest Film Ever',
  released: 1990,
  StudioId: 1
};

const newStudio = {
  name: 'TA Studio',
  city: 'Your Computer',
  state: 'OR',
  country: 'USA'
};

describe('film routes', () => {
  beforeEach(() => {
    return database.sync({ force: true });
  });
	
  beforeEach(() => {
    return request(app)
      .post('/api/v1/studios')
      .send(newStudio);
  });

  beforeEach(() => {
    return request(app)
      .post('/api/v1/films')
      .send(newFilm);
  });

  it('creates a new film', () => {
    const anotherFilm = {
      title: 'The Greatest Film Ever',
      released: 1990,
      StudioId: 1
    };

    return request(app)
      .post('/api/v1/films')
      .send(anotherFilm)
      .then(response => {
        expect(response.body).toEqual({
          id: 2,
          ...anotherFilm
        });
      });
  });
});
