// ES6 import syntax, works similar to a node 'require' statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppContainer } from './components/App';

// in ES6 you can assign variables from an object using
// what are called "Destructuring"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
import { Router, Route, Link, hashHistory } from 'react-router';

// A reducer is a function which takes the state, and an action, and
// returns a new state based on the action. All reducer functions
//   1) MUST BE pure functions, see http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/
//   2) MUST return a state, even if the state is empty or the same
//   3) MUST NEVER alter the existing state, only return a new one
//   4) MUST NEVER call non-pure functions, like AJAX calls
import reducer from './reducers/reducers.js';

// Create the Redux Store, this should be a representation of the
// entire application in the form of an object.  This should never
// be mutated.  To change it's values you have to dispatch an action
// which calls a reducer and returns a new state, which is set
// to the current state.
const initalState = {
  currentMap: 'http://www.codeproject.com/KB/custom-controls/Google-Maps-User-Control/SimpleMap.JPG',
  currentUser: {
    username: 'The Gray Animal',
    image: 'http://www.hdiphonewallpaper.com/uploads/image/Animals/Gray%20animal%20wallpaper.jpg',
  },
  comments: [],
};
const store = createStore(reducer, initalState, applyMiddleware(thunk));

// Dispatch is a method on store and is the only way to trigger a state change
// Here we dispatch a simple action which sets the state.  To see the
// details of what this function is doing, look in the following folder:
// client/reducers/reducer.js
// In React-Redux you NEVER alter the state directly, like this:
//   store.user = {<MyNewUserObject>};
// Instead you dispatch an action which calls the reducer function
// and the reducer does the work of returning a new state
// Behind the scenes, you'll write reducers that merge new elements into
// your state, which you can see in the client/reducers files

// An action is a payload of information that sends data from your application
//   to the store
//   They are plain javascript objects and MUST have a type property
//   They are the ONLY source of information for the store
//   Describe the fact that something happened, but don't specify
//     how the application's state changes in response, which is the job of the reducer
//   One sends them to the store using store.dispatch()
// A dispatch is the only way to trigger a state change
//

// TODO remove below code
// Anything that needs to run immediately upon page load goes below
// store.dispatch((dispatch) => {
//   if (auth.isSignedIn()) {
//     $.ajaxSetup({ headers: { 'x-access-token': window.localStorage.getItem('com.faunadex') } });
//     $.post('/api/user/getsignedinuser')
//       .retry({ times: 5, timeout: 500 })
//       .done((data) => {
//         store.dispatch({ type: 'SET_STATE', state: { user: data.user } });
//         enc.userEncounters(data.user.username, function(err, data) {
//           if (data) {
//             dispatch({ type: 'SET_STATE', state: { encounters: data.encounters } });
//           } else {
//             dispatch({ type: 'GET_ENCOUNTERS_FAIL' });
//           }
//         });
//       });
//   }
//   enc.recentEncounters(function(err, data) {
//     if (data) {
//       dispatch({ type: 'SET_STATE', state: { recentEncounters: data } });
//     } else {
//       dispatch({ type: 'GET_ENCOUNTERS_FAIL' });
//     }
//   });
// });

// const clearErrors = () => {
//   store.dispatch({ type: 'CLEAR_ERRORS' });
// };

// store.dispatch({
//   type: 'SET_USERNAME',
//   username: user.input.from.somewhere
// });
// Routes tell our app what to render at what urls
// In the future, we can probably set the routes to some other
// module and include it.
//
// Provider is a special built in component which gives all child
// components access to the store.
ReactDOM.render(
  (<Provider store={store}>
    <div>
      <Router history={hashHistory}>
        <Route component={AppContainer} path="/" />
      </Router>
    </div>
  </Provider>),
  // Do our inital render on the #app element in index.html
  document.getElementById('app'));
