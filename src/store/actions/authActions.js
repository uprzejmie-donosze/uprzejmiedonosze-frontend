export const signInUser = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(authProvider).then((resp) => {
      firestore.collection('users').doc(resp.user.uid).set({
        name: resp.user.displayName,
        email: resp.user.email,
        address: 'address',
        passport: '111'
      });

    }).then(() => {
      dispatch({ type: 'LOGIN_USER', uid: 111, isUserAutorized: true });

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
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'LOGOUT_USER', uid: null, isUserAutorized: false });
    });
  };
};
