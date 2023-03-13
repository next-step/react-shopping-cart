import { useContext } from 'react';

import { CacheStateContext } from 'contexts/CacheProvider';

interface SetCachedDataOptions {
  key: string;
  data: any;
  cacheTime?: number;
}

const DEFAULT_CACHE_TIME = 1000 * 60 * 1;

function useCacheActions() {
  const cache = useContext(CacheStateContext);

  const isOverCacheTime = (key: string) => {
    const { fetchedTime, cacheTime } = cache.current[key];
    const currentTime = new Date().getTime();

    return currentTime - cacheTime > fetchedTime;
  };

  const getCachedData = <T = unknown>(key: string) => {
    return cache.current[key] ? (cache.current[key].data as T) : null;
  };

  const setCachedData = ({ key, data, cacheTime = DEFAULT_CACHE_TIME }: SetCachedDataOptions) => {
    const currentTime = new Date().getTime();

    cache.current[key] = { data, fetchedTime: currentTime, cacheTime };
  };

  return { isOverCacheTime, getCachedData, setCachedData };
}

export default useCacheActions;
