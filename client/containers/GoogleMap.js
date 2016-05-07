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

    placeCheckpoint: (map) => {

      dispatch(placeCheckpoint());
    },

    checkpointCollision: () => {
      dispatch(checkpointCollision());
    },

    createMap: () => {
      // TODO
      const mapOptions = {
        center: { lat: 37.7836970, lng: -122.4089660 },
        zoom: 15,
      };

      this.setState({
        map: new google.maps.Map(document.getElementById('map'), mapOptions),
      });

      dispatch(createMap());
    },

    placeFinishPoint: (map) => {
      // TODO
      const endOptions = {
        position: { lat: this.state.endLat, lng: this.state.endLng },
        map: this.state.map,
        title: 'Finish',
        label: 'F',
      };

      this.setState({
        endMarker: new google.maps.Marker(endOptions),
      });

      dispatch(placeFinishPoint(map));
    },

    finishPointCollision: () => {

      dispatch(finishPointCollision());
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
  };
};

const GoogleMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap);

export default GoogleMapContainer;
