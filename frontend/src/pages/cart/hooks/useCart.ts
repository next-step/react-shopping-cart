import { useState } from "react";
import { subtract, sum } from "../util/calculate";

type TotalPrice = {
  price: number;
  operator?: string;
};

export const useCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = ({ price, operator }: TotalPrice) => {
    if (!operator) {
      setTotalPrice((prev) => prev + price);
      return;
    }

    if (operator === "PLUS") setTotalPrice((prev) => sum(prev, price));
    if (operator === "MINUS") setTotalPrice((prev) => subtract(prev, price));
  };

  const [totalCount, setTotalCount] = useState(0);
  const handleTotalCount = (count: number) =>
    setTotalCount((prev) => sum(prev, count));

  return { totalPrice, handleTotalPrice, totalCount, handleTotalCount };
};
