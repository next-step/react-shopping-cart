import styled from 'styled-components';
import { Box, Button } from 'components/common';
import { ReactComponent as Cart } from 'assets/svgs/cart.svg';

export const Layout = styled(Box)`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  background: #2ac1bc;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 10px;
  position: sticky;
  font-weight: 900;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  cursor: pointer;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ButtonBox = styled(Box)`
  gap: 15px;
`;

export const NavButton = styled(Button)`
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  background-color: transparent;
  border: none;
`;
export const CartIcon = styled(Cart)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
