import { createGlobalStyle } from "styled-components";

export const UTIL_COLORS = {
  CYAN: "#2AC1BC",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  WHITE_GRAY: "#F6F6F6",
  GRAY: "#AAAAAA",
};

const GlobalStyle = createGlobalStyle`
    :root {
        --cyan: ${UTIL_COLORS.CYAN};
        --white: ${UTIL_COLORS.WHITE};
        --black: ${UTIL_COLORS.BLACK};
        --white-gray: ${UTIL_COLORS.WHITE_GRAY};
        --gray: ${UTIL_COLORS.GRAY};
    }

    body {
        max-width: 1920px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
