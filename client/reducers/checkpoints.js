const checkpoints = (state = [], action) => {
  switch (action.type) {
    case 'PLACE_CHECKPOINT':
      return {};
    case 'CHECKPOINT_COLLISION':
      return {};
    case 'PHOTO_UPLOAD_START':
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
        open: true,
      });
    case 'PHOTO_SUBMIT':
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
        open: false,
      });
    default:
      return state;
  }
};

export default checkpoints;
