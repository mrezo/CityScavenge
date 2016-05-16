var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(session(
    {
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false },
    }
  ));
  app.use(passport.session());
};
