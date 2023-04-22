import { useEffect, useState } from "react";
import CartProductsList from "../../components/CartProductsList";
import ExpectedOrderPriceContainer from "../../components/ExpectedOrderPriceContainer";

export default function Cart() {
  const [carts, setCarts] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      });
  }, []);

  // function getTotalPrice() {
  //   let totalPrice = 0;
  //   totalPrice += carts.map((item, idx) => {
  //     console.log(item);
  //     return item.product.price;
  //   });
  //   console.log(totalPrice);

  //   return totalPrice;
  // }

  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>
      <div className="flex">
        <section className="cart-left-section">
          <CartProductsList carts={carts} />
        </section>
        <section className="cart-right-section">
          <ExpectedOrderPriceContainer
            // totalPrice={() => getTotalPrice()}
            totalLength={carts.length}
          />
        </section>
      </div>
    </section>
  );
}
