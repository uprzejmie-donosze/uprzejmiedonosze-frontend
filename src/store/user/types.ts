import { USER_ACTIONS } from "./actionTypes";

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
  type: typeof USER_ACTIONS.error;
  error: Error;
};

export type LoadingAction = {
  type: typeof USER_ACTIONS.loading;
};

export type UserLoaded = {
  type: typeof USER_ACTIONS.loaded;
  user: UserProfile;
};

export type UserUpdated = {
  type: typeof USER_ACTIONS.updated;
  user: UserProfile;
};

export type UserUpdating = {
  type: typeof USER_ACTIONS.updating;
};

export type UserEmpty = {
  type: typeof USER_ACTIONS.empty;
};

export type UserUpdateFailed = {
  type: typeof USER_ACTIONS.updateFailed;
};

export type ActionType =
  | ErrorAction
  | LoadingAction
  | UserLoaded
  | UserEmpty
  | UserUpdated
  | UserUpdating
  | UserUpdateFailed;
