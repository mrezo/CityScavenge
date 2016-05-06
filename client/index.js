import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cityHunt from './reducers/index';
import App from './components/App';

const store = createStore(cityHunt);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,

document.getElementById('app'));
