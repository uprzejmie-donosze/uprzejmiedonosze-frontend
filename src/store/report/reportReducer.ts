import { combineReducers } from "redux";
import { REPORT_APP_ACTIONS, REPORT_FORM_ACTIONS } from "./actionTypes";
import { ReportAppState, ReportFormState } from "./types";

const formState: ReportFormState = {
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
};

const appState: ReportAppState = {
  loaded: false,
  loading: false,
  id: null,
  date: null,
  added: null,
  status: null,
  carImageThumb: null,
  contextImageThumb: null,
  plateIdFromImage: null,
  plateImage: null,
};

function formReducer(
  state = formState,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case REPORT_FORM_ACTIONS.clean:
      return {
        ...formState,
      };
    case REPORT_FORM_ACTIONS.imageLoading:
      return {
        ...state,
        disabled: true,
        [action.payload.imageID]: {
          loading: true,
          loaded: false,
          value: null,
          error: null,
        },
      };
    case REPORT_FORM_ACTIONS.imageError:
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
    case REPORT_FORM_ACTIONS.imageResized:
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
    case REPORT_FORM_ACTIONS.imageLoaded:
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
    case REPORT_FORM_ACTIONS.setDatetime:
      return {
        ...state,
        datetime: {
          value: action.payload.value,
          source: action.payload.source,
        },
      };
    default:
      return state || formState;
  }
}

function appReducer(state = appState, action: { type: string; payload: any }) {
  switch (action.type) {
    case REPORT_APP_ACTIONS.loading:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case REPORT_APP_ACTIONS.loaded:
      return {
        ...state,
        loading: false,
        loaded: true,
        id: action.payload.data.id,
        added: action.payload.data.added,
        date: action.payload.data.date,
        carImageThumb: action.payload.data.carImage?.thumb,
        contextImageThumb: action.payload.data.contextImage?.thumb,
        status: action.payload.data.status,
        plateIdFromImage: action.payload.data.carInfo?.plateIdFromImage,
        plateImage: action.payload.data.carInfo?.plateImage,
      };
    default:
      return state || appState;
  }
}

export const reportReducer = combineReducers({
  app: appReducer,
  form: formReducer,
});
