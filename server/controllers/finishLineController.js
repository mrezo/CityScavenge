var urlParser = require('url');
var rp = require('request-promise');
// var userLocation = require('./locationController');
var GOOGLE_PLACES_API_KEY = process.env.GOOGLEPLACESAPIKEY;
var _ = require('underscore');

if (!process.env.TRAVIS) {
  GOOGLE_PLACES_API_KEY = require(__dirname + '/../config/googleplaces.js');
}

var endpoint = {
  latitude: 0,
  longitude: 0,
};

// Dummy data
var userLocation = {
  latitude: 37.7837731,
  longitude: -122.4090172,
};

var radius = 3200;

var PlacesObj = function (googlePlacesData) {
  return {
    name: googlePlacesData.name,
    address: googlePlacesData['formatted_address'],
    googlePlaceId: googlePlacesData['place_id'],
    latitude: googlePlacesData['geometry']['location']['lat'],
    longitude: googlePlacesData['geometry']['location']['lng'],
    url: '',
    rating: Math.round(googlePlacesData.rating),
    numberOfReviews: googlePlacesData.reviews.length,
  };
};


module.exports.searchGoogle = function (req, res) {
  var responseBody = {};
  responseBody.places = [];

  rp.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + '&location=' + userLocation.latitude + ',' + userLocation.longitude
      + '&radius=' + radius
      + '&key=' + GOOGLE_PLACES_API_KEY
      + '&types=' + 'park|bar|restaurant|cafe|point_of_interest|natural_feature'
    )
    .then(function (body) {
      // parse the data
      var data = JSON.parse(body);
      // check that there is data
      if (data.results && data.results.length > 3) {
        // randomly pick a location
        var allCheckpoints = [];
        while (allCheckpoints.length < 3) {
          var rand = Math.floor(Math.random() * data.results.length);
          allCheckpoints.push(data.results[rand]);
        }
        return allCheckpoints;
      }
    })
    .catch(function (err) {
      console.log('google places API call failure', err);
    })
    .then(function (places) {
      // places will be an array of four objects that represent each checkpoint
      var allPlacesObjects = [];
      for (var i = 0; i < places.length; i++) {
        var currentPlaceObject = rp.get('https://maps.googleapis.com/maps/api/place/details/json?'
          + 'key=' + GOOGLE_PLACES_API_KEY
          + '&placeid=' + places[i].place_id
        );
        allPlacesObjects.push(currentPlaceObject);
      }
      return allPlacesObjects;
    })
    .then(function (locationData) {
      // locationData is an array of four objects
      //console.log(locationData.result, 'this is location data.result');
      var formattedLocationsToSendBack = [];
      for (var i = 0; i < locationData.length; i++) {
        var formattedLocation = JSON.parse(locationData[i]).result;
        formattedLocationsToSendBack.push(PlacesObj(formattedLocation));
      }
      endpoint.latitude = formattedLocation[0].geometry.location.lat;
      endpoint.longitude = formattedLocation[0].geometry.location.lng;
      res.json(formattedLocationsToSendBack);
    }
    );
};

module.exports.getDistance = function (req, res) {
  rp.get('https://maps.googleapis.com/maps/api/distancematrix/json?'
    + 'units=imperial'
    + '&origins=' + +req.body.userLatitude + ',' + +req.body.userLongitude
    + '&destinations=' + +req.body.endpointLatitude + '%2C' + +req.body.endpointLongitude
    + '&key=' + GOOGLE_PLACES_API_KEY
  )
  .catch(function (err) {
    console.log('Google Distance Matrix API call failure', err);
  })
  .then(function (body) {
    var collision = false;
    console.log(JSON.parse(body).rows[0].elements[0].distance.value);
    if (JSON.parse(body).rows[0].elements[0].distance.value <= 2000) {
      collision = true;
      console.log('You win!');
    }
    res.json(collision);
  });
};
