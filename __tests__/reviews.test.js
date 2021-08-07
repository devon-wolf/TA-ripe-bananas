import request from 'supertest';
import app from '../lib/app.js';
import database from '../lib/utils/database';

const newReviewer = {
  name: 'Skinny Ebert',
  company: 'Just a String'
};

const newReview = {
  rating: 2,
  ReviewerId: 1,
  review: '<review-text, max-length 140 chars RS>',
  FilmId: 1
};

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

describe('review routes', () => {
  beforeEach(async () => {
    await database.sync({ force: true });

    await request(app)
      .post('/api/v1/studios')
      .send(newStudio);

    await request(app)
      .post('/api/v1/films')
      .send(newFilm);

    await request(app)
      .post('/api/v1/reviewers')
      .send(newReviewer); 

    await request(app)
      .post('/api/v1/reviews')
      .send(newReview); 
  });

  it('creates a new review', () => {
    const anotherReview = {
      rating: 5,
      ReviewerId: 1,
      review: 'better',
      FilmId: 1
    };

    return request(app)
      .post('/api/v1/reviews')
      .send(anotherReview)
      .then(response => {
        expect(response.body).toEqual({
          id: 2,
          ...anotherReview
        });
      });
  });
});
