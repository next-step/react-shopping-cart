import { useRef, useCallback, useEffect } from 'react';

type IntersectionObserverHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

export function useIntersectionObserver<T extends HTMLElement>(
  onIntersect: IntersectionObserverHandler,
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
}
