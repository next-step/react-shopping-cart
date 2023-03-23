import styled from "styled-components";

export const CartProductContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const CartProductImageWrapper = styled.div`
  width: 144px;
`;

export const CartProductContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartProductNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartProductCounterWrapper = styled.div`
  align-self: flex-end;
`;

export const CartProductPriceWrapper = styled.div`
  align-self: flex-end;
`;
