import { REPORT_ACTIONS } from "./actionTypes";
import { ReportState } from "./types";

const initialState: ReportState = {
  id: null,
  disabled: false,
  carImage: {
    loaded: false,
    loading: false,
    value: null,
    error: null,
  },
  contextImage: {
    loaded: false,
    loading: false,
    value: null,
    error: null,
  },
  address: {
    value: null,
    source: null,
  },
  datetime: {
    value: null,
    source: null,
  },
  appData: null,
};

export function reportReducer(
  state = initialState,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case REPORT_ACTIONS.new:
      return {
        ...state,
        id: action.payload.id,
        appData: { ...action.payload.data },
      };
    case REPORT_ACTIONS.clean:
      return {
        ...initialState,
      };
    case REPORT_ACTIONS.imageLoading:
      return {
        ...state,
        disabled: true,
        appData: { ...action.payload.data },
        [action.payload.imageID]: {
          loading: true,
          loaded: false,
          value: null,
          error: null,
        },
      };
    case REPORT_ACTIONS.imageError:
      return {
        ...state,
        disabled: false,
        [action.payload.imageID]: {
          loading: false,
          loaded: false,
          value: null,
          error: action.payload.imageError,
        },
      };
    case REPORT_ACTIONS.imageResized:
      return {
        ...state,
        disabled: false,
        [action.payload.imageID]: {
          loading: true,
          loaded: false,
          value: action.payload.image,
          error: null,
        },
      };
    case REPORT_ACTIONS.imageLoaded:
      return {
        ...state,
        disabled: false,
        [action.payload.imageID]: {
          loading: false,
          loaded: true,
          value: action.payload.image,
          error: null,
        },
      };
    case REPORT_ACTIONS.setDatetime:
      return {
        ...state,
        datetime: {
          value: action.payload.value,
          source: action.payload.source,
        },
      };
    default:
      return state || initialState;
  }
}
