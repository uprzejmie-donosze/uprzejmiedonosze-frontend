export const autocompleteLocation = (place) => {
  return (dispatch) => {
    const autocompleteData = {
      address: place.formatted_address.replace(', Polska', ''),
      location: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    };

    dispatch({ type: 'form/AUTOCOMPLETE_LOCATION', autocompleteData });
  };
};

export const addComment = (text) => {
  return (dispatch) => {
    if (text) { // text validation
      dispatch({ type: 'form/ADD_COMMENT', comment: text });
    } else {
      // dispatch error
    };
  };
};

export const addCrimeType = (type) => {
  return (dispatch) => {
    if (type) { // type validation for comment required
      dispatch({ type: 'form/ADD_CRIMETYPE', crimeType: type });
    } else {
      // dispatch comment required
    };
  };
};

export const addCarNumber = (number) => {
  return (dispatch) => {
    if (number) { // valid number
      dispatch({ type: 'form/ADD_CARNUMBER', carNumber: number });
    } else {
      // dispatch error
    };
  };
};

export const createNewReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // TO DO
  };
};

export const submitReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const form = getState().form;
    const userUid = getState().firebase.auth.uid;
    const userFromCollection = firestore.collection('users').doc(userUid);

    firestore.runTransaction((transaction) => {
      return transaction.get(userFromCollection).then((sfDoc) => {
        if (!sfDoc.exists) throw "Document does not exist!";

        const newReports = [ ...sfDoc.data().reports, form ];
        transaction.update(userFromCollection, { reports: newReports });

        return newReports;
      });
    }).then(function(newReports) {
      console.log(newReports);
    }).catch(function(err) {
      console.error(err);
    });
  };
};
