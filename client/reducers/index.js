import { combineReducers } from 'redux';
import auth from './auth';
import mapReducer from './mapReducer';
import users from './users';
import checkpoints from './checkpoints';
import finishPoint from './finishPoint';
import leftNav from './leftNav';
import photoUpload from './photoUpload';

const cityHunt = combineReducers({
  auth,
  leftNav,
  mapReducer,
  checkpoints,
  finishPoint,
  photoUpload,
  users,
});

export default cityHunt;
