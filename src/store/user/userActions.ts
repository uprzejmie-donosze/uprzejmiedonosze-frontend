import { Dispatch } from "redux";
import { USER_ACTIONS } from "./actionTypes";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { IUser } from "../../api/responses";
import { UserProfile } from "./types";
import { FOLLBACK_ACTIONS } from "../follback/actionTypes";

export function getUser() {
  return (dispatch: Dispatch, _: any, { getFirebase }: StoreExtraArgs) => {
    const firebase = getFirebase();
    if (firebase.auth().currentUser === null) {
      return dispatch({ type: USER_ACTIONS.empty });
    }

    dispatch({ type: USER_ACTIONS.loading });

    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        apiClient
          .getUser(token)
          .then((user: IUser) => {
            const normalisedUser = normaliseUserData(user);
            dispatch({ type: USER_ACTIONS.loaded, user: normalisedUser });
          })
          .catch((error: Error) => {
            dispatch({ type: USER_ACTIONS.error, error: error });
            // TODO: fix error message
            dispatch({ type: FOLLBACK_ACTIONS.error, error: "Failed" });
            // logout after fetching user profile fails
            firebase.auth().signOut();
          });
      });
  };
}

function normaliseUserData(user: IUser): UserProfile {
  const profile: UserProfile = {
    data: {
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
    },
    number: user.number,
    updated: user.updated || new Date().toDateString(),
    lastLocation: user.lastLocation || "",
    appsCount: user.appsCount || 0,
    isRegistered: Boolean(user.isTermsConfirmed),
    isTermsConfirmed: Boolean(user.isTermsConfirmed),
  };

  return profile;
}
