import type { ImageProps } from './Image.types';
import * as Styled from './Image.styled';

const Image = ({ children, ...attributes }: ImageProps) => {
  return <Styled.Image {...attributes}>{children}</Styled.Image>;
};
export default Image;
