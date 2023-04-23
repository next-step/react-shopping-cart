import { useRef } from 'react';

import useOnMounted from '@/hooks/useOnMounted';

const useEffectOnce = (fn: () => any) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useOnMounted(() => () => fnRef.current());
};

export default useEffectOnce;
