const express = require('express');
const Router = express.Router();

module.exports = Router
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
