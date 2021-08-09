import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    .container {
      width: 70%;
      margin: auto;
    }

    h2.section-title {
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 40px;
      letter-spacing: 0.1em;
      color: #ee4d47;
      text-transform: uppercase;
      margin-bottom: 3rem;
    }

    p.section-paragraph {
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 40px;
      color: #402b2b;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    ul {
      list-style: none;
    }

    .my-10 {
      margin: 10rem 0;
    }
  }
`;

export default GlobalStyles;
