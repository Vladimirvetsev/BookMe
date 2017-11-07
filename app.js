var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
// var mongoose = require('mongoose')
var session= require('express-session')
var _ = require('lodash');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) {
          var err = new Error();
          err.code = 'filetype';
          return cb(err);
      } else {
          cb(null, file.originalname);
      }
  }
});
var upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }
}).single('myfile');

var mongodb=require('mongodb');
var monk=require('monk');
var db = monk('localhost:27017/bookMe_data_base');

var app = express();

var index = require('./routes/index');
var hotels = require('./routes/hotels');
// var viewdetails = require('./routes/viewdetails');
var users = require('./routes/users');
var login = require('./routes/login');

app.use(function(req,resp,next){
    req.db=db;
    next();
  })

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'bookingPassword'}));

app.use('/', index);
app.use('/hotels', hotels);
app.use('/users', users);
app.use('/login', login);
// mongoose.connect('mongodb://localhost/' + db);
app.post('/upload', function(req, res) {
  upload(req, res, function(err) {
      if (err) {
          if (err.code === 'LIMIT_FILE_SIZE') {
              res.json({ success: false, message: 'File size is too large. Max limit is 10MB' });
          } else if (err.code === 'filetype') {
              res.json({ success: false, message: 'Filetype is invalid. Must be .png' });
          } else {
              res.json({ success: false, message: 'Unable to upload file' });
          }
      } else {
          if (!req.file) {
              res.json({ success: false, message: 'No file was selected' });
          } else {
              res.json({ success: true, message: 'File uploaded!' });
          }
      }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
