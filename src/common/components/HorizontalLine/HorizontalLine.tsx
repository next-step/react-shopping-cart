import type { HorizontalLineProps } from './HorizontalLine.types';
import * as Styled from './HorizontalLine.styled';

const HorizontalLine = ({ children, ...attributes }: HorizontalLineProps) => {
  return (
    <Styled.HorizontalLine {...attributes} role="banner">
      {children}
    </Styled.HorizontalLine>
  );
};

export default HorizontalLine;
