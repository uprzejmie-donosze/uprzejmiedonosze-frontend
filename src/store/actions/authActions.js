export const signInUser = (uid) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const authProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(authProvider).then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;

      dispatch({ type: 'LOGIN_USER', uid: uid, isUserAutorized: true });

    }).catch((error) => {
      // TO DO dispatch error

      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  };
};

export const signOutUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOGOUT_USER', uid: null, isUserAutorized: false });
  };
};
