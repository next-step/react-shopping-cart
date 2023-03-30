import { Button, Image, HorizontalLine } from 'components/common';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
  span {
    font-size: 24px;
  }
`;

export const ItemImage = styled(Image)`
  margin-bottom: 10px;
  height: auto;
  @media (max-width: 1199px) {
    width: 480px;
  }
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.span``;
export const Horizontal = styled(HorizontalLine)`
  border: 2px solid #aaaaaa;
`;

export const ItemInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Text = styled.span``;
export const Price = styled.span``;

export const CartButton = styled(Button)`
  width: 100%;
  height: auto;
  padding: 24px;
  font-size: 24px;
  margin-top: 20px;
`;
