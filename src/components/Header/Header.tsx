import React from 'react';
import { Link } from 'react-router-dom';

import { CartIcon } from '@/components/Icons';
import { routes } from '@/router';

import { LayeredWrapper } from '../LayeredWrapper';
import {
  HeaderWrapperInnerStyle,
  HeaderWrapperOuterStyle,
  StyledGNBTitle,
  StyledButtonContainer,
  StyledHeaderFake,
} from './Header.styled';

export function Header() {
  return (
    <>
      <LayeredWrapper
        outer={{ as: 'header', className: HeaderWrapperOuterStyle() }}
        inner={{ className: HeaderWrapperInnerStyle() }}
      >
        <Link to={routes.home}>
          <CartIcon color="white" />
          <StyledGNBTitle>NEXTSTEP</StyledGNBTitle>
        </Link>
        <StyledButtonContainer>
          <Link to={routes.cart}>
            <span>장바구니</span>
          </Link>
          <Link to={routes.payment}>
            <span>주문목록</span>
          </Link>
        </StyledButtonContainer>
      </LayeredWrapper>
      <StyledHeaderFake />
    </>
  );
}
