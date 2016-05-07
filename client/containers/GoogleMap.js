import React from 'react';
import { connect } from 'react-redux';
import { createMap, placeUserMarker, deleteUserMarker, placeCheckpoint, checkpointCollision, placeFinishPoint, finishPointCollision } from '../actions/index';
// Genevieve Sublette [7:20 PM] 
import fetch from 'isomorphic-fetch'

export function startGame() {
  return dispatch => {
    fetch(`/api/geo/gamestart`, (response) => {
      if(response.status == 200){
       // Use a normal function to set the received state
        dispatch(initializeMap(response.json)); 
      }else { 
        dispatch(someError)
      }
    })
  }
 }

 function initializeMap(data) {
  return { type: 'SET_MAP', data: data };
 }

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
