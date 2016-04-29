var path = require('path');
var userUtils = require(path.join(__dirname, '../utils/userUtils'));

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user/newUser', userUtils.newUser);
  app.get('/api/user/retrieveUsers', userUtils.allUsers);
};
