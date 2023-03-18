import styled, { css } from "styled-components";

import { Button } from "@/components/common";

export const OrderProductContainer = styled.div`
  --order-product-list-side-padding: 20px;

  background-color: var(--white);
  border: 1px solid var(--gray);
`;

export const OrderProductListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px var(--order-product-list-side-padding);
  background-color: var(--white-gray);
  font-size: 15px;
  border-bottom: 1px solid var(--gray);
`;

export const ShowDetailButton = styled(Button)`
  color: var(--black);
`;

export const orderProductStyle = css`
  padding: 20px var(--order-product-list-side-padding);

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--gray);
  }
`;
