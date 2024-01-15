import { ActionType } from "./types";
import * as ACTIONS from "./actionTypes";
import { AppState } from "./types";

const initialState: AppState = {
  isNavOpen: false,
};

export function appReducer(state: AppState = initialState, action: ActionType) {
  switch (action.type) {
    case ACTIONS.APP_OPEN_NAVBAR:
      return {
        ...state,
        isNavOpen: true,
      };
    case ACTIONS.APP_CLOSE_NAVBAR:
      return {
        ...state,
        isNavOpen: false,
      };
    default:
      return state || initialState;
  }
}
