const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
// экспортируем его
module.exports = router;

const {
  getCards
} = require('../controllers/cards');

const validateURL = (value) => {
  if (!validator.isURL(value, { require_protocol: true })) {
    throw new Error('Неправильный формат ссылки');
  }
  return value;
};


router.get('/cards', getCards);


