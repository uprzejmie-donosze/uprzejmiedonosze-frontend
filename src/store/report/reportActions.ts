import { Dispatch } from "redux";
import * as ACTIONS from "./actionTypes";
import {
  getMedatataFromImage,
  invalidImageType,
  resizeImage,
} from "../../lib/images";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { REPORT_CAR_IMAGE_NAME, REPORT_DATA_SOURCE } from "../../constants";
import { addError } from "../fallback";
import { FormAddress } from "./types";

export function clean() {
  return { type: ACTIONS.REPORT_FORM_CLEAN };
}

export function setCategory(
  value: string,
  contextImageHint: string,
  carImageHint: string,
) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: ACTIONS.REPORT_FORM_CATEGORY,
      payload: { value, contextImageHint, carImageHint },
    });
  };
}

export function getOrCreateReport(id: string, handleMissingReport: () => void) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) return;

      dispatch({ type: ACTIONS.REPORT_APP_LOADING });
      const token = await firebase.auth().currentUser.getIdToken();

      const data = await apiClient.getReport(token, id);
      dispatch({ type: ACTIONS.REPORT_APP_LOADED, payload: { data } });
    } catch (error) {
      if (error.status === 404) {
        handleMissingReport();
        return;
      }
      dispatch(addError(error.message));
    }
  };
}

export function createReport(action: (id: string) => void) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) return;

      dispatch({ type: ACTIONS.REPORT_APP_LOADING });
      const token = await firebase.auth().currentUser.getIdToken();

      const data = await apiClient.createReport(token);
      dispatch({ type: ACTIONS.REPORT_APP_LOADED, payload: { data } });
      action(data.id);
    } catch (error) {
      dispatch(addError(error.message));
    }
  };
}

export function uploadImage(file: Blob, reportID: string, inputID: string) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    dispatch({
      type: ACTIONS.REPORT_FORM_IMAGE_LOADING,
      payload: { imageID: inputID },
    });

    if (invalidImageType(file.type)) {
      dispatch({
        type: ACTIONS.REPORT_FORM_IMAGE_ERROR,
        payload: {
          imageID: inputID,
          imageError: `Zdjęcie o niepoprawnym type ${file.type}`,
        },
      });
    }

    try {
      const resizedImage = await resizeImage(file);
      dispatch({
        type: ACTIONS.REPORT_FORM_IMAGE_RESIZED,
        payload: { imageID: inputID, image: resizedImage },
      });

      const imageMetadata: any = {};

      if (inputID === REPORT_CAR_IMAGE_NAME) {
        const { dateTime, location } = await getMedatataFromImage(file);
        if (dateTime) {
          imageMetadata.dateTime = dateTime;

          dispatch({
            type: ACTIONS.REPORT_FORM_DATETIME,
            payload: {
              value: dateTime,
              source: REPORT_DATA_SOURCE.picture,
            },
          });
        }

        if (location.lat && location.lng) {
          imageMetadata.latLng = `${location.lat},${location.lng}`;
          dispatch({
            type: ACTIONS.REPORT_FORM_SET_COORDS,
            payload: {
              lat: location.lat,
              lng: location.lng,
              source: REPORT_DATA_SOURCE.picture,
            },
          });
        }
      }

      const firebase = getFirebase();
      if (firebase.auth().currentUser === null) return;

      const token = await firebase.auth().currentUser.getIdToken();
      const response = await apiClient.sendImage(
        token,
        reportID,
        resizedImage,
        inputID,
        imageMetadata,
      );
      dispatch({
        type: ACTIONS.REPORT_FORM_IMAGE_LOADED,
        payload: { imageID: inputID, image: resizedImage },
      });
      dispatch({
        type: ACTIONS.REPORT_APP_LOADED,
        payload: { data: response },
      });
    } catch (error) {
      // TODO: add Sentry
      dispatch(addError(error.message));
      dispatch({
        type: ACTIONS.REPORT_FORM_IMAGE_ERROR,
        payload: {
          imageID: inputID,
          imageError: error.message,
        },
      });
    }
  };
}

export function setCoords(lat: number, lng: number, source: string) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: ACTIONS.REPORT_FORM_SET_COORDS,
      payload: { lat, lng, source },
    });
  };
}

export function getAddress(lat: number, lng: number) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) return;

      dispatch({ type: ACTIONS.REPORT_FORM_ADDRESS_LOADING });

      const token = await firebase.auth().currentUser.getIdToken();
      const location = await getAddressData(token, lat, lng);

      dispatch({
        type: ACTIONS.REPORT_FORM_ADDRESS_LOADED,
        payload: { address: location },
      });
    } catch (error) {
      dispatch({ type: ACTIONS.REPORT_FORM_ADDRESS_ERROR });
      dispatch(addError(error.message));
    }
  };
}

async function getAddressData(
  token: string,
  lat: number,
  lng: number,
): Promise<FormAddress> {
  const mapbox = await apiClient.getMapBox(
    token,
    lat.toString(),
    lng.toString(),
  );
  const nominatim = await apiClient.getNominatim(
    token,
    lat.toString(),
    lng.toString(),
  );

  const location: FormAddress = {
    fullAddress: mapbox.address.address || nominatim.address?.address,
    city: mapbox.address?.city || nominatim.address?.city,
    voivodeship: mapbox.address?.voivodeship || nominatim.address?.voivodeship,
    postcode: mapbox.address?.postcode || nominatim.address?.postcode,
    municipality: nominatim.address?.municipality,
    county: nominatim.address?.county,
    district: nominatim.address?.district,
    sm: nominatim.sm?.address?.[0],
    sa: nominatim.sa?.address?.[0],
  };

  return location;
}
