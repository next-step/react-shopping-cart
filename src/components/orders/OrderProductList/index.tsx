import React from "react";

import type { Order } from "@/api/orders";

import OrderProduct from "../OrderProduct";
import * as S from "./orderProductList.style";

export interface OrderProductListProps {
  orderInfo: Order;
}

export default function OrderProductList({ orderInfo }: OrderProductListProps) {
  const { id, orderDetails } = orderInfo;

  return (
    <S.OrderProductContainer>
      <S.OrderProductListHeader>
        <span>주문 번호: {id}</span>
        <S.ShowDetailButton variant="text">상세보기 &gt;</S.ShowDetailButton>
      </S.OrderProductListHeader>

      {orderDetails.map((orderedProduct) => (
        <OrderProduct key={orderedProduct.id} css={S.orderProductStyle} orderedProductInfo={orderedProduct} />
      ))}
    </S.OrderProductContainer>
  );
}
