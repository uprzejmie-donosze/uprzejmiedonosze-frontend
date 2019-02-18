import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from '@reach/router';

import { Container } from '../styles/styledComponents';

const FormNew = ({ auth }) => {
  if (!auth.uid) return <Redirect from="/report/new" to='login' noThrow />;

  return (
    <Container>
      <div>
        <span style={{color: '#34dd7eff'}}>New report &gt; </span>
        <span style={{color: 'lightgray'}}>Confirm &gt; </span>
        <span style={{color: 'lightgray'}}>Confirmation</span>
      </div>

      <h1>New Report</h1>

      <div>
        <h4>Report information</h4>

        <p style={{padding: '1rem 0'}}>
          <label htmlFor="contextImage">Add image</label>
          <input id="contextImage" type="file" accept="image/jpeg" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label htmlFor="carImage">Add image 2</label>
          <input id="carImage" type="file" accept="image/jpeg" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label>Address of the incident</label>
          <input type="address" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label>Car numbers</label>
          <input type="text" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label>Comments</label>
          <input type="text" />
        </p>
      </div>

      <div>
        <h4>Kind of crime</h4>

        <p>
          <label>Crime 1</label>
          <input type="radio" />
        </p>

        <p>
          <label>Crime 2</label>
          <input type="radio" />
        </p>

      </div>

      <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "100%", left: '0', bottom: '0', padding: "1rem", background: "white"}}>
        <Link style={{background: 'white'}} to="/app">back home</Link>
        <Link style={{background: 'white'}} to="/app/report/create">next</Link>
      </div>
    </Container>
  );
};

FormNew.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(FormNew);
