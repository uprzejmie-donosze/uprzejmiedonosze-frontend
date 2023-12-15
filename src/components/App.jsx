import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Router } from "@reach/router";
import { useDispatch, useSelector } from 'react-redux';

import * as Page from '../pages';
import Navbar from './layout/Navbar';
import { ROUTES } from '../config';
import { GlobalStyle, Container } from '../styles';
import { getUser } from '../store/actions/userActions';

const NotFound = () => <Container>Sorry, nothing here</Container>;

function App() {
  const dispatch = useDispatch()
  const isAuthLoaded = useSelector(state => state.firebase.auth.isLoaded);

  useEffect(() => {
    isAuthLoaded && dispatch(getUser());
  }, [isAuthLoaded])

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

