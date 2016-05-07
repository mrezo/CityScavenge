export const createMap = (lat, lng) => {
  return {
    type: 'CREATE_MAP',
    lat,
    lng,
  };
};

export const placeUserMarker = (map, title, lat, lng) => {
  return {
    type: 'PLACE_USER_MARKER',
    map,
    title,
    lat,
    lng,
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
export const finishPointCollision = (locTitle, userTitle) => {
  return {
    type: 'FINISHPOINT_COLLISION',
    locTitle,
    userTitle,
  };
};
