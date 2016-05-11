export const createUser = (title, coords) => {
  console.log('Inside create user action', title, coords);
  return {
    type: 'CREATE_USER',
    title,
    google_id: title,
    lat: coords.latitude,
    lng: coords.longitude,
    label: title,
    marker: title,
  };
};
