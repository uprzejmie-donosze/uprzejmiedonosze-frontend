import { USER_ACTIONS } from "./actionTypes";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { Dispatch } from "redux";

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
          .then((user) => dispatch({ type: USER_ACTIONS.loaded, user }))
          .catch((error: Error) => {
            dispatch({ type: USER_ACTIONS.error, error: error })
            // logout after fetching user profile fails
            firebase.auth().signOut()
          });
      });
  };
}
