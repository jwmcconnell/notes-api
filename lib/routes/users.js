const bcrypt = require('bcrypt-nodejs');
const express = require('express');
const Router = express.Router();

const User = require('../models/User');
const Login = require('../models/Login');

module.exports = Router
  .get('/:id', (req, res, next) => {
    User
      .findById(req.params.id)
      .lean()
      .then(profile => res.send(profile))
      .catch(err => next(err));
  })
  .post('/', (req, res, next) => {
    const { email, name, password } = req.body;
    if(!email || !name || !password) {
      const err = {
        status: 400,
        message: 'Incorrect register submission'
      };

      next(err);
    }

    const hash = bcrypt.hashSync(password);

    Login
      .create({
        email,
        hash
      })
      .then(() => {
        User
          .create({
            name,
            email
          })
          .then(user => {
            res.send(user);
          });
      })
      .catch(next);
  });
