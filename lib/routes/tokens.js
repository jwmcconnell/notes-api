const bcrypt = require('bcrypt-nodejs');
const express = require('express');
const Router = express.Router();

const User = require('../models/User');

module.exports = Router
  .post('/', (req, res, next) => {
    const { email, password } = req.body;
    const hash = bcrypt.hashSync(password);
    User
      .find({ email })
      .then(users => {
        const user = users[0];
        console.log(user);

        if(!user) {
          const err = {
            status: 404,
            message: 'Could not find user'
          };
          next(err);
        }


      });
  });
