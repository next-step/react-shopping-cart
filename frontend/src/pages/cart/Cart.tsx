import Header from "../../components/header/Header";
import CartList from "./components/CartList";
import LeftSection from "./components/LeftSection";
import Flex from "../../components/flex/Flex";
import Section from "../../components/section/Section";
import useCartListQuery from "../../hooks/useCartListQuery";
import RightSection from "./components/RightSection";

import { useCart } from "./hooks/useCart";
import { MouseEvent, useState } from "react";

export const OPERATOR = {
  PLUS: "PLUS",
  MINUS: "MINUS",
} as const;

const Cart = () => {
  const { data } = useCartListQuery();
  const { totalPrice, handleTotalPrice, totalCount, handleTotalCount } =
    useCart();

  const [allChecked, setAllChecked] = useState(false);
  const handleAllChecked = (e: MouseEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    setAllChecked(checked);
  };

  return (
    <Section type="cart">
      <Header>
        <h2 className="cart-section__title">장바구니</h2>
      </Header>
      <Flex>
        <LeftSection
          checked={allChecked}
          productNum={data?.length}
          handleAllChecked={handleAllChecked}
        >
          {data.map(({ id, product }) => (
            <CartList
              key={id}
              product={product}
              checked={allChecked}
              handleTotalPrice={handleTotalPrice}
              handleTotalCount={handleTotalCount}
            />
          ))}
        </LeftSection>
        <RightSection totalCount={totalCount} price={totalPrice} />
      </Flex>
    </Section>
  );
};

export default Cart;
