import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Redirect } from '@reach/router';
import { getReports } from '../store/actions/reportActions';

import { Container } from '../styles/styledComponents';

class Reports extends Component {

  componentDidMount() {
    this.props.getReports(this.props.userId);
  }

  render() {
    const { auth, profile } = this.props;

    if (!auth.uid) return <Redirect from="/user/:userId/reports" to='login' noThrow />;

    const renderEmptyReports = () => (
      <div>
        <h4>No reports added</h4>
        <Link to="/app/report/new">create report</Link>
      </div>
    );

    const renderReportsList = (reports) => {
      return reports.map((report, i) => {
        return (
          <div key={report.number} style={{background: 'white', borderRadius: '5px', padding: '1rem', marginBottom: '1rem', display: 'flex'}}>
            <p style={{ padding: '0 1rem'}}>{report.number}</p>
            <p style={{ padding: '0 1rem'}}>{report.address.address}</p>
            <p style={{ padding: '0 1rem'}}>status: {report.status}</p>
          </div>
        );
      });
    };

    return (
      <Container>
       <section>
          <h1>Your reports</h1>
          {profile.reports && profile.reports.length ? renderReportsList(this.props.reports) : renderEmptyReports()}
       </section>
      </Container>
    );
  }
};

Reports.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  profile: PropTypes.shape({
    name: PropTypes.string,
  }),
  reports: PropTypes.array,
  getReports: PropTypes.func,
  userId: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    reports: state.reports.reports
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReports: (uid) => dispatch(getReports(uid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
