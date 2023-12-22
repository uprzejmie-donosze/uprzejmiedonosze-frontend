import { USER_ACTIONS } from "./actionTypes";
import { ActionType, ErrorAction, UserLoaded, UserState } from "./types";

const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
  isLoaded: false,
  isEmpty: true,
};

export function userReducer(
  state: UserState = initialState,
  action: ActionType,
): UserState {
  switch (action.type) {
    case USER_ACTIONS.loading:
      return {
        ...state,
        loading: true,
        error: null,
        isLoaded: false,
        isEmpty: true,
      };
    case USER_ACTIONS.error:
      return {
        ...state,
        loading: false,
        error: (action as ErrorAction).error,
        isLoaded: true,
        isEmpty: true,
      };
    case USER_ACTIONS.loaded:
      return {
        ...state,
        profile: { ...(action as UserLoaded).user },
        loading: false,
        error: null,
        isLoaded: true,
        isEmpty: false,
      };
    case USER_ACTIONS.empty:
      return {
        ...state,
        profile: null,
        isLoaded: true,
        isEmpty: true,
        error: null,
      };
    default:
      return state;
  }
}
