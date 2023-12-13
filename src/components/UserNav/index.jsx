import React from "react";

import { Container } from "../../styles/styledComponents";
import { ROUTES } from "../../config";
import * as S from './styles';

function UserNav() {
  return (
    <S.Nav>
      <Container>
        <S.Nav.List>
          <S.Nav.Item><S.Nav.Link to=".">profil</S.Nav.Link></S.Nav.Item>
          <S.Nav.Item><S.Nav.Link to={ROUTES.user.reports}>zgłoszenia</S.Nav.Link></S.Nav.Item>
          <S.Nav.Item><S.Nav.Link to={ROUTES.user.edit}>edycja</S.Nav.Link></S.Nav.Item>
        </S.Nav.List>
      </Container>
    </S.Nav>
  );
}

export default UserNav;
