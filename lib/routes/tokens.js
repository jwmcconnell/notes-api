const bcrypt = require('bcrypt-nodejs');
const express = require('express');
const Router = express.Router();

const User = require('../models/User');

module.exports = Router
  .post('/', (req, res, next) => {
    const { email, password } = req.body;

    User
      .find({ email })
      .then(users => {
        const user = users[0];

        if(!user) {
          const err = {
            status: 404,
            message: 'Could not find user'
          };
          next(err);
        } else if(!bcrypt.compareSync(password, user.hash)) {
          const err = {
            status: 422,
            message: 'Password not valid'
          };
          next(err);
        } else {
          return user;
        }
      });
  });
