import styled from 'styled-components';
import { Image } from 'common/components';
import { ReactComponent as Cart } from 'assets/svgs/cart.svg';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.span`
  font-size: 20px;
`;
export const PriceText = styled.span`
  margin-top: 5px;
  font-size: 18px;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;
export const ItemImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CartIcon = styled(Cart)`
  cursor: pointer;
  width: 35px;
  height: auto;
  &:hover {
    transform: scale(1.16);
  }
`;
