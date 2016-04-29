var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, 'config/dbconfig'));

pg.connect(connectionString, function(err, client, done) {
  // Handle connection errors
  if (err) {
    done();
    console.log(err);
  }

  // add dummy user
  var queryAddUser = client.query("INSERT INTO users (username) VALUES ($1), ($2), ($3)", ['Genevieve', 'Michael', 'Alexander']);

  queryAddUser.on('end', function() {
    done();
  });
});
