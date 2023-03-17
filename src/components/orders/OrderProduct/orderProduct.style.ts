import styled from "styled-components";

import { Button } from "@/components/common";

export const OrderProductContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const ProductImageWrapper = styled.div`
  width: 141px;
`;

export const OrderProductContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const OrderProductNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AddCartButton = styled(Button)`
  padding: 5px 20px;
  color: var(--white);
`;

export const OrderProductPrice = styled.span`
  color: var(--white-gray);
  font-size: 15px;
`;
