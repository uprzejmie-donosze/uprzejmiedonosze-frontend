import React from "react";
import { Redirect, useLocation } from "@reach/router";

import { Container } from "../styles";
import { LinearLoader } from "../components/Loader";
import { ROUTES } from "./routes";
import { useAppSelector } from "../store";

export function withAuth(Component: React.ElementType) {
  function WithAuth(props: any) {
    const location = useLocation();
    const auth = useAppSelector((state) => state.firebase.auth);
    const user = useAppSelector((state) => state.user);

    if (!auth.isLoaded || !user.isLoaded)
      return (
        <Container>
          <LinearLoader />
        </Container>
      );

    if (!auth.uid) {
      return <Redirect from={location.pathname} to={ROUTES.login} noThrow />;
    }

    if (
      !user.empty &&
      !user.isRegistered &&
      location.pathname !== ROUTES.userEdit
    ) {
      return <Redirect from={location.pathname} to={ROUTES.userEdit} noThrow />;
    }

    return <Component {...props} />;
  }
  return WithAuth;
}
