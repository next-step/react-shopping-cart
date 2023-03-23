import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { SubHeader } from "@/components/common";
import { DOMAINS } from "@/routes";

import * as S from "./cartOrderMainLayout.style";

export default function CartOrderLayout() {
  const { pathname } = useLocation();

  const subHeaderTitle = useMemo(
    () => ({
      [DOMAINS.CART]: "장바구니",
      [DOMAINS.ORDER]: "주문목록",
    }),
    []
  );

  return (
    <div>
      <SubHeader>{subHeaderTitle[pathname]}</SubHeader>
      <S.CartLayoutContentWrapper>
        <Outlet />
      </S.CartLayoutContentWrapper>
    </div>
  );
}
