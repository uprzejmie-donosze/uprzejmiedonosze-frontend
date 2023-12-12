import React from "react";
import { Link } from "@reach/router";

import { Container } from "../styles/styledComponents";
import { withAuth } from "../config/auth";

export function User(props) {
  return (
    <Container>
      <nav>
        <ul>
          <li><Link to=".">profil</Link></li>
          <li><Link to="zgloszenia">zgloszenia</Link></li>
          <li><Link to="rejestracja">rejestracja</Link></li>
        </ul>
      </nav>

      {props.children}
    </Container>
  );
};


export default withAuth(User);
