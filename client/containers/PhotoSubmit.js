import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PhotoUpload from '../components/PhotoUpload';
import { onCollision, photoUploadStart, photoSubmit } from '../actions/photos';
import checkpointCollision from '..actions/map';

const mapStateToProps = (state) => {
  return {
    checkpoints: state.checkpoints,
    currentUser: state.currentUser,
    lat: state.photoUpload.lat,
    lng: state.photoUpload.lng,
    open: state.photoUpload.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkpointCollision: (dispatch, checkpoints, currentUser) => {
      dispatch(checkpointCollision(dispatch, checkpoints, currentUser));
    },

    onCollision: (checkpoints, currentUser) => {
      dispatch(onCollision(checkpoints, currentUser));
    },

    photoUploadStart: (lat, lng, open) => {
      dispatch(photoUploadStart(lat, lng, open));
    },

    photoSubmit: (lat, lng, open) => {
      dispatch(photoSubmit(lat, lng, open));
    },
  };
};

const PhotoSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);

export default PhotoSubmitContainer;