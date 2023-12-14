import React from "react";
import UserNav from "../components/UserNav";

import { Container } from "../styles";
import { withAuth } from "../config";

export function UserPage(props) {
  return (
    <>
      <UserNav />

      <Container>
        {props.children}
      </Container>
    </>
  );
};

export const User = withAuth(UserPage);
