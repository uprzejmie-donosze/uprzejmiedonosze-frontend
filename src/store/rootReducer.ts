import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import { userReducer } from "./user";
import { appReducer } from "./app";
import { fallbackReducer } from "./fallback/fallbackReducer";

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  fallback: fallbackReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
