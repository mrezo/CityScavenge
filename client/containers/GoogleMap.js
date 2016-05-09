import React from 'react';
import { connect } from 'react-redux';
import { createMap, placeUserMarker, deleteUserMarker, placeCheckpoint, checkpointCollision, placeFinishPoint, finishPointCollision } from '../actions/index';
import GameWindow from '../components/GameWindow';
import fetch from 'isomorphic-fetch';

const GoogleMap = () => (
  // componentDidMount (){
  //   createMap()
  // }
  <div id="map"></div>
);

const mapStateToProps = (state) => {
  return {
    lat: state.finishPoint.lat,
    lng: state.finishPoint.lng,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (lat, lng) => {
      dispatch(createMap(lat, lng));
    },

    // Places a marker on the user's location
    placeMarker: (map, title, lat, lng) => {
      dispatch(placeUserMarker(map, title, lat, lng));
    },
    deleteMarker: (title) => {
      // Necessary?
      // this.state.userMarker.setMap(null);
      dispatch(deleteUserMarker(title));
    },

    placeCheckpoint: (map, title, lat, lng) => {
      dispatch(placeCheckpoint(map, title, lat, lng));
    },
    checkpointCollision: (locTitle, userTitle) => {
      dispatch(checkpointCollision(locTitle, userTitle));
    },

    placeFinishPoint: (map, lat, lng) => {
      dispatch(placeFinishPoint(map, lat, lng));
    },
    finishPointCollision: (userTitle, timeIn, locTitle) => {
      dispatch(finishPointCollision(userTitle, timeIn, locTitle));
    },
  };
};

const GoogleMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap);

export default GoogleMapContainer;
