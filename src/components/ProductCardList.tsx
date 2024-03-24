import useProductsQuery from '@/hooks/queries/useProductsQuery';
import ProductCard from '../components/ProductCard';

export default function ProductCardList() {
  const { data: products } = useProductsQuery();

  if (!products) return null;

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </>
  );
}
