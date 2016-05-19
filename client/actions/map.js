import 'isomorphic-fetch';
import { socket } from '../socketIO';

export const createMap = (map, lat, lng) => {
  return {
    type: 'CREATE_MAP',
    map,
    lat,
    lng,
  };
};

// Finish Point actions

export const setFinishPoint = (lat, lng) => {
  return {
    type: 'SET_FINISHPOINT',
    lat,
    lng,
  };
};

export const getFinishPoint = (dispatch) => {
  fetch('api/v1/game', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    if (response.status >= 400) {
      console.log('Server error', response);
    }
    return response.json();
  })
  .then((data) => {
    socket.setFinishPoint(data[0].latitude, data[0].longitude);
    dispatch(setFinishPoint(data[0].latitude, data[0].longitude));
    for (var i = 1; i < data.length; i++) {
      socket.setCheckpoint(data[i].latitude, data[i].longitude);
      dispatch(setCheckpoint(data[i].latitude, data[i].longitude));
    }
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};

export const placeFinishPoint = (map, lat, lng) => {
  return {
    type: 'PLACE_FINISHPOINT',
    map,
    lat,
    lng,
  };
};

// Modifies the user's collision boolean in the finishpoint's user list
// After it has checked all the checkpoint's user collisions
export const finishPointCollision = (userTitle, timeIn, locTitle) => {
  return {
    type: 'FINISHPOINT_COLLISION',
    userTitle,
    timeIn,
    locTitle,
  };
};

export const updateFinishPoint = (marker, lat, lng) => {
  return {
    type: 'UPDATE_FINISHPOINT',
    marker,
    lat,
    lng,
  };
};

// Checkpoint actions

export const setCheckpoint = (lat, lng) => {
  return {
    type: 'SET_CHECKPOINT',
    lat,
    lng,
  };
};

export const placeCheckpoint = (map, lat, lng) => {
  return {
    type: 'PLACE_CHECKPOINT',
    map,
    lat,
    lng,
  };
};

// User actions

export const getUserCoords = (lat, lng) => {
  return {
    type: 'GET_USER_COORDS',
    lat,
    lng,
  };
};

export const placeUserMarker = (map, title, data) => {
  return {
    type: 'PLACE_USER_MARKER',
    map,
    title,
    lat: data.latitude,
    lng: data.longitude,
  };
};

export const deleteUserMarker = (title) => {
  return {
    type: 'DELETE_USER_MARKER',
    title,
  };
};
