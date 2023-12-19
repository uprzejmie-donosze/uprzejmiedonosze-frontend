import { USER_ACTIONS } from "./actionTypes";
import { apiClient } from "../../api";
import { StoreExtraArgs } from "..";
import { Dispatch } from "redux";

export function getUser() {
  return (dispatch: Dispatch, _: any, { getFirebase }: StoreExtraArgs) => {
    const firebase = getFirebase();
    dispatch({ type: USER_ACTIONS.loading });

    firebase
      .auth()
      .currentUser?.getIdToken()
      .then((token: string) => {
        if (!token)
          return dispatch({
            type: USER_ACTIONS.error,
            error: "Auth token is missing.",
          });

        apiClient
          .getUser(token)
          .then((user) => dispatch({ type: USER_ACTIONS.loaded, user }))
          .catch((error: Error) =>
            dispatch({ type: USER_ACTIONS.error, error: error }),
          );
      });
  };
}
