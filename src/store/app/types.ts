import * as ACTIONS from "./actionTypes";

export type AppState = {
  isNavOpen: boolean;
};

export type ActionType = {
  type: typeof ACTIONS.APP_CLOSE_NAVBAR | typeof ACTIONS.APP_OPEN_NAVBAR;
};
