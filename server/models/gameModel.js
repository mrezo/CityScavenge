var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../config/dbconfig'));
var db = require(path.join(__dirname, '../utils/utils'));

module.exports = {
  createNew: function (req, res) {
    db.query({
      text: "SELECT * FROM users WHERE id=$1",
      values: [req.session.passport.user.id],
    }, function (err, person) {
      db.query({
        text: "INSERT INTO game (name) VALUES ('null') RETURNING *",
        values: [],
      }, function (err, game) {
        db.query({
          text: "INSERT INTO game_user (id_users, id_game) VALUES ($1, $2) RETURNING *",
          values: [person.rows[0].id, game.rows[0].id],
        }, function (err, join) {
          return res.json(game.rows[0]);
        })
      });
    })
  },
};
