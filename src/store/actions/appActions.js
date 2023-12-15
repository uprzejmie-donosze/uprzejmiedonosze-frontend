import { APP_ACTIONS } from "../actionTypes";

export function openNavbar() {
  return function(dispatch) {
    dispatch({ type: APP_ACTIONS.openNav, isNavOpened: true });
  };
};

export function closeNavbar() {
  return function(dispatch) {
    dispatch({ type: APP_ACTIONS.closeNav, isNavOpened: false });
  };
};
