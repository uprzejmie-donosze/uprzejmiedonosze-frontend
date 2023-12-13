import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from './CommonLinks';

import * as S from './styles';
import { ROUTES } from '../../../config';

function SignedOutLinks({ closeNav }){
  return (
    <>
      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.login}>
            Spróbuj
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <CommonLinks closeNav={closeNav} />

      <ExternalLinkFB />

      <ExternalLinkRPO />

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.login}>
            Zaloguj/zarejestruj się
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>
    </>
  );
};

SignedOutLinks.propTypes = {
  closeNav: PropTypes.func
};

export default SignedOutLinks;
