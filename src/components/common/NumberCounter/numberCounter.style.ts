import styled from "styled-components";

import Button from "../Button";

export const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 42px;
  width: 55px;
`;

export const NumberInput = styled.input`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  height: 100%;
  width: 70%;
  padding: 0;
  margin: 0;
  text-align: center;
  border: 1px solid var(--white-gray);
`;

export const QuantityControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 30%;
`;

export const QuantityControlButton = styled(Button)`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--black);

  &:first-of-type {
    border-top: 1px solid var(--white-gray);
    border-right: 1px solid var(--white-gray);
    border-bottom: 1px solid var(--white-gray);
  }

  &:nth-of-type(2) {
    border-right: 1px solid var(--white-gray);
    border-bottom: 1px solid var(--white-gray);
  }
`;
