import { navigate } from '@reach/router';

export const signInUser = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authProvider = new firebase.auth.GoogleAuthProvider();

    dispatch({ type: 'auth/DISABLED_AUTH' });

    firebase.auth().signInWithPopup(authProvider).then((resp) => {
      const userFromCollection = firestore.collection('users').doc(resp.user.uid).get();

      userFromCollection.then((doc) => {
        if (!doc.data()) {
          firestore.collection('users').doc(resp.user.uid.a).set({
            name: resp.user.displayName,
            email: resp.user.email,
            photoURL: resp.user.photoURL,
            updated: new Date(),
            sex: resp.additionalUserInfo.profile.gender,
            address: null,
            IDnumber: null,
            reports: [],
            msisdn: null,
            number: resp.user.phoneNumber,
          });
        }
      }).then(() => {
        dispatch({ type: 'auth/LOGIN_USER_SUCCESS' });
        navigate('/app');

      }).catch(error => {
        dispatch({ type: 'auth/LOGIN_USER_ERROR', authError: error });
      });
    }).catch((error) => {
      dispatch({ type: 'auth/LOGIN_USER_ERROR', authError: error });
    });
  };
};

export const signOutUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'auth/LOGOUT_USER_SUCCESS' });
      navigate('/');
    }).catch(error => {
      dispatch({ type: 'auth/LOGOUT_USER_ERROR', authError: error });
    });
  };
};
