import { GridProps } from '@/components/common/Grid/Grid.types';

import * as Styled from './Grid.styled';

export default function Grid({ as = 'div', children, ...attributes }: GridProps) {
  return (
    <Styled.Grid as={as} {...attributes}>
      {children}
    </Styled.Grid>
  );
}
