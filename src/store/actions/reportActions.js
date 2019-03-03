
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
      alert(`Error ger reports: ${error}`); // TO DO
    });
  };
};

export const updateStatus = (statusType, reportId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('reports').doc(reportId).update({ status: statusType })
    .then(() => {
      dispatch({ type: 'reports/UPDATE_STATUS', status: statusType, id: reportId });
    })
    .catch((error) => {
      alert('Status not updated'); // TO DO
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
