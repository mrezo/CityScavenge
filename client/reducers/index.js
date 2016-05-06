import { combineReducers } from 'redux';
import auth from './auth';
import leftNav from './leftNav';

const cityHunt = combineReducers({
  auth,
  leftNav,
});

export default cityHunt;
