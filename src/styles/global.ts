import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
    font-family: sans-serif;
}

button {
    cursor: pointer;
}

html, body {
    min-height: 100vh;
}

`;

export default GlobalStyle;
