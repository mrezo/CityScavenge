//import fetch from 'isomorphic-fetch';
import 'isomorphic-fetch';

export const createMap = (data) => {
  console.log('createmap data', data);
  return {
    type: 'CREATE_MAP',
    lat: data.latitude,
    lng: data.longitude,
  };
};

export const startGame = (callback) => {
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
    console.log('HOPE THIS IS THE RIGHT DATA', data);
    callback(data);
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};

//dispatch(createMap(response.json()));

export const placeUserMarker = (data) => {
  return {
    type: 'PLACE_USER_MARKER',
    map,
    title,
    lat,
    lng,
  };
};

  // updateCoords() {
  //   $.ajax({
  //     type: 'POST',
  //     url: '/api/geo/distance',
  //     contentType: 'application/json',
  //     data: JSON.stringify({
  //       userLatitude: this.state.userLat,
  //       userLongitude: this.state.userLng,
  //       endpointLatitude: this.state.endLat,
  //       endpointLongitude: this.state.endLng,
  //     }),
  //     dataType: 'json',
  //     success: (data) => {
  //       // dispatch finish point collision action
  //       this.setState({
  //         collision: data,
  //       });
  //     },
  //     error: (error) => {
  //       console.log('error', error);
  //     },
  //   });
  // }

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
