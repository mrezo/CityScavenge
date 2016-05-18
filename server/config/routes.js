var path = require('path');
var passport = require('passport');
var finishLineController = require(path.join(__dirname, '../controllers/finishLineController'));
var auth = require(__dirname + '/../auth/auth.js');
var User = require(path.join(__dirname, '../models/userModel.js'));
var Game = require(path.join(__dirname, '../models/gameModel.js'));

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/v1/user', User.newUser);
  app.get('/api/v1/user', User.findCurrentUser);
  app.delete('/api/v1/user', User.deleteUser);

  // location routing
  app.post('/api/v1/game', finishLineController.searchGoogle);
  app.post('/api/v1/game/photosubmit', finishLineController.getDistance);

  // game routing
  app.post('/api/v1/game/new', Game.createNew);
  app.get('/api/v1/game/old', Game.retrieveOldGames);

  // google auth routes
  app.post('/api/login', auth.checkAuth);
  app.get('/api/v1/auth/google', auth.handleGoogleLogin);
  app.get('/api/v1/logout', auth.logout);
  app.get('/api/v1/auth/google/callback', auth.authenticateGoogleLogin,
    function (req, res) {
      res.redirect('/#/dashboard');
    }
  );
};
