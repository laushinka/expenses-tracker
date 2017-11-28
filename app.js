const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
    res.render('index')
})

module.exports = app;