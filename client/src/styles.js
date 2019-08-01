import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  h1 {
    font-size: 2.2em;

    @media screen and (max-width: 700px) {
      font-size: 1.5em;
    }
  }

  h2 {
    font-size: 1.5em;

    @media screen and (max-width: 700px) {
      font-size: 1.2em;
    }
  }

  h3 {
    font-size: 1.2em;

    @media screen and (max-width: 700px) {
      font-size: 1em;
    }
  }
`;
