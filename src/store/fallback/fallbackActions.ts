import { FALLBACK_ACTIONS } from "./actionTypes";

export function cleanError() {
  return { type: FALLBACK_ACTIONS.errorClean };
}
