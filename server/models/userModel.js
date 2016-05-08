var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../config/dbconfig'));

module.exports = {
  users: {
    findUser: function(field, value, cb) {
      pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if (err) {
          done();
          console.log('findUser error: ', err);
        }

        // SQL Query > Retrieve data
        var queryAddUser = client.query('SELECT * FROM users '
          + 'WHERE $1 = $2', [field, value]);
        var results = [];
        // Stream results back one row at a time
        queryAddUser.on('row', function (row) {
          results.push(row);
        });
        queryAddUser.on('end', function () {
          done();
          return cb(null, results);
        });
      });
    },
    createUser: function (displayname, googleid, name, cb) {
      pg.connect(connectionString, function (err, client, done) {
        if (err) {
          done();
          console.log('createUser error: ', err);
        }
        var queryAddUser = client.query('INSERT INTO users '
          + '(displayname, google_id, name) '
          + 'VALUES ($1, $2, $3)', [displayname, googleid, name]);
        queryAddUser.on('end', function () {
          done();
          var queryRetrieveUser = client.query('SELECT * FROM users '
            + 'WHERE displayname = $1', [displayname]);
          var result = [];
          queryRetrieveUser.on('row', function (row) {
            result.push(row);
          });
          queryRetrieveUser.on('end', function () {
            done();
            return cb(null, result);
          });
        });
      });
    },
  },
};
