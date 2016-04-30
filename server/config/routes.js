var path = require('path');
var userUtils = require(path.join(__dirname, '../utils/userUtils'));
var finishLineController = require(path.join(__dirname, '../controllers/finishLineController'));

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user', userUtils.newUser);
  app.get('/api/user/:id', userUtils.allUsers);

  // below routes are no longer in use
  app.get('/api/geo/gamestart', finishLineController.searchGoogle);
  app.post('/api/geo/distance', finishLineController.getDistance);
};
