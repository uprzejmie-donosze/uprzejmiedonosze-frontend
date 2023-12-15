import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from './CommonLinks';
import { ExternalLinkIcon, ListIcon, PlusIcon } from '../../Icons';

import * as S from './styles';
import { ROUTES } from '../../../config';
import { Button } from '../../../styles';
import { signOutUser } from '../../../store/firebase';

function SignedInLinks({ closeNav, signOut }) {
  return (
    <>
      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.newReport}>
            Nowe zgłoszenie <PlusIcon />
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.userReports}>
            Moje zgłoszenia <ListIcon />
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
            Zostań patronem <ExternalLinkIcon />
          </a>
        </S.Menu.Item>
      </S.Menu.Menu>

      <ExternalLinkFB />

      <ExternalLinkRPO />

      <S.Menu.Footer>
        <Button onClick={signOut}>logout</Button>
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
