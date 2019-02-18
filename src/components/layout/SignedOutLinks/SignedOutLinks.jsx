import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signInUser } from '../../../store/actions/authActions';
import { Link } from '@reach/router';

const SignedOutLinks = () => {
  return (
    <div>
      <Link to="regulations">Regualtions</Link>
      <Link to="faq">FAQ</Link>
      <Link to="login">login</Link>
    </div>
  );
};

export default SignedOutLinks;
