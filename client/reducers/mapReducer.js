const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_MAP':
      console.log(googleMap);
      return Object.assign({}, state, {
        map: action.googleMap,
        centerLat: action.lat,
        centerLng: action.lng,
      });
    default:
      return state;
  }
};

export default mapReducer;
