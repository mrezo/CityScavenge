var googleKey = require(__dirname + '/../config/googlemaps.js');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth');
var User = require(__dirname + '/../utils/userUtils.js');

// Middleware for checking whether the user is logged in
module.exports.checkAuth = function (req, res, next) {
  if (req.session.passport ? req.session.passport.user : false) {
    next();
  } else {
    req.session.error = 'Bad credentials.';
    res.redirect('/');
  }
};

module.exports.handleGoogleLogin = passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login']
});

module.exports.authenticateGoogleLogin = passport.authenticate('google', {
  failureRedirect: '/'
});

/*
serializeUser and deserializeUser are two required Passport methods that are
called when using sessions with Passport. Sessions are saved via cookies 
rather than via login credentials.
*/

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy.OAuth2Strategy({
  clientID: googleKey.CLIENT_ID,
  clientSecret: googleKey.CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, function(request, accessToken, refreshToken, profile, done) {
  // Create a user if it is a new user, otherwise just get the user from the DB
  User
    .findOrCreate({
      googleId: profile.id
    },
    function(err, user) {
      return done(err, user);
    });
  }));
