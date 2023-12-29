import { REPORT_ACTIONS } from "./actionTypes";
import { ReportState } from "./types";

const initialState: ReportState = {};

export function reportReducer(state = initialState, action: any) {
  switch (action.type) {
    case REPORT_ACTIONS.clean:
      return {
        ...initialState,
      };
    default:
      return state || initialState;
  }
}
