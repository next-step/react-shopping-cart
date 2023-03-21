import React, { ComponentType, PropsWithChildren } from 'react';
import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';

import { CSS } from '@stitches/react';

import { StyledInnerLayer, StyledOuterLayer } from './LayeredWrapper.styled';

interface LayeredWrapperProps {
  outer: {
    as?: IntrinsicElementsKeys | ComponentType<any>;
    css?: CSS;
    className?: string;
  };
  inner?: {
    as?: IntrinsicElementsKeys | ComponentType<any>;
    css?: CSS;
    className?: string;
  };
}

export function LayeredWrapper({ outer, inner, children }: PropsWithChildren<LayeredWrapperProps>) {
  return (
    <StyledOuterLayer as={outer?.as} css={outer?.css} className={outer?.className}>
      <StyledInnerLayer as={inner?.as} css={inner?.css} className={inner?.className}>
        {children}
      </StyledInnerLayer>
    </StyledOuterLayer>
  );
}
