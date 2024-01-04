import React from "react";

import { ROUTES } from "../../config";
import * as S from "./styles";

function UserNav() {
  return (
    <S.Nav>
      <S.List>
        <S.Item>
          <S.Link to=".">profil</S.Link>
        </S.Item>
        <S.Item>
          <S.Link to={ROUTES.user.reports}>zgłoszenia</S.Link>
        </S.Item>
        <S.Item>
          <S.Link to={ROUTES.user.edit}>edycja</S.Link>
        </S.Item>
      </S.List>
    </S.Nav>
  );
}

export default UserNav;
