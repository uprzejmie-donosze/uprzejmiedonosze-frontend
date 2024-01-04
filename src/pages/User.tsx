import React from "react";
import UserNav from "../components/UserNav";
import { withAuth } from "../config";

type Props = {
  children: React.ReactNode;
};

export function UserPage(props: Props) {
  return (
    <section>
      <UserNav />

      {props.children}
    </section>
  );
}

export const User = withAuth(UserPage);
