import React from 'react';
import { Link } from '@reach/router';
import * as S from './styles';

const SignedOutLinks = () => {
  return (
    <S.SignOutLinks>
      <S.SignOutLinks.Item>
        <S.SignOutLinks.Link to="regulations">Regulamin</S.SignOutLinks.Link>
      </S.SignOutLinks.Item>

      <S.SignOutLinks.Item>
        <S.SignOutLinks.Link to="faq">FAQ</S.SignOutLinks.Link>
      </S.SignOutLinks.Item>

      <S.SignOutLinks.Item>
        <S.SignOutLinks.Link to="login">Zaloguj się</S.SignOutLinks.Link>
      </S.SignOutLinks.Item>
    </S.SignOutLinks>
  );
};

export default SignedOutLinks;
