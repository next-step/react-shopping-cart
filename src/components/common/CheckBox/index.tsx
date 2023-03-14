import React, { InputHTMLAttributes } from "react";

import * as S from "./checkbox.style";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isChecked?: boolean;
  width?: string;
}

export default function CheckBox({ label, isChecked, ...props }: CheckBoxProps) {
  return (
    <S.CheckBoxContainer>
      <S.CheckBox type="checkbox" {...props} checked={isChecked} />
      {label && <S.CheckBoxLabel>{label}</S.CheckBoxLabel>}
    </S.CheckBoxContainer>
  );
}
