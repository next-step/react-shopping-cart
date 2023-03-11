import {
  NavBox,
  NavButton,
  NavButtonBox,
  NavTitle,
  NavTitleBox,
} from "./style";

const Nav = () => {
  return (
    <NavBox>
      <NavTitleBox>
        <NavTitle>CLEAN CODE SHOP</NavTitle>
      </NavTitleBox>
      <NavButtonBox>
        <NavButton>장바구니</NavButton>
        <NavButton>주문목록</NavButton>
      </NavButtonBox>
    </NavBox>
  );
};

export default Nav;
