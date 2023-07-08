import React, { useEffect, useState } from "react";
import { SectionHeader } from "../../components/SectionHeader";
import EstimatedPaymentSide from "../../components/EstimatedPaymentSide/EstimatedPaymentSide";
import { CartItems } from "../../components/CartItems";
import { useCart, useCartItemHandlers } from "../../hooks";
import { useNavigate } from "react-router-dom";
import useCheckoutMutations from "../../mutations/useCheckoutMutations";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "../../queries/useOrdersQuery";

function Checkout() {
  const queryClient = useQueryClient();
  const [errorMessage, setError] = useState<string | null>(null);

  useEffect(() => {
    if (checkedItems.length === 0) {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();

  const {
    values: { checkedItems, estimatedPrice },
  } = useCart();
  const { cartItemHandlers } = useCartItemHandlers({ setError });
  const { checkoutItems } = useCheckoutMutations({ setError });

  const goCheckout = async () => {
    if (!confirm("구입을 진행하시겠습니까?")) {
      return;
    }
    checkoutItems.mutate(checkedItems);
    await queryClient.invalidateQueries({ queryKey: QUERY_KEY });

    navigate("/orders");
  };

  return (
    <section className="cart-section">
      {errorMessage && <div>{errorMessage}</div>}
      <SectionHeader title="주문/결제" />
      <div className="flex">
        <section className="cart-left-section">
          <CartItems items={checkedItems} handlers={cartItemHandlers} />
        </section>
        <section className="cart-right-section">
          <EstimatedPaymentSide
            title="결제 금액"
            subtitle="총 결제금액"
            label={`${estimatedPrice.toLocaleString()}원 결제하기`}
            estimatedPrice={estimatedPrice}
            onClick={goCheckout}
          />
        </section>
      </div>
    </section>
  );
}

export default Checkout;
