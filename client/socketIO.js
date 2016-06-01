import io from 'socket.io-client';
import { placeUserMarker, deleteUserMarker, setCheckpoint, setFinishPoint } from './actions/map';
import { newUserPosition } from './lib/locationController';
import { createUser, updateUserPosition } from './actions/user';

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
  socket.emit('setFinishPoint', { lat, lng });
};

socket.setCheckpoint = (lat, lng) => {
  socket.emit('setCheckpoint', { lat, lng });
};

export default (store) => {
  // On user connection create with lat and long
  socket.on('createUser', (data) => {
    // get initial coords of user
    currentUser.socketId = data.socketId;
    currentUser.title = data.title;
    newUserPosition((currentLocation) => {
      store.dispatch(createUser(data.title, currentLocation, currentUser.socketId));
      currentUser.coords.latitude = currentLocation.latitude;
      currentUser.coords.longitude = currentLocation.longitude;
      socket.emit('newUser', { title: data.title, coords: currentLocation, socketId: currentUser.socketId });
    });
  });

  socket.on('newUser', (data) => {
    store.dispatch(createUser(data.title, data.coords, data.socketId));
    socket.emit('sendMeToNewUser', { currentUser: currentUser, socketId: data.socketId });
  });

  socket.on('addOtherUser', (data) => {
    store.dispatch(createUser(data.title, data.coords, data.socketId));
  });

  socket.on('placeFinishPoint', (data) => {
    store.dispatch(setFinishPoint(data.lat, data.lng));
  });

  socket.on('placeCheckpoint', (data) => {
    store.dispatch(setCheckpoint(data.lat, data.lng));
  });

  socket.on('error', (err)=> {
    console.log(err);
  });

  socket.on('updateUserPosition', (data) => {
    store.dispatch(updateUserPosition(data.coords, data.socketId));
  });
};

