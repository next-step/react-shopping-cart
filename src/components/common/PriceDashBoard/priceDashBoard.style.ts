import styled from "styled-components";

import Button from "../Button";

export const PriceDashBoardContainer = styled.div`
  --price-dashboard-side-padding: 25px;

  border: 1px solid var(--gray);
`;

export const PriceDashBoardTitleWrapper = styled.div`
  padding: 20px var(--price-dashboard-side-padding);
  border-bottom: 3px solid var(--gray);
`;

export const PriceDashBoardTitle = styled.span`
  font-weight: lighter;
`;

export const PriceDashBoardContentWrapper = styled.div`
  padding: 25px var(--price-dashboard-side-padding);
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceDashBoardButton = styled(Button)`
  width: 100%;
  margin-top: 80px;
  padding: 10px;
  color: var(--white);
`;
