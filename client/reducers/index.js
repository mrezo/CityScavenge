import { combineReducers } from 'redux';
import { auth } from './auth';

const cityHunt = combineReducers({
  auth,
});

export default cityHunt;
