import { Dispatch } from "redux";
import { USER_ACTIONS } from "./actionTypes";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { IUser } from "../../api/responses";
import { UserProfile } from "./types";
import { FALLBACK_ACTIONS } from "../fallback/actionTypes";
import { IUpdateUserBody } from "../../api/requests";

export function getUser() {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) {
        return dispatch({ type: USER_ACTIONS.empty });
      }

      dispatch({ type: USER_ACTIONS.loading });

      const token = await firebase.auth().currentUser.getIdToken();
      const user = await apiClient.getUser(token);
      const normalisedUser = normaliseUserData(user);

      dispatch({ type: USER_ACTIONS.loaded, user: normalisedUser });
    } catch (error) {
      dispatch({ type: USER_ACTIONS.error, error: error.message });
      dispatch({ type: FALLBACK_ACTIONS.error, error: error.message });
      firebase.auth().signOut();
    }
  };
}

export function updateUser(user: IUpdateUserBody) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) {
        return dispatch({ type: USER_ACTIONS.empty });
      }

      dispatch({ type: USER_ACTIONS.updating });

      const token = await firebase.auth().currentUser.getIdToken();
      const newUser = await apiClient.updateUser(token, user);
      const normalisedUser = normaliseUserData(newUser);

      dispatch({ type: USER_ACTIONS.updated, user: normalisedUser });
    } catch (error) {
      dispatch({ type: USER_ACTIONS.updateFailed });
      dispatch({ type: FALLBACK_ACTIONS.error, error: error.message });
    }
  };
}

function normaliseUserData(user: IUser): UserProfile {
  const profile: UserProfile = {
    name: user.data.name || "",
    msisdn: user.data.msisdn || "",
    address: user.data.address || "",
    email: user.data.email || "",
    sex: user.data.sex || "",
    exposeData: Boolean(user.data.exposeData),
    stopAgresji: Boolean(user.data.stopAgresji),
    termsConfirmation: user.data.termsConfirmation || "",
    autoSend: user.data.autoSend === undefined ? true : user.data.autoSend,
    myAppsSize: user.data.myAppsSize || 200,
    number: user.number,
    updated: user.updated || new Date().toDateString(),
    lastLocation: user.lastLocation || "",
    appsCount: user.appsCount || 0,
    isRegistered: Boolean(user.isRegistered),
    isTermsConfirmed: Boolean(user.isTermsConfirmed),
  };

  return profile;
}
