import React from "react";

import * as S from "./header.style";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContentWrapper>
        <S.HeaderTitleWrapper>
          <S.HeaderCartIcon />
          <S.HeaderTitle>Next Step</S.HeaderTitle>
        </S.HeaderTitleWrapper>
        <S.NavButtonWrapper>
          <S.NavButton>장바구니</S.NavButton>
          <S.NavButton>주문목록</S.NavButton>
        </S.NavButtonWrapper>
      </S.HeaderContentWrapper>
    </S.HeaderContainer>
  );
}
