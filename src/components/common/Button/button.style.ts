import styled, { css } from "styled-components";

import { UTIL_COLORS } from "@/styles/GlobalStyle";

import type { ButtonProps } from "./index";

export type ButtonVariant = "text" | "outlined" | "contained";

const setButtonStyle = (variant: ButtonVariant) => {
  switch (variant) {
    case "text": {
      return css`
        color: ${UTIL_COLORS.CYAN};
        border: none;
        background-color: transparent;
      `;
    }
    case "contained": {
      return css`
        background-color: ${UTIL_COLORS.CYAN};
        color: ${UTIL_COLORS.BLACK};
        border: none;
      `;
    }
    case "outlined": {
      return css`
        border: 1px solid ${UTIL_COLORS.CYAN};
        background-color: transparent;
      `;
    }
  }
};

export const Button = styled.button<Pick<ButtonProps, "variant" | "color" | "backgroundColor" | "borderColor">>`
  ${(props) => setButtonStyle(props.variant)};
`;
