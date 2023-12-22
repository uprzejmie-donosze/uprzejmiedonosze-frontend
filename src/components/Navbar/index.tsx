import React from "react";

import { closeNavbar, openNavbar } from "../../store/app";
import { useAppDispatch, useAppSelector } from "../../store";
import { LinearLoader } from "../Loader";
import { BurgerIcon, UserIcon } from "../Icons";
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
        <S.Logo onClick={closeNav} to={ROUTES.home}>
          Uprzejmie Donoszę
        </S.Logo>

        <S.Burger onClick={toggleMenu}>
          <BurgerIcon />
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
  const photoURL = useAppSelector((state) => state.firebase.auth.photoURL);

  const photo =
    user.isEmpty || !photoURL ? <UserIcon /> : <S.Photo src={photoURL} />;

  if (!user.isLoaded) {
    return <LinearLoader />;
  }

  if (user.isEmpty) {
    return (
      <>
        <S.Header>
          <S.Avatar>{photo}</S.Avatar>

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
        <S.Avatar>{photo}</S.Avatar>
        <S.Title onClick={closeNav} to={ROUTES.user.main}>
          {user.profile.name || user.profile.email}
        </S.Title>
      </S.Header>

      <S.Body>
        <SignedInLinks closeNav={closeNav} />
      </S.Body>
    </>
  );
}

export default Navbar;
