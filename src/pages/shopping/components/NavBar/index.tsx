import Layout from 'components/Layout';
import { CARTS, CARTS_URL } from 'constants/carts';
import { ORDERS, ORDERS_URL } from 'constants/orders';
import { PRODUCTS_URL } from 'constants/products';
import * as StyledNavbar from './NavBar.styled';

const NavBar = () => {
  return (
    <Layout>
      <StyledNavbar.Navigation>
        <StyledNavbar.FirstStyledLink to={PRODUCTS_URL.LIST}>
          <StyledNavbar.StyledCart />
          <StyledNavbar.NavTitle>NEXTSTEP</StyledNavbar.NavTitle>
        </StyledNavbar.FirstStyledLink>

        <StyledNavbar.StyledLink to={`/${CARTS}/${CARTS_URL.LIST}`}>
          <StyledNavbar.NavLink>장바구니</StyledNavbar.NavLink>
        </StyledNavbar.StyledLink>

        <StyledNavbar.StyledLink to={`/${ORDERS}/${ORDERS_URL.LIST}`}>
          <StyledNavbar.NavLink>주문목록</StyledNavbar.NavLink>
        </StyledNavbar.StyledLink>
      </StyledNavbar.Navigation>
    </Layout>
  );
};

export default NavBar;
