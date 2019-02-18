const initialState = {
  authError: null,
  waitingForAuth: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "auth/LOGIN_USER_SUCCESS":
      return {
        ...state,
        authError: false,
        waitingForAuth: false
      };

    case "auth/LOGIN_USER_ERROR":
      return {
        ...state,
        authError: action.authError.message,
        waitingForAuth: false
      };

    case "auth/LOGOUT_USER_SUCCESS":
      return {
        ...state,
        authError: false,
        waitingForAuth: false
      };

    case "auth/LOGOUT_USER_ERROR":
      return {
        ...state,
        authError: action.authError.message,
        waitingForAuth: false
      };

    case "auth/DISABLED_AUTH":
      return {
        ...state,
        waitingForAuth: true
      };

    default:
    return state || initialState;
  }
};

export default authReducer;
