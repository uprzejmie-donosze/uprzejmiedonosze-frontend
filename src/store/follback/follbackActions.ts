import { FOLLBACK_ACTIONS } from "./actionTypes";

export function cleanError() {
  return { type: FOLLBACK_ACTIONS.errorClean };
}
