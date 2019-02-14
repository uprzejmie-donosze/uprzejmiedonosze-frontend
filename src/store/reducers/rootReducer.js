import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import authReducer from './authReducer.js';
import formReducer from './formReducer.js';
import appReducer from './appReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

export default rootReducer;
