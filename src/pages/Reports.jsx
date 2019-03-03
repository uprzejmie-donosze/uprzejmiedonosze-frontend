import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Redirect } from '@reach/router';
import { getReports, updateStatus } from '../store/actions/reportActions';

import { Container, Layout } from '../styles/styledComponents';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';

import Collapsible from '../components/Collapsible';

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
        return <Collapsible action={this.props.updateStatus} key={report.number} data={report}/>;
      });
    };

    return (
      <Layout>
        <Navbar />

        <Container>
          <section>
            <h1>Your reports</h1>
            <Filters />

            {profile.reports && profile.reports.length ? renderReportsList(this.props.reports) : renderEmptyReports()}
          </section>
        </Container>
      </Layout>
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
  userId: PropTypes.string,
  updateStatus: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    reports: state.reports.filteredReports
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReports: (uid) => dispatch(getReports(uid)),
    updateStatus: (status, id) => dispatch(updateStatus(status, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
