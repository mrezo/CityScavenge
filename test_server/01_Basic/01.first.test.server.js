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
    var makeDELETE = function (endpoint, data, callback) {
      return requestWithSession({
        method: 'DELETE',
        followAllRedirects: true,
        uri: serverURL + endpoint,
        json: data,
      }, callback);
    };

    it('will respond to POST /api/v1/user', function (done) {
      makePOST('/api/v1/user',
        {
          google_id: '34623572452',
          name: 'Thomas Ingalls',
          displayname: 'Thomas',
        },
        function (error, res, body) {
          expect(error).to.equal(null);
          expect(res.statusCode).to.equal(200);
          done();
        }
      );
      makeDELETE('/api/v1/user',
        {
          google_id: '34623572452',
        },
        function (error, res, body) {
        }
      );
    });
  }); // END describe('Basic REST API endpoints' function () {
}); // END describe('Basic Server Functions', function () {
