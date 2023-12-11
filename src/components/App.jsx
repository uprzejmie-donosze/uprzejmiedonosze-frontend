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

const NotFound = () => <Container>Sorry, nothing here</Container>;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />

      <Router>
        <Home path='/' />
        <NotFound default />
        <Login path='logowanie' />
        <Epuap path='epuap' />
        <FAQ path='faq' />
        <Gallery path='galeria' />
        <Mandate path='mandat' />
        <PrivacyPolicy path='polityka-prywatnosci' />

        <Report path="nowe-zgloszenie" />

        <User path='uzytkownik'>
          <UserProfile path="/" />
          <UserRegistration path='rejestracja' />
          <UserReports path='zgloszenia' />
        </User>
      </Router>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
