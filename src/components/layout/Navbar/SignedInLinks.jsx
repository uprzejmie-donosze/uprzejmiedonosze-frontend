import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOutUser } from '../../../store/actions/authActions';

import * as S from './styles';

function SignedInLinks({ closeNav, userUID, signOut }) {
  return (
    <>
      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to='app'>Home</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to='app/report/new'>New report</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={`app/user/${userUID}`}>Your Profile</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={`app/user/${userUID}/reports`}>Your Reports</Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to='/regulamin'>Regulations</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to='/faq'>FAQ</Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <S.Menu.Footer>
        <button onClick={signOut}>logout</button>
      </S.Menu.Footer>
    </>
  );
};

SignedInLinks.defaultProps = {
  userUID: "",
};

SignedInLinks.propTypes = {
  signOut: PropTypes.func,
  userUID: PropTypes.string,
  closeNav: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutUser()),
  };
};

const mapStateToProps = (state) => {
  return {
    userUID: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
