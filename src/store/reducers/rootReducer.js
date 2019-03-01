import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import userReducer from './userReducer.js';
import authReducer from './authReducer.js';
import formReducer from './formReducer.js';
import appReducer from './appReducer.js';
import reportReducer from './reportReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  firebase: firebaseReducer,
  reports: reportReducer
});

export default rootReducer;
