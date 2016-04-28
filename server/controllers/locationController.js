if ('geolocation' in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}


let watchID = navigator.geolocation.watchPosition(function(position) {
  renderOnMap(position.coords.latitude, position.coords.longitude);
});
  /* watchPosition returns a watchID. This id can be used to uniquely identify the requested position watcher; 
   this value can be used in tandem with the clearPosition() method to stop watching the user’s location */

function callback(position) {
  //options:
    //put current location in database
      //would be very heavy on DB
}

//stop watching the user's position when they reach the goal

const stopTracking = navigator.geolocation.clearWatch(watchID);

//counter: only update database every so often