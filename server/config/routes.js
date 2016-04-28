var path = require('path');
var userUtils = require('../utils/userUtils.js');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user', function() {console.log('post')});
  app.get('/api/user', function() {console.log('get')});
};
