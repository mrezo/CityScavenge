import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createMap, placeUserMarker, deleteUserMarker, placeCheckpoint, checkpointCollision, placeFinishPoint, finishPointCollision, getFinishPoint } from '../actions/map';
import GameWindow from '../components/GameWindow';
import fetch from 'isomorphic-fetch';
import { getUserLocationAndWatchID, stopWatching, initialPosition} from '../lib/locationController';

let userMarkers = [];

class GoogleMap extends Component {

  componentDidMount() {
    // var context = this;
    // var users = this.props.users;
    // var finishPoint = this.props.finishPoint;
    this.props.placeAllMarkers(this.props.users, this.props.finishPoint);
    // this.props.updateUserMarkers(this.props.users, this.props.map);
    // this.props.generateMap();
  }

  render() {
    this.props.updateMarkers(this.props.users, this.props.map);
    console.log('users>>>>>>>>>>>>>>>>>>>>', this.props.users);
    return (
      <div id="map"></div>
    );
  }
}

GoogleMap.propTypes = {
  // generateMap: PropTypes.func.isRequired,
  updateMarkers: PropTypes.func,
  users: PropTypes.array,
  finishPoint: PropTypes.object,
  placeAllMarkers: PropTypes.func.isRequired,
  placeMarker: PropTypes.func.isRequired,
  userTitle: PropTypes.string.isRequired,
  map: PropTypes.object,
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
    placeAllMarkers: (users, finishPoint) => {
      const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
      };

      let marker = null;
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      dispatch(createMap(map, mapOptions.center.lat, mapOptions.center.lng));

      // Creates Finish Point marker
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(finishPoint.lat, finishPoint.lng),
        map,
        label: finishPoint.label,
        animation: google.maps.Animation.DROP,
      });
      
      // Creates user markers
      for (let i = 0; i < users.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(users[i].lat, users[i].lng),
          map,
          label: users[i].label,
          animation: google.maps.Animation.DROP,
        });
        console.log('CAN I PUT A STRING IN THERE< MARKER', marker);
        userMarkers.push(marker);
      }

      // Updates the user markers with new positions
      // setInterval(() => {
      //   updateMarkers(users, map);
      // }, 5000);
    },

    updateMarkers: (users, map) => {
      console.log('This is the userMarkers Array', userMarkers);


      // iterate through userMarker and set marker to null
      userMarkers.forEach((element) => {
        console.log('HEY HEY HEY I\'M IN FOR EACH', element);
        element.setMap(null);
      });

      // clear markers and create new markers
      userMarkers = [];
      let marker = null;
      for (let i = 0; i < users.length; i++) {
        console.log('HERE IS MY MAP', map);
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(users[i].lat, users[i].lng),
          map,
          label: users[i].label,
        });
        console.log('THIS IS THE NEW UPDATED MARKER', marker);
        userMarkers.push(marker);
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
      // pass in a googlemap, and userTitle or a socket id
      getUserLocationAndWatchID(dispatch);
    },
  };
};


const GoogleMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap);

export default GoogleMapContainer;
