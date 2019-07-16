const { getUser } = require('./dataHelpers');
const request = require('supertest');
const app = require('../lib/app');

describe('GET user route', () => {
  it('returns a user by an id', async() => {
    const { _id } = await getUser();
    return request(app)
      .get(`/api/v1/users/${_id}`)
      .then(res => {
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          hash: expect.any(String),
          __v: 0
        });
        expect(res.status).toEqual(200);
      });
  });
});

describe('POST user route', () => {
  it('returns an error for an incorrect form submission', () => {
    return request(app)
      .post('/api/v1/users')
      .then(res => {
        expect(res.status).toEqual(400);
      });
  });

  it('creates and returns a new user', () => {
    return request(app)
      .post('/api/v1/users')
      .send({ name: 'test', email: 'test@test.com', password: 'test' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'test',
          email: 'test@test.com',
          hash: expect.any(String),
          __v: 0
        });
        expect(res.status).toEqual(200);
      });
  });
});
