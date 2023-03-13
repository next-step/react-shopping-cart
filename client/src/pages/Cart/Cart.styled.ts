import styled, { css } from 'styled-components';
import { Box, Input, Button, HorizontalLine } from 'components/common';
import { Header } from 'components/Header';

export const Root = styled.div`
  padding: 24px 300px;
`;

export const CartListHeader = styled(Header)``;
export const LeftSection = styled.section`
  width: 60%;
  margin-top: 50px;
`;
export const FlexContainer = styled(Box)`
  display: flex;
`;

export const CheckBoxContainer = styled(Box)`
  display: flex;
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
export const CheckBoxLabel = styled.label`
  padding-left: 7px;
  font-size: 16px;
`;
export const CheckBoxButton = styled(Button)`
  padding: 12px 22px;
  font-size: 16px;
  background: none;
  border: 1px solid #bbbbbb;
`;
export const CartTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
`;
export const Divider = styled(HorizontalLine)`
  margin-top: 10px;
  border: 2px solid #aaaaaa;
`;

export const RightSection = styled.section`
  width: 35%;
  height: 260px;
  margin-left: 5%;
  margin-top: 80px;
  border: 1px solid #dddddd;
`;
