const express = require('express');
const Router = express.Router();

const User = require('../models/User');

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
  });
