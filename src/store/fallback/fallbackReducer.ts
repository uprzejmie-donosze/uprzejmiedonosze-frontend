import * as ACTIONS from "./actionTypes";
import { ActionType, FallbackState } from "./types";

const initialState: FallbackState = {
  errors: [],
};

export function fallbackReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ACTIONS.FALLBACK_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload.error],
      };
    case ACTIONS.FALLBACK_ERROR_CLEAN:
      return {
        ...state,
        errors: [...state.errors.filter(e => e !== action.payload.error)],
      };
    default:
      return state || initialState;
  }
}
