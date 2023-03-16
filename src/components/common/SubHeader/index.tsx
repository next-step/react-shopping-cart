import React from "react";

import * as S from "./subHeader.style";

export interface SubHeaderProps {
  children: string;
  textAlign?: "left" | "center" | "right";
  className?: string;
}

export default function SubHeader({ children, textAlign = "center", className }: SubHeaderProps) {
  return (
    <S.SubHeaderContainer className={className} textAlign={textAlign}>
      {children}
    </S.SubHeaderContainer>
  );
}
