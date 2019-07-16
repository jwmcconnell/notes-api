const bcrypt = require('bcrypt-nodejs');
const User = require('../lib/models/User');

const seedUsers = [
  {
    name: 'Jack',
    email: 'jack@test.com',
    password: 'cookies'
  },
  {
    name: 'Lance',
    email: 'lance@test.com',
    password: 'password'
  }
];

function seedData() {
  return Promise.all(seedUsers.map(user => {
    const { name, email, password } = user;
    const hash = bcrypt.hashSync(password);
    return User.create({ name, email, hash });
  }));
}

module.exports = seedData;
