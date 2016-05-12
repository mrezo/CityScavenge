var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../config/dbconfig'));

module.exports = {
  query: function(obj, cb) {
    pg.connect(connectionString, function(err, client, done) {
      if (err) {
        done();
        console.log(err);
      }
      client.query(obj.text, obj.values, function (err, result) {
        done();
        cb(err, result);
      });
    });
  },
};
