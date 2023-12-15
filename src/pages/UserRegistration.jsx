import React from 'react';
import { withAuth } from '../config';
import { useSelector } from 'react-redux';
import { colors } from '../styles';

function UserRegistrationPage() {
  const isUserRegistered = useSelector(state => state.user.isUserRegistered);

  return (
    <section>
      <h1>Rejestracja</h1>
      {!isUserRegistered && (
        <>
          <div style={{ background: "#efdbdb", padding: '10px', color: colors.error, borderRadius: '5px'}}>
            <p><strong>Ostatni krok!</strong></p>
            <p>Proszę dokończ rerestrację aby kontynuować jako zalogowany użytkownik.</p>
          </div>
          <p>
            Aby dokonać zgłoszenia musisz podać swoje imię, nazwisko, adres e-mail oraz adres korespondencyjny. 
            Jest to minimalny zestaw informacji jakich wymaga SM do przyjęcia zgłoszenia.
          </p>
        </>
      )}
    </section>
  );
};

export const UserRegistration = withAuth(UserRegistrationPage);
