import { combineReducers } from "redux";
import * as ACTIONS from "./actionTypes";
import { FormActionType, ReportAppState, ReportFormState } from "./types";

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
  location: {
    loading: false,
    loaded: false,
    source: "",
    lat: null,
    lng: null,
    address: {
      fullAddress: "",
      city: "",
      voivodeship: "",
      postcode: "",
      county: "",
      district: "",
      municipality: "",
    },
  },
  datetime: {
    value: null,
    source: null,
  },
  category: {
    value: "0",
    contextImageHint:
      "Idealne zdjęcie powinno pokazywać pojazd z kilku metrów, w sposób dokumentujący wykroczenie.",
    carImageHint:
      "Idealne zdjęcia przedstawia cały pojazd z przodu lub z tyłu.",
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
  address: {
    latlng: "",
    address: "",
    city: "",
    voivodeship: "",
    district: "",
    mapImage: "",
    county: "",
    municipality: "",
    postcode: "",
  },
};

function formReducer(state = formState, action: FormActionType) {
  switch (action.type) {
    case ACTIONS.REPORT_FORM_CLEAN:
      return {
        ...formState,
      };
    case ACTIONS.REPORT_FORM_IMAGE_LOADING:
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
    case ACTIONS.REPORT_FORM_IMAGE_ERROR:
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
    case ACTIONS.REPORT_FORM_IMAGE_RESIZED:
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
    case ACTIONS.REPORT_FORM_IMAGE_LOADED:
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
    case ACTIONS.REPORT_FORM_DATETIME:
      return {
        ...state,
        datetime: {
          value: action.payload.value,
          source: action.payload.source,
        },
      };
    case ACTIONS.REPORT_FORM_CATEGORY:
      return {
        ...state,
        category: {
          value: action.payload.value,
          contextImageHint: action.payload.contextImageHint,
          carImageHint: action.payload.carImageHint,
        },
      };
    case ACTIONS.REPORT_FORM_ADDRESS_LOADING:
      return {
        ...state,
        location: {
          ...state.location,
          loading: true,
          loaded: false,
        },
      };
    case ACTIONS.REPORT_FORM_ADDRESS_ERROR:
      return {
        ...state,
        location: {
          ...state.location,
          loading: false,
          loaded: false,
        },
      };
    case ACTIONS.REPORT_FORM_ADDRESS_LOADED:
      return {
        ...state,
        location: {
          ...state.location,
          loading: false,
          loaded: true,
          address: { ...action.payload.address },
        },
      };
    case ACTIONS.REPORT_FORM_SET_COORDS:
      return {
        ...state,
        location: {
          ...state.location,
          lat: action.payload.lat,
          lng: action.payload.lng,
          source: action.payload.source,
        },
      };
    default:
      return state || formState;
  }
}

// TODO: add action types
function appReducer(state = appState, action: { type: string; payload: any }) {
  switch (action.type) {
    case ACTIONS.REPORT_APP_LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case ACTIONS.REPORT_APP_LOADED:
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
        address: {
          ...state.address,
          ...action.payload.data.address,
        },
      };
    default:
      return state || appState;
  }
}

export const reportReducer = combineReducers({
  app: appReducer,
  form: formReducer,
});
