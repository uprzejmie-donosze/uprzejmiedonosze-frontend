import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Redirect } from '@reach/router';

import { Container } from '../styles/styledComponents';

const Reports = ({ auth, profile }) => {
  if (!auth.uid) return <Redirect from="/user/:userId/reports" to='login' noThrow />;

  const renderEmptyReports = () => (
    <div>
      <h4>No reports added</h4>
      <Link to="/app/report/new">create report</Link>
    </div>
  );

  const renderReportsList = (reports) => {
    return reports.map((report, i) => <p key={i}>report</p>);
  };

  return (
    <Container>
     <section>
        <h1>Your reports</h1>
        {profile.reports && profile.reports.length ? renderReportsList(profile.reports) : renderEmptyReports()}
     </section>
    </Container>
  );
};

Reports.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  profile: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Reports);
