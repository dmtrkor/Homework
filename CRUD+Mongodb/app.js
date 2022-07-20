// Сам веб сервер (приложение)
let express = require('express');
let app = express();

// Для технических сообщений
let logger = require('morgan');
app.use(logger('dev'));

// Для работы JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Для работы с куками
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Для статических файлов
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Для работы с базой данных
require("./config/mongo").connect();

/**
 * Маршрутизация
 */

// Для главной страницы
let indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Для блока пользователей

// Для работы со студентами
let clubsRouter = require('./routes/club');
app.use('/api/clubs', clubsRouter);



// ...
// для работы с продуктами, елками, животными ... e.t.c.
// ...


// Подготовка модуля к работе
module.exports = app;
