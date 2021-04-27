import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --gray-0: #f7f7f7;
    --gray-1: #989898;
    --black-0: #2F2F2F;
    --green-0: #bdfcbd;
    --green-1: #196c19;
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
