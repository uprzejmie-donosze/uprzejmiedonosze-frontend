import React from 'react';
import { Redirect, useLocation } from "@reach/router";
import { useSelector } from 'react-redux';
import { LinearLoader } from '../components/Loader';
import { ROUTES } from './routes';

export function withAuth(Component) {
  function WithAuth(props) {
    const auth = useSelector((state) => state.firebase.auth);
    const location = useLocation();

    if (!auth.isLoaded) return <LinearLoader />;

    if (!auth.uid) {
      return <Redirect from={location.pathname} to={ROUTES.login} noThrow />;
    }

    return <Component {...props} />;
  };
  return WithAuth;
}

