export const createMap = (lat, lng) => {
  return {
    type: 'CREATE_MAP',
    lat,
    lng,
  };
};

export const placeUserMarker = (title, lat, lng) => {
  return {
    type: 'PLACE_USER_MARKER',
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

export const placeCheckpoint = (title, lat, lng) => {
  return {
    type: 'PLACE_CHECKPOINT',
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

export const placeFinishpoint = (lat, lng) => {
  return {
    type: 'PLACE_FINISHPOINT',
    lat,
    lng,
  };
};

// Modifies the user's collision boolean in the finishpoint's user list
// After it has checked all the checkpoint's user collisions
export const finishpointCollision = (locTitle, userTitle) => {
  return {
    type: 'FINISHPOINT_COLLISION',
    locTitle,
    userTitle,
  };
};
