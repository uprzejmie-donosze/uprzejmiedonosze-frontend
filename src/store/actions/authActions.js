import { navigate } from '@reach/router';

export const signInUser = () => {
  return (dispatch, _, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(authProvider).then((resp) => {
      const userFromCollection = firestore.collection('users').doc(resp.user.uid).get();

      userFromCollection.then((doc) => {
        if (!doc.data()) {
          firestore.collection('users').doc(resp.user.uid).set({
            name: resp.user.displayName,
            email: resp.user.email,
            photoURL: resp.user.photoURL,
            updated: new Date(),
            gender: resp.additionalUserInfo.profile.gender,
            address: null,
            IDnumber: null,
            reports: [],
            msisdn: null,
            number: resp.user.phoneNumber,
          });
        }
      }).then(() => {
        dispatch({ type: 'LOGIN_USER', uid: resp.user.uid, isUserAutorized: true });
        navigate('/');

      }).catch(error => {
       // console.error(error);
      });
    }).catch((error) => {
      const errorCode = error.code; // TO DO dispatch error
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  };
};

export const signOutUser = () => {
  return (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'LOGOUT_USER', uid: null, isUserAutorized: false });
      navigate('/');
    });
  };
};
