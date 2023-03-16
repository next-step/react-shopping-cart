import { memo, PropsWithChildren, useCallback } from 'react';

interface IFlex {
  type?: string;
  onClick?: () => void;
}

function Flex({ children, type = '', onClick }: PropsWithChildren<IFlex>) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, []);

  return (
    <div className={`flex ${type}`} onClick={handleClick}>
      {children}
    </div>
  );
}

export default memo(Flex);
