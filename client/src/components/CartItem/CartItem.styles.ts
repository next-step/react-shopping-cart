import { Box, Image, Input, Button } from 'components/common';
import styled from 'styled-components';
import { ReactComponent as CartRemove } from 'assets/svgs/trash.svg';

export const Layout = styled(Box)``;

export const LeftFlexBox = styled(Box)`
  margin-top: 10px;
  gap: 15px;
`;

export const CheckBox = styled(Input)`
  ::after {
    content: '✔';
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :checked {
    background-color: #2ac1bc;
  }
`;
export const CartItemImage = styled(Image)`
  width: 144px;
  height: 144px;
`;
export const CartItemName = styled.span`
  font-size: 20px;
`;

export const RightFlexBox = styled(Box)`
  gap: 15px;
`;
export const CartRemoveButton = styled(CartRemove)`
  align-self: flex-end;
  cursor: pointer;
`;
export const CartInputNumberContainer = styled(Box)``;
export const CartInputNumber = styled(Input)`
  width: 72px;
  height: 58px;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 24px;
`;
export const CartInputNumberButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border: 1px solid #dddddd;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;
export const CartPriceText = styled.span`
  color: #333333;
  align-self: flex-end;
`;
