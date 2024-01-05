import React from "react";
import styled from "styled-components";
import { Layout } from "../../Layout";

export function FormNav({ children }: { children: React.ReactNode }) {
  return (
    <NavContainer>
      <Layout>{children}</Layout>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  background: white;
  box-shadow: 0px -3px 7px rgb(51 51 51 / 16%);
`;
