const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const db = require('./database.js');
var compression = require('compression');
var helmet = require('helmet');

const indexRouter = require('./routes/index');
const clientRouter = require('./routes/client');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(compression()); //Compress all routes
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clients', clientRouter);  
// Add client routes to middleware chain.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

db.connectToDB();
  
module.exports = app;




