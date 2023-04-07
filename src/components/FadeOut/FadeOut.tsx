import React, { PropsWithChildren, useEffect, useState } from 'react';

import { millisecondToSecondUnit, second } from '@/utils/time';

import { StyledFadeOut } from './FadeOut.styled';

interface FadeOutProps {
  fadeOutDuration?: number;
  fadeOutDelay?: number;
  onDisappear?: () => void;
  className?: string;
}

export function FadeOut({
  fadeOutDelay = second(1),
  fadeOutDuration = second(0.5),
  onDisappear,
  className,
  children,
}: PropsWithChildren<FadeOutProps>) {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        onDisappear?.();
        setIsShow(false);
      }, fadeOutDelay + fadeOutDuration);
    }
  }, [isShow, onDisappear, fadeOutDelay, fadeOutDuration]);

  if (!isShow) return null;

  return (
    <StyledFadeOut
      css={{
        animationDuration: millisecondToSecondUnit(fadeOutDuration),
        animationDelay: millisecondToSecondUnit(fadeOutDelay),
      }}
      className={className}
    >
      {children}
    </StyledFadeOut>
  );
}
