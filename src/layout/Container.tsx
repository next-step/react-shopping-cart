import { css } from '@/styled-system/css';
import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: '375px',
        height: 'auto',
      })}
    >
      {children}
    </div>
  );
}
