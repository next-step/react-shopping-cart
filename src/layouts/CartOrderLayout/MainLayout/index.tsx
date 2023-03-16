import React from "react";
import { Outlet } from "react-router-dom";

import { SubHeader } from "@/components/common";

import * as S from "./cartOrderMainLayout.style";

export default function CartOrderLayout() {
  return (
    <div>
      <SubHeader>장바구니</SubHeader>
      <S.CartLayoutContentWrapper>
        <Outlet />
      </S.CartLayoutContentWrapper>
    </div>
  );
}
