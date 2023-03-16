import React from "react";
import { useNavigate } from "react-router-dom";

import { DOMAINS } from "@/routes";

import * as S from "./header.style";

export default function Header() {
  const navigate = useNavigate();

  const moveToMainPage = () => {
    navigate(DOMAINS.MAIN);
  };

  const moveToCartPage = () => {
    navigate(DOMAINS.CART);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContentWrapper>
        <S.HeaderTitleWrapper onClick={moveToMainPage}>
          <S.HeaderCartIcon />
          <S.HeaderTitle>Next Step</S.HeaderTitle>
        </S.HeaderTitleWrapper>
        <S.NavButtonWrapper>
          <S.NavButton variant="text" onClick={moveToCartPage}>
            장바구니
          </S.NavButton>
          <S.NavButton variant="text">주문목록</S.NavButton>
        </S.NavButtonWrapper>
      </S.HeaderContentWrapper>
    </S.HeaderContainer>
  );
}
