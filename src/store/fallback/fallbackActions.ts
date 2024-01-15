import * as ACTIONS from "./actionTypes";

export function cleanError(error: string) {
  return { type: ACTIONS.FALLBACK_ERROR_CLEAN, payload: { error } };
}
