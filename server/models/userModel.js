var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../config/dbconfig'));
var db = require(path.join(__dirname, '../utils/utils'));

module.exports = {
  findCurrentUser: function(req, res) {
    db.query({
      text: "SELECT * FROM users WHERE id = $1",
      values: [req.session.passport.user.id],
    }, function (err, data) {
      return res.json(data.rows[0]);
    });
  },
  findUser: function(field, value, cb) {
    pg.connect(connectionString, function(err, client, done) {
      // Handle connection errors
      if (err) {
        done();
      }
      // SQL Query > Retrieve data
      var queryFindUserString = "SELECT * FROM users WHERE " + field + " = '" + value + "'";
      // var queryFindUser = client.query("SELECT * FROM users WHERE google_id = '114510016389042396254'");
      var queryFindUser = client.query(queryFindUserString, [], function (err, result) {
        done();
        return cb(null, result.rows);
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
  findOrCreate: function (profile, cb) {
    pg.connect(connectionString, function (err, client, done) {
      if (err) {
        done();
      }
      var queryFindUserString = "SELECT * FROM users WHERE google_id = '" + profile.id + "'";
      client.query(queryFindUserString, [], function(err, result) {
        if (err) {
          done();
          return cb(err, null);
        }
        if (!result.rows[0]) {
          client.query('INSERT INTO users '
          + '(displayname, google_id, name, avatar) '
          + 'VALUES ($1, $2, $3, $4)', [profile.displayName, profile.id, profile.name.givenName, profile.photos[0].value], function (err, results) {
            if (err) {
              done();
              return cb(err, null);
            }
            client.query('SELECT * FROM users '
            + 'WHERE google_id = $1', [profile.id], function (err, user) {
              if (err) {
                done();
                return cb(err, null);
              }
              done();
              return cb(null, user.rows[0]);
            });
          });
        } else {
          done();
          return cb(null, result.rows[0]);
        }
      });
    });
  },
  allUsers: function(req, res) {
    db.query({
      text: "SELECT * FROM users",
      values: [],
    }, function (err, data) {
      return res.json(data.rows);
    });
  },
  newUser: function(req, res) {
    if (!req.body.avatar) {
      req.body.avatar = '';
    }
    if (!req.body.total_places_visited) {
      req.body.total_places_visited = 0;
    }
    if (!req.body.total_distance) {
      req.body.total_distance = 0.00;
    }
    if (!req.body.games_played) {
      req.body.games_played = 0;
    }
    db.query({
      text: "INSERT INTO users (google_id, name, displayname, avatar, total_places_visited, total_distance, games_played) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      values: [req.body.google_id, req.body.name, req.body.displayname, req.body.avatar, req.body.total_places_visited, req.body.total_distance, req.body.games_played],
    }, function (err, data) {
      if (data) {
        return res.json(data.rows[0]);
      } else {
        return res.json('No Data');
      }
    });
  },
  deleteUser: function (req, res) {
    db.query({
      text: "DELETE FROM users WHERE google_id = $1 RETURNING *",
      values: [req.body.google_id],
    }, function (err, data) {
      return res.json(data[0]);
    });
  },
  // retrieveUserStats: function (req, res) {
  //   // retrieves a user's stats including
  //   // all games played, total games won, total games finished,
  //   // total places, total_places_visited, total_distance, # of actions used
  //   // nemesis, ally, and enemy
  //   db.query({
  //   }, function (err, stats) {
  //   });
  // },
};
