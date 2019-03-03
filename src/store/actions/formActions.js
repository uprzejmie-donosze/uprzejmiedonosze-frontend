import { navigate } from '@reach/router';
import uuidv1 from 'uuid/v1';
import sortBy from 'lodash.sortby';

import {
  readGeoDataFromImage,
  processFilePromise,
  loadImagePromise,
  formValidation,
  cropImage,
  coodsArrayToCanvasData
} from '../helpers/formHelpers';

import { FORM_ERRORS } from '../../consts/formConsts';
import openAlprConfig, { createAlprData } from '../../config/openAlprConfig';

export const autocompleteLocation = (place) => {
  return (dispatch) => {
    if (place.formatted_address) {
      const autocompleteData = {
        address: place.formatted_address.replace(', Polska', '').replace(/\d\d-\d\d\d\s/, ''),
        city: place.address_components.filter(e => e.types.indexOf('locality') == 0)[0].long_name,
        voivodeship: place.address_components.filter(e => e.types.indexOf('administrative_area_level_1') == 0)[0].long_name.replace('Województwo ', ''),
        country: place.address_components.filter(e => e.types.indexOf('country') == 0)[0].long_name,
        latlng: `${place.geometry.location.lat()}, ${place.geometry.location.lng()}`
      };

      dispatch({ type: 'form/AUTOCOMPLETE_LOCATION', autocompleteData });
    } else {
      dispatch({ type: 'form/HANDLE_FORM_ERROR', errorType: FORM_ERRORS.address.type });
    }
  };
};

export const addAddress = (address) => {
  return (dispatch) => {
    const autocompleteData = {
      address: address,
      city: null,
      voivodeship: null,
      country: null,
      latlng: null
    };

    dispatch({ type: 'form/AUTOCOMPLETE_LOCATION', autocompleteData });
    dispatch({ type: 'form/HANDLE_FORM_ERROR', errorType: FORM_ERRORS.address.type });
  };
};

export const addComment = (text) => {
  return (dispatch) => {
    if (text.length >= 20 || text.length === 0) {
      dispatch({ type: 'form/ADD_COMMENT', comment: text });
    } else {
      dispatch({ type: 'form/HANDLE_FORM_ERROR', errorType: FORM_ERRORS.comment.type });
    };
  };
};

export const addCrimeType = (type) => {
  return (dispatch) => {
    dispatch({ type: 'form/ADD_CATEGORY', category: type });

    if (type == 0) {
      dispatch({ type: 'form/HANDLE_FORM_ERROR', errorType: FORM_ERRORS.commentToCategory.type });
    }
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
    dispatch({ type: 'form/CONTEXTIMAGE_LOADING' });

    const firebase = getFirebase();
    const userEmail = getState().firebase.auth.email;
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`${userEmail}/${file.name}`);

    const dataFromImg = readGeoDataFromImage(file);
    const formatedImage = loadImagePromise(file);

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
    }).catch(error => {
      alert(error); // TO DO
    });

    dataFromImg.then(resp => {
      geocoder.geocode({ 'location': { lat: resp.lat, lng: resp.lng }}, (results, status) => {
        if (status === 'OK' && results[0]) {
          const autocompleteData = {
            address: results[0].formatted_address.replace(', Polska', '').replace(/\d\d-\d\d\d\s/, ''),
            city: results[0].address_components.filter(e => e.types.indexOf('locality') == 0)[0].long_name,
            voivodeship: results[0].address_components.filter(e => e.types.indexOf('administrative_area_level_1') == 0)[0].long_name.replace('Województwo ', ''),
            country: results[0].address_components.filter(e => e.types.indexOf('country') == 0)[0].long_name,
            latlng: `${resp.lat}, ${resp.lng}}`
          };

          dispatch({ type: 'form/AUTOCOMPLETE_LOCATION', autocompleteData });
          dispatch({ type: 'form/ADD_DATE', date: resp.dateTime });
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }).catch(error => {
      alert(error); // TO DO
    });
  };
};

export const addCarImage = (file) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: 'form/CARIMAGE_LOADING' });
    const userEmail = getState().firebase.auth.email;
    const carInfo = getState().form.formData.carInfo;

    const firebase = getFirebase();
    const storageRef = firebase.storage().ref();

    const imageRef = storageRef.child(`${userEmail}/${file.name}`);
    const plateRef = storageRef.child(`${userEmail}/platePreview-${file.name}`);

    const formatedImage = loadImagePromise(file);

    formatedImage.then(resp => {
      const alprData = createAlprData(resp);
      const uploadImgTask = imageRef.putString(resp, 'data_url');

      uploadImgTask.on('state_changed', (snapshot) => {}, (error) => {}, () => {
        uploadImgTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          dispatch({ type: 'form/ADD_CARIMAGE', carImage: downloadURL });
        });
      });

      fetch(openAlprConfig.url, { method: 'POST', body: alprData.formData })
      .then(response => response.json())
      .then(result => {

        if (result.results.length) {
          const sortedCars = sortBy(result.results, 'confidence');
          const carData = sortedCars[sortedCars.length - 1];
          const cropData = coodsArrayToCanvasData(carData.coordinates);

          cropImage(alprData.blob, cropData).then(resp => {
            const uploadPlateTask = plateRef.putString(resp, 'data_url');

            uploadPlateTask.on('state_changed', (snapshot) => {}, (error) => {}, () => {
              uploadPlateTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {

                const info = { ...carInfo, plateIdFormImage: carData.plate, plateImage: downloadURL };
                dispatch({ type: 'form/ADD_CARDATA', carInfo: info });
              });
            });
          });
        } else {
          alert('OpenAlpr no results');
        }
      }).catch(error => {
        alert('OpenAlpr error');
      });
    }).catch(error => {
      alert('Prosess file error');
    });
  };
};

