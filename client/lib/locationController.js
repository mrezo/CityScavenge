// Get the curent user location and WatchID
// ======================================

// getWatchID returns a watchID. This id can be used to identify the requested position watcher
// this value can be used in tandem with clearPosition() to stop watching the user’s location

import { updateUserPosition } from '../actions/user';
import { socket, currentUser } from '../socketIO';

export const getUserLocationAndWatchID = (dispatch) => {
  let currentLocation = {};

  let showLocation = (position) => {
    currentLocation =
    {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    dispatch(updateUserPosition(currentLocation, currentUser.socketId));
    // socket emit /broadcast to the other users
    socket.emit('updateUserPosition', { coords: currentLocation, socketId: currentUser.socketId });
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
};

// For new connected users through sockets
// ================================================

export const newUserPosition = (callback) => {
  let currentLocation;


  let showLocation = (position) => {
    currentLocation =
    {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    callback(currentLocation);
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
};


