import * as ACTIONS from "./actionTypes";

export type UserProfile = {
  name: string;
  msisdn: string;
  address: string;
  email: string;
  sex: string;
  exposeData: boolean;
  stopAgresji: boolean;
  termsConfirmation: string;
  autoSend: boolean;
  myAppsSize: number;
  number: number;
  updated: string;
  lastLocation: string;
  appsCount: number;
  isRegistered: boolean;
  isTermsConfirmed: boolean;
};

export type UserState = {
  profile: UserProfile | null;
  loading: boolean;
  error: Error | null;
  isLoaded: boolean;
  isEmpty: boolean;
  updated: boolean;
  updating: boolean;
};

export type ErrorAction = {
  type: typeof ACTIONS.FETCH_USER_ERROR;
  payload: { error: Error };
};

export type LoadingAction = {
  type: typeof ACTIONS.FETCH_USER_LOADING;
};

export type UserLoaded = {
  type: typeof ACTIONS.FETCH_USER_SUCCESS;
  payload: { user: UserProfile };
};

export type UserUpdated = {
  type: typeof ACTIONS.UPDATE_USER_SUCCESS;
  payload: { user: UserProfile };
};

export type UserUpdating = {
  type: typeof ACTIONS.UPDATE_USER_LOADING;
};

export type UserEmpty = {
  type: typeof ACTIONS.FETCH_USER_EMPTY;
};

export type UserUpdateFailed = {
  type: typeof ACTIONS.UPDATE_USER_FAILED;
};

export type ActionType =
  | ErrorAction
  | LoadingAction
  | UserLoaded
  | UserEmpty
  | UserUpdated
  | UserUpdating
  | UserUpdateFailed;
