import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createMap, placeUserMarker, deleteUserMarker, placeCheckpoint, checkpointCollision, placeFinishPoint, finishPointCollision, getFinishPoint } from '../actions/map';
import GameWindow from '../components/GameWindow';
import fetch from 'isomorphic-fetch';
import { getUserLocationAndWatchID, stopWatching, initialPosition} from '../lib/locationController';

class GoogleMap extends Component {

  componentDidMount() {
    var context = this;
    var users = this.props.users;
    var finishPoint = this.props.finishPoint;
    this.props.placeAllMarkers(users, finishPoint);
    // this.props.generateMap();
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

GoogleMap.propTypes = {
  // generateMap: PropTypes.func.isRequired,
  placeAllMarkers: PropTypes.func.isRequired,
  placeMarker: PropTypes.func.isRequired,
  userTitle: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => {
  return {
    map: state.mapReducer.map,
    userTitle: state.users[0].title,
    users: state.users,
    finishPoint: state.finishPoint,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // generateMap: () => {
    //   const mapOptions = {
    //     center: { lat: 37.7749, lng: -122.4194 },
    //     zoom: 12,
    //   };
    //   const googleMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    //   //dispatch(createMap(googleMap, 37.7749, -122.4194));
    // },
    placeAllMarkers: (users, finishPoint) => {
      const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
      };
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      let marker = null;

      marker = new google.maps.Marker({
          position: new google.maps.LatLng(finishPoint.lat, finishPoint.lng),
          map,
          label: finishPoint.label,
          animation: google.maps.Animation.DROP,
        });

      for (let i = 0; i < users.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(users[i].lat, users[i].lng),
          map,
          label: users[i].label,
          animation: google.maps.Animation.DROP,
        });
      }
    },
    // Places a marker on the user's location
    placeMarker: (map, title, lat, lng) => {
      dispatch(placeUserMarker(map, title, lat, lng));
    },
    deleteMarker: (title) => {
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
    watchUser: () => {
      getUserLocationAndWatchID(dispatch);
    },
  };
};


const GoogleMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap);

export default GoogleMapContainer;
