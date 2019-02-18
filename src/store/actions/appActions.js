import { navigate } from '@reach/router';

export const openNavbar = () => {
  return ( dispatch ) => {
    dispatch({ type: 'OPEN_NAVBAR', isNavOpened: true });
  };
};

export const closeNavbar = () => {
  return ( dispatch ) => {
    dispatch({ type: 'CLOSE_NAVBAR', isNavOpened: false });
  };
};
