import { Image, Input } from 'components/common';
import styled from 'styled-components';
import { ReactComponent as CartRemove } from 'assets/svgs/trash.svg';

export const Contianer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 10px;
  padding: 10px;
`;

export const LeftBox = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 15px;
  align-items: center;
  width: 100%;
  overflow: scroll;

  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(42, 193, 188);
    border-radius: 7px;
  }

  text-overflow: clip;
  white-space: nowrap;
  margin: 10px;
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: 10px;
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

export const CartItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;
export const CartItemImage = styled(Image)`
  width: 128px;
  height: 128px;
`;
export const CartItemName = styled.span`
  font-size: 22px;
`;

export const CartRemoveButton = styled(CartRemove)`
  align-self: flex-end;
  cursor: pointer;
`;
export const CartInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CartInputNumber = styled(Input)`
  width: 72px;
  height: 58px;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 24px;
`;
export const CartInputNumberButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border: 1px solid #dddddd;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;
export const CartPriceText = styled.span`
  color: #333333;
  font-size: 20px;
  align-self: flex-end;
`;
