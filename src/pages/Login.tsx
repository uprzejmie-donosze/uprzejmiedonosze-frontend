import React from 'react';
import { Redirect } from '@reach/router';

import { LinearLoader } from '../components/Loader';
import { Button, Container } from '../styles';
import { ROUTES } from '../config';
import { signInUser } from '../store/firebase';
import { useAppDispatch, useAppSelector } from '../store';

export function Login() {
  const auth = useAppSelector(state => state.firebase.auth);
  const dispatch = useAppDispatch();

  function signIn(){
    dispatch(signInUser())
  }

  if (!auth.isLoaded) return <Container><LinearLoader /></Container>
  if (auth.uid) return <Redirect from={ROUTES.login} to={ROUTES.home} noThrow />;

  return (
    <Container>
      <h1>Zaloguj się</h1>

      <Button onClick={signIn}>
        Zaloguj się przez Google
      </Button>
    </Container>
  );
};
