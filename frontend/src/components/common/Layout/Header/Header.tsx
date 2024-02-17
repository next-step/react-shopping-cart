import { Link } from 'react-router-dom';

import { CartIcon } from '@/assets/svgs';

import { Box } from '@/components/common';

import { ROUTES } from '@/constants/routes';

import * as Styled from './Header.styled';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.BoxWrapper>
        <Box>
          <Link to={ROUTES.PRODUCT_LIST}>
            <Styled.SvgBox>
              <CartIcon />
            </Styled.SvgBox>
            <h1>NEXTSTEP</h1>
          </Link>
        </Box>

        <Styled.Nav>
          <Link to={ROUTES.CART}>장바구니</Link>
          <Link to={ROUTES.ORDER_LIST}>주문목록</Link>
        </Styled.Nav>
      </Styled.BoxWrapper>
    </Styled.Header>
  );
}
