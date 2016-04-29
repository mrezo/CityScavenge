var geoSuccess = function(position) {
  var currentLocation =
    {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  //TODO: save position to database - only every so often
  renderOnMap(position.coords.latitude, position.coords.longitude);

  return currentLocation;
}

var geoError = function() {
  console.log('Finding geolocation failed.');
}

var geoOptions = {
  enableHighAccuracy: true,
  maximumAge        : 30000,
  timeout           : 27000,
 };

  /* watchPosition returns a watchID. This id can be used to uniquely identify the requested position watcher; 
   this value can be used in tandem with the clearPosition() method to stop watching the user’s location */

var watchID = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);

//stop watching the user's position when they reach the goal

//TODO: generate goal location
//TODO: write algorithm for radius of current location
if (currentLocation.latitude === goalLocation.latitude && currentLocation.longitude === goalLocation.longitude) {
  navigator.geolocation.clearWatch(watchID);
  //TODO: end game and declare winner
}
