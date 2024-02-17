import { useCallback, useState } from 'react';

export default function useBoolean(initialBool = false) {
  const [bool, setBool] = useState(initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggle = useCallback(() => {
    setBool((bool) => !bool);
  }, []);

  return { bool, setTrue, setFalse, toggle };
}
