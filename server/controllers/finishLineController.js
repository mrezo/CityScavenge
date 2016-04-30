var GOOGLE_PLACES_API_KEY = require(__dirname + '/../config/googleplaces.js');
var GOOGLE_MAP_API_KEY = require(__dirname + '/../config/googlemaps.js');
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
        // TODO: randomize chosen location
        return data.results[0];
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
    + '&origins=' + userLocation.latitude + ',' + userLocation.longitude
    + '&destinations=' + endpoint.latitude + '%2C' + endpoint.longitude
    + 'key=' + GOOGLE_MAP_API_KEY
  )
  .then(function (body) {
    res.json(JSON.parse(body));
  });
};
