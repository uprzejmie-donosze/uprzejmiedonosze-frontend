import React from 'react';
import { withAuth } from '../config';

function UserRegistration() {
  return (
    <section>
      <h1>Rejestracja</h1>
    </section>
  );
};

export default withAuth(UserRegistration);
