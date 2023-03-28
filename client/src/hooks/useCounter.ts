import { useCallback, useState } from 'react';

function useCounter(defaultCount?: number) {
  const [count, setCount] = useState(defaultCount ?? 0);

  const plus = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  const minus = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, []);

  return {
    count,
    plus,
    minus,
  };
}

export default useCounter;
