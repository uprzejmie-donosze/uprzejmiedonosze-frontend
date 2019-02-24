import { formStatus } from '../../consts/formConsts';
import { FORM_ERRORS } from '../../consts/formConsts';

const filterErrorArray = (formErrors, errorType) => {
  return formErrors.filter(error => error !== errorType);
};

const initialState = {
  formData: {
    date: null,
    id: null,
    number: null,
    status: null,
    contextImage: null,
    carImage: null,
    category: 7,
    comment: null,
    carInfo: {
      plateId: null,
      plateIdFormImage: null,
      brand: null,
      plateImage: null,
      recydywa: 0
    },
    address: {
      address: '',
      city: '',
      voivodeship: '',
      latlng: null
    },
    user: null,
  },
  formErrors: [],
  isFormComplete: false
};

const formReducer = (state, action) => {
  let errors = [];

  switch (action.type) {
    case "form/ADD_CONTEXTIMAGE":
      errors = filterErrorArray(state.formErrors, FORM_ERRORS.contextImageUpload.type);

      return {
        ...state,
        formData: { ...state.formData, contextImage: action.contextImage },
        formErrors: [ ...errors ]
      };

    case "form/ADD_CARIMAGE":
      errors = filterErrorArray(state.formErrors, FORM_ERRORS.carImageUpload.type);

      return {
        ...state,
        formData: { ...state.formData, carImage: action.carImage },
        formErrors: [ ...errors ]
      };

    case "form/AUTOCOMPLETE_LOCATION":
      errors = filterErrorArray(state.formErrors, FORM_ERRORS.address.type);

      return {
        ...state,
        formData: { ...state.formData, address: action.autocompleteData },
        formErrors: [ ...errors ]
      };

      case "form/ADD_CARNUMBER":
        errors = filterErrorArray(state.formErrors, FORM_ERRORS.carNumber.type);

        return {
          ...state,
          formData: { ...state.formData, carInfo: { ...state.carInfo, plateId: action.carNumber }},
          formErrors: [ ...errors ]
        };

      case "form/ADD_COMMENT":
        errors = filterErrorArray(state.formErrors, FORM_ERRORS.comment.type);

        return {
          ...state,
          formData: { ...state.formData, comment: action.comment },
          formErrors: [ ...errors ]
        };

      case "form/ADD_CATEGORY":
        return { ...state, formData: { ...state.formData, category: action.category } };

      case "form/ADD_USER":
        return { ...state, formData: { ...state.formData, user: action.user } };

      case "form/ADD_FORMID":
        return { ...state, formData: { ...state.formData, id: action.id } };

      case "form/UPDATE_FORMDATA":
        return { ...state, formData: { ...state.formData, ...action.formData } };

      case "form/CRETE_NEW_REPORT":
        return {
          ...state,
          formData: {
            ...state.formData,
            user: action.user,
            date: new Date(),
            status: formStatus.draft,
            number: '1/2/a' // TO DO
          }
        };

      case "form/HANDLE_FORM_ERROR":
        const error = state.formErrors.find(error => error === action.errorType);
        if (!error) return { ...state, formErrors: [ ...state.formErrors, action.errorType ]};
        return { ...state };

      case "form/HANDLE_FORM_ERRORORS":
        return state.formErrors.length === 0 ? { ...state, formErrors: [...action.errors]} : { ...state };

      case "form/CLEAR_FORM_DATA":
        return { ...initialState };

    default:
    return state || initialState;
  }
};

export default formReducer;
