import * as ACTIONS from "./actionTypes";

export type ReportFormState = {
  disabled: boolean;
  carImage: ImageData;
  contextImage: ImageData;
  datetime: {
    value: string;
    source: string;
  };
  location: FormLocation;
  category: {
    value: string;
    contextImageHint: string;
    carImageHint: string;
  };
};

export type ImageData = {
  loading: boolean;
  loaded: boolean;
  error: string | null;
  value: string | null;
};

export type ReportAppState = {
  loaded: boolean;
  loading: boolean;
  id: string;
  date: string | null;
  added: string | null;
  status: string;
  carImageThumb: string | null;
  contextImageThumb: string | null;
  plateIdFromImage: string | null;
  plateImage: string | null;
  address: AppAddress;
};

export type FormLocation = {
  loading: boolean;
  loaded: boolean;
  source: string;
  lat: number;
  lng: number;
  address: FormAddress;
};

export type FormAddress = {
  fullAddress: string;
  city: string;
  voivodeship: string;
  postcode: string;
  county: string;
  district: string;
  municipality: string;
  sm: string;
  sa: string;
};

export type AppAddress = {
  latlng: string;
  address: string;
  city: string;
  voivodeship: string;
  district: string;
  mapImage: string;
  county: string;
  municipality: string;
  postcode: string;
};

export type CleanAction = {
  type: typeof ACTIONS.REPORT_FORM_CLEAN;
};

export type ImageLoadingAction = {
  type: typeof ACTIONS.REPORT_FORM_IMAGE_LOADING;
  payload: { imageID: string };
};

export type ImageErrorAction = {
  type: typeof ACTIONS.REPORT_FORM_IMAGE_ERROR;
  payload: { imageID: string; imageError: string };
};

export type ImageLoadedAction = {
  type: typeof ACTIONS.REPORT_FORM_IMAGE_LOADED;
  payload: { imageID: string; image: string };
};

export type ImageResizedAction = {
  type: typeof ACTIONS.REPORT_FORM_IMAGE_RESIZED;
  payload: { imageID: string; image: string };
};

export type SetDateAction = {
  type: typeof ACTIONS.REPORT_FORM_DATETIME;
  payload: { value: string; source: string };
};

export type SetCategoryAction = {
  type: typeof ACTIONS.REPORT_FORM_CATEGORY;
  payload: {
    value: string;
    contextImageHint: string;
    carImageHint: string;
  };
};

export type AddressLoadingAction = {
  type: typeof ACTIONS.REPORT_FORM_ADDRESS_LOADING;
};

export type AddressErrorAction = {
  type: typeof ACTIONS.REPORT_FORM_ADDRESS_ERROR;
};

export type AddressLoadedAction = {
  type: typeof ACTIONS.REPORT_FORM_ADDRESS_LOADED;
  payload: { address: FormAddress };
};

export type SetCoordsAction = {
  type: typeof ACTIONS.REPORT_FORM_SET_COORDS;
  payload: { lat: number; lng: number; source: string };
};

export type FormActionType =
  | CleanAction
  | ImageLoadingAction
  | ImageErrorAction
  | ImageResizedAction
  | ImageLoadedAction
  | SetDateAction
  | SetCategoryAction
  | AddressLoadedAction
  | AddressErrorAction
  | AddressLoadingAction
  | SetCoordsAction;
