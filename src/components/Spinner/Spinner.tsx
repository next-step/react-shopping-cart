import React from 'react';

import { StyledSpinner } from './Spinner.styled';

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return <StyledSpinner className={className} />;
}
