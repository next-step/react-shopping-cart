import styled from 'styled-components';
import { Box, Image } from 'components/common';
import { ReactComponent as Cart } from 'assets/svgs/cart.svg';

export const Layout = styled.div``;

export const FlexBox = styled(Box)``;

export const NameText = styled.span`
  font-size: 18px;
`;
export const PriceText = styled.span`
  font-size: 16px;
`;
export const FlexContainer = styled(Box)`
  width: 280px;
  padding: 5px;
`;
export const ListItemImage = styled(Image)``;
export const CartIcon = styled(Cart)`
  cursor: pointer;
  &:hover {
    transform: scale(1.16);
  }
`;
