import React from 'react';
import { Link } from '@reach/router';
import { withAuth } from '../config/auth';

function UserReports() {
  return (
    <section>
      <h1>Moje zgłoszenia</h1>

      <div>
        <h4>Nie masz jeszcze żadnych zgłoszeń</h4>
        <Link to="/nowe-zgloszenie">Pierwsze zgłoszenie</Link>
      </div>
    </section>
  );
};

export default withAuth(UserReports);

