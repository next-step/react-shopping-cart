import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { Error } from '@/pages';
import { Router } from '@/router';

// 나누기
export function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Router />
    </ErrorBoundary>
  );
}
