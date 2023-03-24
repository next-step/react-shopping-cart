import { Box, Button, Image, HorizontalLine } from 'components/common';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemImage = styled(Image)`
  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Name = styled.span`
  font-size: 24px;
`;
export const Horizontal = styled(HorizontalLine)`
  border: 2px solid #aaaaaa;
`;

export const FlexBox = styled(Box)``;
export const Text = styled.span`
  font-size: 18px;
`;
export const Price = styled.span`
  font-size: 24px;
`;

export const CartButton = styled(Button)`
  width: 100%;
  padding: 24px;
  background: #73675c;
  font-size: 24px;
  color: white;
  margin-top: 20px;
`;
