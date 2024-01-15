import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import { userReducer } from "./user";
import { appReducer } from "./app";
import { fallbackReducer } from "./fallback";
import { reportReducer } from "./report";
import { categoriesReducer } from "./categories";

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  fallback: fallbackReducer,
  firebase: firebaseReducer,
  report: reportReducer,
  categories: categoriesReducer,
});

export default rootReducer;
