import { Dispatch } from "redux";
import { REPORT_ACTIONS } from "./actionTypes";
import {
  getMedatataFromImage,
  invalidImageType,
  resizeImage,
} from "../../lib/images";
import { apiClient } from "../../api";

export function clean() {
  return { type: REPORT_ACTIONS.clean };
}

export function uploadImage(file: Blob, inputID: string) {
  return async (dispatch: Dispatch) => {
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

      let imageMetadata = {};
      if (inputID === "carImage") {
        const imageMeta = await getMedatataFromImage(file);
        imageMetadata = {
          dateTime: imageMeta.dateTime,
          latLng: `${imageMeta.location.lat},${imageMeta.location.lng}`,
        };

        if (imageMeta.dateTime) {
          dispatch({
            type: REPORT_ACTIONS.setDatetime,
            payload: { value: imageMeta.dateTime, source: "picture" },
          });
        }

        if (imageMeta.location.lat) {
          // const location = locationFromLatLang(imageMeta.location);
          dispatch({
            type: REPORT_ACTIONS.setAddress,
            payload: { value: "location", source: "picture" },
          });
        }
      }

      await apiClient.sendImage("token", resizedImage, inputID, imageMetadata);
      // TODO: handle success
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
