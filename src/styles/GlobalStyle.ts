import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --cyan: #2AC1BC;
        --white: #ffffff;
    }

    body {
        max-width: 1920px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
