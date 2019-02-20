import { navigate } from '@reach/router';
import { readGeoDataFromImage } from '../helpers/formHelpers';

export const autocompleteLocation = (place) => {
  return (dispatch) => {
    const autocompleteData = {
      address: place.formatted_address.replace(', Polska', ''),
      city: '',
      voivodeship: '',
      latlng: `${place.geometry.location.lat()}, ${place.geometry.location.lng()}`
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
      dispatch({ type: 'form/ADD_CATEGORY', category: type });
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

export const addContextImage = (file) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const dataFromImg = readGeoDataFromImage(file);

    dataFromImg.then(resp => {
      console.log(resp);
      // dispatch add time
      // google function find address and dispatch address action
      // resize image
    }).catch(error => {
      console.log(error);
    });
  };
};

export const createNewReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const user = getState().firebase.profile;

    const userData = {
      name: user.name,
      email: user.email,
      msisdn: user.msisdn,
      address: user.address
    };

    dispatch({ type: 'form/CRETE_NEW_REPORT', user: userData });
    const firestore = getFirestore();
    const form = getState().form.formData;
    const id = '13-dd1-22'; // to do generate uid

    firestore.collection('reports').doc(id).set({ ...form, id: id }).then(resp => {
      const userUid = getState().firebase.auth.uid;
      dispatch({ type: 'form/ADD_FORMID', id: id });

      firestore.collection('users').doc(userUid).update({
        draftId: id,
        reports: firestore.FieldValue.arrayUnion(id)
      }).then(() => {
        console.log("User successfully updated!");
        navigate(`/app/report/${id}`);

      }).catch((error) => {
        console.error("Error updating user: ", error);
      });

    }).catch(error => {
      console.log(error);
    });
  };
};

export const getFormData = (formId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('reports').doc(formId).get().then(doc => {
      dispatch({ type: 'form/UPDATE_FORMDATA', formData: doc.data() });
    });
  };
};

export const submitReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const report = firestore.collection('reports').doc("Kinga Sieminiak");
    console.log(report);

    // return db.runTransaction(function(transaction) {
    //   return transaction.get(report).then(function(sfDoc) {
    //     if (!sfDoc.exists) {
    //       throw "Document does not exist!";
    //     }

    //     var newPopulation = sfDoc.data().population + 1;
    //     transaction.update(sfDocRef, { population: newPopulation });
    //   });
    // }).then(function() {
    //     console.log("Transaction successfully committed!");
    // }).catch(function(error) {
    //     console.log("Transaction failed: ", error);
    // });
  };
};
