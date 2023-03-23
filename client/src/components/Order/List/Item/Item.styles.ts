import { Box, Button, Image } from 'components/common';
import styled from 'styled-components';

export const Layout = styled(Box)`
  width: 100%;
  padding: 20px 40px;
  border: 1px solid #aaaaaa;
`;

export const FlexBox = styled(Box)`
  margin-top: 10px;
  gap: 15px;
`;
export const ItemImage = styled(Image)`
  width: 144px;
  height: 144px;
`;
export const ItemBox = styled(Box)``;
export const ItemName = styled.span`
  font-size: 20px;
`;
export const ItemInfo = styled.span`
  color: #888888;
`;
export const OrderButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  background: #2ac1bc;
  font-size: 20px;
  color: white;
  padding: 14px 28px;
`;
