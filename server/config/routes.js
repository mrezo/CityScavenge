var path = require('path');
var passport = require('passport');
var userUtils = require(path.join(__dirname, '../utils/userUtils'));
var finishLineController = require(path.join(__dirname, '../controllers/finishLineController'));
var auth = require(__dirname + '/../auth/auth.js');
var User = require('../models/userModel.js');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/v1/user', userUtils.newUser);
  app.get('/api/v1/user/:id', userUtils.allUsers);

  // location routing
  app.get('/api/v1/geo/gamestart', finishLineController.searchGoogle);
  app.post('/api/v1/geo/distance', finishLineController.getDistance);

  // google auth routes
  app.post('/api/login', auth.checkAuth);

  app.get('/auth/google', auth.handleGoogleLogin);
  app.get('/api/v1/logout', auth.logout);
  app.get('/auth/google/callback', auth.authenticateGoogleLogin,
    function (req, res) {
      res.redirect('http://localhost:1337/#/dashboard');
    }
  );
};
