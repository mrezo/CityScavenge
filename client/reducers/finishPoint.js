const finishPoint = (state = {}, action) => {
  switch (action.type) {
    case 'PLACE_FINISHPOINT':
      return {};
    case 'FINISHPOINT_COLLISION':
      return {};
    default:
      return state;
  }
};

export default finishPoint;
