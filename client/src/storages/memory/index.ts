const DEFAULT_CACHE_TIME = 1000 * 60 * 1;

interface SetCachedDataOptions {
  key: string;
  data: any;
  cacheTime?: number;
}

type MemoryCache = {
  [key: string]: { data: any; fetchedTime: number; cacheTime: number };
};

const memoryCache: MemoryCache = {};

export const isOverCacheTime = (key: string) => {
  const { fetchedTime, cacheTime } = memoryCache[key];
  const currentTime = new Date().getTime();

  return currentTime - cacheTime > fetchedTime;
};

export const getCachedData = <T = unknown>(key: string) => {
  return memoryCache[key] ? (memoryCache[key].data as T) : null;
};

export const setCachedData = ({
  key,
  data,
  cacheTime = DEFAULT_CACHE_TIME,
}: SetCachedDataOptions) => {
  const currentTime = new Date().getTime();

  memoryCache[key] = { data, fetchedTime: currentTime, cacheTime };
};
