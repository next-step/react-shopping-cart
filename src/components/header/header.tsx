import {
  GlobalNavButton,
  GlobalNavButtonBox,
  GlobalNavTitle,
  HeaderWrapper,
} from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <GlobalNavTitle>
        React Clean Code Shopping Cart CSS example
      </GlobalNavTitle>
      <br />
      <GlobalNavButtonBox>
        <GlobalNavButton href="./index.html">홈으로</GlobalNavButton>
        <GlobalNavButton href="./list.html">상품 목록</GlobalNavButton>
        <GlobalNavButton href="./detail.html">상품 상세</GlobalNavButton>
        <GlobalNavButton href="./cart.html">장바구니</GlobalNavButton>
        <GlobalNavButton href="./order.html">주문/결제</GlobalNavButton>
        <GlobalNavButton href="./orderList.html">주문 목록</GlobalNavButton>
        <GlobalNavButton href="./orderDetail.html">주문 상세</GlobalNavButton>
      </GlobalNavButtonBox>
    </HeaderWrapper>
  );
};

export default Header;
