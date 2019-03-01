const initialState = {
  reports: []
};

const reportReducer = (state, action) => {
  switch (action.type) {
    case "reports/GET":
      return {
        ...state,
        reports: action.reports
      };

    default:
    return state || initialState;
  }
};

export default reportReducer;
