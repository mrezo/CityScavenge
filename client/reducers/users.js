const user = (state = {}, action) => {
  switch (action.type) {
    case 'PLACE_USER_MARKER':
      if (state.title !== action.title) {
        return state;
      }
      const userOptions = {
        position: { lat: action.lat, lng: action.lng },
        map: action.map,
        title: state.title,
        label: state.label,
      };
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
        marker: new google.maps.Marker(userOptions),
      });
    case 'DELETE_USER_MARKER':
      if (state.title !== action.title) {
        return state;
      }
      return Object.assign({}, state, {
        marker: state.marker.setMap(null),
      });
    case 'UPDATE_USER_POSITION':
      if (state.socketId !== action.socketId) {
        return state;
      }
      return Object.assign({}, state, {
        lat: action.coords.latitude,
        lng: action.coords.longitude,
      });
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return [
        ...state,
        {
          title: action.title,
          google_id: action.google_id,
          lat: action.lat,
          lng: action.lng,
          label: action.label,
          marker: action.marker,
          socketId: action.socketId,
        },
      ];
    case 'PLACE_USER_MARKER':
      return state.map(u =>
        user(u, action)
      );
    case 'DELETE_USER_MARKER':
      return state.map(u =>
        user(u, action)
      );
    case 'UPDATE_USER_POSITION':
      return state.map(u =>
        user(u, action)
    );
    default:
      return state;
  }
};

export default users;
