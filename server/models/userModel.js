var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../config/dbconfig'));

module.exports = {
  findUser: function(field, value, cb) {
    pg.connect(connectionString, function(err, client, done) {
      // Handle connection errors
      if (err) {
        done();
        console.log('findUser error: ', err);
      }
      var values = '' + value;
      // SQL Query > Retrieve data
      var queryFindUser = client.query("SELECT * FROM users WHERE google_id = '114510016389042396254'");
      // var queryAddUser = client.query('SELECT * FROM users '
      //   + "WHERE $1 = '" + values "'", [field], function(err, result) {
      //     console.log('yiss: ', result.row[0]);
      //   });
      var results = [];
      // Stream results back one row at a time
      queryFindUser.on('row', function (row) {
        results.push(row);
      });
      queryFindUser.on('end', function () {
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
  findOrCreate: function (displayname, googleid, name, cb) {
    pg.connect(connectionString, function (err, client, done) {
      if (err) {
        done();
        console.log('findOrCreate error: ', err);
      }
      client.query("SELECT * FROM users WHERE "
      + "google_id = '114510016389042396254'", [], function (err, result) {
        if (!result.rows[0]) {
          client.query('INSERT INTO users '
          + '(displayname, google_id, name) '
          + 'VALUES ($1, $2, $3)', [displayname, googleid, name], function (err, results) {
            client.query("SELECT * FROM users WHERE "
            + "google_id = '114510016389042396254'", [], function (err, user) {
              done();
              return cb(null, user.rows[0]);
            });
          });
        }
        done();
        return cb(null, result.rows[0]);
      });
    });
  },
};
