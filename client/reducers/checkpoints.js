const user = (state = {}, action) => {
  switch (action.type) {
    case 'FINISHPOINT_COLLISION':
      if (state.title !== action.title) {
        // action.title will be current user's name
        return state;
      }
      return Object.assign({}, state, {
        collision: !state.collision,
        timeIn: new Date(),
      });
    default:
      return state;
  }
};

const checkpoints = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHECKPOINT':
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
      });
    case 'PLACE_CHECKPOINT':
      const checkpointOptions = {
        position: { lat: action.lat, lng: action.lng },
        map: action.map,
        label: 'C',
      };
      return [...state, {
        checkpoint: {
          lat: action.lat,
          lng: action.lng,
          marker: new google.maps.Marker(checkpointOptions),
        },
      }];
    case 'ON_COLLISION':
      // loop through users on checkpoint in store
      // return new state with collision = true
      return state.users.map(u =>
        user(u, action)
      );
    default:
      return state;
  }
};

export default checkpoints;
