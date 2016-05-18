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
        });
      });
    });
  },
  retrieveOldGames: function (req, res) {
    // this will retrieve all the games a user has along with their
    // game name, game id, checkpoint id, checkpoint name, and checkpoint picture
    db.query({
      text: "SELECT g.id AS game_id, g.name AS game_name, c.id AS checkpoint_id, c.name AS checkpoint_name, c.picture AS checkpoint_picture FROM game g INNER JOIN game_user gu ON (g.id = gu.id_game) INNER JOIN users u ON (gu.id_users = u.id) INNER JOIN checkpoint c ON (g.id = c.id_game)  WHERE u.id = $1;",
      values: [req.session.passport.user.id],
    }, function (err, games) {
      // this will retrieve all the actions a user has with their
      // action_type, action_picture, who the source_user was, and who the receiver_user was
      db.query({
        text: "SELECT t.id_checkpoint, t.action, t.picture, t.source_user, t.receiver_user FROM task t WHERE t.receiver_user = $1 OR t.source_user = $1;",
        values: [req.session.passport.user.id],
      }, function (err, actions) {
        return res.json(
          {
            games: games.rows,
            actions: actions.rows,
          }
        );
      });
    });
  },
};
