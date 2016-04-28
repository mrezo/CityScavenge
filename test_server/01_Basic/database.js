var expect = require('chai').expect;

var db = require('../../server/config/db.js');
var User = require('../../server/models/user.js');

var serverURL = 'http://127.0.0.1:1337';

describe('Basic Database Functions', function () {
  describe('Database', function () {
    it('will connect', function (done) {
      db.knex.raw('SELECT 1+1 AS solution').then(function (response) {
        expect(response[0][0].solution).to.equal(2);
        done();
      });
    });
    it('has a user table', function (done) {
      db.knex.raw('SHOW TABLES LIKE \'users\'').then(function (response) {
        expect(response[0].length).to.equal(1);
        done();
      });
    });
    it('has a encounter table', function (done) {
      db.knex.raw('SHOW TABLES LIKE \'encounters\'').then(function (response) {
        expect(response[0].length).to.equal(1);
        done();
      });
    });
    it('has a forum table', function (done) {
      db.knex.raw('SHOW TABLES LIKE \'forums\'').then(function (response) {
        expect(response[0].length).to.equal(1);
        done();
      });
    });
    it('has a picture table', function (done) {
      db.knex.raw('SHOW TABLES LIKE \'pictures\'').then(function (response) {
        expect(response[0].length).to.equal(1);
        done();
      });
    });
    it('has a post table', function (done) {
      db.knex.raw('SHOW TABLES LIKE \'posts\'').then(function (response) {
        expect(response[0].length).to.equal(1);
        done();
      });
    });
    it('has a users_friend table', function (done) {
      db.knex.raw('SHOW TABLES LIKE \'users_friends\'').then(function (response) {
        expect(response[0].length).to.equal(1);
        done();
      });
    });
  });

}); //end describe('basic server functions', function () {

