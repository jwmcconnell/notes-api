const bcrypt = require('bcrypt-nodejs');
const User = require('../lib/models/User');
const Login = require('../lib/models/Login');

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
    return User.create({ name, email })
      .then(res => {
        const hash = bcrypt.hashSync(password);
        Login.create({ email, hash, _id: res._id });
      });
  }));
}

module.exports = seedData;
