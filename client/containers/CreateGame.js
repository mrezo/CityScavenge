import React from 'react';
import { connect } from 'react-redux';
import DashboardCreateGame from '../components/DashboardCreateGame';
import { assignGameRadius, assignGameName } from '../actions/index';

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
      dispatch(assignGameRadius);
    },
    handleChangeRadius: (event) => {
      console.log('change', event.target.value);
      dispatch(assignGameName);
    },
    handleChangeName: (event) => {
      console.log('change', event.target.value);
      console.log(this.gameRadius);
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