import { USER_ACTIONS } from "./actionTypes";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { Dispatch } from "redux";
import { IUser } from "../../api/responses";
import { UserProfile } from "./types";

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
      number: user.data.number || "",
      exposeData: user.data.exposeData || false,
      stopAgresji: user.data.stopAgresji || false,
      termsConfirmation: user.data.termsConfirmation || "",
      autoSend: user.data.autoSend || false,
      myAppsSize: user.data.myAppsSize || 0,
    },
    number: user.number || 0,
    updated: user.updated || new Date().toDateString(),
    lastLocation: user.lastLocation ?? "",
    appsCount: user.appsCount || 0,
  };

  return profile;
}
