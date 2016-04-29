var GOOGLE_PLACES_API_KEY = require(__dirname + '/../config/googleplaces.js');
var urlParser = require('url');
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

  var responseBody = {};
  responseBody.places = [];

  rp.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + '&location=' + '37.7836970,-122.4089660' //TODO: grab current location
      + '&radius=' +  3200
      + '&key=' + GOOGLE_PLACES_API_KEY
      + '&types=' + 'park|bar|restaurant|cafe|point_of_interest|natural_feature'
    )
    .then(function(body){
      var data = JSON.parse(body);                   //parse the data
      if (data.results && data.results.length > 0) { //check that there is data
        return data.results[0]; //TODO: randomize chosen location
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
                  res.json(placesObj);
              }
              );
    });
};
