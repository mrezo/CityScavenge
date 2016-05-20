// Helper function for below
function signInAttempt(state, action) {
  // must ALWAYS return state, or state will become undefined
  return state;
}

function signUpAttempt(state, action) {
  return state;
}

const auth = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return [...state, {
        user: {
          username: action.username,
        },
      }];
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

export default auth;
