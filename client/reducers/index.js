import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import mapReducer from './mapReducer';
import users from './users';
import checkpoints from './checkpoints';
import finishPoint from './finishPoint';
import leftNav from './leftNav';
import photoUpload from './photoUpload';

const cityHunt = combineReducers({
  auth,
  currentUser,
  leftNav,
  mapReducer,
  checkpoints,
  finishPoint,
  photoUpload,
  users,
});

export default cityHunt;
