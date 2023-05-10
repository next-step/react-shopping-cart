import React from "react";
import ProductsControllers from "./ProductsControllers";
import CartTitle from "./CartTitle";
import CartProductContainer from "./CartProductContainer.tsx";
import Divider from "../../../common/Divider/Divider";
import { useAppSelector } from "../../../../hooks/storeHooks";
import type { Product } from "../../../../store/cartSlice";

export type Props = {
  product: Product[];
};

const CartItemsSection = ({ product }: Props) => {
  const globalCart = useAppSelector((state) => state.cart.products);

  return (
    <section className="cart-left-section">
      <ProductsControllers />
      <CartTitle />
      {globalCart.map((product) => {
        return (
          <div key={product.id}>
            <CartProductContainer product={product} />
            <Divider />
          </div>
        );
      })}
    </section>
  );
};

export default CartItemsSection;
