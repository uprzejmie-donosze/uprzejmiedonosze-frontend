import React from "react";

import { Container } from "../styles/styledComponents";
import { withAuth } from "../config/auth";
import UserNav from "../components/UserNav";

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
