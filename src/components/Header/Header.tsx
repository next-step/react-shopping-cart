import React from 'react';
import { Link } from 'react-router-dom';

import { CartIcon } from '@/components/Icons';

import { StyledHeader, StyledHeaderContent, StyledGNBTitle, StyledButtonContainer } from './Header.styled';

export function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <div>
          <Link to="/">
            <CartIcon color="white" />
            <StyledGNBTitle>NEXTSTEP</StyledGNBTitle>
          </Link>
        </div>
        <StyledButtonContainer>
          <Link to="/cart">
            <span>장바구니</span>
          </Link>
          <Link to="/order_list">
            <span>주문목록</span>
          </Link>
        </StyledButtonContainer>
      </StyledHeaderContent>
    </StyledHeader>
  );
}
