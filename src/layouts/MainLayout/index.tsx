import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/common";

import * as S from "./mainLayout.style";

export default function MainLayout() {
  return (
    <S.MainLayoutContainer>
      <Header />
      <S.MainContentWrapper>
        <Outlet />
      </S.MainContentWrapper>
    </S.MainLayoutContainer>
  );
}
