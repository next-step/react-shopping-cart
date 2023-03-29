import { HorizontalLine, Button } from 'components/common';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TitleBox = styled.div``;
export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const ThinLine = styled(HorizontalLine)`
  border: 1px solid #aaaaaa;
`;
export const ItemInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const Text = styled.span`
  position: relative;
  font-weight: 700;
  display: inline-block;
  text-align: center;

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
export const Price = styled.span`
  position: relative;
  font-weight: 700;
  display: inline-block;
  text-align: center;
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

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const OrderButton = styled(Button)`
  background: #2ac1bc;
  font-size: 24px;
  color: white;
  width: 100%;
  padding: 20px;
`;
