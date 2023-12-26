import { FALLBACK_ACTIONS } from "./actionTypes";
import { FollbackState } from "./types";

const initialState: FollbackState = {
  error: null,
  success: null,
};

export function fallbackReducer(state = initialState, action: any) {
  switch (action.type) {
    case FALLBACK_ACTIONS.error:
      return {
        ...state,
        error: action.error,
      };
    case FALLBACK_ACTIONS.errorClean:
      return {
        ...state,
        error: null,
      };
    default:
      return state || initialState;
  }
}
