import React from 'react';
import { connect } from 'react-redux';
import { createMap, placeUserMarker, deleteUserMarker, placeCheckpoint, checkpointCollision,placeFinishpoint, finishpointCollision } from '../actions/index';

const GoogleMap = () => {
  <div id="map"></div>;
};

export default GoogleMap;

const mapStateToProps = (state) => {
  return {
    visible: state.leftNav.visible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Places a marker on the user's location
    placeMarker() {
      // TODO place in reducer
      // const userOptions = {
      //   position: { lat: this.state.userLat, lng: this.state.userLng },
      //   map: this.state.map,
      //   title: 'user',
      //   label: 'U',
      // };
      this.setState({
        userMarker: new google.maps.Marker(userOptions),
      });
      dispatch(placeUserMarker('Michael', la));
    },
    deleteMarker: () => {
      // Necessary?
      // this.state.userMarker.setMap(null);
      dispatch(deleteUserMarker('Michael'));
    },
    handleToggle: () => {
      dispatch(toggleNav());
    },
  };
};

const GoogleMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap);

export default GoogleMapContainer;
