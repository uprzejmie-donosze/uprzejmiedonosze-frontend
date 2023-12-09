import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';

import * as S from './styles';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <S.Navbar>
      <S.Navbar.Container>
        <S.Navbar.Logo to='/'>Uprzejmie Donoszę</S.Navbar.Logo>
        {links}
      </S.Navbar.Container>
    </S.Navbar>
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
    name: PropTypes.string,
    photoURL: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
