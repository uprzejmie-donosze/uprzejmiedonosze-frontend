import { Dispatch } from "redux";
import { REPORT_ACTIONS } from "./actionTypes";
import {
  getMedatataFromImage,
  invalidImageType,
  resizeImage,
} from "../../lib/images";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { FALLBACK_ACTIONS } from "../fallback/actionTypes";

export function clean() {
  return { type: REPORT_ACTIONS.clean };
}

export function getReport(id: string) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) return;
      const token = await firebase.auth().currentUser.getIdToken();
      const data = await apiClient.getReport(token, id);
      dispatch({ type: REPORT_ACTIONS.new, payload: { id: data.id } }); // TODO: update all data
    } catch (error) {
      // TODO: if 404 create new;
      dispatch({ type: FALLBACK_ACTIONS.error, error: error.message });
    }
  };
}

export function newReport(action: (id: string) => void) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) return;
      const token = await firebase.auth().currentUser.getIdToken();
      const data = await apiClient.createReport(token);
      dispatch({ type: REPORT_ACTIONS.new, payload: { id: data.id } });
      action(data.id);
    } catch (error) {
      dispatch({ type: FALLBACK_ACTIONS.error, error: error.message });
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
      type: REPORT_ACTIONS.imageLoading,
      payload: { imageID: inputID },
    });

    if (invalidImageType(file.type)) {
      dispatch({
        type: REPORT_ACTIONS.imageError,
        payload: {
          imageID: inputID,
          imageError: `Zdjęcie o niepoprawnym type ${file.type}`,
        },
      });
    }

    try {
      const resizedImage = await resizeImage(file);
      dispatch({
        type: REPORT_ACTIONS.imageResized,
        payload: { imageID: inputID, image: resizedImage },
      });

      const imageMetadata: any = {};

      if (inputID === "carImage") {
        const imageMeta = await getMedatataFromImage(file);
        if (imageMeta.dateTime) {
          imageMetadata.dateTime = imageMeta.dateTime;

          dispatch({
            type: REPORT_ACTIONS.setDatetime,
            payload: { value: imageMeta.dateTime, source: "picture" },
          });
        }

        if (
          !!imageMeta.location.lat.length &&
          !!imageMeta.location.lng.length
        ) {
          imageMetadata.latLng = `${imageMeta.location.lat},${imageMeta.location.lng}`;
          // TODO: get address from image
          dispatch({
            type: REPORT_ACTIONS.setAddress,
            payload: { value: "location", source: "picture" },
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
      // TODO: handle success
      console.log(response);
      dispatch({
        type: REPORT_ACTIONS.imageLoaded,
        payload: { imageID: inputID, image: resizedImage },
      });
    } catch (error) {
      // TODO: add Sentry
      console.error(error);
      dispatch({
        type: REPORT_ACTIONS.imageError,
        payload: {
          imageID: inputID,
          imageError: error.message,
        },
      });
    }
  };
}
