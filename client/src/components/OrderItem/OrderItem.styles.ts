import styled from 'styled-components';
import { Box, HorizontalLine, Image } from 'components/common';

export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const DivideLine = styled(HorizontalLine)`
  border: 2px solid #aaaaaa;
  margin-top: 10px;
`;
export const Container = styled(Box)``;

export const FlexBox = styled(Box)`
  gap: 15px;
  margin-top: 10px;
`;
export const OrderItemImage = styled(Image)`
  height: 144px;
  width: 144px;
`;
export const OrderName = styled.span`
  font-size: 20px;
`;
export const OrderNumber = styled.span``;
