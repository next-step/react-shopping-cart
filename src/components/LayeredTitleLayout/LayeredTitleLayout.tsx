import React, { PropsWithChildren } from 'react';

import { LayeredWrapper } from '../LayeredWrapper';
import { TitleLayout } from '../TitleLayout';

interface LayeredTitleLayoutProps {
  title: string;
}

export function LayeredTitleLayout({ title, children }: PropsWithChildren<LayeredTitleLayoutProps>) {
  return (
    <LayeredWrapper outer={{ as: 'section' }}>
      <TitleLayout title={title}>{children}</TitleLayout>
    </LayeredWrapper>
  );
}
