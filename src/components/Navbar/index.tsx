import React from "react";

import { closeNavbar, openNavbar } from "../../store/app";
import { useAppDispatch, useAppSelector } from "../../store";
import { LinearLoader } from "../Loader";
import { UserIcon } from "../Icons";
import { ROUTES } from "../../config";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import * as S from "./styles";

function Navbar() {
  const auth = useAppSelector((state) => state.firebase.auth);
  const isNavOpened = useAppSelector((state) => state.app.isNavOpened);
  const dispatch = useAppDispatch();

  function closeNav() {
    dispatch(closeNavbar());
  }

  function openNav() {
    dispatch(openNavbar());
  }

  function toggleMenu() {
    isNavOpened ? closeNav() : openNav();
  }

  return (
    <S.Navbar>
      <S.Container>
        <S.Logo to={ROUTES.home}>Uprzejmie Donoszę</S.Logo>

        <S.Burger onClick={toggleMenu}>
          <svg width="20px" height="20px" viewBox="0 0 92 92">
            <path
              fill="currentColor"
              id="XMLID_101_"
              d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
            c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
            H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"
            />
          </svg>
        </S.Burger>

        <S.Overlay onClick={toggleMenu} isNavOpened={isNavOpened} />

        <S.Menu isNavOpened={isNavOpened}>
          {!auth.isLoaded ? (
            <LinearLoader />
          ) : (
            <>
              <S.Header>
                <S.Avatar>
                  {!!auth.photoURL ? (
                    <S.Photo src={auth.photoURL} />
                  ) : (
                    <UserIcon />
                  )}
                </S.Avatar>

                {!!auth.uid ? (
                  <S.Title to={ROUTES.user.main}>{auth.displayName}</S.Title>
                ) : (
                  <S.Title onClick={closeNav} to={ROUTES.login}>
                    Zaloguj/ zarejestruj się
                  </S.Title>
                )}
              </S.Header>
              <S.Body>
                {!!auth.uid ? (
                  <SignedInLinks closeNav={closeNav} />
                ) : (
                  <SignedOutLinks closeNav={closeNav} />
                )}
              </S.Body>
            </>
          )}
        </S.Menu>
      </S.Container>
    </S.Navbar>
  );
}

export default Navbar;
