import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import cityHunt from './reducers/index';
import { startGame } from './actions/map.js';
import fetch from 'isomorphic-fetch';
import createMap from './actions/map.js';
import { getUserLocationAndWatchID, stopWatching} from './lib/locationController';

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
    marker: 0,
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
      label: 'U',
      marker: 0,
    },
  ],
};

const store = createStore(cityHunt, initialStore, applyMiddleware(thunkMiddleware));

store.dispatch((dispatch) => {
  // getUserLocationAndWatchID(dispatch);
  // dispatch(createMap());
  // startGame(dispatch);
});

// store.dispatch( () => {
//   createMap(data);
// });
  // console.log('store is dispatching');
  // return dispatch => {
  //   fetch('api/geo/gamestart', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   }).then((response) => {
  //     console.log('this is the response in index.js', response);
  //     if (response.status === 200) {
  //       console.log('this is the response', response);
  //     } else {
  //       // TODO: error handling
  //       console.log('oops in startGame');
  //     }
  //   });
  // };

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,

document.getElementById('app'));
