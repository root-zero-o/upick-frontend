import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
}
body {
    width: 100vw;
    height: 100vh;
    background-color: #ddd;
}
`;

export default GlobalStyle;