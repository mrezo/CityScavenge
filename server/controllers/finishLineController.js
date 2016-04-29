var Place = require(__dirname + '/placeModel.js');
var User = require(__dirname + '/../users/userModel.js');
var GOOGLE_PLACES_API_KEY = require(__dirname + '/../config/googleplaces.js');
var request = require('request');
var urlParser = require('url');
var async = require('async');
var rp = require('request-promise'); 


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
  }
}


module.exports.searchGoogle = function(req, res) {

  var searchString = urlParser.parse(req.url).search; //include leading question mark

  var responseBody = {};
  responseBody.places = [];
  var cap = 10;
  var entered = 0;

  rp.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + '&location=' + '37.7836970,-122.4089660'
      + '&radius=' +  3200
      + '&key=' + GOOGLE_PLACES_API_KEY
      + '&types=' + 'park|bar|restaurant|cafe|point_of_interest|natural_feature'
    )
    .then(function(body){
      var data = JSON.parse(body);                   //parse the data
      console.log('this is the refined data', data.results.length);
      if (data.results && data.results.length > 0) { //check that there is data
        return data.results;
      }
    })
    .catch(function(err){
      console.log('google places API call failure', err);
    })
    .then(function(places){
      async.map(places, function(place) {
        rp.get('https://maps.googleapis.com/maps/api/place/details/json?'
                + 'key=' + GOOGLE_PLACES_API_KEY
                + '&placeid=' + place.place_id
              )
              .then(function(locationData){
                var formattedLocation = JSON.parse(locationData).result;
                var placesObj = PlacesObj(formattedLocation);
                flickr.search(placesObj, responseBody, res)
                  .then(function(data){
                   if(data){
                    entered++;
                   }
                   if (entered === cap) {
                    res.json(responseBody);
                   } else if (entered === places.length) {
                    res.json(responseBody);
                   }
                  });
              })
        })
    });
};



