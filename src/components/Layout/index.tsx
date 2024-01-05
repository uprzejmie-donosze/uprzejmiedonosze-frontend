import React from "react";
import styled from "styled-components";
import {
  APP_WIDTH_LARGE,
  APP_WIDTH_SMALL,
  breakpoints,
  colors,
} from "../../styles";
import mediaMin, { mediaMax } from "../../styles/mediaQueries";

export function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  color: ${colors.text};
  margin: 0 auto;
  padding: 1rem;

  ${mediaMax(breakpoints.lg)} {
    max-width: ${APP_WIDTH_SMALL};
  }

  ${mediaMin(breakpoints.lg)} {
    max-width: ${APP_WIDTH_LARGE};
`;
