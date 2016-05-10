import 'isomorphic-fetch';

export const createMap = (googleMap, data) => {
  return {
    type: 'CREATE_MAP',
    googleMap,
    lat: data.latitude,
    lng: data.longitude,
  };
};

export const startGame = (dispatch, googleMap) => {
  fetch('api/geo/gamestart', {
    method: 'GET',
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
    dispatch(placeFinishPoint(googleMap, data.latitude, data.longitude));
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};

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

export const placeCheckpoint = (map, title, lat, lng) => {
  return {
    type: 'PLACE_CHECKPOINT',
    map,
    title,
    lat,
    lng,
  };
};

// Modifies the user's collision boolean in the checkpoint's user list
export const checkpointCollision = (locTitle, userTitle) => {
  return {
    type: 'CHECKPOINT_COLLISION',
    locTitle,
    userTitle,
  };
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
