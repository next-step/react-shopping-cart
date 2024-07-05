import { HTMLProps, PropsWithChildren } from 'react';
import { cva, cx } from '@/styled-system/css';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonColorScheme = 'blue' | 'gray';

type ButtonProps = PropsWithChildren<HTMLProps<HTMLButtonElement>> & {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  type?: 'button' | 'submit';
};

export default function Button({
  children,
  type = 'button',
  variant = 'solid',
  colorScheme = 'blue',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(button({ variant, colorScheme }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export const button = cva({
  base: {
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
    padding: '10px 16px',
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
