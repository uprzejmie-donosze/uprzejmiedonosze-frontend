import React from "react";

import * as S from './styles';
import { Container } from "../../styles/styledComponents";

function UserNav() {
  return (
    <S.Nav>
      <Container>
        <S.Nav.List>
          <S.Nav.Item><S.Nav.Link to=".">profil</S.Nav.Link></S.Nav.Item>
          <S.Nav.Item><S.Nav.Link to="zgloszenia">zgłoszenia</S.Nav.Link></S.Nav.Item>
          <S.Nav.Item><S.Nav.Link to="rejestracja">rejestracja</S.Nav.Link></S.Nav.Item>
        </S.Nav.List>
      </Container>
    </S.Nav>
  )
}

export default UserNav;
