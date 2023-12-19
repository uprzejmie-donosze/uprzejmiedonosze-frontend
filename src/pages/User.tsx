import React from "react";
import UserNav from "../components/UserNav";

import { Container } from "../styles";
import { withAuth } from "../config";

type Props = {
  children: React.ReactNode;
};

export function UserPage(props: Props) {
  return (
    <>
      <UserNav />

      <Container>{props.children}</Container>
    </>
  );
}

export const User = withAuth(UserPage);
