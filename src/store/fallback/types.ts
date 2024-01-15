import * as ACTIONS from "./actionTypes";

export type FallbackState = {
  errors: string[];
};

export type ErrorActionType = {
  type: typeof ACTIONS.FALLBACK_ERROR;
  payload: { error: string };
};

export type CleanErrorActionType = {
  type: typeof ACTIONS.FALLBACK_ERROR_CLEAN;
  payload: { error: string };
};

export type ActionType = ErrorActionType | CleanErrorActionType;
