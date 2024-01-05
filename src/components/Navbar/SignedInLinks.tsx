import React from "react";
import { Link } from "@reach/router";

import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from "./CommonLinks";
import { ExternalLinkIcon, ListIcon, PlusIcon } from "../Icons";
import { ROUTES } from "../../config";
import { Button, colors } from "../../styles";
import { signOutUser } from "../../store/firebase";
import { useAppDispatch } from "../../store";
import * as S from "./styles";

type Props = {
  closeNav: () => void;
};

function SignedInLinks({ closeNav }: Props) {
  const dispatch = useAppDispatch();

  function signOut() {
    dispatch(signOutUser());
  }

  return (
    <>
      <S.List>
        <S.Item>
          <Link onClick={closeNav} to={ROUTES.newReport}>
            Nowe zgłoszenie <PlusIcon />
          </Link>
        </S.Item>
      </S.List>

      <S.List>
        <S.Item>
          <Link onClick={closeNav} to={ROUTES.userReports}>
            Moje zgłoszenia <ListIcon />
          </Link>
        </S.Item>
      </S.List>

      <CommonLinks closeNav={closeNav} />

      <S.List>
        <S.Item>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://patronite.pl/uprzejmiedonosze"
          >
            Zostań patronem <ExternalLinkIcon />
          </a>
        </S.Item>
      </S.List>

      <ExternalLinkFB />

      <ExternalLinkRPO />

      <S.Footer>
        <Button color={colors.textLight} onClick={signOut}>
          Wyloguj
        </Button>
      </S.Footer>
    </>
  );
}

export default SignedInLinks;
