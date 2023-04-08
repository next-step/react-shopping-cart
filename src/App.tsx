import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Error } from '@/pages';
import { Router } from '@/router';

export function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Router />
    </ErrorBoundary>
  );
}
