import { navigate } from '@reach/router';
import { readGeoDataFromImage, processFilePromise, formValidation } from '../helpers/formHelpers';
import { FORM_ERRORS } from '../../consts/formConsts';

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
    if (text.length >= 20) { // text validation
      dispatch({ type: 'form/ADD_COMMENT', comment: text });
    } else {
      dispatch({ type: 'form/HANDLE_FORM_ERROR', errorType: FORM_ERRORS.comment.type });
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
    if (number.length > 3) { // better validation required
      dispatch({ type: 'form/ADD_CARNUMBER', carNumber: number });
    } else {
      dispatch({ type: 'form/HANDLE_FORM_ERROR', errorType: FORM_ERRORS.carNumber.type });
    };
  };
};

export const addContextImage = (file, geocoder) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const userEmail = getState().firebase.auth.email;
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`${userEmail}/${file.name}`);

    const dataFromImg = readGeoDataFromImage(file);
    const formatedImage = processFilePromise(file);

    formatedImage.then(resp => {
      const uploadImgTask = imageRef.putString(resp, 'data_url');

      uploadImgTask.on('state_changed', (snapshot) => {
        // do something with progress
      }, (error) => {
        // Handle unsuccessful uploads
      }, () => {
        uploadImgTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          dispatch({ type: 'form/ADD_CONTEXTIMAGE', contextImage: downloadURL });
        });
      });
    });

    dataFromImg.then(resp => {
      geocoder.geocode({ 'location': { lat: resp.lat, lng: resp.lng }}, (results, status) => {
        if (status === 'OK' && results[0]) {
          const autocompleteData = {
            address: results[0].formatted_address.replace(', Polska', ''),
            city: '',
            voivodeship: '',
            latlng: `${resp.lat}, ${resp.lng}}`
          };

          dispatch({ type: 'form/AUTOCOMPLETE_LOCATION', autocompleteData });
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }).catch(error => {
      console.log(error);
    });
  };
};

export const createNewReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const errors = getState().form.formErrors;
    const isFormValid = formValidation(getState().form);

    console.log('is form valid:', errors.length === 0 && isFormValid);

    if (errors.length === 0 && isFormValid) {
      const user = getState().firebase.profile;
      const userData = { name: user.name, email: user.email, msisdn: user.msisdn, address: user.address };
  
      dispatch({ type: 'form/CRETE_NEW_REPORT', user: userData });
  
      const firestore = getFirestore();
      const form = getState().form.formData;
      const id = '13-dd1-22--s'; // to do generate uid
  
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
    }
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

export const resetFormData = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const userUid = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection('users').doc(userUid).update({
      draftId: null,
    }).then(() => {
      dispatch({ type: 'form/form/CLEAR_FORM_DATA' });

    }).catch((error) => {
      console.error("Error updating user: ", error);
    });
  }
}