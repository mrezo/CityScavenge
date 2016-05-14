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

export const logout = (dispatch) => {
  fetch('api/v1/logout', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    if (response.status >= 400) {
      console.log('Server error', response);
    }
    return response;
  })
  .then((data) => {
    console.log('Logged Out!');
  })
  .catch((error) => {
    console.log('Error', error);
    return;
  });
};
