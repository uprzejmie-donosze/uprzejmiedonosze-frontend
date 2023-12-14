import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #F0F0F0;
  }

  button,
  a {
    touch-action: manipulation;
  }

  * {
    box-sizing: border-box;
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
    }
  }
`;
