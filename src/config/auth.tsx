import React, { useEffect } from "react";
import { Redirect, useLocation } from "@reach/router";

import { LinearLoader } from "../components/Loader";
import { ROUTES } from "./routes";
import { useAppDispatch, useAppSelector } from "../store";
import { getUser } from "../store/user";
import { TermsOfUse } from "../components/TermsOfUse";

export function withAuth(Component: React.ElementType) {
  function WithAuth(props: any) {
    const location = useLocation();
    const user = useAppSelector((state) => state.user);

    if (!user.isLoaded) return <LinearLoader />;

    if (user.isEmpty) {
      return <Redirect from={location.pathname} to={ROUTES.login} noThrow />;
    }

    if (
      !user.isEmpty &&
      !user.profile.isRegistered &&
      location.pathname !== ROUTES.userEdit
    ) {
      return <Redirect from={location.pathname} to={ROUTES.userEdit} noThrow />;
    }

    if (!user.isEmpty && !user.profile.isTermsConfirmed) return <TermsOfUse />;

    return <Component {...props} />;
  }

  return WithAuth;
}

export function useLogin() {
  const auth = useAppSelector((state) => state.firebase.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.isLoaded && dispatch(getUser());
  }, [auth.isEmpty, auth.isLoaded]);
}
