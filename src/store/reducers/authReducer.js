const initialState = {
  uid: null,
  isUserAutorized: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        uid: action.uid,
        isUserAutorized: action.isUserAutorized
      };

    case "LOGOUT_USER":
      return {
        ...state,
        uid: action.uid,
        isUserAutorized: action.isUserAutorized
      };

    default:
    return state || initialState;
  }
};

export default authReducer;
