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
          <Menu closeNav={closeNav} />
        </S.Menu>
      </S.Container>
    </S.Navbar>
  );
}

function Menu({ closeNav }: { closeNav: () => void }) {
  const user = useAppSelector((state) => state.user);
  let photoURL = useAppSelector((state) => state.firebase.auth.photoURL);
  photoURL = user.isEmpty ? "" : photoURL;

  if (!user.isLoaded) {
    return <LinearLoader />;
  }

  if (user.isEmpty) {
    return (
      <>
        <S.Header>
          <S.Avatar>
            {!!photoURL ? <S.Photo src={photoURL} /> : <UserIcon />}
          </S.Avatar>

          <S.Title onClick={closeNav} to={ROUTES.login}>
            Zaloguj/ zarejestruj się
          </S.Title>
        </S.Header>

        <S.Body>
          <SignedOutLinks closeNav={closeNav} />
        </S.Body>
      </>
    );
  }

  return (
    <>
      <S.Header>
        <S.Avatar>
          {!!photoURL ? <S.Photo src={photoURL} /> : <UserIcon />}
        </S.Avatar>

        <S.Title to={ROUTES.user.main}>{user.profile.data.name}</S.Title>
      </S.Header>

      <S.Body>
        <SignedInLinks closeNav={closeNav} />
      </S.Body>
    </>
  );
}

export default Navbar;
