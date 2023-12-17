import React from 'react';
import { useSelector } from 'react-redux';
import { withAuth } from '../config';

function UserRegistrationPage() {
  const isUserRegistered = useSelector(state => state.user.isUserRegistered);

  return (
    <section>
      <h1>Rejestracja</h1>
      {!isUserRegistered && (
        <div>
          <p><strong>Ostatni krok!</strong></p>
          <p>Proszę dokończ rejestrację aby kontynuować jako zalogowany użytkownik.</p>
        </div>
      )}
    </section>
  );
};

export const UserRegistration = withAuth(UserRegistrationPage);
