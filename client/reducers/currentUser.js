const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_WITH_GOOGLE':
      return Object.assign({}, state, {
        id: action.data.id,
        title: action.data.name,
        google_id: action.data.google_id,
        label: action.data.name[0],
        avatar: action.data.avatar,
      });
    case 'ASSIGN_GAME_NAME':
      return Object.assign({}, state, {
        gameName: action.value,
      });
    case 'ASSIGN_GAME_RADIUS':
      return Object.assign({}, state, {
        gameRadius: action.value,
      });
    default:
      return state;
  }
};

export default currentUser;
