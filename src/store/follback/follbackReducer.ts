import { FOLLBACK_ACTIONS } from "./actionTypes";
import { FollbackState } from "./types";

const initialState: FollbackState = {
  error: null,
  success: null,
};

export function follbackReducer(state = initialState, action: any) {
  switch (action.type) {
    case FOLLBACK_ACTIONS.error:
      return {
        ...state,
        error: action.error,
      };
    case FOLLBACK_ACTIONS.errorClean:
      return {
        ...state,
        error: null,
      };
    default:
      return state || initialState;
  }
}
