const geoSuccess = function(position) {
  //TODO: save position to database - only every so often
  renderOnMap(position.coords.latitude, position.coords.longitude);
}

const geoError = function() {
  console.log('Finding geolocation failed.');
}

const geoOptions = {
  enableHighAccuracy: true,
  maximumAge        : 30000,
  timeout           : 27000
 };

  /* watchPosition returns a watchID. This id can be used to uniquely identify the requested position watcher; 
   this value can be used in tandem with the clearPosition() method to stop watching the user’s location */

let watchID = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);

//stop watching the user's position when they reach the goal

//TODO: define latitude and longitude
if (position.coords.latitude === position.coords.longitude) {
  navigator.geolocation.clearWatch(watchID);
  //call success function
}

/* TODO: handle no geolocation found
if ('geolocation' in navigator) {

} else {

}

*/