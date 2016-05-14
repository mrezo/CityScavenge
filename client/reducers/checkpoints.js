const checkpoints = (state = [], action) => {
  switch (action.type) {
    case 'PLACE_CHECKPOINT':
      const checkpointOptions = {
        position: { lat: action.lat, lng: action.lng },
        map: action.map,
        title: state.title,
        label: state.label,
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
