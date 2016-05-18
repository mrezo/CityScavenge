import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import cityHunt from './reducers/index';
import socketIO from './socketIO.js';

const initialStore = {
  auth: {},
  currentUser: {
    id: 0,
    title: 'Temp',
    google_id: 'Temp',
    lat: 0,
    lng: 0,
    label: 'U',
    marker: 0,
    avatar: '',
    game_id: 0,
    gameName: '',
    gameRadius: '',
  },
  leftNav: { visible: false },
  mapReducer: {
    map: 0,
    centerLat: 0,
    centerLng: 0,
    zoom: 15,
  },
  checkpoints: [
    {
      title: 'Checkpoint',
      lat: 37.783246,
      lng: -122.409078,
      label: 'C',
      marker: 0,
      users: [
        {
          title: 'Michael',
          collision: false,
          timeIn: 0,
        },
      ],
    },
  ],
  finishPoint: {
    title: 'Finish',
    lat: 0,
    lng: 0,
    label: 'F',
    users: [
      {
        title: 'Michael',
        collision: false,
        timeIn: 0,
      },
    ],
  },
  photoUpload: {
    lat: 0,
    lng: 0,
    open: false,
  },
  users: [
    {
      title: 'Michael',
      google_id: '1',
      lat: 0,
      lng: 0,
      label: 'U',
      marker: 0,
      gameName: '',
      gameRadius: '',
    },
  ],
};

const store = createStore(cityHunt, initialStore, compose(applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f));

socketIO(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

document.getElementById('app'));
