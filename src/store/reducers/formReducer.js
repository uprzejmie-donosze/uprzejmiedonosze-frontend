import { formStatus } from '../../consts/formConsts';
import { FROM_STRUCTURE, FORM_ERRORS } from '../../consts/formConsts';

const filterErrors = (formErrors, errorType) => {
  return formErrors.filter(error => error !== errorType);
};

const initialState = {
  formData: FROM_STRUCTURE,
  formErrors: [],
  isFormComplete: false,
  isContexImageLoading: false,
  isCarImageLoading: false,
  isFormSaving: false
};

const formReducer = (state, action) => {
  let errors = [];

  switch (action.type) {
    case "form/ADD_CONTEXTIMAGE":
      errors = filterErrors(state.formErrors, FORM_ERRORS.contextImageUpload.type);

      return {
        ...state,
        formData: { ...state.formData, contextImage: action.contextImage },
        formErrors: [ ...errors ],
        isContexImageLoading: false,
      };

    case "form/CONTEXTIMAGE_LOADING":
      return { ...state, isContexImageLoading: true, };

    case "form/ADD_CARIMAGE":
      errors = filterErrors(state.formErrors, FORM_ERRORS.carImageUpload.type);

      return {
        ...state,
        formData: { ...state.formData, carImage: action.carImage },
        formErrors: [ ...errors ],
        isCarImageLoading: false,
      };

    case "form/CARIMAGE_LOADING":
      return { ...state, isCarImageLoading: true };

    case "form/AUTOCOMPLETE_LOCATION":
      errors = filterErrors(state.formErrors, FORM_ERRORS.address.type);

      return {
        ...state,
        formData: { ...state.formData, address: action.autocompleteData },
        formErrors: [ ...errors ]
      };

      case "form/ADD_CARNUMBER":
        errors = filterErrors(state.formErrors, FORM_ERRORS.carNumber.type);

        return {
          ...state,
          formData: { ...state.formData, carInfo: { ...state.formData.carInfo, plateId: action.carNumber }},
          formErrors: [ ...errors ]
        };

      case "form/ADD_CARDATA":
        errors = filterErrors(state.formErrors, FORM_ERRORS.carNumber.type);

        return {
          ...state,
          formData: { ...state.formData, carInfo: { ...action.carInfo }},
          formErrors: [ ...errors ]
        };

      case "form/ADD_COMMENT":
        errors = filterErrors(state.formErrors, FORM_ERRORS.comment.type);

        return {
          ...state,
          formData: { ...state.formData, comment: action.comment },
          formErrors: [ ...errors ]
        };

      case "form/ADD_CATEGORY":
        if ( action.category == 0) {
          errors = state.formErrors;
        } else {
          errors = filterErrors(state.formErrors, FORM_ERRORS.commentToCategory.type);
        }

        return { ...state, formData: { ...state.formData, category: action.category }, formErrors: [ ...errors ] };

      case "form/ADD_DATE":
        errors = filterErrors(state.formErrors, FORM_ERRORS.date.type);

        return {
          ...state,
          formData: { ...state.formData, date: action.date },
          formErrors: [ ...errors ]
        };

      case "form/ADD_USER":
        return { ...state, formData: { ...state.formData, user: action.user } };

      case "form/ADD_FORMID":
        return { ...state, formData: { ...state.formData, id: action.id } };

      case "form/UPDATE_FORMDATA":
        return { ...state, formData: { ...state.formData, ...action.formData } };

      case "form/CRETE_NEW_REPORT":
        return {
          ...state,
          formData: { ...state.formData, user: action.user, number: action.number, id: action.id }
        };

      case "form/HANDLE_FORM_ERROR":
        const error = state.formErrors.find(error => error === action.errorType);

        if (!error) {
          return {
            ...state,
            formErrors: [ ...state.formErrors, action.errorType ],
            isContexImageLoading: false,
            isCarImageLoading: false,
            isFormSaving: false
          };
        }

        return { ...state };

      case "form/HANDLE_FORM_ERRORORS":
        return { ...state, formErrors: [...action.errors]};

      case "form/CLEAR_FORM_DATA":
        return {
          formData: FROM_STRUCTURE,
          formErrors: [],
          isFormComplete: false,
          isContexImageLoading: false,
          isCarImageLoading: false,
          isFormSaving: false
        };

    default:
    return state || initialState;
  }
};

export default formReducer;
