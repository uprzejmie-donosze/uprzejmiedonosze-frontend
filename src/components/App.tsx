import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { RouteComponentProps, Router } from "@reach/router";

import * as Page from "../pages";
import Navbar from "./Navbar";
import { ROUTES } from "../config";
import { GlobalStyle, Container } from "../styles";
import { getUser } from "../store/user";
import { useAppDispatch, useAppSelector } from "../store";

type Props = { component: React.ElementType } & RouteComponentProps;

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const NotFound = () => <Container>Sorry, nothing here</Container>;

function App() {
  const dispatch = useAppDispatch();
  const isAuthLoaded = useAppSelector((state) => state.firebase.auth.isEmpty);

  useEffect(() => {
    dispatch(getUser());
  }, [isAuthLoaded]);

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />

      <Router>
        <Route component={Page.Home} path={ROUTES.home} />
        <Route component={NotFound} default />
        <Route component={Page.Login} path={ROUTES.login} />
        <Route component={Page.Epuap} path={ROUTES.epuap} />
        <Route component={Page.FAQ} path={ROUTES.faq} />
        <Route component={Page.Gallery} path={ROUTES.gallery} />
        <Route component={Page.Mandate} path={ROUTES.mandate} />
        <Route component={Page.PrivacyPolicy} path={ROUTES.privavyPolicy} />
        <Route component={Page.Report} path={ROUTES.newReport} />
        <Page.User path={ROUTES.user.main}>
          <Page.UserProfile path={ROUTES.user.home} />
          <Page.UserRegistration path={ROUTES.user.edit} />
          <Page.UserReports path={ROUTES.user.reports} />
        </Page.User>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
