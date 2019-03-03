import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOutUser } from '../../store/actions/authActions';
import { openNavbar, closeNavbar } from '../../store/actions/appActions';
import { AdminIcon, BoardIcon, SheduleIcon, SpreadSheetsIcon, Burger } from '../Icons';

import * as S from './styles';

const RouteLink = ({ action, to, children }) => {
  return (
    <S.SignInMenu.Item>
      <S.SignInMenu.Link onClick={() => action()} to={to} getProps={({ isCurrent }) => {
        return { style: { background: isCurrent ? "rgba(0, 0, 0, .1)" : "transparent" } };
      }}>
        {children}
      </S.SignInMenu.Link>
    </S.SignInMenu.Item>
  );
};
class SignedInLinks extends Component {
  toggleMenu = () => {
    this.props.isNavOpened ? this.props.closeNav() : this.props.openNav();
  }

  render() {
    const { name, photoURL } = this.props.profile;
    const { closeNav } = this.props;

    return (
      <Fragment>
        <S.SignInMenu.Burger onClick={() => this.toggleMenu()}><Burger /></S.SignInMenu.Burger>
        <S.SignInMenu.Overlay onClick={() => this.toggleMenu()} isNavOpened={this.props.isNavOpened} />

        <S.SignInMenu isNavOpened={this.props.isNavOpened}>
          <S.SignInMenu.Header>
            <S.SignInMenu.Avatar><S.SignInMenu.Photo src={photoURL} /></S.SignInMenu.Avatar>
            <S.SignInMenu.Title>{name}</S.SignInMenu.Title>
          </S.SignInMenu.Header>

          <S.SignInMenu.Body>
            <S.SignInMenu.Menu>
              <RouteLink action={closeNav} to='/app'><BoardIcon /><span>Strona głowna</span></RouteLink>
              <RouteLink action={closeNav} to='/app/report/new'><SheduleIcon /><span>Nowe zgłoszenie</span></RouteLink>
              <RouteLink action={closeNav} to={`/app/user/${this.props.user.uid}`}><AdminIcon /><span>Profil</span></RouteLink>
              <RouteLink action={closeNav} to={`/app/user/${this.props.user.uid}/reports`}><SpreadSheetsIcon /><span>Zgłoszenia</span></RouteLink>
            </S.SignInMenu.Menu>

            <S.SignInMenu.Menu>
              <RouteLink action={closeNav} to='/regulations'>Regulamin</RouteLink>
              <RouteLink action={closeNav} to='/faq'>FAQ</RouteLink>
            </S.SignInMenu.Menu>

            <S.SignInMenu.Footer>
              <button onClick={this.props.signOut}>Wyloguj się</button>
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

RouteLink.propTypes = {
  action: PropTypes.func,
  to: PropTypes.string,
  children: PropTypes.node
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
    user: { uid: state.firebase.auth.uid },
    isNavOpened: state.app.isNavOpened
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
