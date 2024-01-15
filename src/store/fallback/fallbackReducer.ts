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
        errors: [
          ...state.errors,
          { msg: action.payload.error, id: Date.now().toString() },
        ],
      };
    case ACTIONS.FALLBACK_ERROR_CLEAN:
      return {
        ...state,
        errors: [
          ...state.errors.filter((e) => e.id !== action.payload.errorID),
        ],
      };
    default:
      return state || initialState;
  }
}
