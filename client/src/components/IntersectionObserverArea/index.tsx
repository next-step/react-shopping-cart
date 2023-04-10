import { PropsWithChildren } from 'react';

import useIntersectionObserverRef from './useIntersectionObserverRef';

interface IntersectionObserverAreaProps {
  onIntersect: () => void;
  rootMargin?: string;
  threshold?: number;
}

function IntersectionObserverArea({
  children,
  onIntersect: onIntersectProp,
  rootMargin,
  threshold = 0,
}: PropsWithChildren<IntersectionObserverAreaProps>) {
  const ref = useIntersectionObserverRef({
    onIntersect: (entry, observer) => {
      observer.observe(entry.target);

      onIntersectProp();
    },
    options: { rootMargin, threshold },
  });

  return <div ref={ref}>{children}</div>;
}

export default IntersectionObserverArea;
