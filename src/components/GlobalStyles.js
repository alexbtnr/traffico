import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    .container {
      width: 80%;
      margin: auto;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
  }
`;

export default GlobalStyles;
