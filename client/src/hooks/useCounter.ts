import { useState } from 'react';

function useCounter(defaultCount?: number) {
  const [count, setCount] = useState(defaultCount ?? 0);

  const plus = () => {
    setCount((prevState) => prevState + 1);
  };

  const minus = () => {
    setCount((prevState) => prevState - 1);
  };

  return {
    count,
    plus,
    minus,
  };
}

export default useCounter;
