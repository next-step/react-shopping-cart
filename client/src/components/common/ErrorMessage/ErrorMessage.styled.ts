import styled from 'styled-components';
import { ReactComponent as Image } from 'assets/svgs/error.svg';
import { Button } from '../Button';

export const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  min-height: 200px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;
export const ErrorIcon = styled(Image)`
  width: 64px;
  height: 64px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 32px;
  }
  span {
    font-size: 20px;
    color: gray;
  }
`;
export const ErrorMessageButton = styled(Button)`
  background-color: rgb(210, 91, 87);
  margin-top: 30px;
  padding: 15px;
  border-radius: 7px;
  font-size: 24px;
`;
