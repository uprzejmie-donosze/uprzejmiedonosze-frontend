import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';

import { signInUser } from '../store/actions/authActions';
import { Container } from '../styles/styledComponents';
import Navbar from '../components/Navbar';

class Login extends Component {
  render() {
    if (this.props.auth.uid) return <Redirect from="login" to='app' noThrow />;

    return (
      <div>
        <Navbar />

        <Container>
          <h1>Zaloguj się</h1>
          <button onClick={() => this.props.signIn()} disabled={this.props.waitingForAuth}>
            zaloguj się przez Google
          </button>

          <p>
            <span>Nie masz konta Google? Możesz je założyć </span>
            <a href="https://support.google.com/mail/answer/56256?hl=pl" target="_blank" rel="noopener noreferrer">tutaj</a>
          </p>
        </Container>
      </div>
    );
  }
};

Login.propTypes = {
  signIn: PropTypes.func,
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  waitingForAuth: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
  return {
   signIn: () => dispatch(signInUser())
  };
};

const mapStateToProps = (state) => {
  return {
   auth: state.firebase.auth,
   waitingForAuth: state.auth.waitingForAuth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
