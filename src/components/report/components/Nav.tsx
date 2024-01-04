import React from "react";
import styled from "styled-components";

export function FormNav({ children }: { children: React.ReactNode }) {
  return <NavContainer>{children}</NavContainer>;
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  & > *:last-child {
    margin-left: auto;
  }
`;
