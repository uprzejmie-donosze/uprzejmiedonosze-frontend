import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Router } from "@reach/router";
import Navbar from './layout/Navbar/Navbar';
import GlobalStyle from '../styles/globalStyles';

import Home from '../pages/Home';
import FormNew from '../pages/FormNew';

// logout links
const LogIn = () => <div>login</div>;
const ReportPreview = () => <div>Report preview</div>; // note: different mode for unregistered user

// login links
const NewForm = () => <div>New form</div>;
const FormConfirm = () => <div>Form Confirm</div>;
const FormEdit = () => <div>Form Edit</div>;
const FormThankYou = () => <div>Thank you</div>;
const Profile = () => <div>user profile</div>;
const ReportPreview2 = () => <div>Report preview</div>;
const Register = () => <div>Register Page</div>;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <Navbar />

        <Router>
          <Home path='/' />
          <LogIn path='/login' />
          <FormNew path='/report' />
          <FormConfirm path='/report/create' />
          <FormThankYou path='/report/confirmation' />
          <Profile path='/user/:userId' />
          <ReportPreview path='/:reportId' />
          <Register path='/:user/register' />
        </Router>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
