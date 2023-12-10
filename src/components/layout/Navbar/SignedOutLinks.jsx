import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import * as S from './styles';

function SignedOutLinks({ closeNav }){
  return (
    <>
      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to="logowanie">Spróbuj</Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to="/">Strona główna</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to="galeria">Galeria</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to="przepisy">Przepisy</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav}  to="faq">FAQ</Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to="regualmin">Regulamin</Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to="logowanie">Zaloguj się/zarejestruj się</Link>
        </S.Menu.Item>
      </S.Menu.Menu>
    </>
  );
};

SignedOutLinks.propTypes = {
  closeNav: PropTypes.func
};

export default SignedOutLinks;
