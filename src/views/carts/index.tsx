import React, { useEffect, useMemo } from "react";

import type { Product } from "@/api/products";
import { CartProduct } from "@/components/carts";
import { PriceDashBoard } from "@/components/common";
import { useFetchCartProducts } from "@/hooks/api";
import { CartOrderContentLayout } from "@/layouts";

import * as S from "./carts.style";

export interface CartGroup extends Omit<Product, "id"> {
  id: number;
  productId: Product["id"];
  count: number;
}

export default function Carts() {
  const { cartProducts, fetchCartProducts } = useFetchCartProducts();

  const cartProductsGroup = useMemo(() => {
    return cartProducts.reduce((acc, { product }, index) => {
      const { id, ...restProductKey } = product;
      const curCartProductIndex = acc.findIndex((prevCartProduct) => prevCartProduct.productId === id);

      if (curCartProductIndex === -1) {
        return [...acc, { id: Date.now() + index, productId: id, ...restProductKey, count: 1 }];
      } else {
        const updatedProduct = { ...acc[curCartProductIndex], count: acc[curCartProductIndex].count + 1 };
        return [...acc.slice(0, curCartProductIndex), updatedProduct, ...acc.slice(curCartProductIndex + 1)];
      }
    }, [] as CartGroup[]);
  }, [cartProducts]);

  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <CartOrderContentLayout>
      <div>
        <S.CartProductDeleteButtonWrapper>
          <S.CartProductCheckBox width="20px" label="선택해제" />
          <S.CartProductDeleteButton variant="outlined">상품삭제</S.CartProductDeleteButton>
        </S.CartProductDeleteButtonWrapper>

        <S.CartSubHeader textAlign="left">든든배송 상품 (3개)</S.CartSubHeader>

        {cartProductsGroup.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            css={S.cartProductStyle}
            cartProductInfo={cartProduct}
            onIncreaseProductQuantity={() => console.log("increase")}
            onDecreaseProductQuantity={() => console.log("decrease")}
          />
        ))}
      </div>

      <div>
        <PriceDashBoard
          title="결제예상금액"
          priceTitle="결제예상금액"
          price={212121}
          buttonLabel="주문하기"
          onSubmit={() => console.log("order")}
        />
      </div>
    </CartOrderContentLayout>
  );
}
