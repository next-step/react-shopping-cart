import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Cart } from 'assets/cart.svg';

export const Navigation = styled.nav`
  width: 100%;
  height: 75px;

  background: ${(props) => props.theme.colors.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
`;

export const FirstStyledLink = styled(StyledLink)`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.span`
  font-size: 40px;
  font-weight: 900;
`;

export const StyledCart = styled(Cart)`
  width: 40px;
  height: 100%;
  margin: 0 10px;
  & path {
    fill: ${(props) => props.theme.colors.white};
  }
`;

export const NavLink = styled.span`
  font-weight: 500;
  font-size: 24px;
  margin: 0 15px;
`;
