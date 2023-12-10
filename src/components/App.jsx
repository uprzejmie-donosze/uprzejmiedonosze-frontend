import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Router } from "@reach/router";
import Navbar from './layout/Navbar/Navbar';
import GlobalStyle from '../styles/globalStyles';

import Home from '../pages/Home';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import Reports from '../pages/Reports';
import FormConfirm from '../pages/FormConfirm';

import FormNew from '../pages/FormNew';
import { Landing } from '../pages/Landing';
import { Container } from '../styles/styledComponents';

// logout links
const ReportPreview = () => <Container>Report preview</Container>; // note: different mode for unregistered user

// login links
const FormEdit = () => <div>Form Edit</div>;
const FormThankYou = () => <div>Thank you</div>;
const ReportPreview2 = () => <div>Report preview</div>;
const Register = () => <div>Register Page</div>;
const NotFound = () => <Container>Sorry, nothing here</Container>;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <Navbar />

        <Router>
          <Landing path='/' />
          <Login path='login' />

          <Home path='app' />
          <UserProfile path='app/user/:userId' />
          <Register path='app/:user/:userId/register' />

          <Reports path='app/user/:userId/reports'/>
          <ReportPreview path='app/:reportId' />

          <FormNew path='app/report/new' />
          <FormConfirm path='app/report/create' />
          <FormThankYou path='app/report/confirmation' />

          <NotFound default />
        </Router>
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
