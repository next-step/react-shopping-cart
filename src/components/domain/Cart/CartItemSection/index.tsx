import React, { useEffect, useState } from "react";
import ProductsControllers from "./ProductsControllers";
import CartTitle from "./CartTitle";
import CartProductContainer from "./CartProductContainer.tsx";
import Divider from "../../../common/Divider/Divider";
import { useFetchData } from "../../../../hooks/useFetchData";
import { Product } from "../../../../store/store";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { initialState } from "../../../../store/cartSlice";
import ProductsController from "./ProductsControllers";

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
