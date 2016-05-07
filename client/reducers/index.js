import { combineReducers } from 'redux';
import auth from './auth';
import mapReducer from './mapReducer';
import users from './users';
import checkpoints from './checkpoint';
import finishPoint from './finishPoint';
import leftNav from './leftNav';

const cityHunt = combineReducers({
  auth,
  leftNav,
  mapReducer,
  checkpoints,
  finishPoint,
  users,
});

export default cityHunt;
