import { useState, useCallback } from "react";

const useNumber = (initialValue: number) => {
  const [Number, setNumber] = useState(initialValue);

  const increaseNumber = useCallback(() => {
    setNumber((prevValue) => prevValue + 1);
  }, []);

  const decreaseNumber = useCallback(() => {
    setNumber((prevValue) => prevValue - 1);
  }, []);

  return [Number, increaseNumber, decreaseNumber];
};

export default useNumber;
