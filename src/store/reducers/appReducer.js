const initialState = {
  isNavOpened: false
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_NAVBAR":
      return {
        ...state,
        isNavOpened: action.isNavOpened,
      };

    case "CLOSE_NAVBAR":
      return {
        ...state,
        isNavOpened: action.isNavOpened,
      };

    default:
    return state || initialState;
  }
};

export default appReducer;
