import React from 'react';

module.exports = ((state) => {
  return {
    currentMap: state.getIn(['currentMap']),
    username: state.getIn(['currentUser', 'username']),
    userImage: state.getIn(['currentUser', 'image']),
  };
})();
