import React, { PropsWithChildren, useMemo } from 'react';

import { Spinner } from '@/components';

import { StyledLoaderWrapper } from './Loader.styled';

interface LoaderProps {
  showLoader: boolean;
  className?: string;
}

export function Loader({ showLoader, className, children }: PropsWithChildren<LoaderProps>) {
  const loaderContent = useMemo(() => {
    if (showLoader) return <Spinner />;

    return children;
  }, [showLoader, children]);

  return <StyledLoaderWrapper className={className}>{loaderContent}</StyledLoaderWrapper>;
}
