import { Image } from 'common/components';
import { ReactComponent as Cart } from 'assets/svgs/cart.svg';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  border: 1px solid #aaaaaa;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 15px;
`;
export const ItemContainer = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
export const ItemImage = styled(Image)`
  width: 144px;
  height: 144px;
`;
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemName = styled.span`
  font-size: 20px;
`;
export const ItemInfo = styled.span`
  color: #888888;
`;
export const CartButton = styled(Cart)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 32px;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    align-self: auto;
  }
`;
