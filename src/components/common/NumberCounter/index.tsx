import React, { InputHTMLAttributes, MouseEvent } from "react";

import * as S from "./numberCounter.style";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onIncrease: (e: MouseEvent) => void;
  onDecrease: (e: MouseEvent) => void;
}

export default function NumberInput({ className, onIncrease, onDecrease, ...props }: NumberInputProps) {
  return (
    <S.NumberInputContainer className={className}>
      <S.NumberInput type="number" {...props} disabled />
      <S.QuantityControlWrapper>
        <S.QuantityControlButton variant="text" onClick={onIncrease}>
          +
        </S.QuantityControlButton>
        <S.QuantityControlButton variant="text" onClick={onDecrease}>
          -
        </S.QuantityControlButton>
      </S.QuantityControlWrapper>
    </S.NumberInputContainer>
  );
}
