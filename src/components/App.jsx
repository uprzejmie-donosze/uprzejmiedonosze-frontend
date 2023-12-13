import React from 'react';
import styled from 'styled-components';
import { Router } from "@reach/router";
import Navbar from './layout/Navbar/Navbar';
import GlobalStyle from '../styles/globalStyles';

import Home from '../pages/Home';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import UserReports from '../pages/UserReports';
import UserRegistration from '../pages/UserRegistration';
import User from '../pages/User';
import Report from '../pages/Report';
import { Epuap } from '../pages/Epuap';
import { Mandate } from '../pages/Mandate';
import { Gallery } from '../pages/Gallery';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { FAQ } from '../pages/FAQ';

import { Container } from '../styles/styledComponents';
import { ROUTES } from '../config';

const NotFound = () => <Container>Sorry, nothing here</Container>;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />

      <Router>
        <Home path={ROUTES.home} />
        <NotFound default />
        <Login path={ROUTES.login} />
        <Epuap path={ROUTES.epuap} />
        <FAQ path={ROUTES.faq} />
        <Gallery path={ROUTES.gallery} />
        <Mandate path={ROUTES.mandate} />
        <PrivacyPolicy path={ROUTES.privavyPolicy} />
        <Report path={ROUTES.newReport} />
        <User path={ROUTES.user.main}>
          <UserProfile path={ROUTES.user.home} />
          <UserRegistration path={ROUTES.user.edit} />
          <UserReports path={ROUTES.user.reports} />
        </User>
      </Router>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
