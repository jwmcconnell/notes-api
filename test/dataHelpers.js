require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');
const User = require('../lib/models/User');

const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData();
});

afterAll(() => {
  return mongoose.connection.close();
});

const getUser = () => {
  return User
    .findOne()
    .then(User => {
      return JSON.parse(JSON.stringify(User));
    });
};

module.exports = {
  getUser
};
