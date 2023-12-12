import React from 'react';
import { Redirect, useLocation } from "@reach/router";
import { useSelector } from 'react-redux';

export function withAuth(Component) {
  function WithAuth(props) {
    const auth = useSelector((state) => state.firebase.auth);
    const location = useLocation();

    if (!auth.isLoaded) return <h1>loader</h1>; // TODO: add loader

    if (!auth.uid) {
      return <Redirect from={location.pathname} to='/logowanie' noThrow />;
    }

    return <Component {...props} />;
  };
  return WithAuth;
}

