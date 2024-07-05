import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import Skeleton from 'react-loading-skeleton';

export const ProductItemSkeleton = () => (
  <div className={flex({ flexDirection: 'column', gap: '10px' })}>
    <Skeleton count={1} className={css({ height: '335px' })} />
    <Skeleton count={2} className={css({ height: '45px' })} />
  </div>
);
