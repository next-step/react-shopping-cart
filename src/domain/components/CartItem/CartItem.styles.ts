import { Image, Input } from 'common/components';
import styled from 'styled-components';

export const Contianer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  border-left: 0;
  border-right: 0;
  border-top: 0;
  margin-bottom: 10px;
  padding: 10px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;
export const CheckBox = styled(Input)`
  width: 20px;
  height: 20px;
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

export const CartItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
export const CartItemImage = styled(Image)`
  width: 128px;
  height: auto;
  @media screen and (max-width: 450px) {
    width: 192px;
  }
`;
export const CartItemName = styled.span`
  font-size: 1.25rem;
`;

export const CartInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const CartInputNumber = styled(Input)`
  width: 48px;
  height: 48px;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 1.2rem;
`;
export const CartInputNumberButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 12px;
  border: 1px solid #dddddd;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;
export const CartPriceText = styled.span`
  color: #333333;
  font-size: 1.2rem;
  align-self: flex-end;
`;
