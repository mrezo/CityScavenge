export const createUser = (title, coords, socketId) => {
  console.log('Inside create user action', title, coords, socketId);
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
