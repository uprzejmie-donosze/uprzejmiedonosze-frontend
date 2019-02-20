import { formStatus } from '../../consts/formConsts';

const initialState = {
  formData: {
    date: null,
    id: null,
    number: null,
    status: null,
    contextImage: null,
    carImage: null,
    category: null,
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
  switch (action.type) {
    case "form/ADD_CONTEXTIMAGE":
      return {
        ...state,
        formData: { ...state.formData, contextImage: action.contextImage }
      };

    case "form/ADD_CARIMAGE":
      return {
        ...state,
        formData: { ...state.formData, carImage: action.carImage }
      };

    case "form/AUTOCOMPLETE_LOCATION":
      return {
        ...state,
        formData: { ...state.formData, address: action.autocompleteData }
      };

      case "form/ADD_CARNUMBER":
      return {
        ...state,
        formData: { ...state.formData, carInfo: { ...state.carInfo, plateId: action.carNumber } }
      };

      case "form/ADD_COMMENT":
      return {
        ...state,
        formData: { ...state.formData, comment: action.comment }
      };

      case "form/ADD_CATEGORY":
      return {
        ...state,
        formData: { ...state.formData, category: action.category }
      };

      case "form/ADD_USER":
      return {
        ...state,
        formData: { ...state.formData, user: action.user }
      };

      case "form/ADD_FORMID":
      return {
        ...state,
        formData: { ...state.formData, id: action.id }
      };

      case "form/UPDATE_FORMDATA":
      return {
        ...state,
        formData: { ...state.formData, ...action.formData }
      };

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

    default:
    return state || initialState;
  }
};

export default formReducer;
