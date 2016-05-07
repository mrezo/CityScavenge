var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../config/dbconfig'));

module.exports = (function(req, res) {
  var userUtils = {
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
  newUser: function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
      if (err) {
        done();
        console.log(err);
      }
      var queryAddUser = client.query("INSERT INTO users (username, googleName, google_id) VALUES ($1, $2, $3)", [req.body.displayName, req.body.name, req.body.google_id]);
      queryAddUser.on('end', function () {
        done();
        var queryRetrieveUser = client.query("SELECT * FROM users WHERE username = $1", [req.body.displayName]);
        var result = [];
        queryRetrieveUser.on('row', function (row) {
          result.push(row);
        });
        queryRetrieveUser.on('end', function () {
          done();
          return res.json(result);
        });
      });
    });
  },
  findUser: function(field, value) {
    pg.connect(connectionString, function(err, client, done) {
      if (err) {
        done();
        console.log(err);
      }
        var queryRetrieveUser = client.query("SELECT * FROM users WHERE $1 = $2", [field, value]);
        var result = [];
        queryRetrieveUser.on('row', function (row) {
          result.push(row);
        });
        queryRetrieveUser.on('end', function () {
          done();
          return JSON.stringify(result);
        });
      });
    });
  },
};

  return userUtils;
})();
