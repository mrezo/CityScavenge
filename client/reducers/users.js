const user = (state, action) => {
  switch (action.type) {
    case 'PLACE_USER_MARKER':
      if (state.title !== action.title) {
        return state;
      }
      const userOptions = {
        position: { lat: state.lat, lng: state.lng },
        map: state.map,
        title: state.title,
        label: state.label,
      };
      return Object.assign({}, state, {
        marker: new google.maps.Marker(userOptions),
      });
    case 'DELETE_USER_MARKER':
      if (state.title !== action.title) {
        return state;
      }
      return Object.assign({}, state, {
        marker: null,
      });
    default:
      return state;
  }
};

const users = (state = {}, action) => {
  switch (action.type) {
    case 'PLACE_USER_MARKER':
      return state.map(u =>
        user(u, action)
      );
    case 'DELETE_USER_MARKER':
      return state.map(u =>
        user(u, action)
      );
    default:
      return state;
  }
};

export default users;
