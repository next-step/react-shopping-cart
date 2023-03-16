import React, { Children, PropsWithChildren } from "react";

import * as S from "./cartOrderContentLayout.style";

export default function CartOrderContentLayout({ children }: PropsWithChildren) {
  const childrenElements = Children.toArray(children);

  return (
    <S.CartOrderContentLayoutContainer>
      <S.CartOrderContentLeftWrapper>{childrenElements[0]}</S.CartOrderContentLeftWrapper>
      <S.CartOrderContentRightWrapper>{childrenElements[1]}</S.CartOrderContentRightWrapper>
    </S.CartOrderContentLayoutContainer>
  );
}
