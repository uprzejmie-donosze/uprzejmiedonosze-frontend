import * as ACTIONS from "./actionTypes";

export type FallbackState = {
  error: string | null;
};

export type ErrorActionType = {
  type: typeof ACTIONS.FALLBACK_ERROR;
  error: string;
};

export type CleanErrorActionType = {
  type: typeof ACTIONS.FALLBACK_ERROR_CLEAN;
};

export type ActionType = ErrorActionType | CleanErrorActionType;
