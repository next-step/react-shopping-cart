import { Divider, HeaderContainer, HeaderTitle } from "./style";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <Divider />
    </HeaderContainer>
  );
};
