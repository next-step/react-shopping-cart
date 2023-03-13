import * as Styled from './Header.styles';
import type { HeaderProps } from './Header.types';

const Header = ({ children }: HeaderProps) => {
  return (
    <Styled.Layout>
      <Styled.Title>{children}</Styled.Title>
      <Styled.Horizontal />
    </Styled.Layout>
  );
};
export default Header;
