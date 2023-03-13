import Layout from "components/Layout";
import { CARTS, CARTS_URL } from "constants/carts";
import { ORDERS, ORDERS_URL } from "constants/orders";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Cart } from "assets/cart.svg";
import { PRODUCTS_URL } from "constants/products";

const NavBar = () => {
  return (
    <Layout>
      <Navigation>
        <FirstStyledLink to={PRODUCTS_URL.LIST}>
          <StyledCart />
          <NavTitle>NEXTSTEP</NavTitle>
        </FirstStyledLink>
        <StyledLink to={`/${CARTS}/${CARTS_URL.LIST}`}>
          <NavLink>장바구니</NavLink>
        </StyledLink>
        <StyledLink to={`/${ORDERS}/${ORDERS_URL.LIST}`}>
          <NavLink>주문목록</NavLink>
        </StyledLink>
      </Navigation>
    </Layout>
  );
};

export default NavBar;

const Navigation = styled.nav`
  width: 100%;
  height: 75px;

  background: #2ac1bc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
`;

const FirstStyledLink = styled(StyledLink)`
  flex: 1;
  display: flex;
  align-items: center;
`;

const NavTitle = styled.span`
  font-size: 40px;
  font-weight: 900;
`;

const StyledCart = styled(Cart)`
  width: 40px;
  height: 100%;
  margin: 0 10px;
  & path {
    fill: white;
  }
`;

const NavLink = styled.span`
  font-weight: 500;
  font-size: 24px;
  margin: 0 15px;
`;
