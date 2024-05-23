import Title from "../components/ui/Title";
import CartList from "../components/cart-list/CartList";
import CartSection from "../components/cart-list/CartSection";

import useCartListQuery from "../quires/useCartListQuery";

export default function CartPage() {
  const { data } = useCartListQuery();

  if (!data) {
    return null;
  }

  return (
    <section className="cart-section">
      <Title variant="cart" text="장바구니" />
      <div className="flex">
        <CartList carts={data} />
        <CartSection />
      </div>
    </section>
  );
}
