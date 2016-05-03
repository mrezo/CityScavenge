import React from 'react';

module.exports = ((state) => {
  return {
    currentMap: state.currentMap,
    username: state.currentUser.username,
    userImage: state.currentUser.image,
  };
})();
