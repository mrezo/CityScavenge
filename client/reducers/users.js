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
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USER':
    console.log('USERS Reducer', state);
    console.log('NEW USER', [
        ...state,
        {
          title: action.title,
          google_id: action.title,
          lat: 0,
          lng: 0,
          label: action.title[0],
          marker: 0,
        },
      ]);
      return [
        ...state,
        {
          title: action.title,
          google_id: action.title,
          lat: 0,
          lng: 0,
          label: action.title[0],
          marker: 0,
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
    default:
      return state;
  }
};

export default users;
