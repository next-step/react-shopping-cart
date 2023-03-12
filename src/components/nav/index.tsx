import { Icon } from "common/ui";
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
        <Icon src="assets/svgs/cart.svg" size={'big'} alt="장바구니"/>
        <NavTitle>NEXTSTEP</NavTitle>
      </NavTitleBox>
      <NavButtonBox>
        <NavButton>장바구니</NavButton>
        <NavButton>주문목록</NavButton>
      </NavButtonBox>
    </NavBox>
  );
};

export default Nav;
