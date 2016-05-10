var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session')
var cookieParser = require('cookie-parser')

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};
