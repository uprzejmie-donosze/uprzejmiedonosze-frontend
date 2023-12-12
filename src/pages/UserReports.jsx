import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { withAuth } from '../config/auth';

function UserReports({ profile }) {
  function renderEmptyReports() {
    return (
      <div>
        <h4>Nie masz jeszcze adnych zgłoszeń</h4>
        <Link to="/nowe-zgloszenie">Pierwsze zgłoszenie</Link>
      </div>
    )
  }

  function renderReportsList(reports) {
    return reports.map((_, i) => <p key={i}>zgłoszenie</p>);
  };

  return (
    <section>
      <h1>Moje zgłoszenia</h1>

      {profile.reports && profile.reports.lenght ? renderReportsList(profile.reports) : renderEmptyReports()}
    </section>
  );
};

UserReports.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(withAuth(UserReports));
