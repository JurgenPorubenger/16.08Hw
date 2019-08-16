const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const indexRouter = require('./routes/index');
const addCar = require('./routes/addCar');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/addCar', addCar);


app.listen(3000, ()=>console.log('listen 3000'));

module.exports = app;