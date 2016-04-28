var expect = require('chai').expect;
var request = require('request');

var db = require('../../server/config/db.js');
var User = require('../../server/models/user.js');

var requestWithSession = request.defaults({jar: true});
var serverURL = 'http://127.0.0.1:1337';

describe('Basic Server Functions', function () {
  describe('Server', function () {
    it('will serve the homepage', function (done) {
      var options = {
        'method': 'GET',
        'uri': serverURL
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
        'method': 'GET',
        'followAllRedirects': true,
        'uri': serverURL + endpoint
      }, callback);
    };
    var makePOST = function (endpoint, data, callback) {
      return requestWithSession({
        'method': 'POST',
        'followAllRedirects': true,
        'uri': serverURL + endpoint,
        'json': data
      }, callback);
    };
    
    it('will respond to GET /api/user/encounters/:userName', function (done) {
      makeGET('/api/user/encounters/bob123456', function(error, res, body) {
        expect(error).to.equal(null);
        expect(res.statusCode).to.equal(401);
        done();
      });
    });

    it('will respond to GET /api/recentencounters', function (done) {
      makeGET('/api/recentencounters', function(error, res, body) {
        expect(error).to.equal(null);
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('will respond to POST /api/user/encounter', function(done) {
      makePOST('/api/user/encounter',
        {
          userid: 1,
          title: 'Marmot',
          description: 'It stole my stuff',
          location: 'Yosemite',
          encountertime: '2016-04-14',
          photo: 'nophoto.com'
        }, 
        function(error, res, body) {
          expect(error).to.equal(null);
          expect(res.statusCode).to.equal(401);
          done();
        });
    });

  }); //END describe('Basic REST API endpoints' function () {

}); //END describe('Basic Server Functions', function () {

