import ProductDetail from '@components/Product/ProductDetail';
import { useGetProductDetailQuery } from '@/hooks/queries/useGetProductDetailQuery';
import { Route } from '@/routes/list_.$productId';

export default function ProductDetailPage() {
  const { productId } = Route.useParams() as { productId: string };

  const { product } = useGetProductDetailQuery({ id: Number(productId) });

  if (!product) {
    return <>상품 준비중 입니다.</>;
  }

  return <ProductDetail product={product} />;
}
