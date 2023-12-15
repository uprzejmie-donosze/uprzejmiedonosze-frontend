import React from 'react';
import { Redirect } from '@reach/router';

import { LinearLoader } from '../components/Loader';
import { Container } from '../styles';
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
      <button onClick={signIn}>
        zaloguj się przez Google
      </button>

      <p>
        Nie masz konta Google? Mozesz je załozyć&nbsp;

        <a
          href="https://support.google.com/mail/answer/56256?hl=pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          tutaj
        </a>.
      </p>
    </Container>
  );
};
