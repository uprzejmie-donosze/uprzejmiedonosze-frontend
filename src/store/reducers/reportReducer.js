import { FORM_STATUSES } from '../../consts/formConsts';
import { actionTypes } from 'redux-firestore';

function filterReports(reports, filters) {
  return reports.filter(report => {
    if (filters.includes(report.status)) {
      return report;
    };
  });
};

const initialState = {
  reports: [],
  filters: [ 'all' ],
  filteredReports: []
};

const reportReducer = (state, action) => {
  let filters = [];
  let reports = [];
  let foundIndex = [];

  switch (action.type) {
    case "reports/GET":
      reports = !state.filters.includes('all') ? filterReports(action.reports, state.filters) : action.reports;

      return { ...state, reports: action.reports, filteredReports: reports };

    case "reports/UPDATE_STATUS":
      reports = state.reports;
      foundIndex = reports.findIndex(index => index.id === action.id);
      reports[foundIndex] = { ...reports[foundIndex], status: action.status };

      return { ...state, reports: [ ...reports ], filteredReports: [ ...reports ] };

    case "reports/ADD_FILTER":
      if (action.filterType !== 'all' && state.filters.includes('all')) {
        let filteredArr = state.filters.filter(elem => elem !== 'all');
        filters = [ ...filteredArr, action.filterType ];
      } else if ( action.filterType === 'all' && !state.filters.includes('all')) {
        filters = [ action.filterType ];
      } else {
        filters = [...state.filters, action.filterType ];
      }

      reports = action.filterType !== 'all' ? filterReports(state.reports, filters) : state.reports;

      return { ...state, filteredReports: [ ...reports ], filters: [ ...filters ] };

    case "reports/REMOVE_FILTER":
      filters = state.filters.filter(elem => elem !== action.filterType);
      reports = filterReports(state.reports, filters);

      return { ...state, filteredReports: [ ...reports ], filters: [ ...filters ] };

    default:
    return state || initialState;
  }
};

export default reportReducer;
