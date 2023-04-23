import { Component, ErrorInfo, ReactNode } from 'react';

import DefaultFallback from './DefaultFallback';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * @see https://ko.reactjs.org/docs/error-boundaries.html
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <DefaultFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
