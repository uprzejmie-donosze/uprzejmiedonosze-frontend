import { ActionType } from "./types";
import { APP_ACTIONS } from "./actionTypes";
import { AppState } from "./types";

const initialState: AppState = {
  isNavOpened: false
};

export function appReducer(
  state: AppState = initialState,
  action: ActionType,
) {
  switch (action.type) {
    case APP_ACTIONS.openNav:
      return {
        ...state,
        isNavOpened: action.isNavOpened,
      };
    case APP_ACTIONS.closeNav:
      return {
        ...state,
        isNavOpened: action.isNavOpened,
      };
    default:
      return state || initialState;
  }
};
