import * as ACTIONS from "./actionTypes";

export type FallbackState = {
  errors: FallbackError[];
};

export type ErrorActionType = {
  type: typeof ACTIONS.FALLBACK_ERROR;
  payload: { error: string };
};

export type CleanErrorActionType = {
  type: typeof ACTIONS.FALLBACK_ERROR_CLEAN;
  payload: { errorID: string };
};

export type ActionType = ErrorActionType | CleanErrorActionType;

export type FallbackError = { id: string; msg: string };
