var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/userModel.js');
var port = process.env.PORT || 1337;
var connection = process.env.WEBSITE_URL || 'http://localhost:1337';

var googleKey = {
  CLIENTID: process.env.GOOGLEKEY,
  CLIENTSECRET: process.env.GOOGLECLIENTSECRET,
};

if (!process.env.TRAVIS) {
  googleKey = require(__dirname + '/../config/googlemaps.js');
}

// Middleware for checking whether the user is logged in
exports.checkAuth = function (req, res, next) {
  if (req.session.passport ? req.session.passport.user : false) {
    next();
  } else {
    console.log('ckeckAuth error');
    req.session.error = 'Bad credentials.';
    res.redirect('/');
  }
};

exports.handleGoogleLogin = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ],
});

exports.authenticateGoogleLogin = passport.authenticate('google', {
  failureRedirect: '/',
});

exports.logout = function (req, res, next) {
  req.session.destroy();
  res.redirect('/');
};

passport.use(new GoogleStrategy({
  clientID: googleKey.CLIENTID,
  clientSecret: googleKey.CLIENTSECRET,
  callbackURL: connection + '/api/v1/auth/google/callback',
}, function (accessToken, refreshToken, profile, done) {
  User.findOrCreate(profile, function (err, user) {
    return done(err, user);
  });
}));

/*
serializeUser and deserializeUser are two required Passport methods that are
called when using sessions with Passport. Sessions are saved via cookies
rather than via login credentials.
*/

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
