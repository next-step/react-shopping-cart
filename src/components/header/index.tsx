import { useRouter } from "hooks/useRouter";
import {
  GlobalNavButton,
  GlobalNavButtonBox,
  GlobalNavTitle,
  HeaderWrapper,
} from "./style";

const Header = () => {
  const { go } = useRouter();
  
  return (
    <HeaderWrapper>
      <GlobalNavTitle>
        React Clean Code Shopping Cart CSS example
      </GlobalNavTitle>
      <br />
      <GlobalNavButtonBox>
        <GlobalNavButton onClick={() => go("/")}>홈으로</GlobalNavButton>
        <GlobalNavButton onClick={() => go("/list")}>상품 목록</GlobalNavButton>
        <GlobalNavButton onClick={() => go("/detail")}>상품 상세</GlobalNavButton>
        <GlobalNavButton onClick={() => go("/cart")}>장바구니</GlobalNavButton>
        <GlobalNavButton onClick={() => go("/order")}>주문/결제</GlobalNavButton>
        <GlobalNavButton onClick={() => go("/orderList")}>주문 목록</GlobalNavButton>
        <GlobalNavButton onClick={() => go("/orderDetail")}>주문 상세</GlobalNavButton>
      </GlobalNavButtonBox>
    </HeaderWrapper>
  );
};

export default Header;
