import { ROUTES_URL } from '@/RootRouter';
import { ProductList } from '@/types';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

interface ProductItemProps {
  products?: ProductList;
}

function Products({ products }: ProductItemProps) {
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

export default Products;
