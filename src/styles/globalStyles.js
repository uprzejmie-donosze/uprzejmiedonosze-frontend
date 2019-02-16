import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #F0F0F0;
  }

  #___gatsby,
  #___gatsby > div {
    height: 100vh;
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
`;

export default GlobalStyle;
