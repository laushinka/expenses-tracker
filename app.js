require('./database-connection');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expenseItem = require('./routes/expense-item');
const app = express();
app.locals.moment = require('moment');

app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'pug');

app.use('/expense', expenseItem);

app.get('/', (req, res, next) => {
    res.render('index')
})

module.exports = app;