import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <Nav>
      <Link to='/'>Uprzejmie Donoszę</Link>
      {links}
    </Nav>
  );
};

Navbar.defaultProps = {
  auth: {
    uid: null,
    isUserAutorized: false
  },
  profile: {
    name: "default name"
  }
};

Navbar.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  profile: PropTypes.shape({
    name: PropTypes.string
  })
};

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: green;
  margin-bottom: 1rem;

  > a {
    padding: .5rem 1rem;
    font-size: .8rem;
    font-weight: 600;
    font-family: sans-serif;
    color: white;
  }
`;

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
