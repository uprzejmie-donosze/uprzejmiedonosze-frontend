import { USER_ACTIONS } from '../actionTypes';
import { apiClient } from './../../api';

export function getUser() {
  return (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: USER_ACTIONS.loading });

    firebase.auth().currentUser?.getIdToken().then(token => {
      if (!token) return dispatch({ type: USER_ACTIONS.error, error: 'Auth token is missing.' });

      return apiClient.getUser(token)
        .then(user =>  dispatch({ type: USER_ACTIONS.userLoaded, user }))
        .catch(error => dispatch({ type: USER_ACTIONS.error, error: error.message }));
    });
  };
};
