import { useInfiniteFetch } from 'hooks';
import { fetchPaginatedProducts } from 'api';

const CACHE_KEY = 'products';
const PAGE_SIZE = 12;

function useProductList() {
  const { data, ...rest } = useInfiniteFetch({
    fetcher: fetchPaginatedProducts,
    cacheKey: CACHE_KEY,
    size: PAGE_SIZE,
  });
  const products = data?.flatMap(({ contents }) => contents);

  return { products, ...rest };
}

export default useProductList;
