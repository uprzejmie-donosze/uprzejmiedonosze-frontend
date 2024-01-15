import * as ACTIONS from "./actionTypes";
import { ActionType, FallbackState } from "./types";

const initialState: FallbackState = {
  error: null,
};

export function fallbackReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ACTIONS.FALLBACK_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case ACTIONS.FALLBACK_ERROR_CLEAN:
      return {
        ...state,
        error: null,
      };
    default:
      return state || initialState;
  }
}
