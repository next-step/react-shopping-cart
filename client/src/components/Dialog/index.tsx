import { MouseEventHandler, PropsWithChildren, useEffect } from 'react';
import { css } from '@emotion/css';

import { Portal } from 'components';

import { colors } from 'constants/colors';

const dialogWidth = {
  small: '296px',
  medium: '320px',
  large: '480px',
  xlarge: '640px',
} as const;

const dialogHeight = {
  small: '480px',
  large: '640px',
  auto: 'auto',
} as const;

type DialogWidth = keyof typeof dialogWidth;
type DialogHeight = keyof typeof dialogHeight;

export interface DialogProps {
  onClose: () => void;
  width?: DialogWidth;
  height?: DialogHeight;
}

function Dialog({
  children,
  onClose,
  width: widthProp = 'large',
  height: heightProp = 'auto',
}: PropsWithChildren<DialogProps>) {
  const width = dialogWidth[widthProp];
  const height = dialogHeight[heightProp];

  const handleClickBackdrop: MouseEventHandler<HTMLDivElement> = (e) => {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Portal>
      <div
        onClick={handleClickBackdrop}
        className={css`
          position: fixed;
          inset: 0;
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            min-width: 296px;
            max-width: calc(100vw - 64px);
            max-height: calc(100vh - 64px);
            border-radius: 12px;
            background-color: ${colors.white};
            height: ${height};
            width: ${width};
          `}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Dialog;
