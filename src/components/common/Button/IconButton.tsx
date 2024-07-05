import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { css, cva, cx } from '@/styled-system/css';

type IconButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type IconButtonColorScheme = 'blue' | 'gray';

type IconButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  variant?: IconButtonVariant;
  colorScheme?: IconButtonColorScheme;
  icon: ReactNode;
};

export default function IconButton({
  variant = 'solid',
  colorScheme = 'blue',
  icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cx(iconButton({ variant, colorScheme }), className)}
      {...props}
    >
      <span className={cx(iconClassName)}>{icon}</span>
    </button>
  );
}

const iconButton = cva({
  base: {
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
    padding: '0',
    borderRadius: 'md',
    cursor: 'pointer',
    transition: 'all 0.2s',
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      solid: {},
      outline: {},
      ghost: {},
      link: {},
    },
    colorScheme: {
      blue: {},
      gray: {},
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      colorScheme: 'blue',
      css: {
        color: 'white',
        backgroundColor: 'blue.400',
      },
    },
    {
      variant: 'solid',
      colorScheme: 'gray',
      css: {
        color: 'white',
        backgroundColor: 'gray.300',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'blue',
      css: {
        color: 'blue.200',
        outlineWidth: '1px',
        outlineStyle: 'solid',
        outlineColor: 'blue.200',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'gray',
      css: {
        color: 'gray.400',
        outlineWidth: '1px',
        outlineStyle: 'solid',
        outlineColor: 'gray.500',
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'blue',
      css: {
        color: 'blue.200',
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'gray',
      css: {
        color: 'gray.500',
      },
    },
    {
      variant: 'link',
      colorScheme: 'blue',
      css: {
        color: 'blue.200',
      },
    },
    {
      variant: 'link',
      colorScheme: 'gray',
      css: {
        color: 'gray.500',
      },
    },
  ],
});

const iconClassName = css({
  display: 'flex',
  alignItems: 'center',
});
