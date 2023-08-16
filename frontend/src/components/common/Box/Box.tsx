import { CSSProperties, ElementType, HTMLAttributes, memo } from 'react';

import * as Styled from './Box.styled';

export type BoxProps = {
  as?: ElementType;
  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
  gap?: CSSProperties['gap'];
} & HTMLAttributes<HTMLDivElement>;

const Box = memo(({ as = 'div', children, ...attributes }: BoxProps) => {
  return (
    <Styled.Box as={as} {...attributes}>
      {children}
    </Styled.Box>
  );
});

Box.displayName = 'Box';

export default Box;
