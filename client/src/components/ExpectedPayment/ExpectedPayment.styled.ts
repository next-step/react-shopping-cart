import { Box, HorizontalLine, Button } from 'components/common';
import styled from 'styled-components';

export const Top = styled(Box)`
  padding: 10px 20px;
`;
export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const ThinLine = styled(HorizontalLine)`
  border: 1px solid #aaaaaa;
`;
export const Bottom = styled(Box)`
  margin-top: 20px;
  padding: 20px;
`;
export const BottomText = styled.span`
  position: relative;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  padding: 0 2px;
  font-size: 20px;
  ::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
    background-color: #2ac1bc;
    opacity: 0.5;
    z-index: -1;
  }
`;
export const ButtonBox = styled(Box)`
  margin-left: 10px;
  margin-right: 10px;
`;
export const OrderButton = styled(Button)`
  background: #2ac1bc;
  font-size: 24px;
  color: white;
  width: 100%;
  padding: 20px;
`;
