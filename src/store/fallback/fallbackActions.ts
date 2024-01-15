import * as ACTIONS from "./actionTypes";

export function cleanError() {
  return { type: ACTIONS.FALLBACK_ERROR };
}
