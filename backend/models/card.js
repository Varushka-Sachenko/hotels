
const mongoose = require('mongoose');
const validator = require('validator');

const cardSchema = new mongoose.Schema({
  web: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, // имя — это строка
    required: false, // оно должно быть у каждого пользователя, так что имя — обязательное поле
  },
  name: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, // имя — это строка
    required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
  },
  description: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, 
    required: false, 
  },
  number: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, 
    required: false, 
  },
  mail: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, 
    required: false, 
  },
  vk: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, 
    required: false, 
  },
  region: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, 
    required: false, 
  },
  city: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, 
    required: false, 
  },
  adress: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, 
    required: false, 
  },
});

module.exports = mongoose.model('card', cardSchema);
