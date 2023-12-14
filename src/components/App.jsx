import React from 'react';
import styled from 'styled-components';
import { Router } from "@reach/router";

import * as Page from '../pages';
import Navbar from './layout/Navbar';
import { ROUTES } from '../config';
import { GlobalStyle, Container } from '../styles';

const NotFound = () => <Container>Sorry, nothing here</Container>;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />

      <Router>
        <Page.Home path={ROUTES.home} />
        <NotFound default />
        <Page.Login path={ROUTES.login} />
        <Page.Epuap path={ROUTES.epuap} />
        <Page.FAQ path={ROUTES.faq} />
        <Page.Gallery path={ROUTES.gallery} />
        <Page.Mandate path={ROUTES.mandate} />
        <Page.PrivacyPolicy path={ROUTES.privavyPolicy} />
        <Page.Report path={ROUTES.newReport} />
        <Page.User path={ROUTES.user.main}>
          <Page.UserProfile path={ROUTES.user.home} />
          <Page.UserRegistration path={ROUTES.user.edit} />
          <Page.UserReports path={ROUTES.user.reports} />
        </Page.User>
      </Router>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
