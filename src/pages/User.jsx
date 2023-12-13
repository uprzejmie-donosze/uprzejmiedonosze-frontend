import React from "react";
import { Container } from "../styles/styledComponents";
import UserNav from "../components/UserNav";
import { withAuth } from "../config";

export function User(props) {
  return (
    <>
      <UserNav />

      <Container>
        {props.children}
      </Container>
    </>
  );
};

export default withAuth(User);
