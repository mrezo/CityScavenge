const checkpoints = (state = [], action) => {
  switch (action.type) {
    case 'PLACE_CHECKPOINT':
      return {};
    case 'CHECKPOINT_COLLISION':
      return {};
    default:
      return state;
  }
};

export default checkpoints;
