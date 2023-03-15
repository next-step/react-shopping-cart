import { memo, PropsWithChildren, useCallback } from 'react';

export interface IButton {
  onClick?: () => void;
}

function Button({ children, onClick }: PropsWithChildren<IButton>) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, []);

  return (
    <button
      className="product-detail-button flex-center mt-20"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default memo(Button);
