import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { handleSelectedLink } from './current';
import * as S from './styles';

const RPO_PETITION_URL = "https://www.change.org/p/r%C3%B3wne-prawa-dla-pieszych-i-kierowc%C3%B3w?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=05293e40-f40b-11ed-99a9-b1468c19b3be"
const FB_RUL = "https://www.facebook.com/uprzejmiedonosze.net"

function CommonLinks({ closeNav }){
  return (
    <S.Menu.Menu>
      <S.Menu.Item>
        <Link onClick={closeNav} to="/" getProps={handleSelectedLink}>
          Strona główna
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="galeria" getProps={handleSelectedLink}>
          Galeria
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="przepisy" getProps={handleSelectedLink}>
          Przepisy
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="faq" getProps={handleSelectedLink}>
          FAQ
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="regualmin" getProps={handleSelectedLink}>
          Regulamin
      </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="statystyki" getProps={handleSelectedLink}>
          Statystyki
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="changelog" getProps={handleSelectedLink}>
          Historia zmian
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="aplikacja" getProps={handleSelectedLink}>
          Zainstaluj UD
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link onClick={closeNav} to="projekt" getProps={handleSelectedLink}>
          O projekcie
        </Link>
      </S.Menu.Item>

      <S.Menu.Item>
        <Link
          onClick={closeNav}
          to="dostep-do-informacji-publiczne"
          getProps={handleSelectedLink}
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
