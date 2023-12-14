import React from 'react';
import { Link } from '@reach/router';
import { ROUTES, withAuth } from '../config';

function UserReportsPage() {
  return (
    <section>
      <h1>Moje zgłoszenia</h1>

      <div>
        <h4>Nie masz jeszcze żadnych zgłoszeń.</h4>
        <Link to={ROUTES.newReport}>Zrób pierwsze zgłoszenie!</Link>
      </div>
    </section>
  );
};

export const UserReports = withAuth(UserReportsPage);

