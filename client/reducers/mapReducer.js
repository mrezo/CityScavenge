const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_MAP':
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
