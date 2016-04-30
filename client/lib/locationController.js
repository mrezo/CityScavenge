// Get the curent user location and WatchID
// ======================================

module.exports = 'locationController';


// getWatchID returns a watchID. This id can be used to identify the requested position watcher
// this value can be used in tandem with clearPosition() to stop watching the user’s location
// the return valu

exports.getUserLocationAndWatchID = () => {
  let currentLocation = {};

  let showLocation = (position) => {
    currentLocation =
    {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    return currentLocation;
  };

  const geoError = () => {
    console.log('Finding geolocation failed.');
  };

  const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  const getWatchID = () => navigator.geolocation.watchPosition(showLocation, geoError, geoOptions);

  const watchID = getWatchID();

  return { currentLocation, watchID };
};

// stop watching the user's position when they reach the goal
exports.stopWatching = (watchID) => {
  navigator.geolocation.clearWatch(watchID);
};
