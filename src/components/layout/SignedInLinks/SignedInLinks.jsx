import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOutUser } from '../../../store/actions/authActions';
import { openNavbar, closeNavbar } from '../../../store/actions/appActions';

import * as S from './styles';
class SignedInLinks extends Component {
  toggleMenu = () => {
    this.props.isNavOpened ? this.props.closeNav() : this.props.openNav();
  }

  render() {
    const { name, photoURL } = this.props.profile;

    return (
      <Fragment>
        <S.SignInMenu.Burger onClick={() => this.toggleMenu()}>
          <svg width="20px" height="20px" viewBox="0 0 92 92">
          <path fill="currentColor" id="XMLID_101_" d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
            c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
            H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"/>
          </svg>
        </S.SignInMenu.Burger>

        <S.SignInMenu.Overlay onClick={() => this.toggleMenu()} isNavOpened={this.props.isNavOpened} />

        <S.SignInMenu isNavOpened={this.props.isNavOpened}>
          <S.SignInMenu.Header>
            <S.SignInMenu.Avatar>
              <S.SignInMenu.Photo src={photoURL} />
            </S.SignInMenu.Avatar>

            <S.SignInMenu.Title>{name}</S.SignInMenu.Title>
          </S.SignInMenu.Header>

          <S.SignInMenu.Body>
            <S.SignInMenu.Menu>
              <S.SignInMenu.Item><Link onClick={() => this.props.closeNav()} to='app'>Home</Link></S.SignInMenu.Item>
              <S.SignInMenu.Item><Link onClick={() => this.props.closeNav()} to='app/report/new'>New report</Link></S.SignInMenu.Item>
              <S.SignInMenu.Item><Link onClick={() => this.props.closeNav()} to={`app/user/${this.props.user.uid}`}>Your Profile</Link></S.SignInMenu.Item>
              <S.SignInMenu.Item><Link onClick={() => this.props.closeNav()} to={`app/user/${this.props.user.uid}/reports`}>Your Reports</Link></S.SignInMenu.Item>
            </S.SignInMenu.Menu>

            <S.SignInMenu.Menu>
              <S.SignInMenu.Item><Link onClick={() => this.props.closeNav()} to='/regulations'>Regulations</Link></S.SignInMenu.Item>
              <S.SignInMenu.Item><Link onClick={() => this.props.closeNav()} to='/faq'>FAQ</Link></S.SignInMenu.Item>
            </S.SignInMenu.Menu>

            <S.SignInMenu.Footer>
              <button onClick={this.props.signOut}>logout</button>
            </S.SignInMenu.Footer>
          </S.SignInMenu.Body>
        </S.SignInMenu>
      </Fragment>
    );
  }
};

SignedInLinks.defaultProps = {
  profile: {
    name: '',
    photoURL: ''
  }
};

SignedInLinks.propTypes = {
  signOut: PropTypes.func,
  profile: PropTypes.shape({
    name: PropTypes.string,
    photoURL: PropTypes.string
  }),
  user: PropTypes.shape({
    uid: PropTypes.string
  }),
  isNavOpened: PropTypes.bool,
  openNav: PropTypes.func,
  closeNav: PropTypes.func
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
    user: {
      uid: state.firebase.auth.uid
    },
    isNavOpened: state.app.isNavOpened
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
