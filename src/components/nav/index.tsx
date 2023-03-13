import { Icon } from "common/ui";
import {
  NavBox,
  NavButton,
  NavButtonBox,
  NavTitle,
  NavTitleBox,
} from "./style";

import cartPng from "assets/png/white_cart.png"
import { useRouter } from "hooks/useRouter";
import { ROUTE } from "router";

const Nav = () => {

  const { go } = useRouter();
  return (
    <NavBox>
      <NavTitleBox onClick={() => go(ROUTE.PRODUCT_LIST)}>
        <Icon src={cartPng} size={'big'} alt="장바구니"/>
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
