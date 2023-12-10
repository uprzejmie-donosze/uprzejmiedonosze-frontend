import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import * as S from './styles';
import { closeNavbar, openNavbar } from '../../../store/actions/appActions';
import { signOutUser } from '../../../store/actions/authActions';

function Navbar({ auth, profile, isNavOpened, closeNav, openNav }) {

  function toggleMenu() {
    isNavOpened ? closeNav() : openNav();
  }

  return (
    <S.Navbar>
      <S.Navbar.Container>
        <S.Navbar.Logo to='/'>Uprzejmie Donoszę</S.Navbar.Logo>

        <S.Menu.Burger onClick={toggleMenu}>
          <svg width="20px" height="20px" viewBox="0 0 92 92">

          <path fill="currentColor" id="XMLID_101_" d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
            c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
            H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"/>
          </svg>
        </S.Menu.Burger>

        <S.Menu.Overlay onClick={toggleMenu} isNavOpened={isNavOpened} />

        <S.Menu isNavOpened={isNavOpened}>
          {!!auth.uid && (
            <S.Menu.Header>
              <S.Menu.Avatar>
                <S.Menu.Photo src={profile.photoURL} />
              </S.Menu.Avatar>

              <S.Menu.Title>{profile.name}</S.Menu.Title>
            </S.Menu.Header>
          )}
          <S.Menu.Body>
            {!!auth.uid ? (
              <SignedInLinks closeNav={closeNav} />
            ) : (
              <SignedOutLinks closeNav={closeNav} />
            )}
          </S.Menu.Body>
        </S.Menu>
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
    name: "default name",
    photoURL: ""
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutUser()),
    openNav: () => dispatch(openNavbar()),
    closeNav: () => dispatch(closeNavbar()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    isNavOpened: state.app.isNavOpened
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
