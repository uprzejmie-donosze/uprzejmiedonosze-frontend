const initialState = {
  contextImage: null,
  carImage: null,
  address: null,
  carNumber: null,
  location: {
    lat: null,
    lng: null
  },
  comment: null,
  crimeType: null,
  user: null
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "form/ADD_CONTEXTIMAGE":
      return {
        ...state,
        contextImage: action.contextImage
      };

    case "form/ADD_CARIMAGE":
      return {
        ...state,
        carImage: action.carImage
      };

    case "form/AUTOCOMPLETE_LOCATION":
      return {
        ...state,
        ...action.autocompleteData
      };

      case "form/ADD_CARNUMBER":
      return {
        ...state,
        carNumber: action.carNumber
      };

      case "form/ADD_COMMENT":
      return {
        ...state,
        comment: action.comment
      };

      case "form/ADD_CRIMETYPE":
      return {
        ...state,
        crimeType: action.crimeType
      };

      case "form/ADD_USER":
      return {
        ...state,
        user: action.user
      };

    default:
    return state || initialState;
  }
};

export default formReducer;
