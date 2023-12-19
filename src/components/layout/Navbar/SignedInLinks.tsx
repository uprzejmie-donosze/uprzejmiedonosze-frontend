import React from 'react';
import { Link } from '@reach/router';

import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from './CommonLinks';
import { ExternalLinkIcon, ListIcon, PlusIcon } from '../../Icons';
import { ROUTES } from '../../../config';
import { Button } from '../../../styles';
import { signOutUser } from '../../../store/firebase';
import { useAppDispatch } from '../../../store';
import * as S from './styles';

type Props = {
  closeNav: () => void;
}

function SignedInLinks({ closeNav }: Props) {
  const dispatch = useAppDispatch();

  function signOut() {
    dispatch(signOutUser())
  }

  return (
    <>
      <S.Menu.List>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.newReport}>
            Nowe zgłoszenie <PlusIcon />
          </Link>
        </S.Menu.Item>
      </S.Menu.List>

      <S.Menu.List>
        <S.Menu.Item>
          <Link onClick={closeNav} to={ROUTES.userReports}>
            Moje zgłoszenia <ListIcon />
          </Link>
        </S.Menu.Item>
      </S.Menu.List>

      <CommonLinks closeNav={closeNav} />

      <S.Menu.List>
        <S.Menu.Item>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://patronite.pl/uprzejmiedonosze"
          >
            Zostań patronem <ExternalLinkIcon />
          </a>
        </S.Menu.Item>
      </S.Menu.List>

      <ExternalLinkFB />

      <ExternalLinkRPO />

      <S.Menu.Footer>
        <Button onClick={signOut}>Wyloguj</Button>
      </S.Menu.Footer>
    </>
  );
};

export default SignedInLinks;
