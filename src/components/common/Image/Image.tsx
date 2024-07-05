import { cva, cx } from '@/styled-system/css';
import { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: 'sm' | 'md' | 'lg' | 'full';
  variant?: 'icon' | 'outline';
};

export default function Image({
  size = 'md',
  variant,
  className,
  ...props
}: ImageProps) {
  return <img className={cx(image({ size, variant }), className)} {...props} />;
}
const image = cva({
  base: {
    objectFit: 'cover',
  },
  variants: {
    size: {
      sm: {
        width: {
          base: '80px',
          sm: '120px',
        },
        height: {
          base: '80px',
          sm: '120px',
        },
      },
      md: {
        width: {
          base: '80px',
          sm: '120px',
        },
        height: {
          base: '80px',
          sm: '120px',
        },
      },
      lg: {
        width: {
          base: '80px',
          sm: '120px',
        },
        height: {
          base: '80px',
          sm: '120px',
        },
      },
      full: {
        width: '100%',
      },
    },
    variant: {
      outline: {
        outline: '1px solid #d1d1d1',
      },
      icon: {
        width: '24px',
        height: '24px',
      },
    },
  },
});
