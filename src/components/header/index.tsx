import { useRouter } from "hooks/useRouter";
import {
  GlobalNavButton,
  GlobalNavButtonBox,
  GlobalNavTitle,
  HeaderWrapper,
} from "./style";
import { ROUTE } from "router";

const Header = () => {
  const { go } = useRouter();
  
  return (
    <HeaderWrapper>
      <GlobalNavTitle>
        React Clean Code Shopping Cart CSS example
      </GlobalNavTitle>
      <br />
      <GlobalNavButtonBox>
        <GlobalNavButton onClick={() => go(ROUTE.HOME)}>홈으로</GlobalNavButton>
        <GlobalNavButton onClick={() => go(ROUTE.PRODUCT_LIST)}>상품 목록</GlobalNavButton>
        <GlobalNavButton onClick={() => go(ROUTE.PRODUCT_DETAIL)}>상품 상세</GlobalNavButton>
        <GlobalNavButton onClick={() => go(ROUTE.CART_LIST)}>장바구니</GlobalNavButton>
        <GlobalNavButton onClick={() => go(ROUTE.ORDER)}>주문/결제</GlobalNavButton>
        <GlobalNavButton onClick={() => go(ROUTE.ORDER_LIST)}>주문 목록</GlobalNavButton>
        <GlobalNavButton onClick={() => go(ROUTE.ORDER_DETAIL)}>주문 상세</GlobalNavButton>
      </GlobalNavButtonBox>
    </HeaderWrapper>
  );
};

export default Header;
