const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_MAP':
      const mapOptions = {
        center: { lat: action.lat, lng: action.lng },
        zoom: state.zoom,
      };
      return Object.assign({}, state, {
        map: new google.maps.Map(document.getElementById('map'), mapOptions),
        centerLat: action.lat,
        centerLng: action.lng,
      });
    default:
      return state;
  }
};

export default mapReducer;
