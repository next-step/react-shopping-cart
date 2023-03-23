import styled from "styled-components";

import type { CheckBoxProps } from "./index";

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input<Pick<CheckBoxProps, "width">>`
  appearance: none;
  border: 1px solid var(--cyan);
  border-radius: 2px;
  width: ${(props) => props.width ?? `1.75rem`};
  height: ${(props) => props.width ?? `1.75rem`};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    background-color: var(--cyan);
  }

  &:after {
    content: "✔";
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CheckBoxLabel = styled.label`
  padding-left: 7px;
`;
