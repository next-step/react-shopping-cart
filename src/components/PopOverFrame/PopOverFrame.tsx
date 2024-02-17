import React, { PropsWithChildren, useCallback, useEffect, useState, ReactElement, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { debounce } from 'lodash-es';

import { FadeOut } from '@/components';
import { second } from '@/utils/time';

import { StyledPopOverFrameWrapper, StyledPopOverElement } from './PopOverFrame.styled';

interface PopOverFrameProps {
  onClickElement: ReactElement;
  onMouseOverElement?: ReactElement;
  className?: string;
  popOverClassName?: string;
  fadeOutDuration?: number;
  fadeOutDelay?: number;
}

export function PopOverFrame({
  onClickElement,
  onMouseOverElement,
  className,
  popOverClassName,
  fadeOutDelay = second(1),
  fadeOutDuration = second(0.5),
  children,
}: PropsWithChildren<PopOverFrameProps>) {
  const [isHover, setIsHover] = useState(false);
  const [clickPopOverElements, setClickPopOverElements] = useState<Map<string, ReactElement>>(new Map());

  const handleWrapperMouseOver = useCallback(() => {
    if (clickPopOverElements.size <= 0) setIsHover(true);
  }, [clickPopOverElements]);

  const handleWrapperMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const handleWrapperClick = useCallback(() => {
    setIsHover(false);

    const elementId = uuid();

    const newClickElement = (
      <FadeOut fadeOutDuration={fadeOutDuration} fadeOutDelay={fadeOutDelay}>
        {onClickElement}
      </FadeOut>
    );

    setClickPopOverElements((prev) => {
      prev.set(elementId, newClickElement);
      return new Map(prev);
    });
  }, [fadeOutDuration, fadeOutDelay, onClickElement]);

  const clearStates = useMemo(() => {
    return debounce(() => {
      setClickPopOverElements(new Map());
    }, fadeOutDuration + fadeOutDelay + second(1));
  }, [fadeOutDuration, fadeOutDelay]);

  useEffect(() => {
    if (clickPopOverElements.size > 0) {
      clearStates();
    }
  }, [clickPopOverElements, clearStates]);

  return (
    <StyledPopOverFrameWrapper
      onMouseOver={handleWrapperMouseOver}
      onMouseLeave={handleWrapperMouseLeave}
      onClick={handleWrapperClick}
      className={className}
    >
      {isHover && <StyledPopOverElement className={popOverClassName}>{onMouseOverElement}</StyledPopOverElement>}

      {Array.from(clickPopOverElements.values()).map((clickPopOver) => (
        <StyledPopOverElement className={popOverClassName}>{clickPopOver}</StyledPopOverElement>
      ))}

      {children}
    </StyledPopOverFrameWrapper>
  );
}
