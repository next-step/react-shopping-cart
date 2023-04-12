import { memo, useRef } from 'react';

import * as productApi from '@/api/product';
import { LoaderIcon } from '@/assets/svgs';
import useEffectOnce from '@/hooks/useEffectOnce';
import useHttp from '@/hooks/useHttp';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import ProductCard from '../ProductCard';

type Props = {
  onOpenModal: () => void;
};

const Products = ({ onOpenModal }: Props) => {
  const {
    sendRequest,
    loading,
    data: productResult = { data: [], page: 0, nextPage: 1 },
  } = useHttp(productApi.getPaginatedProducts);
  const { data, nextPage } = productResult;
  const ref = useRef<HTMLDivElement>(null);

  useIntersectionObserver(ref, () => {
    if (!loading) {
      sendRequest({ page: nextPage, limit: SINGLE_PAGE_SIZE });
    }
  });

  useEffectOnce(() => sendRequest({ page: 0, limit: SINGLE_PAGE_SIZE }));

  return (
    <div className="product-container">
      <div className="grid py-300 gap-50">
        {data?.map((product, index) => (
          <ProductCard
            onOpenModal={onOpenModal}
            key={`${product.id}-${index}`}
            product={product}
          />
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

export default memo(Products);

const SINGLE_PAGE_SIZE = 20;
