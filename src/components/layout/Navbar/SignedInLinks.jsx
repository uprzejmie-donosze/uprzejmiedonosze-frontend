import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOutUser } from '../../../store/actions/authActions';
import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from './CommonLinks';

import * as S from './styles';
import { ROUTES } from '../../../config';

function SignedInLinks({ closeNav, signOut }) {
  return (
    <>
      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.newReport}>
            Nowe zgłoszenie
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.userReports}>
            Moje zgłoszenia
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <CommonLinks closeNav={closeNav} />

      <S.Menu.Menu>
        <S.Menu.Item>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://patronite.pl/uprzejmiedonosze"
          >
            Zostań patronem
          </a>
        </S.Menu.Item>
      </S.Menu.Menu>

      <ExternalLinkFB />

      <ExternalLinkRPO />

      <S.Menu.Footer>
        <button onClick={signOut}>logout</button>
      </S.Menu.Footer>
    </>
  );
};

SignedInLinks.propTypes = {
  signOut: PropTypes.func,
  closeNav: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutUser()),
  };
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
