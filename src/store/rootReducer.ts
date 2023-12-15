import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import { userReducer } from './user';
import { appReducer } from './app';

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  firebase: firebaseReducer
});

export default rootReducer;
