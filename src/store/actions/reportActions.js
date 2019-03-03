
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

export const updateStatus = (statusType, reportId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('reports').doc(reportId).update({ status: statusType })
    .then(() => {
      dispatch({ type: 'reports/UPDATE_STATUS', status: statusType, id: reportId });
      console.log('ok');
    })
    .catch((error) => {
      alert('Status not updated'); // TO DO
      console.log(error);
    });
  };
};

export const addFilter = (value) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: 'reports/ADD_FILTER', filterType: value });
  };
};

export const removeFilter = (value) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: 'reports/REMOVE_FILTER', filterType: value });
  };
};
