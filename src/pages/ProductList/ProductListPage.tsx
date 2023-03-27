import ProductCards from './components/ProductCards';
import { Suspense, useRef } from 'react';
import useProductList from './hooks/useProductList';

function ProductListPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { products, hasMoreData } = useProductList();

  return (
    <div ref={ref} className="pt-4 grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-5 ">
      <Suspense fallback={<div className="w-screen h-screen flex justify-center items-center">loading...</div>}>
        <ProductCards products={products} />
        {hasMoreData ? <div>페이지 로드중</div> : null}
      </Suspense>
    </div>
  );
}

export default ProductListPage;
