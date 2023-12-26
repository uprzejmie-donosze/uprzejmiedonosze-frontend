import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import { userReducer } from "./user";
import { appReducer } from "./app";
import { follbackReducer } from "./follback/follbackReducer";

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  follback: follbackReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
