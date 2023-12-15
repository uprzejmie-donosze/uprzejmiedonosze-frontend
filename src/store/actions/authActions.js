export function signInUser() {
  return (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    const authProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(authProvider)
    .catch((error) => console.error("signInWithPopup", error));
  };
};

export function signOutUser() {
  return (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut();
  };
};
