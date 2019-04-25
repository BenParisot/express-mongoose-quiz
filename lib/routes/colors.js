const { Router } = require('express');
const Color = require('../models/Color');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      name,
      hex,
      red,
      blue,
      green
    } = req.body;
    Color
      .create({ name, hex, red, blue, green })
      .then(color => res.send(color))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Color
      .find()
      .then(colors => res.send(colors))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Color
      .findById(req.params.id)
      .then(color => res.send(color))
      .catch(next);
  });
