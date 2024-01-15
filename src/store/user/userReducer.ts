import * as ACTIONS from "./actionTypes";
import { ActionType, UserState } from "./types";

const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
  isLoaded: false,
  isEmpty: true,
  updated: false,
  updating: false,
};

export function userReducer(
  state: UserState = initialState,
  action: ActionType,
): UserState {
  switch (action.type) {
    case ACTIONS.FETCH_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isLoaded: false,
        isEmpty: true,
      };
    case ACTIONS.FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        isLoaded: true,
        isEmpty: true,
      };
    case ACTIONS.FETCH_USER_SUCCESS:
      return {
        ...state,
        profile: { ...action.payload.user },
        loading: false,
        error: null,
        isLoaded: true,
        isEmpty: false,
      };
    case ACTIONS.FETCH_USER_EMPTY:
      return {
        ...state,
        profile: null,
        isLoaded: true,
        isEmpty: true,
        error: null,
      };
    case ACTIONS.UPDATE_USER_LOADING:
      return {
        ...state,
        updating: true,
        updated: false,
      };
    case ACTIONS.UPDATE_USER_SUCCESS:
      return {
        ...state,
        updating: false,
        updated: true,
        profile: { ...action.payload.user },
      };
    case ACTIONS.UPDATE_USER_FAILED:
      return {
        ...state,
        updating: false,
      };
    default:
      return state;
  }
}
