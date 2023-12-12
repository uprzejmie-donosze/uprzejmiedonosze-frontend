import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import * as S from './styles';

const RPO_PETITION_URL = "https://www.change.org/p/r%C3%B3wne-prawa-dla-pieszych-i-kierowc%C3%B3w?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=05293e40-f40b-11ed-99a9-b1468c19b3be"
const FB_RUL = "https://www.facebook.com/uprzejmiedonosze.net"

function CommonLinks({ closeNav }){
  return (
    <S.Menu.Menu>
      <S.Menu.Item>
        <Link onClick={closeNav} to="/">
          Strona główna
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="galeria">
          Galeria
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="przepisy">
          Przepisy
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="faq">
          FAQ
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="regualmin">
          Regulamin
      </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="statystyki">
          Statystyki
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="changelog">
          Historia zmian
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="aplikacja">
          Zainstaluj UD
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="projekt">
          O projekcie
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link
          onClick={closeNav}
          to="dostep-do-informacji-publiczne"
         
        >
          Dzwoń do SM jak szeryf
        </Link>
      </S.Menu.Item>
    </S.Menu.Menu>
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
          Podpisz wniosek do RPO
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
          Przejmie donoszę na FB
        </a>
      </S.Menu.Item>
    </S.Menu.Menu>
  );
}

export default CommonLinks;
