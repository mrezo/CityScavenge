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
  leftNav: { visible: false },
  mapReducer: {
    map: 0,
    centerLat: 0,
    centerLng: 0,
    zoom: 15,
  },
  checkpoints: [
    {
      id: 0,
      title: 'Fun',
      lat: 0,
      lng: 0,
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
    },
  ],
};

const store = createStore(cityHunt, initialStore, compose(applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f));

socketIO(store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,

document.getElementById('app'));
