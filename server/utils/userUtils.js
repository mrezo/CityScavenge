var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../config/dbconfig'));

module.exports = (function(req, res) {
  var userUtils = {
    newUser: function(req, res) {
      pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if (err) {
          done();
          console.log(err);
        }

        // SQL Query > Add data
        var queryAddUser = client.query("INSERT INTO users (username) VALUES ($1)", [req.body.username]);
        queryAddUser.on('end', function() {
          done();
        });

        // SQL Query > Retrieve data
        var queryRetrieveUser = client.query("SELECT * FROM users WHERE username = $1", [req.body.username]);
        var result = [];
        // Stream results back one row at a time
        queryRetrieveUser.on('row', function(row) {
          result.push(row);
        });
        queryRetrieveUser.on('end', function() {
          done();
          return res.json(results);
        });
      });
    },
    allUsers: function(req, res) {
      pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if (err) {
          done();
          console.log(err);
        }

        // SQL Query > Retrieve data
        var queryAddUser = client.query("SELECT * FROM users");
        var results = [];
        // Stream results back one row at a time
        queryAddUser.on('row', function(row) {
          results.push(row);
        });
        queryAddUser.on('end', function() {
          done();
          return res.json(results);
        });
      });
    },
  };

  return userUtils;
})();
