import type { BoxProps } from './Box.types';
import * as Styled from './Box.styles';

const Box = ({ as = 'div', children, ...attributes }: BoxProps) => {
  return (
    <Styled.Box as={as} {...attributes}>
      {children}
    </Styled.Box>
  );
};

export default Box;
