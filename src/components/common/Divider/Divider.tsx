import { HTMLProps } from 'react';
import { cva, cx } from '@/styled-system/css';

export type DividerProps = HTMLProps<HTMLHRElement> & {
  color?: 'gray' | 'lightGray';
};

export default function Divider({ className, color = 'gray' }: DividerProps) {
  return (
    <hr
      className={cx(
        divider({
          color,
        }),
        className
      )}
    />
  );
}

const divider = cva({
  base: {
    width: '100%',
    marginY: '10px',
    border: '1px solid',
  },
  variants: {
    color: {
      gray: {
        borderColor: 'gray.400',
      },
      lightGray: {
        borderColor: 'gray.200',
      },
    },
  },
});
