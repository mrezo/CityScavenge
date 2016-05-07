import { combineReducers } from 'redux';
import auth from './auth';
import mapReducer from './map';
import users from './users';
import checkPoints from './checkPoint';
import finishPoint from './finishPoint';
import leftNav from './leftNav';

const cityHunt = combineReducers({
  auth,
  leftNav,
  mapReducer,
  checkPoints,
  finishPoint,
  users,
});

export default cityHunt;
