import React from 'react';
import { connect } from 'react-redux';
import DashboardCreateGame from '../components/DashboardCreateGame';

const mapStateToProps = (state) => {
  return {
    gameName: state.users[0].gameName,
    gameRadius: state.users[0].gameRadius,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitGame: (gameName, gameRadius) => {
      console.log('This is it: ', gameName, gameRadius);
    },
    handleChange: (event) => {
      console.log('change', event.target.value);
    },
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
