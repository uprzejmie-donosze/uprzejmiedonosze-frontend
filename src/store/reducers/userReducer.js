import { USER_ACTIONS } from './../actionTypes';

const initialState = {
  details: null,
  loading: false,
  error: null,
  isLoaded: false,
  isRegistered: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.loading:
      return {
        ...state,
        loading: true,
        error: null,
        isLoaded: false,
        isRegistered: false,
      };
    case USER_ACTIONS.error:
      return {
        ...state,
        loading: false,
        error: action.error,
        isLoaded: true,
        isRegistered: false,
      };
    case USER_ACTIONS.userLoaded:
      return {
        ...state,
        details: { ...action.user },
        isRegistered: !!action.user?.data?.address?.length,
        loading: false,
        error: null,
        isLoaded: true,
      };

    default:
    return state || initialState;
  }
};

export default userReducer;
