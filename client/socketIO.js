import io from 'socket.io-client';
import { placeUserMarker, deleteUserMarker, setFinishPoint } from './actions/map';
import { newUserPosition } from './lib/locationController';
import { createUser } from './actions/user';

export const socket = io();

export let currentUser = {
  socketId: null,
  coords: {
    latitude: null,
    longitude: null,
  },
  title: null,
};

socket.on('test', (data) => {
  console.log(data);
});

socket.setFinishPoint = (lat, lng) => {
  console.log('Setting Finish Point', lat, lng);
  socket.emit('setFinishPoint', { lat, lng });
};

export default (store) => {
  // On user connection create with lat and long
  socket.on('createUser', (data) => {
    // get initial coords of user
    currentUser.socketId = data.socketId;
    currentUser.title = data.title;
    console.log('HERE IS MY SOCKET ID', currentUser);
    newUserPosition((currentLocation) => {
      store.dispatch(createUser(data.title, currentLocation, currentUser.socketId));
      currentUser.coords.latitude = currentLocation.latitude;
      currentUser.coords.longitude = currentLocation.longitude;
      socket.emit('newUser', { title: data.title, coords: currentLocation, socketId: currentUser.socketId });
    });
  });

  socket.on('newUser', (data) => {
    console.log('Adds received user to state', data);
    store.dispatch(createUser(data.title, data.coords, data.socketId));
    socket.emit('sendMeToNewUser', { currentUser: currentUser, socketId: data.socketId });
  });

  socket.on('addOtherUser', (data) => {
    console.log('ADD THE OTHER USER', data);
    store.dispatch(createUser(data.title, data.coords, data.socketId));
  });

  socket.on('placeFinishPoint', (data) => {
    console.log('Finish point received for the game', data);
    store.dispatch(setFinishPoint(data.lat, data.lng));
  });

  // socket.updateFinishPoint = () => 
  //   if (store.getState().finishPoint.lat !== 0) {
  //     socket.emit('updateFinishPoint', {marker: store.getState().finishPoint.marker, lat: store.getState().finishPoint.lat, lng: store.getState().finishPoint.lng });
  //   }
  // }, 3000);


  socket.on('error', (err)=> {
    console.log(err);
  });

  socket.on('updateUserPosition', data => {
    store.dispatch(deleteUserMarker(data.map, data.title, data.coords));
    store.dispatch(placeUserMarker(data.map, data.title, data.coords));
  });
}

