import { RefObject, useEffect, useState } from 'react';

const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  options: IntersectionObserverInit = {
    rootMargin: '0px',
    threshold: 0.15,
  }
): IntersectionObserverEntry | null => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      setIntersectionObserverEntry(null);
      observer.disconnect();
    };
  }, [ref.current, options.threshold, options.root, options.rootMargin]);

  return intersectionObserverEntry;
};

export default useIntersectionObserver;
