import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increase, decrease };
};
