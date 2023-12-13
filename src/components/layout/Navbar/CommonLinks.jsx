import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import * as S from './styles';
import { ROUTES } from './../../../config';
import { ExternalLinkIcon, HomeIcon } from '../../Icons';

const RPO_PETITION_URL = "https://www.change.org/p/r%C3%B3wne-prawa-dla-pieszych-i-kierowc%C3%B3w?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=05293e40-f40b-11ed-99a9-b1468c19b3be"
const FB_RUL = "https://www.facebook.com/uprzejmiedonosze.net"

function CommonLinks({ closeNav }){
  return (
    <>
      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.home}>
            Strona główna <HomeIcon />
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>

      <S.Menu.Menu>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.gallery}>
            ‣&nbsp;&nbsp;&nbsp;Galeria
          </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.regulations}>
            ‣&nbsp;&nbsp;&nbsp;Przepisy
          </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.faq}>
            ‣&nbsp;&nbsp;&nbsp;FAQ
          </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.websiteRegulations}>
            ‣&nbsp;&nbsp;&nbsp;Regulamin
        </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.stats}>
          ‣&nbsp;&nbsp;&nbsp;Statystyki
          </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.changelog}>
            ‣&nbsp;&nbsp;&nbsp;Historia zmian
          </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.install}>
            ‣&nbsp;&nbsp;&nbsp;Zainstaluj UD
          </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.project}>
            ‣&nbsp;&nbsp;&nbsp;O projekcie
          </Link>
        </S.Menu.Item>

        <S.Menu.Item>
          <Link
            onClick={closeNav}
            to={ROUTES.publicInfoAccess}
          >
            ‣&nbsp;&nbsp;&nbsp;Dzwoń do SM jak szeryf
          </Link>
        </S.Menu.Item>
      </S.Menu.Menu>
    </>
  );
};

CommonLinks.propTypes = {
  closeNav: PropTypes.func
};

export function ExternalLinkFB() {
  return (
    <S.Menu.Menu>
      <S.Menu.Item>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={RPO_PETITION_URL}
        >
          Podpisz wniosek do RPO <ExternalLinkIcon />
        </a>
      </S.Menu.Item>
    </S.Menu.Menu>
  );
}

export function ExternalLinkRPO() {
  return (
    <S.Menu.Menu>
      <S.Menu.Item>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={FB_RUL}
        >
          Uprzejmie Donoszę na FB <ExternalLinkIcon />
        </a>
      </S.Menu.Item>
    </S.Menu.Menu>
  );
}

export default CommonLinks;
