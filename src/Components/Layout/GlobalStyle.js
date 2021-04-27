import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --gray-0: #f1f1f1;
    --gray-1: #AFB2B1;
    --black-0: #2F2F2F;
    --green-0: #98FB98;
    --green-1: #228B22;
    --blue-0: #1E90FF;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
    background: var(--gray-0);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; 
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; 
    }
  }
  
`;

export default GlobalStyle;
