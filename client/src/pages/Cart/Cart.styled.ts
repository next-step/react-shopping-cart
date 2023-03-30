import styled, { css } from 'styled-components';
import { Input, Button, HorizontalLine } from 'components/common';
export const Layout = styled.section`
  padding: 24px 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const ItemSection = styled.section`
  width: 100%;
  overflow-y: scroll;
  height: 500px;
  padding: 30px;
  border: 1px solid #dddddd;

  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(42, 193, 188);
    border-radius: 5px;
  }
`;
export const PaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  height: fit-content;
  border: 1px solid #dddddd;
  overflow: hidden;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckBoxInputBox = styled.div`
  display: flex;
  align-items: center;
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
  padding: 14px;
  font-size: 20px;
  font-weight: 600;
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
