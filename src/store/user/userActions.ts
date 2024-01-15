import { Dispatch } from "redux";
import * as ACTIONS from "./actionTypes";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { IUser } from "../../api/responses";
import { UserProfile } from "./types";
import { FALLBACK_ERROR } from "../fallback/actionTypes";
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
        return dispatch({ type: ACTIONS.FETCH_USER_EMPTY });
      }

      dispatch({ type: ACTIONS.FETCH_USER_LOADING });

      const token = await firebase.auth().currentUser.getIdToken();
      const user = await apiClient.getUser(token);
      const normalisedUser = normaliseUserData(user);

      dispatch({
        type: ACTIONS.FETCH_USER_SUCCESS,
        payload: { user: normalisedUser },
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.FETCH_USER_ERROR,
        payload: { error: error.message },
      });
      dispatch({ type: FALLBACK_ERROR, payload: { error: error.message } });
      firebase.auth().signOut();
    }
  };
}

export function updateUser(user: IUpdateUserBody, successAction: () => void) {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) {
        return dispatch({ type: ACTIONS.FETCH_USER_EMPTY });
      }

      dispatch({ type: ACTIONS.UPDATE_USER_LOADING });

      const token = await firebase.auth().currentUser.getIdToken();
      const newUser = await apiClient.updateUser(token, user);
      const normalisedUser = normaliseUserData(newUser);

      dispatch({
        type: ACTIONS.UPDATE_USER_SUCCESS,
        payload: { user: normalisedUser },
      });
      successAction();
    } catch (error) {
      dispatch({ type: ACTIONS.UPDATE_USER_FAILED });
      dispatch({ type: FALLBACK_ERROR, payload: { error: error.message } });
    }
  };
}

export function confirmTermsOfUse() {
  return async (
    dispatch: Dispatch,
    _: any,
    { getFirebase }: StoreExtraArgs,
  ) => {
    const firebase = getFirebase();
    try {
      if (firebase.auth().currentUser === null) return;
      dispatch({ type: ACTIONS.UPDATE_USER_LOADING });

      const token = await firebase.auth().currentUser.getIdToken();
      const newUser = await apiClient.confirmTermsOfUse(token);

      const normalisedUser = normaliseUserData(newUser);
      dispatch({
        type: ACTIONS.UPDATE_USER_SUCCESS,
        payload: { user: normalisedUser },
      });
    } catch (error) {
      dispatch({ type: ACTIONS.UPDATE_USER_FAILED });
      dispatch({ type: FALLBACK_ERROR, payload: { error: error.message } });
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