export const createNewReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const errors = getState().form.formErrors;
    const validationResult = formValidation(getState().form);
    console.log(validationResult);

    if (validationResult.errorList.length > 0) {
      dispatch({ type: 'form/HANDLE_FORM_ERRORORS', errors: validationResult.errorList });
      return false;
    }

    if (errors.length === 0 && validationResult.isFormValid) {
      const user = getState().firebase.profile;
      const userData = { name: user.name, email: user.email, msisdn: user.msisdn, address: user.address };
      const id = uuidv1();
      const userId = getState().firebase.auth.uid;

      const number = `UD/${user.number}/${user.reports.length + 1}`;

      dispatch({ type: 'form/CRETE_NEW_REPORT', user: userData, id: id, number: number });

      const firestore = getFirestore();
      const form = getState().form.formData;

      firestore.collection('reports').doc(id).set({ ...form, userId: userId }).then(resp => {
        const userUid = getState().firebase.auth.uid;

        firestore.collection('users').doc(userUid).update({
          draftId: id,
          reports: firestore.FieldValue.arrayUnion(id)
        }).then(() => {
          navigate(`/app/report/${id}`);

        }).catch((error) => {
          console.error("Error updating user: ", error);
        });
      }).catch(error => {
        alert(error); // TO DO
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

export const updateReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const form = getState().form.formData;

    firestore.collection('reports').doc(form.id).update(form)
    .then(() => {
      navigate(`/app/report/${form.id}`);
    })
    .catch((error) => {
      alert('Report not updated!'); // TO DO
    });
  };
};

export const submitReport = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const form = getState().form.formData;

    firestore.collection('reports').doc(form.id).update({ status: 'save' })
    .then(() => {
      const userUid = getState().firebase.auth.uid;
      const firestore = getFirestore();
  
      firestore.collection('users').doc(userUid).update({
        draftId: null,
      }).then(() => {
        dispatch({ type: 'form/CLEAR_FORM_DATA' });
  
      }).catch((error) => {
        allert(`Error updating user: ${error}`); // TO DO
      });
    })
    .then(() => navigate('/app'))
    .catch((error) => {
      alert('Report not saved'); // TO DO
    });
  };
};

export const resetFormData = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const userUid = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection('users').doc(userUid).update({
      draftId: null,
    }).then(() => {
      dispatch({ type: 'form/CLEAR_FORM_DATA' });

    }).catch((error) => {
      alert(`Error updating user: ${error}`); // TO DO
    });
  };
};

export const addDateTime = (dateTime) => {
  return (dispatch) => {
    if (dateTime) {
      dispatch({ type: 'form/ADD_DATE', date: dateTime });
    } else {
      dispatch({ type: 'form/HANDLE_FORM_ERROR', errorType: FORM_ERRORS.date.type });
    }
  };
};
