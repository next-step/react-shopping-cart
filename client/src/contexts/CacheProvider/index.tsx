import { createContext, MutableRefObject, PropsWithChildren, useRef } from 'react';

export type Cache<T = unknown> = {
  [key: string]: { data: T; fetchedTime: number; cacheTime: number };
};

export const CacheStateContext = createContext<MutableRefObject<Cache>>({ current: {} });

function CacheProvider({ children }: PropsWithChildren) {
  const cache = useRef<Cache>({});

  return <CacheStateContext.Provider value={cache}>{children}</CacheStateContext.Provider>;
}

export default CacheProvider;
