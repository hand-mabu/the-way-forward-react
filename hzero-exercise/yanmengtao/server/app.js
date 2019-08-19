var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var crawlerRouter = require('./routes/crawler');

var app = express();

app.options('*', cors())

app.use(cors({
  origin: ['http://localhost:3000/'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Conten-Type', 'Authorization'],
}));

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 解析token获取用户信息
app.use(function (req, res, next) {
  var token = req.headers['authorization'];
  if (token === undefined) {
    res.status(401);
    res.send();
  } else {
    next();
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/crawler', crawlerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('404');
  next(createError(404));
});

// You must provide four arguments to identify it as an error-handling middleware function. 
// error handler
app.use(function (err, req, res, next) {
  console.log('error');
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
