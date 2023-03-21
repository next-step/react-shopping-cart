import React, { ComponentType, PropsWithChildren } from 'react';
import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';

import { CSS } from '@stitches/react';

import { StyledInnerLayer, StyledOuterLayer } from './LayeredWrapper.styled';

interface LayeredWrapperProps {
  css?: CSS;
  as?: IntrinsicElementsKeys | ComponentType<any>;
  outerClassName?: string;
  innerClassName?: string;
}

export function LayeredWrapper({
  as,
  css,
  outerClassName,
  innerClassName,
  children,
}: PropsWithChildren<LayeredWrapperProps>) {
  return (
    <StyledOuterLayer className={outerClassName}>
      <StyledInnerLayer as={as} css={css} className={innerClassName}>
        {children}
      </StyledInnerLayer>
    </StyledOuterLayer>
  );
}
