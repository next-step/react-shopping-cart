import { css, cva, cx } from '@/styled-system/css';
import { ChangeEventHandler, PropsWithChildren } from 'react';

type CheckBoxProps = PropsWithChildren<{
  colorScheme?: 'blue' | 'green';
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}>;

export default function CheckBox({
  isChecked = false,
  onChange,
  colorScheme,
  children,
}: CheckBoxProps) {
  return (
    <label className={checkBoxContainer}>
      <input
        className={cx(checkBox({ colorScheme }))}
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
      />
      {children && <span className={checkBoxLabel}>{children}</span>}
    </label>
  );
}

const checkBoxContainer = css({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'white',
});

const checkBox = cva({
  base: {
    appearance: 'none',
    width: '18px',
    height: '18px',
    border: '1px solid #ccc',
    outline: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease-in-out',

    '&:checked': {
      borderColor: 'gray',
      backgroundColor: 'gray',
    },

    '& + span': {
      marginLeft: '8px',
    },

    '&:checked::after': {
      content: '""',
      display: 'block',
      width: '5px',
      height: '10px',
      border: 'solid white',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
      marginLeft: '6px',
      marginTop: '2px',
    },
  },
  variants: {
    colorScheme: {
      blue: {
        '&:checked': {
          borderColor: 'blue.500',
          backgroundColor: 'blue.500',
        },
      },
      green: {
        '&:checked': {
          borderColor: 'green.500',
          backgroundColor: 'green.500',
        },
      },
    },
  },
  defaultVariants: {
    colorScheme: 'blue',
  },
});

const checkBoxLabel = css({
  fontSize: '14px',
  lineHeight: '1',
  userSelect: 'none',
});
