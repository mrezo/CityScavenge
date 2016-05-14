import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DashboardCreateGame from '../components/DashboardCreateGame';
import { getUserLocationAndWatchID, stopWatching, initialPosition} from '../lib/locationController';

const mapStateToProps = (state) => {
  return {
    gameName: state.users.gameName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // watchUser: () => {
    //   getUserLocationAndWatchID(dispatch);
    // },
    // createGame: () => {
    //   initialPosition(dispatch, (positionData) => {
    //     const mapOptions = {
    //       center: { lat: positionData.latitude, lng: positionData.longitude },
    //       zoom: 15,
    //     };
    //     const googleMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    //     dispatch(placeUserMarker(googleMap, 'Michael', positionData));
    //     startGame(dispatch, googleMap, positionData.latitude, positionData.longitude);
    //     getUserLocationAndWatchID(dispatch, googleMap, 'Michael');
    //   });
    // },
  };
};

const CreateGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCreateGame);

export default CreateGameContainer;