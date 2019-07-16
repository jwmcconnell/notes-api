const User = require('../lib/models/User');

const seedUsers = [
  {
    name: 'Jack',
    email: 'jack@test.com',
  },
  {
    name: 'Lance',
    email: 'lance@test.com',
  }
];

function seedData() {
  return Promise.all(seedUsers.map(user => {
    const { name, email } = user;
    return User.create({ name, email });
  }));
}

module.exports = seedData;
