import styled, { css } from "styled-components";

import { Button, CheckBox, SubHeader } from "@/components/common";

export const CartProductDeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CartProductCheckBox = styled(CheckBox)`
  & label {
    font-size: 16px;
  }
`;

export const CartProductDeleteButton = styled(Button)`
  border-color: var(--white-gray);
  font-size: 16px;
  padding: 5px 10px;
  margin-bottom: 30px;
`;

export const CartSubHeader = styled(SubHeader)`
  border-color: var(--white-gray);
  color: var(--white-gray);
  font-size: 20px;
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

export const cartProductStyle = css`
  &:not(:first-of-type) {
    padding-top: 10px;
  }

  &:not(:last-of-type) {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--white-gray);
  }
`;
