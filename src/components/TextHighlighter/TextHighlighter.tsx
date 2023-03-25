import React, { PropsWithChildren } from 'react';
import { CSS } from '@stitches/react';

import { styled } from '@/stitches.config';

export const StyledSpan = styled('span', {
  textHightLight: '',
  height: 'fit-content',
});

interface TextHighlighterProps {
  css?: CSS;
}

export function TextHighlighter({ css, children }: PropsWithChildren<TextHighlighterProps>) {
  return <StyledSpan css={css}>{children}</StyledSpan>;
}
