import React from "react";
import { Redirect } from "@reach/router";

import { LinearLoader } from "../components/Loader";
import { Button, Container } from "../styles";
import { ROUTES } from "../config";
import { signInUser } from "../store/firebase";
import { useAppDispatch, useAppSelector } from "../store";

export function Login() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  function signIn() {
    dispatch(signInUser());
  }

  if (!user.isLoaded)
    return (
      <Container>
        <LinearLoader />
      </Container>
    );

  if (!user.isEmpty && !user.profile.isRegistered)
    return <Redirect from={ROUTES.login} to={ROUTES.userEdit} noThrow />;

  if (!user.isEmpty)
    return <Redirect from={ROUTES.login} to={ROUTES.home} noThrow />;

  return (
    <Container>
      <h1>Zaloguj się</h1>

      <Button onClick={signIn}>Zaloguj się przez Google</Button>
    </Container>
  );
}
