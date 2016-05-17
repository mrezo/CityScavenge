export const photoUploadStart = (lat, lng, open) => {
  return {
    type: 'PHOTO_UPLOAD_START',
    lat,
    lng,
    open,
  };
};

export const photoSubmit = (lat, lng, open) => {
  return {
    type: 'PHOTO_SUBMIT',
    lat,
    lng,
    open,
  };
};


export const checkCollision = (dispatch) => {
  fetch('api/v1/game/photosubmit', {
    method: 'POST',
    credentials: 'same-origin',
  })
  .then((response) => {
    if (response.status >= 400) {
      console.log('Server error', response);
    }
    return response;
  })
  .then((data) => {
    // get user position
    // check all checkpoints
    // if collision, change state to true
    // else, emit user error: cannot upload photo at this time
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};