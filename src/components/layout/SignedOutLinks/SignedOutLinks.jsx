import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signInUser } from '../../../store/actions/authActions';

const SignedOutLinks = (props) => {
  return (
    <button onClick={() => props.signIn(12331)}>login</button>
  );
};

SignedOutLinks.propTypes = {
  signIn: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
   signIn: (uid) => dispatch(signInUser(uid))
  };
};

export default connect(null, mapDispatchToProps)(SignedOutLinks);
