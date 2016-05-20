const user = (state = {}, action) => {
  switch (action.type) {
    case 'ON_COLLISION':
      if (state.title !== action.user.title) {
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

const checkpoint = (state = {}, action) => {
  switch(action.type) {
    case 'ON_COLLISION':
      if (state.title !== action.checkpoint.title) {
        return state;
      }
      return state.users.map(u =>
        user(u, action)
      );
    default:
      return state;
  }
};

const checkpoints = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHECKPOINT':
      return [
      ...state,
      {
        lat: action.lat,
        lng: action.lng,
        label: 'C',
      }];
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
      return state.map(c =>
        checkpoint(c, action)
      );
    default:
      return state;
  }
};

export default checkpoints;
