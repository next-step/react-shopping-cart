import { useCallback, useRef } from 'react';

import * as productApi from '@/api/product';
import { LoaderIcon } from '@/assets/svgs';
import useEffectOnce from '@/hooks/useEffectOnce';
import useHttp from '@/hooks/useHttp';
import useIntersection from '@/hooks/useIntersection';

import ProductCard from '../ProductCard';

const Products = () => {
  const {
    sendRequest,
    loading,
    data: productResult = { data: [], page: 0, nextPage: 1 },
  } = useHttp(productApi.getPaginatedProducts);
  const { data } = productResult;
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(() => {
    sendRequest({ page: productResult.nextPage, limit: 20 });
  }, [productResult.nextPage]);

  useIntersection(ref, () => {
    !loading && callback();
  });

  useEffectOnce(() => sendRequest({ page: 0, limit: 20 }));

  return (
    <div className="product-container">
      <div className="grid py-300 gap-50">
        {data?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
        {loading &&
          Array.from({ length: SINGLE_PAGE_SIZE }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        <div ref={ref}>
          <LoaderIcon />
        </div>
      </div>
    </div>
  );
};

export default Products;

const SINGLE_PAGE_SIZE = 20;
