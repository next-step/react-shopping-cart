import { createGlobalStyle } from "styled-components";

export const UTIL_COLORS = {
  CYAN: "#2AC1BC",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  WHITE_GRAY: "#BBBBBB",
};

const GlobalStyle = createGlobalStyle`
    :root {
        --cyan: ${UTIL_COLORS.CYAN};
        --white: ${UTIL_COLORS.WHITE};
        --black: ${UTIL_COLORS.BLACK};
        --white-gray: ${UTIL_COLORS.WHITE_GRAY}
    }

    body {
        max-width: 1920px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
