const express = require('express');
const Router = express.Router();

module.exports = Router
  .get('/', (req, res) => {
    res.send('This is working');
  });
