export const toggleNav = () => {
  return {
    type: 'TOGGLE_NAV',
  };
};

export const assignGameName = (value) => {
  return {
    type: 'ASSIGN_GAME_NAME',
    value,
  };
};

export const assignGameRadius = (value) => {
  return {
    type: 'ASSIGN_GAME_RADIUS',
    value,
  };
};

export const createGame = (dispatch) => {
  fetch('api/v1/game/new', {
    method: 'POST',
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
    console.log(data);
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
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
