import { memo, useCallback } from 'react';
import classNames from 'classnames';

export interface IButton {
  onClick?: () => void;
  small?: boolean;
  color?: string;
  text: string;
}

function Button({ onClick, small, color = '', text }: IButton) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, []);

  return (
    <button
      className={classNames('primary-button', {
        'primary-button--small': small === true,
        'gray': color === 'gray'
      })}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default memo(Button);
