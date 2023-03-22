import { Link } from 'react-router-dom';
import { ROUTES_URL } from '@/RootRouter';
import ProductItem from './ProductItem';

import type { ProductList } from '@/types';

interface ProductItemProps {
  products?: ProductList;
}

function ProductCards({ products = [] }: ProductItemProps) {
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
