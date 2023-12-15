import React from 'react';
import { Redirect, useLocation } from "@reach/router";
import { useSelector } from 'react-redux';
import { LinearLoader } from '../components/Loader';

import { Container } from '../styles';
import { ROUTES } from './routes';

export function withAuth(Component) {
  function WithAuth(props) {
    const location = useLocation();
    const auth = useSelector((state) => state.firebase.auth);
    const user = useSelector((state) => state.user);

    if (!auth.isLoaded || !user.isLoaded) return <Container><LinearLoader /></Container>;

    if (!auth.uid) {
      return <Redirect from={location.pathname} to={ROUTES.login} noThrow />;
    }

    if (!user.isRegistered && location.pathname !== ROUTES.userEdit) {
      return <Redirect from={location.pathname} to={ROUTES.userEdit} noThrow />;
    }

    return <Component {...props} />;
  };
  return WithAuth;
}
