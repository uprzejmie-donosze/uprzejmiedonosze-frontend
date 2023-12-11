import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { handleSelectedLink } from './current';
import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from './CommonLinks';

import * as S from './styles';

function SignedOutLinks({ closeNav }){
  return (
    <>
      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to="logowanie" getProps={handleSelectedLink}>
            Spróbuj
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <CommonLinks closeNav={closeNav} />

      <ExternalLinkFB />

      <ExternalLinkRPO />

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to="logowanie" getProps={handleSelectedLink}>
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
