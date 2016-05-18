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

export const onCollision = (checkpoint, user) => {
  // checkpoint will be checkpoint in store that had collision
  // user will be user in store that collided
  return {
    type: 'ON_COLLISION',
    checkpoint,
    user,
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
    // data will have collided property set to true or false
      // if true, the checkpoint property will be the collided checkpoint
    if (data.collided === true) {
      for (var i = 0; i < checkpoints.length; i++) {
        // find checkpoint in store that matches checkpoint in data
        if (data.checkpoint.lat === checkpoints[i].lat && data.checkpoint.lng === checkpoints[i].lng) {
          console.log('this is current user--------------', currentUser);
          console.log('this is data--------------', data);
          for (var j = 0; j < checkpoints[i].users.length; j++) {
            // find user in checkpoints store that matches currentUser
            if (checkpoints[i].users[j].title === currentUser.title) {
              dispatch(onCollision(checkpoints[i], currentUser));
            }
          }
        }
      }
    } else {
      console.log('You are too far away from the checkpoint. Please move closer and try again.');
    }
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};
