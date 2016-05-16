export const toggleNav = () => {
  return {
    type: 'TOGGLE_NAV',
  };
};

export const assignGameName = () => {
  return {
    type: 'ASSIGN_GAME_NAME',
  };
};

export const assignGameRadius = () => {
  return {
    type: 'ASSIGN_GAME_RADIUS',
  };
};

export const fetchCurrentUser = (dispatch, cb) => {
  fetch('api/v1/user', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    if (response.status >= 400) {
      console.log('Server error', response);
    }
    return response.json();
  })
  .then((data) => {
    cb(data);
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};

export const logout = (dispatch) => {
  fetch('api/v1/logout', {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then((response) => {
    if (response.status >= 400) {
      console.log('Server error', response);
    }
    return response;
  })
  .then((data) => {
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};
