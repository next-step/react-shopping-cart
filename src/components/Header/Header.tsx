import React from 'react';
import { Link } from 'react-router-dom';

import { CartIcon } from '@/components/Icons';

import {
  HeaderWrapperInnerStyle,
  HeaderWrapperOuterStyle,
  StyledGNBTitle,
  StyledButtonContainer,
} from './Header.styled';
import { LayeredWrapper } from '../LayeredWrapper/LayeredWrapper';

export function Header() {
  return (
    <LayeredWrapper
      outer={{ as: 'nav', className: HeaderWrapperOuterStyle() }}
      inner={{ className: HeaderWrapperInnerStyle() }}
    >
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
    </LayeredWrapper>
  );
}
