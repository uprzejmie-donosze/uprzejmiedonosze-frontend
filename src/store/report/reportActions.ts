import { Dispatch } from "redux";
import { REPORT_APP_ACTIONS, REPORT_FORM_ACTIONS } from "./actionTypes";
import {
  getMedatataFromImage,
  invalidImageType,
  resizeImage,
} from "../../lib/images";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { FALLBACK_ERROR } from "../fallback/actionTypes";
import { REPORT_CAR_IMAGE_NAME, REPORT_DATA_SOURCE } from "../../constants";

export function clean() {
  return { type: REPORT_FORM_ACTIONS.clean };
}

export function setCategory(
  value: string,
  contextImageHint: string,
  carImageHint: string,
) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: REPORT_FORM_ACTIONS.setCategory,
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

      dispatch({ type: REPORT_APP_ACTIONS.loading });
      const token = await firebase.auth().currentUser.getIdToken();

      const data = await apiClient.getReport(token, id);
      dispatch({ type: REPORT_APP_ACTIONS.loaded, payload: { data } });
    } catch (error) {
      if (error.status === 404) {
        handleMissingReport();
        return;
      }
      dispatch({ type: FALLBACK_ERROR, payload: { error: error.message } });
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

      dispatch({ type: REPORT_APP_ACTIONS.loading });
      const token = await firebase.auth().currentUser.getIdToken();

      const data = await apiClient.createReport(token);
      dispatch({ type: REPORT_APP_ACTIONS.loaded, payload: { data } });
      action(data.id);
    } catch (error) {
      dispatch({ type: FALLBACK_ERROR, payload: { error: error.message } });
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
      type: REPORT_FORM_ACTIONS.imageLoading,
      payload: { imageID: inputID },
    });

    if (invalidImageType(file.type)) {
      dispatch({
        type: REPORT_FORM_ACTIONS.imageError,
        payload: {
          imageID: inputID,
          imageError: `Zdjęcie o niepoprawnym type ${file.type}`,
        },
      });
    }

    try {
      const resizedImage = await resizeImage(file);
      dispatch({
        type: REPORT_FORM_ACTIONS.imageResized,
        payload: { imageID: inputID, image: resizedImage },
      });

      const imageMetadata: any = {};

      if (inputID === REPORT_CAR_IMAGE_NAME) {
        const imageMeta = await getMedatataFromImage(file);
        if (imageMeta.dateTime) {
          imageMetadata.dateTime = imageMeta.dateTime;

          dispatch({
            type: REPORT_FORM_ACTIONS.setDatetime,
            payload: {
              value: imageMeta.dateTime,
              source: REPORT_DATA_SOURCE.picture,
            },
          });
        }

        if (
          !!imageMeta.location.lat?.length &&
          !!imageMeta.location.lng?.length
        ) {
          imageMetadata.latLng = `${imageMeta.location.lat},${imageMeta.location.lng}`;
          // TODO: get address from image
          dispatch({
            type: REPORT_FORM_ACTIONS.setAddress,
            payload: { value: "location", source: REPORT_DATA_SOURCE.picture },
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
        type: REPORT_FORM_ACTIONS.imageLoaded,
        payload: { imageID: inputID, image: resizedImage },
      });
      dispatch({
        type: REPORT_APP_ACTIONS.loaded,
        payload: { data: response },
      });
    } catch (error) {
      // TODO: add Sentry
      dispatch({ type: FALLBACK_ERROR, payload: { error: error.message } });
      dispatch({
        type: REPORT_FORM_ACTIONS.imageError,
        payload: {
          imageID: inputID,
          imageError: error.message,
        },
      });
    }
  };
}
