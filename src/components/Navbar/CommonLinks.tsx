import React from "react";
import { Link } from "@reach/router";

import * as S from "./styles";
import { ROUTES } from "../../config";
import { ExternalLinkIcon, HomeIcon } from "../Icons";

const RPO_PETITION_URL = "https://prawapieszych.pl";
const FB_URL = "https://www.facebook.com/uprzejmiedonosze.net";

type Props = {
  closeNav: () => void;
};

function CommonLinks({ closeNav }: Props) {
  return (
    <>
      <S.List>
        <S.Item>
          <Link onClick={closeNav} to={ROUTES.home}>
            Strona główna <HomeIcon />
          </Link>
        </S.Item>
      </S.List>

      <S.List>
        <S.Item>
          <Link onClick={closeNav} to={ROUTES.gallery}>
            ‣&nbsp;&nbsp;&nbsp;Galeria
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.regulations}>
            ‣&nbsp;&nbsp;&nbsp;Przepisy
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.faq}>
            ‣&nbsp;&nbsp;&nbsp;FAQ
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.termsOfUse}>
            ‣&nbsp;&nbsp;&nbsp;Regulamin
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.stats}>
            ‣&nbsp;&nbsp;&nbsp;Statystyki
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.changelog}>
            ‣&nbsp;&nbsp;&nbsp;Historia zmian
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.install}>
            ‣&nbsp;&nbsp;&nbsp;Zainstaluj UD
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.project}>
            ‣&nbsp;&nbsp;&nbsp;O projekcie
          </Link>
        </S.Item>

        <S.Item>
          <Link onClick={closeNav} to={ROUTES.publicInfoAccess}>
            ‣&nbsp;&nbsp;&nbsp;Dzwoń do SM jak szeryf
          </Link>
        </S.Item>
      </S.List>
    </>
  );
}

export function ExternalLinkRPO() {
  return (
    <S.List>
      <S.Item>
        <a rel="noopener noreferrer" target="_blank" href={RPO_PETITION_URL}>
          Podpisz wniosek do RPO <ExternalLinkIcon />
        </a>
      </S.Item>
    </S.List>
  );
}

export function ExternalLinkFB() {
  return (
    <S.List>
      <S.Item>
        <a rel="noopener noreferrer" target="_blank" href={FB_URL}>
          Uprzejmie Donoszę na FB <ExternalLinkIcon />
        </a>
      </S.Item>
    </S.List>
  );
}

export default CommonLinks;
