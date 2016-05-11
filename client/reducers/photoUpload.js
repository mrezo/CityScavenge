const photoUpload = (state = [], action) => {
  switch (action.type) {
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

export default photoUpload;
