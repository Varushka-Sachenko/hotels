const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
// экспортируем его
module.exports = router;

const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

const validateURL = (value) => {
  if (!validator.isURL(value, { require_protocol: true })) {
    throw new Error('Неправильный формат ссылки');
  }
  return value;
};


router.get('/', getCards);


