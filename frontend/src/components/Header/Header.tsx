import { Box } from '@/components/common';
import { CartIcon } from '@/assets/svgs';

import * as Styled from './Header.styled';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.BoxWrapper>
        <Box>
          <Link to="product-list">
            <Styled.SvgBox>
              <CartIcon />
            </Styled.SvgBox>
            <h1>NEXTSTEP</h1>
          </Link>
        </Box>

        <Styled.Nav>
          <Link to="/cart">장바구니</Link>
          <Link to="/order-list">주문목록</Link>
        </Styled.Nav>
      </Styled.BoxWrapper>
    </Styled.Header>
  );
}
