import { CSSProperties, ReactNode } from 'react';
import { css, cx } from '@emotion/css';

import LoadingIcon from 'components/LoadingIcon';
import { CombineElementProps } from 'types/utils';

import { ButtonSize, ButtonType } from './types';
import { buttonColors } from './constant';
import { getButtonSizeStyles } from './helper';

interface ButtonBaseProps {
  type?: ButtonType;
  size?: ButtonSize;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  loading?: boolean;
  justify?: CSSProperties['justifyContent'];
}

export interface ButtonProps extends CombineElementProps<'button', ButtonBaseProps> {}

function Button({
  type = 'default',
  size = 'medium',
  leftComponent,
  rightComponent,
  disabled,
  loading,
  justify,
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonColor = buttonColors[type][disabled ? 'disabled' : 'fill'];

  const backgroundColor = buttonColor.background;
  const borderColor = buttonColor.border;
  const fontColor = buttonColor.text;

  const notAllowedClick = disabled || loading;
  const cursor = notAllowedClick ? 'not-allowed' : 'pointer';
  const opacity = loading ? 0.4 : 1;

  const hasLeftComponent = loading === true || leftComponent != null;
  const hasRightComponent = rightComponent != null;

  const { padding, fontSize, height } = getButtonSizeStyles({
    size,
    hasLeftComponent,
    hasRightComponent,
  });

  const defaultJustify = getDefaultJustify(leftComponent, rightComponent);

  return (
    <button
      className={cx(
        css`
          height: ${height}px;
          border-radius: 4px;
          cursor: ${cursor};
          padding: 0 ${padding.right}px 0 ${padding.left}px;
          background-color: ${backgroundColor};
          border: 1px solid;
          border-color: ${borderColor};
          box-sizing: border-box;
          &:hover {
            opacity: ${notAllowedClick ? opacity : 0.75};
          }
          &:active {
            transform: scale(${notAllowedClick ? 1 : 0.98});
          }
        `,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      <div
        className={css`
          display: flex;
          gap: 6px;
          justify-content: ${defaultJustify};
          align-items: center;
        `}
      >
        {hasLeftComponent && (
          <div
            className={css`
              display: flex;
              align-items: center;
              color: ${fontColor};
              svg {
                color: ${fontColor};
              }
            `}
          >
            {loading === true ? <LoadingIcon color={fontColor} width={fontSize} /> : leftComponent}
          </div>
        )}
        <div
          className={css`
            width: 100%;
            font-size: ${fontSize}px;
            white-space: nowrap;
            color: ${fontColor};
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          {children}
        </div>
        {hasRightComponent && (
          <div
            className={css`
              display: flex;
              align-items: center;
              color: ${fontColor};
              svg {
                color: ${fontColor};
              }
            `}
          >
            {rightComponent}
          </div>
        )}
      </div>
    </button>
  );
}

const getDefaultJustify = (leftComponent?: ReactNode, rightComponent?: ReactNode) => {
  if (leftComponent != null && rightComponent != null) {
    return 'space-between';
  }
  return 'center';
};

export default Button;
