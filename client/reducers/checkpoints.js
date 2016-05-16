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

const checkpoints = (state = [], action) => {
  switch (action.type) {
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
    case 'CHECKPOINT_COLLISION':
      return [];
    default:
      return state;
  }
};

export default checkpoints;
