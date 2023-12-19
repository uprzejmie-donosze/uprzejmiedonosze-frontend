import { USER_ACTIONS } from "./actionTypes";
import { ActionType, ErrorAction, UserLoaded, UserState } from "./types";

const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
  isLoaded: false,
  isRegistered: false,
  empty: true,
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
        isRegistered: false,
        empty: true,
      };
    case USER_ACTIONS.error:
      return {
        ...state,
        loading: false,
        error: (action as ErrorAction).error,
        isLoaded: true,
        isRegistered: false,
        empty: true,
      };
    case USER_ACTIONS.loaded:
      return {
        ...state,
        profile: { ...(action as UserLoaded).user },
        isRegistered: !!(action as UserLoaded).user.data.address.length,
        loading: false,
        error: null,
        isLoaded: true,
        empty: false,
      };
    case USER_ACTIONS.empty:
      return {
        ...state,
        isLoaded: true,
        empty: true,
        error: null,
      };
    case USER_ACTIONS.logout:
      return { ...initialState };
    default:
      return state;
  }
}
