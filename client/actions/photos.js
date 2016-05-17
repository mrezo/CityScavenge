import 'isomorphic-fetch';

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


export const checkCollision = (dispatch, checkpoints, currentUser) => {
  fetch('api/v1/game/photosubmit', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checkpoints: checkpoints,
      currentUser: currentUser,
    }),
  })
  .then((response) => {
    if (response.status >= 400) {
      console.log('Server error', response);
    }
    return response.json();
  })
  .then((data) => {
    if (data.collided === true) {

    } else {
      console.log('put error here');
    }
    // if response === true, change state for current user on res.body.checkpoint to true
    // else, emit user error: You are too far away from the checkpoint. Please get closer and try again.
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};














