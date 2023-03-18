import classNames from 'classnames';
import { memo } from 'react';

export interface IDivideLine {
  className?: string;
}

function DivideLine({ className = '' }: IDivideLine) {
  return (
    <hr className={classNames('divide-line-gray', className)}/>
  );
}

export default memo(DivideLine);
