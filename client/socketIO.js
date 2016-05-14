import io from 'socket.io-client';
import { placeUserMarker, deleteUserMarker } from './actions/map';
import { newUserPosition } from './lib/locationController';
import { createUser } from './actions/user';

export const socket = io();

let currentUser = null;

export default (store) => {
  // On user connection create with lat and long
  socket.on('createUser', (data) => {
    // get initial coords of user
    currentUser = data.socketId;
    console.log('HERE IS MY SOCKET ID', currentUser);
    console.log('THIS IS THE STORE', store.getState())
    newUserPosition((currentLocation) => {
      store.dispatch(createUser(data.title, currentLocation, currentUser));
      socket.emit('newUser', { title: data.title, coords: currentLocation, socketId: currentUser});
    });
  });

  socket.on('newUser', (data) => {
    console.log('Made it back from the server to add user to state', data);
    store.dispatch(createUser(data.title, data.coords, data.socketId));
  });

  // const emitFinishPoint = () => {
  //   socket.emit('placeFinishPoint', {googleMap: googleMap, lat: data.latitude, lng: data.longitude });
  // };


  setInterval( () => {
    if (store.getState().finishPoint.lat !== 0) {
      socket.emit('updateFinishPoint', {marker: store.getState().finishPoint.marker, lat: store.getState().finishPoint.lat, lng: store.getState().finishPoint.lng });
    }
  }, 3000);

  socket.on('placeFinishPoint', (data) => {
    console.log('Finish point received for the game', data);
    store.dispatch(updateFinishPoint(data.marker, data.lat, data.lng));
  });

  socket.on('error', (err)=> {
    console.log(err);
  });

  socket.on('updateUserPosition', data => {
    store.dispatch(deleteUserMarker(data.map, data.title, data.coords));
    store.dispatch(placeUserMarker(data.map, data.title, data.coords));
  });

    // =================================================
    // Updates the user coordinates
    // =================================================

    // const getUserLocationAndWatchID = (googleMap, title) => {
    //   let currentLocation = {};

    //   let showLocation = (position) => {
    //     console.log('Position', position);
    //     currentLocation =
    //     {
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     };
    //     // TODO: Pass Map as argument
    //     store.dispatch(deleteUserMarker(title));
    //     store.dispatch(placeUserMarker(googleMap, title, currentLocation));
    //     return currentLocation;
    //   };

    //   const geoError = () => {
    //     console.log('Finding geolocation failed.');
    //   };

    //   const geoOptions = {
    //     enableHighAccuracy: true,
    //     maximumAge: 30000,
    //     timeout: 27000,
    //   };

    //   const getWatchID = () => navigator.geolocation.watchPosition(showLocation, geoError, geoOptions);

    //   const watchID = getWatchID();
    //   return { currentLocation, watchID };
    // };

    // store.dispatch(placeUserMarker(store.getState().mapReducer.map, data.title, coords.currentLocation));
    // getUserLocationAndWatchID(store.getState().mapReducer.map, data.title);
}

