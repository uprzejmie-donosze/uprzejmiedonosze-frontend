import { FALLBACK_ACTIONS } from "./actionTypes";
import { FallbackState } from "./types";

const initialState: FallbackState = {
  error: null,
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
