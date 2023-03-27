import { Link } from 'react-router-dom';
import { ROUTES_URL } from '@/RootRouter';
import ProductItem from './ProductItem';

import type { ProductList } from '@/types';

interface ProductItemProps {
  products?: ProductList | null;
}

function ProductCards({ products = [] }: ProductItemProps) {
  if (!products?.length) {
    return <div>등록된 상품이 없습니다.</div>;
  }

  return (
    <>
      {products?.map(product => {
        return (
          <Link className="mx-auto" to={`${ROUTES_URL.PRODUCT}/${product.id}`} key={product.id}>
            <ProductItem product={product} />
          </Link>
        );
      })}
    </>
  );
}

export default ProductCards;
