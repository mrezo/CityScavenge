const checkpoints = (state = [], action) => {
  switch (action.type) {
    case 'PLACE_CHECKPOINT':
      return {};
    case 'CHECKPOINT_COLLISION':
      return {};
    case 'PHOTO_UPLOAD':
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
      });
    default:
      return state;
  }
};

export default checkpoints;
