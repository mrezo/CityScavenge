const leftNav = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return Object.assign({}, state, {
        visible: !state.visible,
      });
    default:
      return state;
  }
};

export default leftNav;
