import { memo, PropsWithChildren, useCallback } from 'react';
import classNames from 'classnames';

export interface IFlex {
  className?: string;
  onClick?: () => void;
}

function Flex({ children, className = '', onClick }: PropsWithChildren<IFlex>) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, []);

  return (
    <div className={classNames('flex', className)} onClick={handleClick}>
      {children}
    </div>
  );
}

export default memo(Flex);
