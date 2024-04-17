import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useCarts as useCartsData } from "../../shared/queryHook/carts/carts.query";
import { Carts } from "../types";

function changeValue<T extends {}>(key: keyof T, value: unknown) {
  return function (obj: T) {
    obj[key] = value as T[keyof T];
    return obj;
  };
}

function isUnderArrayLength<T>(arr: T[], index: number) {
  return index < arr.length;
}

export default function useCarts() {
  const { data } = useCartsData();
  const [carts, setCarts] = useState<Carts>([]);

  function unCheckAll(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.checked) {
      const unCheckedThings = carts.map(changeValue("checked", false));
      setCarts(unCheckedThings);
    }
  }

  function createCheckProductFunction(index: number) {
    if (data && !isUnderArrayLength(carts, index))
      throw new Error("없는 상품입니다.");
    return function () {
      const copied = [...carts];
      copied[index].checked = !copied[index].checked;
      setCarts(copied);
    };
  }

  function changeQuantity(index: number) {
    if (data && !isUnderArrayLength(carts, index))
      throw new Error("없는 상품입니다.");
    return function (quantity: number) {
      const copied = [...carts];
      copied[index].quantity = quantity;
      setCarts(copied);
    };
  }

  const totalPrice = useMemo(() => {
    return carts.reduce((total, product) => {
      if (!product.checked) return total;
      return total + product.quantity * product.product.price;
    }, 0);
  }, [carts]);

  const checkedAtLeast = carts.some((cart) => cart.checked);

  useEffect(() => {
    if (!data?.response) return;
    const propertiesAddedProducts = data.response.map((product) => ({
      ...product,
      quantity: 0,
      checked: false,
    }));
    setCarts(propertiesAddedProducts);
  }, [data]);

  return {
    carts,
    unCheckAll,
    createCheckProductFunction,
    changeQuantity,
    totalPrice,
    checkedAtLeast,
  } as const;
}
