import { USER_ACTIONS } from "./actionTypes";

export type UserProfile = {
  data: {
    address: string;
  };
};

export type UserState = {
  profile: UserProfile | null;
  loading: boolean;
  error: Error | null;
  isLoaded: boolean;
  isRegistered: boolean;
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

export type ActionType = ErrorAction | LoadingAction | UserLoaded;
