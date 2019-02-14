import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOutUser } from '../../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <Fragment>
      <Link to='/report/new'>New report</Link>
      <Link to='/slsl'>Your Profile</Link>
      <Link to='/slsl/lddld'>Your Reports</Link>

      <button onClick={() => props.signOut()}>logout</button>
    </Fragment>
  );
};

SignedInLinks.propTypes = {
  signOut: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutUser())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
