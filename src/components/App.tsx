import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { RouteComponentProps, Router } from "@reach/router";

import * as Page from "../pages";
import Navbar from "./Navbar";
import { ROUTES, useLogin } from "../config";
import { GlobalStyle, Container } from "../styles";
import { Fallback } from "./Fallback";

type Props = { component: React.ElementType } & RouteComponentProps;

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const NotFound = () => <section>Sorry, nothing here</section>;

function App() {
  useLogin();

  return (
    <AppContainer>
      <GlobalStyle />
      <Fallback />
      <Navbar />

      <Container>
        <Router primary={false}>
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
      </Container>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
