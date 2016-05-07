import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import cityHunt from './reducers/index';

const store = createStore(cityHunt, {
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
    lat: 0,
    lng: 0,
    users: [
      {
        title: 'Michael',
        collision: false,
        timeIn: 0,
      },
    ],
  },
  users: [
    {
      title: 'Michael',
      google_id: '1',
      lat: 0,
      lng: 0,
      map: 0,
      label: 'U',
      marker: 0,
    },
  ],
});

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,

document.getElementById('app'));
