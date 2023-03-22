import React, { PropsWithChildren } from 'react';

import { StyledTitle } from './TitleLayout.styled';

interface TitleLayoutProps {
  title: string;
}

export function TitleLayout({ title, children }: PropsWithChildren<TitleLayoutProps>) {
  return (
    <>
      <StyledTitle>
        <h2 className="cart-section__title">{title}</h2>
      </StyledTitle>

      {children}
    </>
  );
}
