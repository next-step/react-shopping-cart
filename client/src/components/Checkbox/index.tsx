import { css, cx } from '@emotion/css';
import { useId } from 'react';

import { checkboxSizes } from './constant';
import { CombineElementProps } from 'types/utils';
import { colors } from 'constants/colors';

interface CheckboxBaseProps {
  size?: 'large' | 'medium' | 'small';
}

export interface CheckboxProps extends CombineElementProps<'input', CheckboxBaseProps> {}

function Checkbox({ children, size = 'medium', ...props }: CheckboxProps) {
  const { width, height, fontSize } = checkboxSizes[size];

  const id = useId();

  return (
    <div className="checkbox-container">
      <input
        {...props}
        id={id}
        className={cx(
          'checkbox',
          css`
            width: ${width}px;
            height: ${height}px;
            border-color: ${colors.green600};
            &:checked {
              background-color: ${colors.green600};
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
