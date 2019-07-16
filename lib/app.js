const morgan = require('morgan');
const express = require('express');
const app = express();

const users = require('./routes/users');

app.use(express.json());

app.use(morgan('combined'));

app.use('/api/v1/users', users);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  res.send({ error: err, message: err.message });
});

module.exports = app;
