
export const getReports = (uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection("reports").where("userId", "==", uid)
    .get()
    .then(function(querySnapshot) {
      const reports = [];
      querySnapshot.forEach(doc => reports.push(doc.data()));

      dispatch({ type: 'reports/GET', reports: reports });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error); // error
    });
  };
};
