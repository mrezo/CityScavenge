const user = (state = {}, action) => {
  switch (action.type) {
    case 'FINISHPOINT_COLLISION':
      if (state.title !== action.title) {
        return state;
      }
      return Object.assign({}, state, {
        collision: !state.collision,
        timeIn: action.timeIn,
      });
    default:
      return state;
  }
};

const finishPoint = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FINISHPOINT':
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
      });
    case 'PLACE_FINISHPOINT':
      const finishPointOptions = {
        position: { lat: action.lat, lng: action.lng },
        map: action.map,
        title: state.title,
        label: state.label,
      };
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
        marker: new google.maps.Marker(finishPointOptions),
      });
    case 'FINISHPOINT_COLLISION':
      return state.users.map(u =>
        user(u, action)
      );
    case 'UPDATE_FINISHPOINT':
      return Object.assign({}, state, {
        marker: action.marker,
        lat: action.lat,
        lng: action.lng,
      });
    default:
      return state;
  }
};

export default finishPoint;
