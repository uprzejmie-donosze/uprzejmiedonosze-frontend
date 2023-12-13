const initialState = {
  token: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "TOKEN_USER":
      return {
        ...state,
        token: action.token,
      };

    default:
    return state || initialState;
  }
};

export default authReducer;
