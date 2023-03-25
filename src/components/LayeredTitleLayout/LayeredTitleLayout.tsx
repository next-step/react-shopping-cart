import React, { PropsWithChildren, ReactElement } from 'react';

import { LayeredWrapper } from '../LayeredWrapper';
import { StyledTitle } from './LayeredTitleLayout.styled';

interface LayeredTitleLayoutProps {
  title: ReactElement | string;
}

export function LayeredTitleLayout({ title, children }: PropsWithChildren<LayeredTitleLayoutProps>) {
  return (
    <LayeredWrapper outer={{ as: 'section' }}>
      <StyledTitle>
        <h2 className="cart-section__title">{title}</h2>
      </StyledTitle>

      {children}
    </LayeredWrapper>
  );
}
