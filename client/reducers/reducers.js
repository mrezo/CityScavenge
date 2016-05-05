// import { initialState } from '../index.js';

// Helper function for below
function signInAttempt(state, action) {
  // ideally below I would somehow change the path to only show the encounter
  console.log('sign in attempted');
  // must ALWAYS return state, or state will become undefined
  return state;
}

function signUpAttempt(state, action) {
  console.log('sign up attempted');
  return state;
}

// This is what does the heavy lifting, based on the action that the
// reducer receives, it does something based on that.  Remember, this
// must be a Pure Function.
// The store's reducing function will be called with the current state
//   and the given action synchronously and the returned value
//   will be considered the next state
// Reducer composition is when one has a master reducer that calls other
//   reducers. This is useful for when the reducer gets too large
//   add one wants to abstract out complexity. It is like having
//   helper reducers

// TODO replace actions below with our requests
// Below are examples of reducers being used
export default (state = {}, action) => {
  switch (action.type) {
    // the below is used for testing
    // Do not delete
    case 'CHANGE_USER_NAME':
      return Object.assign({}, state, {
        username: action.username,
      });
    case 'SIGN_IN_ATTEMPT':
      return signInAttempt(state, action);
    case 'SIGN_UP_ATTEMPT':
      return signUpAttempt(state, action);
    case 'SIGNOUT':
      return [...state, {
        user: {},
      }];
    case 'SIGN_IN_FAIL':
      return [...state, {
        errorMessage: action.message,
      }];
    case 'SIGN_UP_FAIL':
      return [...state, {
        errorMessage: action.message,
      }];
    case 'CLEAR_ERRORS':
      return [...state, {
        errorMessage: '',
      }];
    case 'GET_ALL_COMMENTS':
      return [...state, {
        comments: action.comments,
      }];
    default:
      return state;
  }
};
