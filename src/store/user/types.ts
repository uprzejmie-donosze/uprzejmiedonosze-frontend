import { USER_ACTIONS } from "./actionTypes";

export type UserProfile = {
  data: {
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
  };
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

export type UserEmpty = {
  type: typeof USER_ACTIONS.empty;
};

export type ActionType = ErrorAction | LoadingAction | UserLoaded | UserEmpty;
