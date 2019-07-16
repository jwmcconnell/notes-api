const { getUser } = require('./dataHelpers');
const request = require('supertest');
const app = require('../lib/app');

describe('POST user route', () => {
  it('returns an error for an incorrect form submission', () => {
    return request(app)
      .post('/api/v1/users')
      .then(res => {
        expect(res.status).toEqual(400);
      });
  });
});
