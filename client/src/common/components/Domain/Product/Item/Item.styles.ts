import styled from 'styled-components';
import { Image } from 'common/components';
import { ReactComponent as Cart } from 'assets/svgs/cart.svg';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

  &:hover {
    animation-name: bounce;
    -moz-animation-name: bounce;
  }

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.span`
  font-size: 20px;
`;
export const PriceText = styled.span`
  margin-top: 5px;
  font-size: 18px;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;
export const ItemImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const CartIcon = styled(Cart)`
  cursor: pointer;
  width: 35px;
  height: auto;
  &:hover {
    transform: scale(1.16);
  }
`;
