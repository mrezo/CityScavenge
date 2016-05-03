var expect = require('chai').expect;
var request = require('request');

var requestWithSession = request.defaults({jar: true});
var serverURL = 'http://127.0.0.1:1337';

describe('Basic Server Functions', function () {
  describe('Server', function () {
    it('will serve the homepage', function (done) {
      var options = {
        method: 'GET',
        uri: serverURL,
      };

      requestWithSession(options, function(error, res, body) {
        if (error && error.code === 'ECONNREFUSED') {
          throw new Error('Connection refused, are you sure your server is running?');
        }
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('Basic REST API endpoints', function () {
    var makeGET = function (endpoint, callback) {
      return requestWithSession({
        method: 'GET',
        followAllRedirects: true,
        uri: serverURL + endpoint,
      }, callback);
    };
    var makePOST = function (endpoint, data, callback) {
      return requestWithSession({
        method: 'POST',
        followAllRedirects: true,
        uri: serverURL + endpoint,
        json: data,
      }, callback);
    };

    it('will respond to GET /api/user/:id', function (done) {
      makeGET('/api/user/1', function(error, res, body) {
        expect(error).to.equal(null);
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('will respond to POST /api/user', function(done) {
      makePOST('/api/user',
        {
          username: 'Test',
        },
        function(error, res, body) {
          expect(error).to.equal(null);
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

  }); // END describe('Basic REST API endpoints' function () {

}); // END describe('Basic Server Functions', function () {

