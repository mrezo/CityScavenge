var path = require('path');
var userUtils = require(path.join(__dirname, '../utils/userUtils'));
var finishLineController = require(path.join(__dirname, '../controllers/finishLineController'));
var auth = require(__dirname + '/../auth/auth.js');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user', userUtils.newUser);
  app.get('/api/user/:id', userUtils.allUsers);

  // location routing
  app.get('/api/geo/gamestart', finishLineController.searchGoogle);
  app.post('/api/geo/distance', finishLineController.getDistance);

  // google auth routes
  app.post('/api/login', auth.checkAuth);

  app.get('/auth/google', auth.handleGoogleLogin);

  app.get('/auth/google/callback', auth.authenticateGoogleLogin,
    function (req, res) {
      res.redirect('/home');
    }
  );

  app.get('/auth/logout', function (req, res) {
    req.session.destroy(function () {
      res.redirect('/');
    });
  }
    // req.logout();
    // res.redirect('/')
  );

};
