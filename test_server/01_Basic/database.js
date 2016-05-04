var expect = require('chai').expect;
var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../server/config/dbconfig'));

var serverURL = 'http://127.0.0.1:1337';
var query = function(text, values, cb) {
  pg.connect(connectionString, function(err, client, done) {
    if (client === null) {
      throw new Error('Connection refused, are you sure your postgres is running?');
    }
    client.query(text, values, function (err, result) {
        done();
        cb(err, result);
    });
  });
};

describe('Basic Database Functions', function () {
  describe('Database', function () {
    it('will connect', function (done) {
      query('SELECT 1+1 AS solution', {}, function (err, result) {
        expect(typeof result).to.equal('object');
        done();
      });
    });
    it('has a user table', function (done) {
      query('SELECT * FROM users', {}, function(err, result) {
        expect(err).to.equal(null);
        done();
      });
    });
  });
// End describe('basic server functions', function () {
});
