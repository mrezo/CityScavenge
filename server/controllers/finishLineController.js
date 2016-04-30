var GOOGLE_PLACES_API_KEY = require(__dirname + './../config/googleplaces.js');
var urlParser = require('url');
var rp = require('request-promise'); 
// var userLocation = require('./locationController');

var endpoint = {
  latitude: 0,
  longitude: 0,
};

// Dummy data
userLocation = {
  latitude: 37.7837731,
  longitude: -122.4090172,
};

var PlacesObj = function(googlePlacesData) {
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


module.exports.searchGoogle = function(req, res) {

  var responseBody = {};
  responseBody.places = [];

  rp.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + '&location=' + userLocation.latitude + ',' + userLocation.longitude
      + '&radius=' +  3200
      + '&key=' + GOOGLE_PLACES_API_KEY
      + '&types=' + 'park|bar|restaurant|cafe|point_of_interest|natural_feature'
    )
    .then(function(body){
      // parse the data
      var data = JSON.parse(body);
      // check that there is data
      if (data.results && data.results.length > 0) {
        // randomly pick a location
        var rand = Math.floor(Math.random() * data.results.length);
        return data.results[rand];
      }
    })
    .catch(function(err){
      console.log('google places API call failure', err);
    })
    .then(function(place) {
        rp.get('https://maps.googleapis.com/maps/api/place/details/json?'
                + 'key=' + GOOGLE_PLACES_API_KEY
                + '&placeid=' + place.place_id
              )
              .then(function(locationData){
                var formattedLocation = JSON.parse(locationData).result;
                var placesObj = PlacesObj(formattedLocation);
                endpoint.latitude = formattedLocation.geometry.location.lat;
                endpoint.longitude = formattedLocation.geometry.location.lng;
                res.json(placesObj);
              }
              );
    });
};

module.exports.getDistance = function(req, res) {
  rp.get('https://maps.googleapis.com/maps/api/distancematrix/json?'
    + 'units=imperial'
    + '&origins=' + +req.body.userLatitude + ',' + +req.body.userLongitude
    + '&destinations=' + +req.body.endpointLatitude + '%2C' + +req.body.endpointLongitude
    + '&key=' + GOOGLE_PLACES_API_KEY
  )
  .catch(function(err){
    console.log('Google Distance Matrix API call failure', err);
  })
  .then(function (body) {
    if (JSON.parse(body).rows[0].elements[0].distance.value <= 2000) {
      console.log('You win!');
    }
    res.json(JSON.parse(body));
  });
};
