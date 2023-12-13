import { navigate } from '@reach/router';

export function signInUser() {
  return (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    const authProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(authProvider)
    .then(() => navigate('/'))
    .catch((error) => console.error(error));
  };
};

export function signOutUser() {
  return (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => navigate('/'));
  };
};

export function getAuthToken() {
  return (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        user.getIdToken().then(function(idToken) {
          dispatch({ type: 'TOKEN_USER', token: idToken });
        });
      }
    });
  };
};
