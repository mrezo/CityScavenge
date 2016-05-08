var googleKey = require(__dirname + '/../config/googlemaps.js');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/userModel.js');
var port = process.env.PORT || 1337;
var callbackServer = '';

if (process.env.SERVER === 'LIVE') {
  callbackServer = 'http://faunadex.willfulbard.com';
  if (port !== 80) {
    callbackServer += ':' + port;
  }
} else {
  callbackServer = 'http://localhost';
  if (port !== 80) {
    callbackServer += ':' + port;
  }
}
// Middleware for checking whether the user is logged in
exports.checkAuth = function (req, res, next) {
  if (req.session.passport ? req.session.passport.user : false) {
    next();
  } else {
    req.session.error = 'Bad credentials.';
    res.redirect('/');
  }
};

exports.handleGoogleLogin = passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login'],
});

exports.authenticateGoogleLogin = passport.authenticate('google', {
  failureRedirect: '/',
});

/*
serializeUser and deserializeUser are two required Passport methods that are
called when using sessions with Passport. Sessions are saved via cookies
rather than via login credentials.
*/

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  if (user) {
    User.findUser('google_id', user.id, function (err, user) {
      if (err) {
        return done(err);
      }
      done(err, user);
    });
  }
});

passport.use(new GoogleStrategy({
  clientID: googleKey.CLIENT_ID,
  clientSecret: googleKey.CLIENT_SECRET,
  callbackURL: callbackServer + '/auth/google/callback',
}, function (accessToken, refreshToken, profile, done) {
  // Create a user if it is a new user, otherwise just get the user from the DB
  User.findUser('google_id', profile.id, function (err, user) {
    return done(err, user);
  });
}));
