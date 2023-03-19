import useIntersection from '@/hooks/useIntersection';
import { useState, useRef, useCallback } from 'react';

type Props = {
  src?: string;
  alt?: string;
  width: number;
  height: number;
};

const LazyImage = ({ src, alt, width, height }: Props) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(() => {
    setIsInView(true);
  }, [setIsInView]);

  useIntersection(ref, callback);

  return (
    <div
      className="flex justify-between animated-bg"
      ref={ref}
      style={{
        width,
        height,
      }}
    >
      {isInView && <img src={src} alt={alt} />}
    </div>
  );
};

export default LazyImage;
