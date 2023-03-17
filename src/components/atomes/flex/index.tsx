import { memo, PropsWithChildren, useCallback } from 'react';

interface IFlex {
  className?: string;
  onClick?: () => void;
}

function Flex({ children, className = '', onClick }: PropsWithChildren<IFlex>) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, []);

  return (
    <div className={`flex ${className}`} onClick={handleClick}>
      {children}
    </div>
  );
}

export default memo(Flex);
