import React from 'react';
import { withAuth } from '../config';

function UserRegistrationPage() {
  return (
    <section>
      <h1>Rejestracja</h1>
    </section>
  );
};

export const UserRegistration = withAuth(UserRegistrationPage);
