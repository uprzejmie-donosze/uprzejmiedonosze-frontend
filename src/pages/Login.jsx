import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';

import { signInUser } from '../store/actions/authActions';
import { LinearLoader } from '../components/Loader';
import { Container } from '../styles';
import { ROUTES } from './../config';

function LoginPage(props) {
  if (!props.auth.isLoaded) return <Container><LinearLoader /></Container>
  if (props.auth.uid) return <Redirect from={ROUTES.login} to={ROUTES.home} noThrow />;

  return (
    <Container>
      <h1>Zaloguj się</h1>
      <button onClick={props.signIn}>
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

LoginPage.propTypes = {
  signIn: PropTypes.func,
  auth: PropTypes.shape({
    uid: PropTypes.string
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
   signIn: () => dispatch(signInUser())
  };
};

const mapStateToProps = (state) => {
  return {
   auth: state.firebase.auth
  };
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
