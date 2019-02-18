import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from '@reach/router';

import { Container } from '../styles/styledComponents';

const FormConfirm = ({ auth }) => {
  if (!auth.uid) return <Redirect from="/report/new" to='login' noThrow />;

  return (
    <Container>
      <div>
        <span style={{color: 'lightgray'}}>New report &gt; </span>
        <span style={{color: '#34dd7eff'}}>Confirm &gt; </span>
        <span style={{color: 'lightgray'}}>Confirmation</span>
      </div>

      <h1>Confirm Report</h1>

      <div>
        <h4>Report summary</h4>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "100%", left: '0', bottom: '0', padding: "1rem", background: "white"}}>
        <Link style={{background: 'white'}} to="/app/report/new">back</Link>
        <Link style={{background: 'white'}} to="/app/report/confirmation">confirm</Link>
      </div>
    </Container>
  );
};

FormConfirm.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(FormConfirm);
