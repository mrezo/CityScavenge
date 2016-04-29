var path = require('path');
var pg = require('pg');

module.exports = (function() {
  var connectionString = require(path.join(__dirname, 'config/dbconfig'));

  var client = new pg.Client(connectionString);

  client.connect();
})
