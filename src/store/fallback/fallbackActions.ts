import * as ACTIONS from "./actionTypes";

export function cleanError(id: string) {
  return { type: ACTIONS.FALLBACK_ERROR_CLEAN, payload: { errorID: id } };
}

export function addError(error: string) {
  return { type: ACTIONS.FALLBACK_ERROR, payload: { error } };
}
