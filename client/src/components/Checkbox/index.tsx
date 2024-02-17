import { useId } from 'react';
import { css, cx } from '@emotion/css';

import { CombineElementProps } from 'types/utils';
import { colors } from 'constants/colors';

const checkboxSizes = {
  large: {
    width: 28,
    height: 28,
    fontSize: 16,
  },
  medium: {
    width: 24,
    height: 24,
    fontSize: 14,
  },
  small: {
    width: 20,
    height: 20,
    fontSize: 14,
  },
};

interface CheckboxBaseProps {
  size?: keyof typeof checkboxSizes;
}

export interface CheckboxProps extends CombineElementProps<'input', CheckboxBaseProps> {}

function Checkbox({ children, size = 'medium', disabled, ...props }: CheckboxProps) {
  const { width, height, fontSize } = checkboxSizes[size];

  const id = useId();
  const cursor = disabled ? 'not-allowed' : 'pointer';
  const color = disabled ? colors.gray500 : colors.black;
  const borderColor = disabled ? colors.gray500 : colors.green600;

  return (
    <div className="checkbox-container">
      <input
        {...props}
        id={id}
        disabled={disabled}
        className={cx(
          'checkbox',
          css`
            width: ${width}px;
            height: ${height}px;
            border-color: ${borderColor} !important;
            cursor: ${cursor};
            &:checked {
              background-color: ${borderColor};
            }
            &:active {
              transform: scale(${disabled ? 1 : 0.95});
            }
            &:hover {
              opacity: ${disabled ? 0.4 : 0.75};
            }
          `
        )}
        type="checkbox"
      />
      <label
        className={cx(
          'checkbox-label',
          css`
            font-size: ${fontSize}px;
            cursor: ${cursor};
            color: ${color};
            &:hover {
              opacity: ${disabled ? 0.4 : 0.75};
            }
          `
        )}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
