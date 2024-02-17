import styled from 'styled-components';
import Button from '../Button';
import { ReactComponent as Image } from 'assets/svgs/error.svg';

export const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 380px;
  min-height: 200px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 50px;
`;
export const DiaLogButton = styled(Button)`
  cursor: pointer;
  border: none;
  padding: 0.8rem 1.4rem;
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 10px;
`;
export const Title = styled.h3`
  color: black;
  font-weight: 500;
  font-size: 25px;
`;

export const ErrorIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;
