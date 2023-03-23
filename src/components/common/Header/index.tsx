import React from "react";

import { useNavigateTo } from "@/hooks";

import * as S from "./header.style";

export default function Header() {
  const moveTo = useNavigateTo();

  return (
    <S.HeaderContainer>
      <S.HeaderContentWrapper>
        <S.HeaderTitleWrapper onClick={moveTo("MAIN")}>
          <S.HeaderCartIcon />
          <S.HeaderTitle>Next Step</S.HeaderTitle>
        </S.HeaderTitleWrapper>
        <S.NavButtonWrapper>
          <S.NavButton variant="text" onClick={moveTo("CART")}>
            장바구니
          </S.NavButton>
          <S.NavButton variant="text" onClick={moveTo("ORDER")}>
            주문목록
          </S.NavButton>
        </S.NavButtonWrapper>
      </S.HeaderContentWrapper>
    </S.HeaderContainer>
  );
}
