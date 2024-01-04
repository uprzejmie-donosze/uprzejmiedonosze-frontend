import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Helvetica, Arial, sans-serif;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
  }
  button,
  a {
    touch-action: manipulation;
  }

  * {
    box-sizing: border-box;
    line-height: 1.4;
  }

  label,
  input {
    display: block;
    width: 100%;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      opacity: .8;
    }

    &:visited: {
      color: inherit;
    }
  }

  button {
    &:hover { opacity: .8; }

    &:active { transform: translateY(2px); }

    &:disabled {
      opacity: .6;
      cursor: not-allowed;
      transform: unset;
    }
  }
`;
