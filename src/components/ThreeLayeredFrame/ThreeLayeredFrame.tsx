import React, { PropsWithChildren, ReactElement } from 'react';
import type { CSS } from '@stitches/react';

import {
  StyledTitleSection,
  StyledBodySection,
  StyledBottomSection,
  StyledThreeLayeredFrame,
  StyledHR,
} from './ThreeLayeredFrame.styled';

type PossibleReactElement = ReactElement[] | ReactElement | string;

interface ThreeLayeredFrameProps {
  titleSection: PossibleReactElement;
  bodySection: PossibleReactElement;
  bottomSection?: PossibleReactElement;
  padding?: string;
  css?: CSS;
  className?: string;
  dividerCss?: CSS;
}

export function ThreeLayeredFrame({
  titleSection,
  bodySection,
  bottomSection,
  padding,
  css,
  className,
  dividerCss,
}: PropsWithChildren<ThreeLayeredFrameProps>) {
  return (
    <StyledThreeLayeredFrame className={className} css={css}>
      <StyledTitleSection css={{ paddingLeft: padding, paddingRight: padding }}>{titleSection}</StyledTitleSection>
      <StyledHR css={dividerCss} />
      <StyledBodySection css={{ paddingLeft: padding, paddingRight: padding }}>{bodySection}</StyledBodySection>
      {bottomSection && (
        <StyledBottomSection css={{ paddingLeft: padding, paddingRight: padding, paddingBottom: padding }}>
          {bottomSection}
        </StyledBottomSection>
      )}
    </StyledThreeLayeredFrame>
  );
}
