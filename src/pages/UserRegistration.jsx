import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';

function UserRegistration({ auth }) {
  if (!auth.uid) return <Redirect from="/uzytkownik/rejestracja" to='/logowanie' noThrow />;

  return (
    <section>
      <h1>Rejestracja</h1>
    </section>
  );
};

UserRegistration.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(UserRegistration);
