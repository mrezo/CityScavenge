const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_MAP':
      return Object.assign({}, state, {
        visible: !state.visible,
      });
    default:
      return state;
  }
};

export default mapReducer;
