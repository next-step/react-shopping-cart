import React from "react";

import * as S from "./subHeader.style";

export interface SubHeaderProps {
  children: string;
}

export default function SubHeader({ children }: SubHeaderProps) {
  return <S.SubHeaderContainer>{children}</S.SubHeaderContainer>;
}
