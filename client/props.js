import React from 'react';

export function mapStateToProps(state) {
  return {
    currentMap: state.currentMap,
    username: state.currentUser.username,
    userImage: state.currentUser.image,
  };
}

export function mapDispatchToProps(state) {
  return {
  };
}

export function mapStateToPropsWindow(state) {
  return {
    currentMap: state.currentMap,
    username: state.currentUser.username,
    userImage: state.currentUser.image,
  };
}

export function mapDispatchToWindow(state) {
  return {
  };
}