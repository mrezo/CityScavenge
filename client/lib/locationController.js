// Get the curent user location and WatchID
// ======================================

// getWatchID returns a watchID. This id can be used to identify the requested position watcher
// this value can be used in tandem with clearPosition() to stop watching the user’s location
// the return valu

import { placeUserMarker, createMap } from '../actions/map';

export const getUserLocationAndWatchID = (dispatch) => {
  let currentLocation = {};

  let showLocation = (position) => {
    console.log('Position', position);
    currentLocation =
    {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    // TODO: Pass Map as argument
    dispatch(placeUserMarker(0, 'Michael', currentLocation));
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
export const stopWatching = (watchID) => {
  navigator.geolocation.clearWatch(watchID);
};

export const initialPosition = (dispatch, cb) => {
  let currentLocation;

  let showLocation = (position) => {
    currentLocation =
    {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    dispatch(createMap(currentLocation));
    cb(currentLocation);
  };

  const geoError = () => {
    console.log('Finding geolocation failed.');
  };

  const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  const getWatchID = () => navigator.geolocation.getCurrentPosition(showLocation, geoError, geoOptions);

  const watchID = getWatchID();
  return { currentLocation, watchID };
}