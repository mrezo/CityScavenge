export const createUser = (title, coords, socketId) => {
  return {
    type: 'CREATE_USER',
    title,
    google_id: title,
    lat: coords.latitude,
    lng: coords.longitude,
    label: title,
    marker: title,
    socketId,
  };
};

export const updateUserWithGoogle = (data) => {
  return {
    type: 'UPDATE_USER_WITH_GOOGLE',
    data,
  };
};

export const updateUserPosition = (coords, socketId) => {
  return {
    type: 'UPDATE_USER_POSITION',
    coords,
    socketId,
  };
};
