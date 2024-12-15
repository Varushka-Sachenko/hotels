require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { PORT = 3000 } = process.env;
const { errors } = require('celebrate');

const cards = require('./routes/cards');



const NotFoundError = require('./errors/notFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect('mongodb://localhost:27017/hotel_db', {
  useNewUrlParser: true,
});

hotels = [
  {
  _id: 12345,
  'Сайты': 'vk.com/bellagio386799',
  'Название': 'BELLAGIO KAFE|BAR',
  'Описание': 'балалалалалал',
  'Телефон': '3034903402203',
  },
  {
    _id: 12346,
    'Сайты': 'vk.com/bellagio386799',
    'Название': 'BELLAGIO KAFE|BAR',
    'Описание': 'баdfdfdfdfdfdfалал',
    'Телефон': '2323232-30-203',
    },

]
  


app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(requestLogger);


app.use('/', cards);

app.use(errorLogger);

app.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

app.use(errors());

app.use((err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  console.log('хрень')
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
  next();
});

// app.listen(PORT);
app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
