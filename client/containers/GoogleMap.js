import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createMap, placeUserMarker, deleteUserMarker, placeCheckpoint, checkpointCollision, placeFinishPoint, finishPointCollision } from '../actions/map';
import { getUserLocationAndWatchID } from '../lib/locationController';

let userMarkers = [];

class GoogleMap extends Component {

  componentDidMount() {
    var checkpoints = this.props.checkpoints;
    this.props.placeAllMarkers(this.props.users, this.props.finishPoint, checkpoints);
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
  updateMarkers: PropTypes.func,
  users: PropTypes.array,
  finishPoint: PropTypes.object,
  checkpoints: PropTypes.array,
  placeAllMarkers: PropTypes.func.isRequired,
  placeMarker: PropTypes.func.isRequired,
  userTitle: PropTypes.string.isRequired,
  map: PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    checkpoints: state.checkpoints,
    map: state.mapReducer.map,
    userTitle: state.users[0].title,
    users: state.users,
    finishPoint: state.finishPoint,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeAllMarkers: (users, finishPoint, checkpoints) => {
      const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
        disableDefaultUI: true,
        mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'] },
      };

      const styles = [
        {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
            {
              "invert_lightness": true,
            },
            {
              "saturation": 20,
            },
            {
              "lightness": 50,
            },
            {
              "gamma": 0.4,
            },
            {
              "hue": "#00ffee",
            },
          ],
        },
        {
          "featureType": "all",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified",
            },
          ],
        },
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on",
            },
          ],
        },
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "color": "#ffffff",
            },
            {
              "visibility": "simplified",
            },
          ],
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "simplified",
            },
          ],
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "color": "#405769",
            },
          ],
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#232f3a",
            },
          ],
        },
      ];

      let styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
      let marker = null;
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
      dispatch(createMap(map, mapOptions.center.lat, mapOptions.center.lng));

      // Creates Finish Point marker
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(finishPoint.lat, finishPoint.lng),
        map,
        animation: google.maps.Animation.DROP,
        icon: '../assets/Map-Marker-Flag-3-Right-Pink-icon-48.png',
      });

      // Creates checkpoints markers
      for (let j = 0; j < checkpoints.length; j++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(checkpoints[j].lat, checkpoints[j].lng),
        map,
        animation: google.maps.Animation.DROP,
        icon: '../assets/Map-Marker-Flag-3-Right-Azure-icon-48.png',
      });    
      }
      
      // Creates user markers
      for (let i = 0; i < users.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(users[i].lat, users[i].lng),
          map,
          //label: users[i].label,
          animation: google.maps.Animation.DROP,
          icon: '../assets/small.blue.001.circle.png',
        });
        userMarkers.push(marker);
      }
    },

    updateMarkers: (users, map) => {
      // iterate through userMarker and set marker to null
      userMarkers.forEach((element) => {
        element.setMap(null);
      });

      // clear markers and create new markers
      userMarkers = [];
      let marker = null;
      for (let i = 0; i < users.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(users[i].lat, users[i].lng),
          map,
          icon: '../assets/small.blue.001.circle.png',
        });
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

    placeCheckpoint: (map, lat, lng) => {
      dispatch(placeCheckpoint(map, lat, lng));
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
